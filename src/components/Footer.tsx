'use client'

import { InputMask } from '@/utils/InputMask'
import React, { useEffect, useState } from 'react'

function Footer() {
const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
    {isClient &&
    <footer className='px-32 pb-32'>
    <div className='flex justify-between space-x-16'>
        <div></div>
        <div className='text-xs sm:text-sm' >
            <p className=''>{process.env.NEXT_PUBLIC_MY_LOC}</p>
            <p className='my-2' >{InputMask('phone',''+process.env.NEXT_PUBLIC_MY_WPP)}</p>
            <p>{process.env.NEXT_PUBLIC_MY_EMAIL}</p>
        </div>
    </div>
    </footer>
    }
    </>
  )
}



export default Footer