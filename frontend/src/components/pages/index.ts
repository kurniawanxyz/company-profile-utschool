import dynamic from "next/dynamic";

const LoginPage = dynamic(()=>import('./LoginPage'))

export{
    LoginPage
}