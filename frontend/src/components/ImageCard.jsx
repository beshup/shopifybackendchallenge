import React from 'react'
import {A} from 'hookrouter'

const ImageCard = ({image}) => {
    return(
        <div className="card">
            <img className="card-img-top" src={image.url} alt="Card"/>
            <div className="card-body">
                <h5 className="card-title">{image.name}</h5>
                <p className="card-text">{image.author}</p>
                <A href={`image/${image.id}`}>Show</A>
            </div>
        </div>
    )
}

export default ImageCard;