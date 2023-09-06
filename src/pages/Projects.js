import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import data from "../data"
import Tilt from 'react-parallax-tilt';
import { BsGithub } from "react-icons/bs";



const Projects = () => {
    const slider = React.useRef(null);
    const projects = data.projects

    const settings = {
        lazyLoad: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        accessibility: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen mb-24 ">
            <h1 className="md:text-5xl text-3xl mb-12 text-center w-screen"> Projects </h1>
            <div className="grid grid-cols-12">
                <button onClick={() => slider?.current?.slickPrev()} className="flex items-center justify-center">
                    <AiOutlineArrowLeft className="text-4xl flex items-center justify-center hover:scale-125 transform transition-transform" />
                </button>
                <Slider ref={slider} {...settings} className="col-span-10">
                    {
                        Object.keys(projects).map((projectKey, index) => {
                            const project = projects[projectKey];

                            return (
                                <Project
                                    key={projectKey}
                                    title={project.name}
                                    imageUrl={project.image}
                                    disc={project.description}
                                    owner={project.owner}
                                    repo={project.repo}
                                    pdf={project.pdf}
                                />
                            );
                        })
                    }

                </Slider>
                <button onClick={() => slider?.current?.slickNext()} className="flex items-center justify-center">
                    <AiOutlineArrowRight className="text-4xl flex items-center justify-center hover:scale-125 transform transition-transform"/>
                </button>
            </div>
        </div>
    );
};

const Project = ({ imageUrl, title, disc, repo, owner, pdf}) => {

    const Image = require(`../assets/${imageUrl}`);
    const Pdf = require(`./PDFs/${pdf}`);

    return (
        <Tilt className="bg-blue p-4 shadow-md rounded-lg transform transition-all duration-300 mx-4 flex flex-col h-[540px] z-50">
            <h1 className="text-center p-4 lg:text-3xl md:text-2xl text-xl">
                {title}
            </h1>
            <div className="flex items-center justify-center w-full h-[250px] bg-black ">
                <img src={Image} alt={title} className="h-full"/>
            </div>
            <div className="grid grid-rows-3 w-full"></div>
            <h2 className="text-md  font-semibold mb-2">Abstract: {disc}</h2>
            <a href={Pdf} target="_blank" rel="noreferrer" className="text-lg font-semibold mb-2 absolute bottom-2 left-4">See more!</a>
            <a href={`https://github.com/${owner}/${repo}`} target="_blank" rel="noreferrer">
                <BsGithub size={32}  className="text-lg font-semibold mb-2 absolute bottom-2 right-4"/>
            </a>
        </Tilt>


    );
};

export default Projects;
