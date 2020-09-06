import React from 'react';
import {gql, useQuery, useMutation} from '@apollo/client'
import {navigate} from 'hookrouter'
import { BabelLoading } from 'react-loadingg';
import Form from '../components/Form'

const GET_PICTURE = gql`
  query GetPicture($id: ID!) {
    picture(id: $id) {
      id
      name
      author
      description
      url
    }
  }
`;

const EDIT_PICTURE = gql`
  mutation EditPicture(
    $id: ID!
    $name: String!
    $author: String!
    $description: String!
  ) {
      editPicture(
        input: {
          id: $id
          name: $name
          author: $author
          description: $description
        }
    ){
      id
      errors
    }
  }
`;

const DELETE_PICTURE = gql`
  mutation DeletePicture(
    $id: ID!
  ) {
    deletePicture(
        input: {
          id: $id
        }  
      ) 
      {
        deadId
        errors
      }
  }
`;

const Show = ({id}) => {
  const { loading, error, data } = useQuery(GET_PICTURE, {
    variables: {id}
  });

  const [editPicture] = useMutation(EDIT_PICTURE, {
    onCompleted: (data) => window.location.reload(),
    onError: (error) => alert(error)
  })

  const [deletePicture] = useMutation(DELETE_PICTURE, {
    onCompleted: (data) => window.location = "/images",
    onError: (error) => alert(error)
  })

  const handleDelete = (evt) => {
    evt.preventDefault();
    deletePicture({variables: {id}})
  }

  if (loading) return <BabelLoading />;
  if (error) return `Error! ${error.message}`;

  return(
    <div className="container pushDown">
      <div className="d-flex justify-content-center row">
        <div className="col-md-3 d-flex justify-content-center">
          <div className="text-left">
            <h1>{data.picture.name}</h1>
            <p><i>{data.picture.author}</i></p>
            <h5>{data.picture.description}</h5>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
              <img className="card-img-top" src={`http://localhost:3000${data.picture.url}`} alt="Card"/>
              <div className="card-body">
                  <a href={`/images/${Math.floor(id / 6)}`} class="btn btn-light">Back</a>
                  <button className="btn btn-danger ml-2" onClick={handleDelete}>Delete</button>
                  <Form picture={data.picture} editPicture={editPicture} id={id}/>
              </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Show;
