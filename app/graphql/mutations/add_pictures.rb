module Mutations
    class AddPictures < Mutations::BaseMutation
        argument :images, [ApolloUploadServer::Upload], required: true

        field :success, ID, null: true
        field :blob_errors, [String], null: true

        def resolve(images:)
            byebug
            puts images
            res = false
            blob = nil
            images.each do |image|
                #if one fails, both fails, and all images after
                Picture.transaction do
                    blob = ActiveStorage::Blob.create_and_upload!(io: imagee, filename: image.original_filename, content_type: image.content_type)
                    picture = Picture.new(uploaded: DateTime.now, image: blob)
                    picture.save!
                end
                res = true
            end
        
            if res
                { 
                    success: true,
                    blob_errors: nil
                }
            else
                if blob.errors && blob.errors.full_messages {
                    {
                        success: false,
                        blob_errors: blob.errors.full_messages
                    }
                }
                else {
                    {
                        success: false,
                        blob_errors: nil
                    }
                }
            end
        end
    end
end