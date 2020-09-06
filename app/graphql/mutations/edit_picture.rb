module Mutations
    class EditPicture < Mutations::BaseMutation
        argument :id, ID, required: true
        argument :name, String, required: true
        argument :author, String, required: true
        argument :description, String, required: true

        field :id, ID, null: true
        field :errors, [String], null: true

        def resolve(id:, name:, author:, description:)
            picture = Picture.find id
            picture.name = name
            picture.author = author
            picture.description = description
        
            if picture.save
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