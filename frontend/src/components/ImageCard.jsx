import React from 'react'

const ImageCard = ({image}) => {
    return(
        <div className="card">
            <img className="card-img-top" src={`http://localhost:3000${image.url}`} alt="Card"/>
            <div className="card-body">
                <h5 className="card-title">{image.name}</h5>
                <p className="card-text">{image.author}</p>
                <a href={`/image/${image.id}`}>Show</a>
            </div>
        </div>
    )
}

export default ImageCard;