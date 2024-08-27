"use client"
import React from 'react'
import { Input } from '../elements'
import Button from '../elements/Button'
import Image from 'next/image'
import { handleLogin } from '@/actions/LoginAction'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <div className='min-h-screen w-full bg-slate-50  flex justify-between p-5 gap-5'>
        <article className="w-2/3 rounded-xl border relative overflow-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center blur-[1px] brightness-90"
                style={{ backgroundImage: "url('/images/students/1.jpg')" }}>
            </div>
            <div className="absolute top-10 z-10 bg-slate-900 p-5 flex items-center justify-center w-60">
                <Image
                    src={'/images/logo/uts/1.png'}
                    alt='UTSCHOOL'
                    width={500}
                    height={500}
                    priority
                />
            </div>
        </article>
        <div className="w-1/3 rounded-xl border flex flex-col items-center justify-center ">
            <h1 className='text-neutral-950 font-bold text-4xl'>Sign In</h1>
            <form action={handleLogin}  className='w-2/3 mt-7 flex flex-col gap-3'>
                <Input
                    label='Email'
                    name='email'
                    placeholder='Your email'
                    type='email'
                />
                 <Input
                    label='Password'
                    name='password'
                    placeholder='Your password'
                    type='password'
                />
                <Button type='submit' className='w-full' >Submit</Button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage