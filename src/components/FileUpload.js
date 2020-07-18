import React from 'react'

const FileUpload = () => {
    return (
        <>
        <div className="container">
            <div className="row">
                <form>
                    <h2>React File Upload</h2>
                    <div className="form-group">
                        <input type="file" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Upload File</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default FileUpload
