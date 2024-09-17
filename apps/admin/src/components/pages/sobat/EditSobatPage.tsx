"use client"
import { Button, Input } from "@/components/elements"
import Banner from "@/components/elements/Banner"
import Card from "@/components/elements/Card"
import { handleUpdate } from "@/services/SobatService"
import { LearningPointType } from "@/types/LearningPointType"

type Props = {
    data: LearningPointType
}

export default function EditSobatPage({data}: Props) {
  return (
    <>
    <Banner
      title='Sobat/Edit'
      btnKembali
      urlKembali='/admin/learning-point'
  />

  <Card className='mt-5'>
      <form action={handleUpdate}>
          <input type="hidden" name="id" value={data.id} />
          <Input
              label='Name'
              name='name'
              placeholder='ex UTS Madiun'
              defaultValue={data.name}
          />
          <Input
              name='location'
              label='Location'
              placeholder='ex: Madiun, JawaTimur'
              defaultValue={data.location}
          />
          <div className="flex justify-end mt-3">
              <Button type='submit' className='w-20'>Submit</Button>
          </div>
      </form>
  </Card>
</>
  )
}