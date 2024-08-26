import LoginPage from '@/components/pages/LoginPage'
import { useMetadata } from '@/utils'
import { Metadata } from 'next'
import React from 'react'

type Props = {}

export const metadata:Metadata = useMetadata({
    title: "Login"
})

const LoginRoute = (props: Props) => {
  return <LoginPage/>
}

export default LoginRoute