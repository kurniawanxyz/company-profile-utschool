import { MottoUtSchool, ProfileUtSchool, VisiMisi } from '../organisms'


export default function AboutPage() {
  return (
    <article className='min-h-screen p-20 bg-slate-100'>
        <h1 className='text-5xl font-bold'>Profil UT School</h1>
        <ProfileUtSchool/>
        <MottoUtSchool/>
        <div>
            <VisiMisi/>
        </div>
    </article>
  )
}
