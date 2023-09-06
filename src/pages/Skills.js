import React from 'react';
import { FaPython, FaJava, FaDocker, FaGitAlt, FaReact, FaLinux, FaAws, FaNodeJs } from 'react-icons/fa'
import { SiTensorflow, SiKubernetes, SiDotnet, SiCsharp, SiHtml5, SiMicrosoftoffice, SiMysql, SiDjango, SiSpringboot, SiPytorch, SiJavascript, SiMongodb, SiNumpy, SiExpress, SiTailwindcss, SiJupyter, SiAnaconda, SiPandas, SiMicrosoftazure, SiRedis} from 'react-icons/si'

const Skills = () => {
    return (
            <div className="flex md:flex-row flex-col justify-center items-center h-screen w-screen md:gap-44 gap-16 md:m-auto my-96">

                    <div className="flex items-center justify-center flex-col md:h-5/8 h-2/3 md:w-1/3 w-5/6 bg-blue rounded-lg ">
                        <div className="flex items-center justify-center w-full">

                            <h1 className="lg:text-4xl text-2xl text-center p-4 pb-0">Technologies</h1>
                        </div>
                        <h1 className="md:text-lg text-sm text-center p-4 pt-0">Sorted by experience</h1>

                        <div className="grid lg:grid-cols-3 grid-cols-2 gap-16 w-full p-12 overflow-scroll overflow-x-hidden">
                            <Technologies icon={<SiTensorflow/>} tooltip="Tensorflow"/>
                            <Technologies icon={<SiPytorch/>} tooltip="Pytorch"/>
                            <Technologies icon={<SiNumpy/>} tooltip="Numpy"/>
                            <Technologies icon={<FaReact/>} tooltip="React"/>
                            <Technologies icon={<SiJupyter/>} tooltip="Jupyter"/>
                            <Technologies icon={<SiPandas/>} tooltip="Pandas"/>
                            <Technologies icon={<SiAnaconda/>} tooltip="Anaconda"/>
                            <Technologies icon={<SiTailwindcss/>} tooltip="Tailwind"/>
                            <Technologies icon={<SiExpress/>} tooltip="Express.js"/>
                            <Technologies icon={<FaDocker/>}  tooltip="Docker"/>
                            <Technologies icon={<SiSpringboot/>} tooltip="Springboot"/>
                            <Technologies icon={<SiDjango/>}  tooltip="Django"/>
                            <Technologies icon={<SiKubernetes/>} tooltip="Kubernetes"/>
                            <Technologies icon={<FaGitAlt/>} tooltip="GIT"/>
                            <Technologies icon={<FaLinux/>} tooltip="Linux"/>
                            <Technologies icon={<FaNodeJs/>} tooltip="NodeJs"/>
                            <Technologies icon={<SiDotnet/>} tooltip="Dotnet"/>
                            <Technologies icon={<FaAws/>} tooltip="AWS"/>
                            <Technologies icon={<SiMicrosoftazure/>} tooltip="Azure"/>
                            <Technologies icon={<SiMicrosoftoffice/>} tooltip="Office"/>
                        </div>
                    </div>

                    <div className="flex items-center justify-center flex-col md:h-5/8 h-2/3 md:w-1/3 w-5/6 bg-blue rounded-lg">
                        <div className="flex items-center justify-center w-full">

                            <h1 className="lg:text-4xl text-2xl text-center p-4 pb-0">Languages</h1>
                        </div>
                        <div className="flex flex-col gap-16 w-full p-12 overflow-scroll overflow-x-hidden">
                            <Skill icon={<FaPython/>} skill="85%"/>
                            <Skill icon={<SiJavascript/>} skill="70%"/>
                            <Skill icon={<SiMongodb/>} skill="70%"/>
                            <Skill icon={<SiRedis/>} skill="60%"/>
                            <Skill icon={<SiMysql/>} skill="70%"/>
                            <Skill icon={<SiHtml5/>} skill="70%"/>
                            <Skill icon={<FaJava/>} skill="60%"/>
                            <Skill icon={<SiCsharp/>} skill="45%"/>

                        </div>
                    </div>

            </div>
    );
};


export default Skills;



const Technologies = ({icon, tooltip}) => (
    <div className="relative flex items-center justify-center flex-col md:text-5xl text-2xl text-black group p-2 ">
        <div className="">
            {icon}
        </div>
        <span className="absolute top-16 text-sm bg-black text-white rounded-md text-center
                         transition-all scale-0 group-hover:scale-100 z-10 opacity-90 drop-shadow-xl">
            {tooltip}
        </span>
    </div>
);


const Skill = ({icon, skill}) => (
    <div className="relative flex items-center justify-center flex-row md:text-5xl text-2xl text-black group gap-6">
        <div className="">
            {icon}
        </div>
        <div className="bg-black md:h-5 h-2 w-full rounded-2xl">
            <div className="h-full bg-white rounded-2xl" style={{ width: skill }}>
            </div>
        </div>
    </div>
);

