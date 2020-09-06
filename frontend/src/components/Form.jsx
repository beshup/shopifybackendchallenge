import React, {Component, useState} from 'react'

function Form({picture, editPicture, id}) {
    const [author, setAuthor] = useState(picture.author);
    const [description, setDescription] = useState(picture.description);
    const [name, setName] = useState(picture.name);

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
        editPicture({ variables: { id: id, name: name, author: author, description: description } });
    }

    return (
        <form className="mt-3" onSubmit={handleSubmit}>
            <div classname="">
                <label className="mr-1">
                    Name
                </label>
                <input className="mr-2" type="text" name="name" value={name} onChange={handleNameChange} />
                <label className="mr-1">
                    Author
                </label>
                <input className="mr-2" type="text" name="author" value={author} onChange={handleAuthorChange} />
                <label className="mr-1">
                    Description
                </label>
                <input type="text" name="description" value={description} onChange={handleDescriptionChange} />
            </div>
            <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
    );
}

export default Form;