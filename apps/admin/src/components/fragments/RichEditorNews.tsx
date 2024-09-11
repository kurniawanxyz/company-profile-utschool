import { Editor } from '@tinymce/tinymce-react';
import React from 'react';
import Cookie from "js-cookie";

const handleImageUpload = (blobInfo: any, success: (url: string) => void, failure: (message: string) => void) => {
    const data = new FormData();
    data.append('image', blobInfo.blob(), blobInfo.filename());

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/post-image`, {
        method: 'POST',
        body: data,
        headers: {
            'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
            'Authorization': `Bearer ${Cookie.get("token")}`,
        }
    })
    .then(async response => {
        if (!response.ok) {
            const text = await response.text();
            throw new Error(`Failed to upload image. Status: ${response.status}. Response: ${text}`);
        }
        return response.json();
    })
    .then(result => {
        if (result && result.location) {
            success(result.location); // Return image URL to TinyMCE
        } else {
            throw new Error('Image upload response does not contain location');
        }
    })
    .catch(err => {
        console.error('Error uploading image:', err);
        failure(`Error uploading image: ${err.message}`); // Notify TinyMCE of the failure
    });
};



const handleImageDelete = async (src: string) => {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/post-image`, {
            method: 'DELETE',
            headers: {
                'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
                'Authorization': `Bearer ${Cookie.get("token")}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ imageUrl: src })
        });
    } catch (err) {
        console.error('Error deleting image:', err);
    }
};

const RichEditorNews = () => (
    <Editor


    apiKey={process.env.NEXT_PUBLIC_TINYMCE_TOKEN}
        init={{
            
            plugins: 'image code',
            toolbar: 'undo redo | link image | code',
            images_upload_handler: handleImageUpload,
            images_remove_handler: handleImageDelete,  // Handle image delete
        }}
    />
);

export default RichEditorNews;
