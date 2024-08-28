import dynamic from "next/dynamic"
const Input = dynamic(()=>import("./Input"),{ssr:false})
const Button = dynamic(()=>import('./Button'),{ssr:false})
const TextArea = dynamic(()=>import('./TextArea'),{ssr:false})
export{
    Input,
    Button,
    TextArea
}