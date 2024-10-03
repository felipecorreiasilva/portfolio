'use client'

import React from 'react'
import {motion} from 'framer-motion'

export const About = () => {
    const ABOUT_TEXT = `It all started with curiosities in games, since then everything became more fun, I always tried to discover how games sent and received data with client and server connections, so I decided to look directly at web development and ended up absorbing knowledge about how Android/ios development works with React-Native, in addition to knowing how transactions work on product commerce sites, I studied the C++ language through game emulators and even created some scripts, before knowing Javascript and Typescript, this gave me a little more confidence in Solidity and Blockchain`;
  return (
    
        <section className='pt-16 border-b border-primary-800' id="about">
            <motion.h1 
            whileInView={{opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100 }}
            transition={{duration: 1.5}}
            className='my-14 text-center text-4xl'>
            About 
            <span className='text-blue-600'> me</span>
            </motion.h1>
            <div className="sm:flex sm:my-32 justify-center items-center gap-32">

                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="">
                    <img 
                    className='lg:my-0 mb-16 sm:w-[450px] w-[250px] mx-auto'
                    
                    src='binarycode.jpg' alt=''></img>
                </motion.div>

                <motion.div
                className=""
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                >
                    <p className='lg:mb-0 mb-32 text-center text-xs lg:text-start lg:text-base max-w-[250px] sm:max-w-[430px] mx-auto'>{ABOUT_TEXT}</p>
                </motion.div>

            </div>
            

            

        </section>

  )
}