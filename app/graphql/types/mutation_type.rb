module Types
  class MutationType < Types::BaseObject
    field :add_pictures, mutation: Mutations::AddPictures

    field :add_picture, mutation: Mutations::AddPicture
    field :edit_picture, mutation: Mutations::EditPicture
    field :delete_picture, mutation: Mutations::DeletePicture
  end
end
