import { NavItem } from "@/types";
import { Logo } from "../atoms";
import { NavList } from "../molecules";

export default function Navbar() {

    const list:NavItem[] = [
        {
            text: "Beranda",
            url: "/"
        },
        {
            text: "Program",
            url: "/"
        },
        {
            text: "Tentang Kami",
            url: "/"
        },
        {
            text: "Hubungi Kami",
            url: "/"
        },
    ]

  return (
    <nav className="flex border justify-between px-10 py-3 items-center sticky top-0 bg-white z-50">
        <Logo />
        <NavList navItem={list} />
    </nav>
  )
}