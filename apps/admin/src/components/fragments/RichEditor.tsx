"use client"
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
// import 'froala-editor/js/plugins.pkgd.min.js';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import { twMerge } from 'tailwind-merge';
import { useRichEditor } from '@/stores/useRichEditor';

type Props = {
    title: string,
    className?: string,
    config?: object
}
const RichEditor = (props: Props) => {

    const {value,setValue} = useRichEditor()

    let config = {
        documentReady: true,
        heightMin: 100,
        events : {
          'contentChanged' : function(e:any, editor:any) {
            console.log({value});
          }
        }
      };

      const handleModelChange = (model: string) => {
        setValue(model);
      };

  return (
    <div className={`${twMerge('text-slate-900',props.className)}`}>
        <span>{props.title}</span>
        <FroalaEditorComponent  tag="textarea" model={value} onModelChange={handleModelChange} config={props.config??config}/>
    </div>
  )
}

export default RichEditor