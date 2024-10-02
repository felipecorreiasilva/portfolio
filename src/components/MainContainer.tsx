'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import Header from './Header'
import { InputMask } from '@/utils/InputMask'

interface PropsMainContainer {
    children: ReactNode
}

const MainContainer = (props:PropsMainContainer) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
    {isClient &&
      <div className='flex flex-col h-screen text-white'>
        <Header />
        <main className="flex justify-center items-center">
            
            {props.children}

        </main>
        <footer className='px-32 pb-32'>
        <div className='flex justify-between'>
            <div></div>
            <div className='' >
                <p>{process.env.NEXT_PUBLIC_MY_LOC}</p>
                <p className='my-2' >{InputMask('phone',''+process.env.NEXT_PUBLIC_MY_WPP)}</p>
                <p>{process.env.NEXT_PUBLIC_MY_EMAIL}</p>
            </div>
        </div>
        </footer>
    </div>
    }
    </>
    
    
    
  )
}

export default MainContainer