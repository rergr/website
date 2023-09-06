import { GrMail } from "react-icons/gr";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {useState} from "react";


const Footbar = () => {

    const [isImpressum, setIsImpressum] = useState(false)

    const toggleImpressum = () => {
        setIsImpressum(!isImpressum);
    };

    return (
        <footer className="absolute w-full -bottom-12 shadow-lg z-50 overflow-hidden">
            <svg className="w-full relative bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 180">
                <path id="wave_3_" data-name="wave(3)" d="M0,46.6l35.6,3.859c35.467,4.15,107.067,11.431,177.733,31.09C284.4,101.2,356,131.785,426.667,132c71.067-.218,142.667-30.8,213.333-19.367,71.067,11.868,142.667,65.747,213.333,62.106C924.4,171.1,996,108.486,1066.667,100.986c71.067-7.791,142.667,38.807,213.333,34.948,71.067-4.15,142.667-58.029,213.333-66.038C1564.4,61.888,1636,101.2,1706.667,97.055,1777.733,93.2,1849.333,46.6,1884,23.3L1920,0V232.99H0Z" fill="#607999"/>
            </svg>
            <div className="bg-blue w-screen h-16 grid grid-cols-9">
                <button onClick={toggleImpressum} className="py-4 px-5 z-[100] md:text-3xl text-xl text-left w-auto">
                    Impressum
                </button>
                <div className="flex justify-end items-center col-span-8">
                    <a href="mailto: gregory@gregreiter.net" className="mx-2 text-black"><GrMail size="40"/></a>
                    <a href="https://github.com/rergr" className="mx-2 text-black"><BsGithub size="40"/></a>
                    <a href="https://www.linkedin.com/in/Gregory-J-Reiter" className="mx-2 text-black"><BsLinkedin size="40"/></a>
                </div>
            </div>

            {isImpressum && (
                <div className="grid grid-cols-2 gap-4 w-screen h-64 z-50 bg-black p-6">

                    <h1 className="text-white text-center md:text-2xl sm:text-xl text-lg font-bold mb-4 col-span-2">Impressum</h1>

                    <div className="text-center md:text-xl sm:text-lg text:md">
                        <h2 className="text-white font-semibold md:text-2xl sm:text-xl text:lg">Contact</h2>
                        <p className="text-white">Tel.: +41 77 503 65 37</p>
                        <p className="text-white">
                            Email: <a href="mailto: gregory@gregreiter.net">gregory@gregreiter.net</a>
                        </p>
                    </div>

                    <div className="text-center md:text-xl sm:text-lg text:md">
                        <h2 className="text-white font-semibold md:text-2xl sm:text-xl text-lg">Details</h2>
                        <p className="text-white">Gregory Reiter</p>
                        <p className="text-white">Bernstrasse 69</p>
                        <p className="text-white">3018 Bern</p>
                    </div>


                </div>

            )}
        </footer>
    );
};

export default Footbar;


