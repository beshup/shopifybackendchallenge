include(Rails.application.routes.url_helpers)

module Types
    class Types::PictureType < Types::BaseObject
        field :id, ID, null: false
        field :name, String, null: false
        field :author, String, null: false
        field :description, String, null: false
        field :uploaded, GraphQL::Types::ISO8601DateTime, null: false
        field :url, String, null: true

        def url
            rails_blob_path(object.image, only_path: true) if object.image.present?
        end
    end
end