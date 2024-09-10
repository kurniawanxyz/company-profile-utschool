import { LoginPage } from '@/components/pages'
import handleMetadata from '@/utils/handleMetadata'
import { Metadata } from 'next'
import React from 'react'

type Props = {}

export const metadata:Metadata = handleMetadata({
    title: "Login"
})

const LoginRoute = (props: Props) => {
  return <LoginPage/>
}

export default LoginRoute