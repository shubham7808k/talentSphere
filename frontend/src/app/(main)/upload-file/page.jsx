'use client'
import React from 'react'
import axios from 'axios';

const UploadFile = () => {
    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return alert('Please select a file to upload');
        }
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'sonali');
        formData.append('cloud_name', 'duscjpl3k');

        axios.post('https://api.cloudinary.com/v1_1/ddsnnqpbv/image/upload', formData)
            .then((result) => {
                log(result);

                // toast.success('File uploaded successfully');
            }).catch((err) => {
                console.log(err);


                // toast.error('File upload failed');
            });
    }
    return (
        <div>

            <input type="file" onChange={handleUpload} />

        </div>
    )
}

export default UploadFile;