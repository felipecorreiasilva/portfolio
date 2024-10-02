'use client'

import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { InputMask } from '../utils/InputMask'
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const [formData,setFormData] = useState<any>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [errors,setErrors] = useState<any>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const wpp_url = 'https://wa.me/' + process.env.NEXT_PUBLIC_MY_WPP + "?text="
    +"Hello my name is " + formData.firstname + ' ' + formData.lastname + "%0a"
    +"Telephone: " + formData.phone + "%0a"
    +"Email: " + formData.email + "%0a"
    +"Subject: " + formData.subject + "%0a"
    +"Message: " + formData.message + ""
  

  const handleOnChange = (e:any)=> {
    
    switch(e.target.name){
      case 'phone':
          const _newObj = {...formData,[e.target.name]:InputMask('phone',e.target.value)}
          setFormData(_newObj)
        break;
      default:
         const newObj = {...formData,[e.target.name]:e.target.value}
         setFormData(newObj)
        break;
    }
    
    
    
  }
  


  const handleSubmit = async(e:any) => {
    e.preventDefault()

    const validationErrors = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    }

    if (!formData.firstname.trim()){
        validationErrors.firstname = "Name is required"
        setErrors(validationErrors)
        return
    } else if (formData.firstname.length < 3){
        validationErrors.firstname = 'Name must have at least 3 characters.'
        setErrors(validationErrors)
        return
    }

    if (!formData.lastname.trim()){
        validationErrors.lastname = "Last name is required."
        setErrors(validationErrors)
        return
    } else if (formData.lastname.length < 3){
        validationErrors.lastname = 'Last name must have at least 3 characters.'
        setErrors(validationErrors)
        return
    }

    if (!formData.email.trim()){
        validationErrors.email = "E-mail is required."
        setErrors(validationErrors)
        return
    } else if (!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = 'Invalid email format.'
        setErrors(validationErrors)
        return
    }

    if (!formData.phone.trim()){
        validationErrors.phone = "Phone is required."
        setErrors(validationErrors)
        return
    } else if (formData.phone.length < 11){
        validationErrors.phone = 'Phone must have at least 11 characters.'
        setErrors(validationErrors)
        return
    }

    if (!formData.subject.trim()){
        validationErrors.subject = "Subject is required."
        setErrors(validationErrors)
        return
    } else if (formData.subject.length < 3){
        validationErrors.subject = 'Subject must have at least 3 characters.'
        setErrors(validationErrors)
        return
    }

    if (!formData.message.trim()){
        validationErrors.message = "Message is required."
        setErrors(validationErrors)
        return
    } else if (formData.message.length < 4){
        validationErrors.message = 'message must have at least 4 characters.'
        setErrors(validationErrors)
        return
    }

    const templateParams = {
      
      from_name: formData.firstname+' '+formData.lastname,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,

    }
    
    const response = await emailjs.send('service_l9qfh96', 'template_pp2ow8o', templateParams, 'deOM2UftdC7BliVv_')
    console.log('EMAIL ENVIADO', response.status, response.text)

    window.open(wpp_url, '_blank')?.focus()
    setFormData({})

  }

  return (
    <section className='py-16 lg:w-1/3 mx-auto' id='contact'>
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration: 1.5}}
        className='mt-14 text-center text-4xl'>
            Contact 
            <span className='text-blue-600'> me</span>
        </motion.h1>
        <form onSubmit={handleSubmit} className='p-12 lg:p-0' >

            <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="lg:mt-24 grid lg:grid-cols-2 gap-3">


                <label className="relative">
                  
                  <input 
                  required
                  name='firstname'
                  placeholder='Enter your name'
                  className="duration-300 placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-xs shadow-md text-neutral-500 border rounded-md outline-none 
                  focus:border-neutral-300 peer pl-[16px] p-[6px] bg-inherit w-full"
                  value={formData.firstname}
                  onChange={handleOnChange}
                  type="text" />
                  <p className=' text-neutral-500 absolute
                  peer-focus:-translate-y-5 peer-focus:text-sm left-0 top-[6px] ml-2 px-[6px] duration-300 bg-primary-950 peer-valid:text-sm peer-valid:-translate-y-5'>
                  Name
                  <span 
                  className='text-red-500 ml-1'>
                  *</span>
                  
                  </p>
                  
                  
                </label>
                {errors.firstname && <span className='text-[#ff3333] text-[12px]'>{errors.firstname}</span>} 

                <label className="relative">
                  
                  <input 
                  required
                  name='lastname'
                  placeholder='Enter your lastname' 
                  className="duration-300 placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-xs shadow-md text-neutral-500 border rounded-md outline-none 
                  focus:border-neutral-300 peer pl-[16px] p-[6px] bg-inherit w-full"
                  value={formData.lastname}
                  onChange={handleOnChange}
                  type="text" />
                  <p className=' text-neutral-500 absolute
                  peer-focus:-translate-y-5 peer-focus:text-sm left-0 top-[6px] ml-2 px-[6px] duration-300 bg-primary-950 peer-valid:text-sm peer-valid:-translate-y-5'>
                  Lastname
                  <span 
                  className='text-red-500 ml-1'>
                  *</span>
                  
                  </p>
                  
                  
                </label>
                {errors.lastname && <span className='text-[#ff3333] text-[12px]'>{errors.lastname}</span>} 

                
                <label className="relative">
                  
                  <input 
                  required
                  name='email'
                  placeholder='Enter your email' 
                  className="duration-300 placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-xs shadow-md text-neutral-500 border rounded-md outline-none 
                  focus:border-neutral-300 peer pl-[16px] p-[6px] bg-inherit w-full"
                  value={formData.email}
                  onChange={handleOnChange}
                  type="email" />
                  <p className=' text-neutral-500 absolute
                  peer-focus:-translate-y-5 peer-focus:text-sm left-0 top-[6px] ml-2 px-[6px] duration-300 bg-primary-950 peer-valid:text-sm peer-valid:-translate-y-5'>
                  Email
                  <span 
                  className='text-red-500 ml-1'>
                  *</span>
                  
                  </p>
                  
                  
                </label>
                {errors.email && <span className='text-[#ff3333] text-[12px]'>{errors.email}</span>} 

                
                <label className="relative">
                  
                  <input 
                  required
                  name='phone'
                  placeholder='Enter your phone' 
                  className="duration-300 placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-xs shadow-md text-neutral-500 border rounded-md outline-none 
                  focus:border-neutral-300 peer pl-[16px] p-[6px] bg-inherit w-full"
                  value={formData.phone}
                  onChange={handleOnChange}
                  type="text" />
                  <p className=' text-neutral-500 absolute
                  peer-focus:-translate-y-5 peer-focus:text-sm left-0 top-[6px] ml-2 px-[6px] duration-300 bg-primary-950 peer-valid:text-sm peer-valid:-translate-y-5'>
                  Phone
                  <span 
                  className='text-red-500 ml-1'>
                  *</span>
                  
                  </p>
                  
                  
                </label>
                {errors.phone && <span className='text-[#ff3333] text-[12px]'>{errors.phone}</span>} 

                
                <label className="relative">
                  
                  <input 
                  required
                  name='subject'
                  placeholder='Enter your subject' 
                  className="duration-300 placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-xs shadow-md text-neutral-500 border rounded-md outline-none 
                  focus:border-neutral-300 peer pl-[16px] p-[6px] bg-inherit w-full"
                  value={formData.subject}
                  onChange={handleOnChange}
                  type="text" />
                  <p className=' text-neutral-500 absolute
                  peer-focus:-translate-y-5 peer-focus:text-sm left-0 top-[6px] ml-2 px-[6px] duration-300 bg-primary-950 peer-valid:text-sm peer-valid:-translate-y-5'>
                  Subject
                  <span 
                  className='text-red-500 ml-1'>
                  *</span>
                  
                  </p>
                  
                  
                </label>
                {errors.subject && <span className='text-[#ff3333] text-[12px]'>{errors.subject}</span>} 
                
                <label className="relative sm:col-span-2 my-[8px]">
                  
                  <textarea 
                  required
                  name='message'
                  cols={30} rows={10} 
                  placeholder='Enter your message'
                  className="duration-300 placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-xs shadow-md text-neutral-500 border rounded-md outline-none 
                  focus:border-neutral-300 peer pl-[16px] p-[6px] bg-inherit w-full"
                  value={formData.message}
                  onChange={handleOnChange}
                  />
                  <p className=' text-neutral-500 absolute
                  peer-focus:-translate-y-5 peer-focus:text-sm left-0 top-[6px] ml-2 px-[6px] duration-300 bg-primary-950 peer-valid:text-sm peer-valid:-translate-y-5'>
                  Message
                  <span 
                  className='text-red-500 ml-1'>
                  *</span>
                  
                  </p>
                  
                  
                </label>
                {errors.message && <span className='text-[#ff3333] text-[12px]'>{errors.message}</span>} 


                <button 
                type='submit' 
                className='sm:col-start-2 p-1 my-4 border-2 border-blue-900 hover:bg-blue-900 text-blue-900 hover:text-white bg-transparent rounded-md'>Enviar</button>

            </motion.div>

        </form>
        
    </section>
    
  )
}