"use client"

import React from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { motion } from "framer-motion"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const container = (delay:any) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  }
})

const Hero = () => {
  
  
  const wpp_url = 'https://wa.me/' + process.env.NEXT_PUBLIC_MY_WPP

    const [typeEffect] = useTypewriter({
      words: ['...'],
      loop: 0,
      typeSpeed: 100,
      deleteSpeed: 40
    })

    const iconsStyle = 'text-1xl rounded-full p-2 border-4 colors text-blue-600 border-blue-600 hover:border-blue-900 hover:text-white shadow-2xl hover:border-blue-900 hover:bg-blue-900';

  return (
    <section id='hero' className='pt-48 pb-32 border-b border-primary-800  md:flex lg:flex justify-center items-center gap-32'>

        <div className="text-center lg:text-start text-sm">
              
        <motion.h1 
        variants={container(0)}
        initial='hidden'
        animate="visible"
        className='font-fontTitleHero text-[60px] my-6' >Felipe Correia</motion.h1>

        <motion.h3 
        variants={container(0.5)}
        initial='hidden'
        animate="visible"
        className='my-4'>And I'm a
        <span 
        className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent capitalize'> Full Stack Developer</span><Cursor />
        {/* className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'> Full Stack {typeEffect}</span><Cursor /> */}
        </motion.h3>
        <motion.p 
        variants={container(1)}
        initial='hidden'
        animate="visible"
        className='my-4 max-w-[300px] mx-auto sm:mx-0 sm:max-w-[500px]'>With a talent for creating web and mobile applications, I improved my skills in front-end technologies such as React, React-Native and Next.js, as well as back-end technologies such as Node.js, MySQL, Firebase and MongoDB.</motion.p>
        <motion.div 
        variants={container(1.5)}
        initial='hidden'
        animate="visible"
        className='lg:my-8 my-12 inline-flex justify-center items-center gap-4'>
            <a target='_blank' className={iconsStyle} href={process.env.NEXT_PUBLIC_GITHUB}><FaGithub /></a>
            <a target='_blank' className={iconsStyle} href={process.env.NEXT_PUBLIC_INSTAGRAM}><GrInstagram /></a>
            <a target='_blank' className={iconsStyle} href={process.env.NEXT_PUBLIC_LINKEDIN} ><FaLinkedinIn /></a>
            <a target='_blank' className={iconsStyle} href={wpp_url} ><FaWhatsapp /></a>

            <a target='_blank' className='lg:ml-48 py-3 px-6 bg-blue-600 hover:bg-blue-900 rounded-full' href='curriculo.pdf' download='curriculo.pdf'>Download CV</a>
        </motion.div>

        </div>

        <div>
            <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className='lg:h-[370px] lg:w-[370px] h-[270px] w-[270px] mx-auto rounded-full'
            src='heroc.jpg' alt='' />
        </div>
        

    </section>
    
  )
}

export default Hero