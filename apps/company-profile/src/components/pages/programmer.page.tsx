import React from 'react'
import { HeaderProgram } from '../molecules'
import { Card } from '../ui/card'
import { Img } from '../atoms'

export default function ProgrammerPage() {
  return (
    <div className='min-h-screen'>
      <HeaderProgram />
      <div className='p-10 md:p-20'>
        <article>
          <h1 className='text-2xl font-bold'>IT Programmer</h1>
          <p className=' md:w-3/5 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor expedita nesciunt ullam maxime delectus explicabo, autem earum, a odit neque harum animi repellendus alias temporibus sit nulla iusto incidunt officiis, perferendis illo? Harum in eligendi totam fugiat consequuntur id tempora! Quibusdam dolorem minus veritatis eveniet possimus, consequuntur dignissimos praesentium pariatur?
          </p>
        </article>

        <article
          className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-10'
        >
          <Img src={"/images/assets/randoms/7.png"} className='rounded-xl' />
          <div className='flex flex-col gap-10'>
            <div>
              <h2 className='text-2xl font-bold'>Tujuan</h2>
              <p className='mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dolores mollitia adipisci totam nostrum sapiente tempora officia amet ipsum sint.</p>
            </div>
            <div>

              <h2 className='text-2xl font-bold'>Pengetahuan dan Keterampilan</h2>
              <ul className='mt-5 flex flex-col gap-5'>
                <li>
                  Umum
                  <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae quis magni quas a quae sed enim minus distinctio consequuntur ullam nihil soluta animi sunt, temporibus reiciendis perferendis consequatur tenetur?</dd>
                </li>
                <li>
                  Khusus
                  <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laudantium optio minus quia? Aliquid aut sit velit ex ea porro in reiciendis pariatur facere placeat voluptatem sint delectus, officia enim assumenda quae perferendis cum dolorum eius quam? Ex, delectus alias tenetur asperiores eum cumque maiores ratione, iure id doloribus in!</dd>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='text-2xl font-bold'>Sikap/Perilaku</h2>
              <p className='mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dolores mollitia adipisci totam nostrum sapiente tempora officia amet ipsum sint.</p>
            </div>
          </div>
        </article>
        <article
          className='grid grid-cols-1 md:grid-cols-2  mt-20 gap-10'
        >
          <div className='flex flex-col gap-10'>
            <div>
              <h2 className='text-2xl font-bold'>Program</h2>
              <p className='mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dolores mollitia adipisci totam nostrum sapiente tempora officia amet ipsum sint.</p>
            </div>
            <div>

              <h2 className='text-2xl font-bold'>Seleksi Calon Siswa</h2>
              <ul className='mt-5 flex flex-col gap-5'>
                <li>
                  Umum
                  <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae quis magni quas a quae sed enim minus distinctio consequuntur ullam nihil soluta animi sunt, temporibus reiciendis perferendis consequatur tenetur?</dd>
                </li>
                <li>
                  Khusus
                  <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laudantium optio minus quia? Aliquid aut sit velit ex ea porro in reiciendis pariatur facere placeat voluptatem sint delectus, officia enim assumenda quae perferendis cum dolorum eius quam? Ex, delectus alias tenetur asperiores eum cumque maiores ratione, iure id doloribus in!</dd>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='text-2xl font-bold'>Pembinaan mental dan sikap (Bintalsik)</h2>
              <p className='mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dolores mollitia adipisci totam nostrum sapiente tempora officia amet ipsum sint.</p>
            </div>
            <div>
              <h2 className='text-2xl font-bold'>Inclass Training</h2>
              <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nobis labore odit rerum eos dolorem quae, non temporibus a dolores exercitationem inventore perferendis vel cupiditate voluptatem quis corporis iste sint dolor, dolore quasi quisquam repudiandae. Voluptates debitis sequi natus consequatur porro? Provident iste recusandae, ex sequi tempora consequatur. Praesentium nobis veniam distinctio numquam corporis! Consequuntur praesentium eligendi temporibus atque perferendis possimus esse culpa dolorum fugit iste in, corporis modi minima sit incidunt commodi, nam maxime deleniti explicabo quia necessitatibus corrupti.</p>
            </div>
            <div>
              <h2 className='text-2xl font-bold'>On Job Training (OJT)</h2>
              <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nobis labore odit rerum eos dolorem quae, non temporibus a dolores exercitationem inventore perferendis vel cupiditate voluptatem quis corporis iste sint dolor, dolore quasi quisquam repudiandae. Voluptates debitis sequi natus consequatur porro? Provident iste recusandae, ex sequi tempora consequatur. Praesentium nobis veniam distinctio numquam corporis! Consequuntur praesentium eligendi temporibus atque perferendis possimus esse culpa dolorum fugit iste in, corporis modi minima sit incidunt commodi, nam maxime deleniti explicabo quia necessitatibus corrupti.</p>
            </div>
          </div>
          <Img src={"/images/assets/randoms/7.png"} className='rounded-xl' />
        </article>
      </div>
      <div className='p-10 md:p-20 flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-bold'>Learning Materials</h2>
        <Card className='flex md:flex-row flex-col justify-center gap-40 mt-10 p-10'>
            <ul className='list-disc'>
              <li>Insani Character</li>
              <li>Profesional Work</li>
              <li>Safety</li>
              <li>Product Knowledge</li>
              <li>Tools</li>
              <li>Basic Driving</li>
              <li>Diesel Engine</li>
              <li>Hydraulic System</li>
              <li>Electrical System</li>
              <li>Direct Drive System</li>
            </ul>
            <ul className='list-disc'>
              <li>Torqflow Drive System</li>
              <li>Steering & Brake System Bulldozer</li>
              <li>Steering System</li>
              <li>Brake System</li>
              <li>Final Drive & Undercarriage</li>
              <li>Axle, Wheel & Suspension</li>
              <li>Basic Remove & Install</li>
              <li>Basic Maintance</li>
              <li>Basic Troubleshooting</li>
              <li>Part Book Reading</li>
            </ul>
        </Card>
      </div>  
    </div>
  )
}
