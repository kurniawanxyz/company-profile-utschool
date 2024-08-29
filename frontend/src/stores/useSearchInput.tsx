import { create } from "zustand";
type useRichEditorType={
    value: string,
    setValue: (text: string)=> void
}
export const useRichEditor = create<useRichEditorType>((set)=>({
    value: '',
    setValue: (text)=>set({value:text})
}))