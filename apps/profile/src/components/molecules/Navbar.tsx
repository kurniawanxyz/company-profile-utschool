import Link from "next/link"
import { Img } from "../atoms"
import Dropdown from "./Dropdown"
import { DropdownItem } from "@/types"

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className="fixed top-0 w-full z-10 px-10 bg-black/60 flex items-center justify-between h-16">
      <Img src="/images/logos/uts/1.png" className="w-32 object-cover"/>
      <ul className="flex space-x-7 h-full items-center">
        <li>
          <Link href={"/"}>Beranda</Link>
        </li>
        <li className="group relative flex h-full items-center">
          <span >Tentang Kami</span>
          <div className="hidden absolute group-hover:inline top-full w-full ">
            <ul className="bg-black/60 w-full px-2">
              <li>tes</li>
              <li>tes</li>
              <li>tes</li>
            </ul>
          </div>
        </li>
        <li>
          <Link href={"/"}>Program</Link>
        </li>
        <li>
          <Link href={"/"}>Hubungi Kami</Link>
        </li>
      </ul>
    </nav>
  )
}