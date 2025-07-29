import { useEffect, useState } from "react";

const Navbar = () => {

    const [navtheme, setNavtheme] = useState(" bg-transparent text-white ");


    const handleNavtheme = () => {
        if (window.scrollY >= 200) {
            setNavtheme("bg-white text-[var(--custom-white)] ");

        }
        else {
            setNavtheme(" bg-transparent text-white ");
        }
    }

    window.addEventListener("scroll", handleNavtheme);

    return (

        <nav className={navtheme + " px-25 transition-[0.25s] z-20 sticky top-0 h-20 flex flex-row justify-between items-center"}>
            <a href=""><h1 className="text-4xl font-bold hover:text-[var(--custom-blue)]">Portfolio</h1></a>
            <ul className="flex flex-row gap-10">
                <a className={"rounded-xl transition-[0.25s] hover:text-[var(--custom-black)] hover:bg-[var(--custom-blue)]  p-5 flex items-center"} href="#home">Home<li></li></a>
                <a className={"rounded-xl transition-[0.25s] hover:text-[var(--custom-black)] hover:bg-[var(--custom-blue)]  p-5 flex items-center"} href="#about">About</a>
                <a className={"rounded-xl transition-[0.25s] hover:text-[var(--custom-black)] hover:bg-[var(--custom-blue)]  p-5 flex items-center"} href="#service">Service</a>
                <a className={"rounded-xl transition-[0.25s] hover:text-[var(--custom-black)] hover:bg-[var(--custom-blue)]  p-5 flex items-center"} href="#projects">Projects</a>
                <a className={"rounded-xl transition-[0.25s] hover:text-[var(--custom-black)] hover:bg-[var(--custom-blue)]  p-5 flex items-center"} href="#connect">Contact</a>
            </ul>
        </nav>

    );


}


export default Navbar;