import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <header className="bg-gray-600 w-full h-20 flex items-center justify-center gap-5 font-medium text-white uppercase">
            <Link to={"/"}>
                Inicio
            </Link>
            <Link to={"/new-video"}>
                Nuevo
            </Link>
        </header>
    )
}
