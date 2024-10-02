'use client'

import { links } from '@/constants/NavLinks'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'

const Navbar = () => {
    const router = useRouter();
    const [openMenu, setOpenMenu] = useState(false)

    const handleNavLinks = (path:string) => {
        setOpenMenu(!openMenu)
        router.push(path)
    }

  return (
    
        <nav className={`fixed top-0 z-10 w-full font-fontOswald font-bold bg-primary-950`}>

        <ul className='hidden sm:flex justify-between p-8 text-white'>
            <div className="">
                <li className='p-2'>
                    {/* title */}
                </li>
            </div>

            <div className="sm:flex space-x-8">
                
                    {links.map((link:any, i:number)=>{
                        return (
                            <div key={i}>
                            
                                <li className={`hover:border-b hover:border-b-blue-900 hover:text-blue-900 p-2  `} key={i}>
                                <Link href={link.path}>{link.name}</Link>
                                </li> 

                            
                            
                            
                            </div>
                            
                        )
                    })}
                
            </div>
            
        </ul>
        
        <ul className='sm:hidden flex justify-between p-8'>
            
                <div className="">
                    <li className='p-2'>
                        {/* title */}
                    </li>
                </div>
            
                
                    {!openMenu ? (

                        <button onClick={()=>setOpenMenu(!openMenu)} className=''>
                        <IoMenu className='text-white w-8 h-8' />
                        </button>

                    ):(
                        
                        
                        <div className="relative h-screen w-screen bg-primary-950">
                        <button onClick={()=>setOpenMenu(!openMenu)} className=''>
                        <IoClose className='text-white w-8 h-8 mb-8' />
                        </button>
                        {links.map((link:any, i:number)=>{
                            return (
                                
                                    
                                    
                                    <div 
                                    className={`flex flex-col hover:border-b hover:border-b-blue-900 hover:text-blue-900 py-4 
                                    mx-auto text-center`} 
                                    key={i} onClick={()=>handleNavLinks(link.path)}>{link.name}</div>
                                    

                                
                                
                                
                                
                                
                            )
                        })}

                        </div>
                        

                        

                    )}
                    
                    
                    
                    
                    
                
                
        </ul>
        
    </nav>
    
    
  )
}

export default Navbar