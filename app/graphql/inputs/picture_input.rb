Inputs::CommentInput = GraphQL::InputObjectType.define do
    name "PictureInput"
    argument :image, ApolloUploadServer::Upload
end