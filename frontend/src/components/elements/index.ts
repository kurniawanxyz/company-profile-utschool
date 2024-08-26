import dynamic from "next/dynamic"
const Input = dynamic(()=>import("./Input"))
const Button = dynamic(()=>import('./Button'))
export{
    Input,
    Button
}