import React, { useState } from 'react';
import ImportFile from './ImportFile'

function AddImage({addPicture}) {
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addPicture({ variables: { name: name, author: author, description: description, image: file } });
    }

    const handleFile = (file) => {
        setFile(file)
    }

    return (
        <form className="mt-5" onSubmit={handleSubmit}>
            <div classname="d-flex justify-content-center">
                <label className="mr-2">
                    Name
                </label>
                <input className="mr-4" type="text" name="name" value={name} onChange={handleNameChange} />
                <label className="mr-2">
                    Author
                </label>
                <input className="mr-4" type="text" name="author" value={author} onChange={handleAuthorChange} />
                <label className="mr-2">
                    Description
                </label>
                <input type="text" name="description" value={description} onChange={handleDescriptionChange} />
            </div>
            <ImportFile handleFile={handleFile} />
            <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
    );
}

export default AddImage;