"use client"
import { Img } from "../atoms";

export default function VisiMisi() {
    return (
        <article className="relative h-[100vh] mt-40">
            <div className=" shadow-md bg-white rounded-sm p-5 top-20 absolute left-20 z-20 w-2/5">
                <div>
                    <h2 className="text-2xl font-bold">Visi</h2>
                     <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste adipisci repellat ad quibusdam, mollitia sed quasi culpa ipsum tempore vitae!</p>
                </div>
                <div className="mt-5">
                    <h2 className="text-2xl font-bold">Misi</h2>
                     <ul className="ms-7 list-item list-disc">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quas!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quas!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quas!</li>
                     </ul>
                </div>
                <div className="mt-5">
                    <h2 className="text-2xl font-bold">Tujuan</h2>
                     <ul className="ms-7 list-item list-disc">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quas!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quas!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quas!</li>
                     </ul>
                </div>
            </div>
            <Img src="/images/assets/randoms/3.png" className="object-cover rounded-xl shadow-md absolute right-28 top-0 w-1/2"/>
        </article>
    )
}
