"use client"

import React from 'react'
import { DiMysql } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { IoLogoFirebase } from "react-icons/io5";
import {motion} from 'framer-motion'

const iconVariants = (duration:any) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { 
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse" as const,
        
        },
    },
})
  

export const Technologies = () => {
  return (
    <section id='technologies' className='py-16 border-b border-primary-800 '>
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration: 1.5}}
        className='my-16 text-center text-4xl'>Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className='grid grid-cols-2 sm:grid-cols-4 lg:flex items-center justify-center gap-4'>
        <motion.div 
            variants={iconVariants(2)}
            initial='initial'
            animate='animate'
            className='flex w-32 m-auto lg:m-0 items-center justify-center rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTypescript className='text-7xl' color='#3178c6' />
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial='initial'
            animate='animate'
            className='flex w-32 m-auto lg:m-0 items-center justify-center rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-500' />
            </motion.div>
            
            <motion.div 
            variants={iconVariants(5)}
            initial='initial'
            animate='animate'
            className='flex w-32 m-auto lg:m-0 items-center justify-center rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandNextjs className='text-7xl' />
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial='initial'
            animate='animate'
            className='flex w-32 m-auto lg:m-0 items-center justify-center rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-900' />
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial='initial'
            animate='animate'
            className='flex w-32 m-auto lg:m-0 items-center justify-center rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMysql className='text-7xl text-cyan-300' />
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial='initial'
            animate='animate'
            className='flex w-32 m-auto lg:m-0 items-center justify-center rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoFirebase className='text-7xl text-yellow-400' />
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className='flex w-32 m-auto lg:m-0 items-center justify-center rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500' />
            </motion.div>
        </motion.div>
        
        
    </section>
  )
}