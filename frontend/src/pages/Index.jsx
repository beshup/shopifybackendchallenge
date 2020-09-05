import React from 'react';
import ImageCard from '../components/ImageCard'
import PaginationBar from '../components/PaginationBar'
import AddImages from '../components/AddImages'
import {gql, useQuery, useMutation} from '@apollo/client'

const GET_PICTURES = gql`
    query GetPictures($offset: Int!, $limit: Int!) {
        pictures(offset: $offset, limit: $limit) {
            id
            name
            author
            url
        }
        picturePagesCount(limit: $limit)
    }
`;

const ADD_PICTURES = gql`
    mutation AddImages($images: [Upload!]) {
        addPictures(
            images: $images
        ) {
            success
            blobErrors
        }
    }
`;

const ENTRIES_PER_ROW = 3
const ENTRIES_PER_PAGE = 12

const Index = ({page}) => {
    const { loading, error, data } = useQuery(GET_PICTURES, {
        variables: {offset: page*ENTRIES_PER_PAGE, limit: ENTRIES_PER_PAGE}
    });

    const [addPictures] = useMutation(ADD_PICTURES);

    let arr=[]
    for (var i=0; i < ENTRIES_PER_ROW; i++) {
        arr.push(0)
    }

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div className="container">
            <h1>Images</h1>
            <hr /> 
            <PaginationBar pagesNum={data.pictureCount} page={page+1} /> 
            {data.pictures.map((value, index) => {
                return (
                    <div classname="row mt-3">
                        {arr.map((nil, index) => {
                            return (
                                <div className="col-lg-4 d-flex justify-content-center">
                                    <ImageCard image={value} />
                                </div>
                            )
                        })}
                    </div>
                )
            })}
            <AddImages addPictures={addPictures}/>
        </div>
    )
}

export default Index;
