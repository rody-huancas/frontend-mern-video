import { Outlet } from "react-router-dom"
import { Navbar } from "../navbar/Navbar"

export const Layout = () => {
  return (
    <>
        <Navbar/>
        <main className="lg:w-[1200px] p-10 lg:p-0">
            <Outlet/>
        </main>
    </>
  )
}
