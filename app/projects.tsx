import React from 'react'
import { FaGithub } from "react-icons/fa"
import { PiArrowSquareOut } from "react-icons/pi";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript,SiTailwindcss, SiJavascript, SiFirebase } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import projects from '@/lib/projects';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const iconMap: { [key: string]: JSX.Element } = {
FaHtml5: <FaHtml5 size={24} />,
FaCss3Alt: <FaCss3Alt size={24} />,
SiTypescript: <SiTypescript size={24} />,
SiTailwindcss: <SiTailwindcss size={24} />,
SiJavascript: <SiJavascript size={24} />,
TbBrandNextjs: <TbBrandNextjs size={24} />,
BiLogoPostgresql: <BiLogoPostgresql size={24} />,
SiFirebase: <SiFirebase size={24} />,
};

function ProjectTechStack({ techStack }: { techStack: string[] }) {
    return (
        <div className='flex flex-col gap-1'>
            <b>Tech stack:</b>
            <span className='flex space-x-4'>
                {techStack.map((tech, index) => (
                    <span key={index}>{iconMap[tech]}</span>
                ))}
            </span>
        </div>
    );
}

const Projects = () => {
  return (
    <div className='px-6 md:px-12 lg:px-12 py-8 md:py-32 md:pt-12' id='projects'>
        <h1 className='text-2xl md:text-4xl md:text-6xl font-black'>
            Projects<span className='text-[#A065ED] text-7xl'>.</span>
        </h1>
        <div className='flex flex-wrap gap-8 mt-8'>
        {projects.map((project:any) => {
            return(
                <Card key={project.id} className='w-full lg:w-96 shadow-md shadow-purple-900/50'>
                     <CardContent className='pt-4 flex justify-center'>
                        <img src={project.image} alt="" className='w-full lg:w-80 h-56 md:h-96 lg:h-72' />
                    </CardContent>
                    <CardHeader>
                        <CardTitle>{project.name}</CardTitle>
                        <CardDescription>
                            {project.description}
                            <br />
                            <br />
                            <ProjectTechStack techStack={project.techStack} />
                            <br />
                            <div className='flex flex-col gap-1'>
                                <span><b>Links:</b></span>
                                <span className='flex flex-row space-x-4'>
                                    <div>
                                        <a href={project.codeLink} target="_blank" className='flex space-x-2 items-center'><span className='font-medium'>Code</span> <span><FaGithub size={24}/></span></a>
                                    </div>
                                    <div>
                                        <a href={project.codeLink} target="_blank" className='flex space-x-2 items-center'><span className='font-medium'>Live Demo</span> <span><PiArrowSquareOut size={24}/></span></a>
                                    </div>
                                </span>
                            </div>
                        </CardDescription>
                    </CardHeader>
                </Card>
            )
        })}
        
        </div>


    </div>
  )
}

export default Projects