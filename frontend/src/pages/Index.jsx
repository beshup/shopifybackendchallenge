import React from 'react';
import ImageCard from '../components/ImageCard'
import PaginationBar from '../components/PaginationBar'
import AddImages from '../components/AddImages'
import AddImage from '../components/AddImage'
import {gql, useQuery, useMutation} from '@apollo/client'
import { BabelLoading } from 'react-loadingg';

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

const ADD_PICTURE = gql`
    mutation AddPicture($name: String!, $author: String!, $description: String!, $image: Upload!) {
        addPicture(
            input: {
                name: $name
                author: $author
                description: $description
                image: $image
            }
        ) {
            id
            errors
        }
    }
`;

const ENTRIES_PER_ROW = 3
const ENTRIES_PER_PAGE = 6

const Gallery = ({pictures}) => {
    let count = 1
    let gallery = []
    let row = []
    pictures.map((picture, index) => {
        if (pictures.length - 1 == index || count == ENTRIES_PER_ROW) {row.push(picture); gallery.push(row); count = 0; row = [];}
        else {row.push(picture)}
        count++;
    });
    return (
        <>
        {gallery.map((row, index) => {
            return (
                <div className="row mt-2">
                    {row.map((value, index) => {
                        return <div className="col-lg-4"><ImageCard image={value} /></div>
                    })}
                </div>
            )
        })}
        </>
    )
}

const Index = ({page}) => {
    const { loading, error, data } = useQuery(GET_PICTURES, {
        variables: {offset: page*ENTRIES_PER_PAGE, limit: ENTRIES_PER_PAGE}
    });

    const [addPictures] = useMutation(ADD_PICTURES, {
        context: { hasUpload: true }
    });

    const [addPicture] = useMutation(ADD_PICTURE, {
        context: { hasUpload: true },
        onCompleted: (data) => {
            window.location.reload();
        },
        onError: (error) => {
            alert(error)
        }
    });

    if (loading) return <BabelLoading />;
    if (error) return `Error! ${error.message}`;

    return (
        <div className="container">
            <h1>Images</h1>
            <hr /> 
            <PaginationBar pagesNum={data.picturePagesCount} page={parseInt(page)+1}/> 
            <Gallery pictures={data.pictures} />
            <AddImage addPicture={addPicture} /> 
            {
            /* :((((( coming back to this 
            <AddImages addPictures={addPictures}/> */ }
        </div>
    )
}

export default Index;
