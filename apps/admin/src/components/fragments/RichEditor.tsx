"use client"
import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import handleFetch from '@/utils/handleFetch';
import { useRichEditor } from '@/stores/useRichEditor';

const RichEditor = ({defaultValue = "<p>Initial content</p>"}:{defaultValue?: string|TrustedHTML}) => {
    const {value,setValue} = useRichEditor()
  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);

    const [status,,data] = await handleFetch("/admin/image-photo", {
        method: "POST",
        body: formData,
    }, true, true, true);

    if (!status) {
      throw new Error('Failed to upload image');
    }

    return {
      default: data, // URL image yang diupload
    };
  };

  return (
    <div className='text-black'>
      <CKEditor
        editor={ClassicEditor}
        data={defaultValue as string}
        config={{
          toolbar: [
            'heading', 
            '|', 
            'fontSize', 
            'bold', 
            'italic', 
            'link', 
            'imageUpload', 
            'bulletedList', 
            'numberedList', 
            'blockQuote', 
            'insertTable', // Plugin tabel
            'undo', 
            'redo',
            'codeSnippet' // Plugin untuk memasukkan kode
          ],
          fontSize: {
            options: [
              9,
              11,
              13,
              17,
              19,
              21,
              'default',
              'tiny',
              'small',
              'big',
              'huge',
            ],
          },
          image: {
            toolbar: ['imageTextAlternative', 'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight'],
          },
          table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
          },
        }}
        onReady={editor => {
          editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return {
              upload: async () => {
                return new Promise(async (resolve, reject) => {
                  try {
                    const file = await loader.file;

                    if (!file) {
                      reject(new Error('No file found'));
                      return;
                    }

                    const data = await handleImageUpload(file);
                    resolve(data);
                  } catch (error) {
                    reject(error);
                  }
                });
              },
            };
          };
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setValue(data);
          console.log({ data });
        }}
      />
    </div>
  );
};

export default RichEditor;
