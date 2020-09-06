import React, { useMemo, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import "../App.css";

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#D3D3D3',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

function ImportFile(props) {
    
    // onDrop returns a function that will return our file.
    const onDrop = useCallback(
        ([file]) => {
            props.handleFile(file);
        }
    );
    
    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({ accept: 'image/*', onDrop });

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} – {file.size} bytes
        </li>
    ));

    const style = useMemo(() => ({
        baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject
    ]);

    return (
        <section className="container mt-2">
            <div {...getRootProps({ style })}>
                <div className="d-flex justify-content-center dropzone">
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop an image here, or click to select</p>
                    <span>{"📂"}</span>
                </div>
            </div>
            <aside>
                <h4>File</h4>
                <ul>{files}</ul>
            </aside>
        </section>
    );
}

export default ImportFile;