module Mutations
    class AddPicture < Mutations::BaseMutation
        argument :name, String, required: true
        argument :author, String, required: true
        argument :description, String, required: true
        argument :image, ApolloUploadServer::Upload, required: true

        field :id, ID, null: true
        field :errors, [String], null: true

        def resolve(name:, author:, description:, image:)
            res = false
            picture = nil
            #if one fails, all fail
            Picture.transaction do
                blob = ActiveStorage::Blob.create_after_upload!(io: image, filename: image.original_filename, content_type: image.content_type)
                picture = Picture.new(uploaded: DateTime.now, image: blob, name: name, author: author, description: description)
                picture.save!
                res = true
            end
        
            if res
                { 
                    id: picture.id,
                    errors: nil
                }
            else
                {
                    id: nil,
                    errors: picture.errors.full_messages
                }
            end
        end
    end
end