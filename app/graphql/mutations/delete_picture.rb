module Mutations
    class DeletePicture < Mutations::BaseMutation
        argument :id, ID, required: true

        field :dead_id, ID, null: true
        field :errors, [String], null: true

        def resolve(id:)
            picture = Picture.find id
            dead_id = id

            res = false
            # make sure attachment is removed as well, if breaks, then picture isn't removed either, and vice versa
            Picture.transaction do
                picture.image.purge
                picture.destroy!
                res = true
            end
        
            if res == true
                { 
                    dead_id: dead_id,
                    errors: nil
                }
            else
                {
                    dead_id: nil,
                    errors: picture.errors.full_messages
                }
            end
        end
    end
end