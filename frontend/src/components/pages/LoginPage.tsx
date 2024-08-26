import React from 'react'
import { Input } from '../elements'
import Button from '../elements/Button'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <div className='min-h-screen w-full bg-slate-50  flex justify-between p-5 gap-5'>
        <article className="w-2/3 rounded-xl bg-primary border"></article>
        <article className="w-1/3 rounded-xl border flex flex-col items-center justify-center">
            <h1 className='text-neutral-950 font-bold text-4xl'>Sign In</h1>
            <form action="" method="post" className='w-2/3 mt-7 flex flex-col gap-3'>
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
            </form>
            <Button>Submit</Button>
        </article>
    </div>
  )
}

export default LoginPage