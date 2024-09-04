"use client"
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins/image.min.js'
import 'froala-editor/js/plugins.pkgd.min.js';
const FroalaEditorComponent =  dynamic(()=>import('react-froala-wysiwyg'),{ssr:false});
import { twMerge } from 'tailwind-merge';
import { useRichEditor } from '@/stores/useRichEditor';
import Cookie from "js-cookie"

type Props = {
    title: string,
    className?: string,
    config?: object
}
import handleFetch from '@/utils/handleFetch';
import dynamic from 'next/dynamic';

const RichEditorNews = (props: Props) => {
  const { value, setValue } = useRichEditor();


  let config = {
    documentReady: true,
    heightMin: 100,
    imageUploadRemoteUrls: true,
    // imageUploadURL: `${process.env.NEXT_PUBLIC_API_URL}/admin/post-image`,
    charCounterCount: false,
    placeholderText: 'Edit Your Content Here!',
    imageUpload: true,
    imageUploadMethod: 'POST',
    events: {
      'image.beforeUpload': async function (images: any, editor: any) {
        const data = new FormData();
        console.log(editor,images)
        data.append('image', images[0]);
        const option:RequestInit = {
          method: "POST",
          body: data
        }
        // try {
          const [status,msg,url] = await handleFetch('/admin/post-image',option,true,true)

          if (!status) {
            throw new Error('Failed to upload image');
          }


          // return data
          editor.image?.insert(url, false, null, editor.$el);
        // } catch (err) {
        //   console.error('Error uploading image:', err);
        // }

        return false;
      },


    }
  };

  const handleModelChange = (model: string) => {
    setValue(model);
  };

  return (
    <div className={`${twMerge('text-slate-900', props.className)}`}>
      <span>{props.title}</span>
      <FroalaEditorComponent tag="textarea" model={value} onModelChange={handleModelChange} config={props.config ?? config} />
    </div>
  );
};

export default RichEditorNews;
