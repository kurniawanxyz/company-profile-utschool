import { FaArrowUp } from "react-icons/fa";
import { Button, Img } from "../atoms";

type Props = {};

export default function TopGallery({}: Props) {
  return (
    <article className="w-full min-h-screen bg-black py-20 px-10">
      <div className="flex items-center justify-center gap-3 flex-col-reverse">
        <h2 className="text-center text-5xl font-extrabold text-primary">
          Galeri
        </h2>
        <Img src="/images/logos/uts/1.png" className="w-40" />
      </div>
        <p className="md:w-2/3 text-center mx-auto mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore natus repellat iusto accusantium commodi maxime vel, ut voluptas dicta ducimus!</p>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-5 lg:gap-10 mt-10">
            {
                ['','',''].map((item,number)=>(
                    <div key={number} className="card rounded-md overflow-hidden border relative hover:shadow hover:shadow-white p-3">
                        <div className="bg-black absolute z-0 top-0 left-0 bottom-0 right-0"></div>
                        <div className="relative z-10">
                            <Img src="/images/students/1.jpg" className=" rounded-md md:h-40 lg:h-60" />
                            <div className=" py-3">
                                <span>
                                    Kategori
                                </span>
                                <div className="flex items-start">
                                    <h3 className="text-2xl text-primary font-bold w-11/12">Acara Wisuda Nasional UT School</h3>
                                    <FaArrowUp className="text-primary rotate-45 text-2xl w-1/12  text-center"/>
                                </div>
                                <Button className="mt-3"></Button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    </article>
  );
}
