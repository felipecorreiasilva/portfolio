'use client'

import React from 'react'
import {motion} from 'framer-motion'

export const About = () => {
    const ABOUT_TEXT = `Tudo começou com curiosidades em jogos, desde então tudo se tornou mais divertido, sempre procurei saber como os jogos enviavam e recebiam dados com conexão cliente e servidor, então decidir buscar diretamente em desenvolvimentos web e acabei absorvendo conhecimento como funciona o desenvolvimento android/ios com React-Native, além de conhecer como funciona transações em sites de comércio de produtos, e especialmente como começei conhecendo a linguagem c++, depois que conhecir javascript e typescript, isso me entregou um pouco a mais de confiança em Solidity e Blockchain`;
  return (
    
        <section className='pt-16 border-b border-primary-800' id="about">
            <motion.h1 
            whileInView={{opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100 }}
            transition={{duration: 1.5}}
            className='my-14 text-center text-4xl'>
            Sobre 
            <span className='text-blue-600'> mim</span>
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