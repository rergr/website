import {Link} from "react-router-dom";
import {useState} from "react";
import { PiDotsSixVertical } from "react-icons/pi";
import Logo from '../assets/logo.svg'

const Navbar = () =>{
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);

        const toggleDropdown = () => {
            setIsDropdownOpen(!isDropdownOpen);
        };


        return (
        <header className="absolute top-0 flex flex-row justify-between w-full items-center z-20">
            <ul className="md:flex hidden space-x-4 lg:text-3xl text-2xl">
                <Link to="/Documents" className="px-5 border-b-4 border-transparent hover:border-blue">
                    Documents
                </Link>
                <Link to="/Skills" className="px-5 border-b-4 border-transparent hover:border-blue">
                    Skills
                </Link >
                <Link to="/Projects" className="px-5 border-b-4 border-transparent hover:border-blue">
                    Projects
                </Link>
            </ul>

            <div className="md:hidden relative">
                <button
                    type="button"
                    className="text-3xl p-5 border-b-8 border-transparent hover:border-blue focus:outline-none"
                    onClick={toggleDropdown}
                >
                    <PiDotsSixVertical size={32}/>
                </button>
                {isDropdownOpen && (
                    <ul className="absolute border-white bg-blue p-2 space-y-2 shadow-md text-lg">
                        <li>
                            <Link to="/Documents" className="block hover:text-black p-2">
                                Documents
                            </Link>
                        </li>
                        <li>
                            <Link to="/Skills" className="block hover:text-black p-2">
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="/Projects" className="block hover:text-black p-2">
                                Projects
                            </Link>
                        </li>
                    </ul>
                )}
            </div>

            <div className="p-3 md:w-auto w-24">
                <Link to="/">
                    <img src={Logo} alt="Home"/>
                </Link>
                <h1 className="text-sm text-center">Take me Home!</h1>
            </div>
        </header>
    );
};



export default Navbar;