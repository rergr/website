import React from 'react'
import Pfp from '../assets/pfp.png';
import gif from '../assets/animation.gif'
import Typewriter from 'typewriter-effect';


const Home = () => {


    return (
    <>
        <div className="flex flex-col justify-start items-center min-h-max mt-44">
            <div className="md:text-4xl sm:text-2xl text-xl p-5">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDeleteSpeed(20)
                            .changeDelay(60)
                            .typeString("Hi, my name is Gregory, I am a: Software Dev")
                            .callFunction(() => {
                                setTimeout(() => {
                                    typewriter
                                        .deleteChars("Software Dev".length)
                                        .pauseFor(500)
                                        .typeString("ML enthusiast")
                                        .pauseFor(500)
                                        .deleteChars("ML enthusiast".length)
                                        .pauseFor(500)
                                        .typeString("Life-long learner!")
                                        .start();
                                }, 1000);
                            })
                            .start();
                    }}
                />
            </div>
            <img src={gif} alt="DCGAN" className="lg:w-1/3 md:w-1/2 w-full "/>
            <h2 className="md:text-md text-sm text-center">Celebrity face generation with DCGAN trained with pytorch</h2>
        </div>
        <div className="h-auto w-screen p-12 mb-36 ">
            <div className="flex flex-col justify-center h-full">

                <h1 className="flex justify-center text-4xl mt-20">
                    About me
                </h1>

                <div className="flex md:flex-row flex-col justify-start items-center h-full mb-36">
                    <img src={Pfp} className="p-6 w-80" alt="Face"/>
                    <div className="md:text-2xl text-xl">
                        <h1 className="font-bold text-blue pt-5">Name:</h1>
                        <h1>Gregory Reiter</h1>
                        <h1 className="font-bold pt-5 text-blue">Age:</h1>
                        <h1>19</h1>
                        <h1 className="font-bold pt-5 text-blue">Nationality:</h1>
                        <h1>Swiss</h1>
                        <h1 className="font-bold pt-5 text-blue">Who am I?</h1>
                        <h1>
                        Hello, I'm Gregory Reiter, a computer science student deeply passionate about ML and AI. I'm constantly fascinated by groundbreaking AI technologies that push the boundaries of what we once belived possible. Always excited to learn and innovate in this dynamic field!                        </h1>
                    </div>
                </div>
            </div>
        </div>

    </>
    );
};


export default Home;