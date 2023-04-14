
import { useState } from "react";
import { RiCheckboxBlankCircleFill, RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className="flex px-10 items-center justify-between xl:justify-start w-full p-4 h-[10vh] z-50 ">
            <div className=" xk:w-1/6 text-center -mt-5 ">
                <a href="#" className="text-2xl font-bold text-center relative p-1 bg-white">
                    Power
                    <span className="text-primary text-5xl">.</span>
                    <RiCheckboxBlankCircleFill className="absolute -bottom-3 -left-3 text-primary -z-10" />
                </a>
            </div>
            <nav className={`fixed bg-white w-[80%] xl:w-full h-full md:w-[40%] ${showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row justify-center  items-center gap-10 transition-all duration-500 z-50`}>

                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Products</a>
            </nav>
            <button onClick={()=>setShowMenu(!showMenu)} className="text-3xl p-2 xl:hidden">
                {showMenu ? <RiCloseFill /> : <RiMenu3Fill />}
            </button>
        </header>
    )
}

export default Header