'use client'

import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {motion} from 'framer-motion'
import { PROJECTS } from '../constants/Projects'
const Projects = () => {

    

  return (
    <section className='py-16 border-b border-primary-800' id='projects'>
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration: 1.5}}
        className='my-16 text-center text-4xl'>
            Projetos 
            <span className='text-blue-600'> recentes</span>
        </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
                
                {
                    PROJECTS.map((project, i) => {

                        return (

                                <motion.div 
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.5 }}
                                key={i} className="group mx-auto relative overflow-hidden rounded-xl h-[300px] w-[300px]">

                                    <img 
                                    className='h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-110'     
                                    
                                    src={project.image} alt=''/>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                                        <h3 className='text-black text-center text-xl'>{project.title}</h3>
                                        
                                        <p className='text-black lg:text-[10px] text-center my-4'>{project.description}</p>
                                        <a 
                                        className='rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300'
                                        href={project.github} 
                                        target='_blank' 
                                        rel='noopener noreferrer'>
                                            <div className='flex items-center' >
                                                <span>View on GitHub</span>
                                                <FaArrowUpRightFromSquare className='ml-2'/>
                                            </div>
                                        </a>
                                    </div>   

                                </motion.div>
                        )

                    })
                }
                
                    
            </div>

        
    </section>
  )
}

export default Projects