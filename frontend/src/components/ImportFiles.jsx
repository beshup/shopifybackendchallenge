import React, { Component } from 'react';
import "../App.css";

import Dropzone from "react-dropzone";

class ImportFiles extends Component {
    handleDrop = (acceptedFiles) => {
        this.props.handleFiles(acceptedFiles)
    }

    render() {
        return (
            <>
            <Dropzone
                onDrop={this.handleDrop}
                accept="image/*"
                multiple
            >
                {({
                getRootProps,
                getInputProps,
                isDragActive,
                isDragAccept,
                isDragReject
                }) => {
                // additional CSS depends on dragging status
                const additionalClass = isDragAccept
                    ? "accept"
                    : isDragReject
                    ? "reject"
                    : "";

                return (
                    <div
                    {...getRootProps({
                        className: `dropzone ${additionalClass}`
                    })}
                    >
                    <input {...getInputProps()} />
                    <span>   {"📂"}</span>
                    <p>Drag and drop images, or click to select files</p>
                    </div>
                );
                }}
            </Dropzone>
            </>
        );
    }
}

export default ImportFiles 