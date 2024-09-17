"use client"

import { Button, Input } from '@/components/elements'
import Banner from '@/components/elements/Banner'
import Card from '@/components/elements/Card'
import { handleCreate } from '@/services/LearningPointService'

type Props = {}

export default function CreateLearningPointPage({}: Props) {
  return (
    <>
        <Banner
            title='Learning Point/Create'
            btnKembali
            urlKembali='/admin/learning-point'
        />

        <Card className='mt-5'>
            <form action={handleCreate}>
                <Input
                    label='Name'
                    name='name'
                    placeholder='ex UTS Madiun'
                />
                <Input
                    name='location'
                    label='Location'
                    placeholder='ex: Madiun, JawaTimur'
                />
                <div className="flex justify-end mt-3">
                    <Button type='submit' className='w-20'>Submit</Button>
                </div>
            </form>
        </Card>
    </>
  )
}