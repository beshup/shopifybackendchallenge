module Types
  class QueryType < Types::BaseObject
    field :pictures, [Types::PictureType], null: true do
      argument :offset, Integer, required: true
      argument :limit, Integer, required: true
    end

    field :picture, Types::PictureType, null: false do
      argument :id, ID, required: true
    end

    field :picture_pages_count, Integer, null: false do
      argument :limit, Integer, required: true
    end

    def pictures(offset:, limit:)
      Picture.limit(limit).offset(offset).with_attached_image
    end

    def picture(id:)
      Picture.find(id).with_attached_image
    end

    def picture_pages_count(limit:)
      Picture.all.count / limit
    end
  end
end
