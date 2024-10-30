import { Img } from "../atoms";


export default function Header() {
    return (
        <div
            className="bg-cover bg-center min-h-screen"
            style={{
                backgroundImage: "url('/images/assets/bg-atas.png')",
            }}
        >
            <header className="p-20 flex min-h-[80vh] border">
                <div className="w-7/12 relative">
                    <Img src="/images/assets/michie.jpg" className="w-20 h-20 rounded-lg shadow-xl" quality={100} />
                    <Img src="/images/assets/panahitam.png" className="absolute bottom-10 right-20 object-contain w-40 -rotate-[25deg]" quality={100} />
                    <Img src="/images/assets/panahoranye.png" className="absolute top-0 right-0 object-contain w-40 " quality={100} />
                    <h1 className="flex flex-col text-slate-700">
                        <span className="text-6xl font-bold">Lembaga Pendidikan</span>
                        <span className="text-3xl font-bold mt-1">Keterampilan Berwawasan Internasional</span>
                    </h1>
                    <p className="w-5/6 mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam temporibus nihil modi, itaque laborum possimus enim, debitis, nesciunt ratione quidem reprehenderit quasi mollitia. Culpa odit veniam, qui placeat maxime illum laboriosam nisi ratione amet! Aspernatur dignissimos sequi nam dolore non?</p>
                </div>
                <div className="w-5/12 relative">
                    <div className="w-[250px] h-[250px] bg-primary rounded-xl shadow-md -rotate-12 mx-auto">
                    </div>
                    <Img src="/images/assets/michie.jpg" className="w-20 h-20 rounded-lg shadow-xl absolute top-32 rotate-12" quality={100} />
                    <Img src="/images/assets/michie.jpg" className="w-20 h-20 rounded-lg shadow-xl absolute bottom-10 right-1/3 rotate-12" quality={100} />

                    <Img src="/images/assets/michie.jpg" className="w-20 h-20 rounded-lg shadow-xl absolute top-10 right-0 rotate-12" quality={100} />
                </div>
            </header>
        </div>
    )
}
