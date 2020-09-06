/* eslint no-undef: 0 */ // --> OFF

import React, { Component } from 'react';
import ImportFiles from './ImportFiles'

const FileDetails = ({files}) => {
    return (
        <>
            {files.map((file) => {
                return (
                    <h3>{file.path}</h3>
                )
            })}
        </>
    )
}

class AddImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
    }

    handleSubmit = (evt) => {
       this.props.addPictures({variables: {images: this.state.files}})
    }

    handleFiles = (files) => {
        this.state.files = files;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-lg-3">

                    </div>
                    <div className="col-lg-6">
                        <ImportFiles handleFiles={this.handleFiles} />
                        <input className="btn btn-primary text-center mt-2" type="submit" value="Submit" />
                    </div>
                    <div className="col-lg-3">
                        {this.state.files[0] ? (
                            <FileDetails files={this.state.files}/>
                        ) : (
                            <></>
                        )}
                    </div>  
                </div>
            </form>
        );
    }
}

export default AddImages;