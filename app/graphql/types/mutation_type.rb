module Types
  class MutationType < Types::BaseObject
    field :add_pictures, mutation: Mutations::AddPictures
  end
end
