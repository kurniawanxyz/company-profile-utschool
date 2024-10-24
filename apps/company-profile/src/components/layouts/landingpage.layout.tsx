import { ReactNode } from "react"
import { Header } from "../organisms"

type LandingPageLayout = {
    children?: ReactNode
}

export default function LandingPageLayout({children}: LandingPageLayout) {
  return (
    <>
        <Header/>
        <main className="min-h-screen">
            {children}
        </main>

    </>
  )
}