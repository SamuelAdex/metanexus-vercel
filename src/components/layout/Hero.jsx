"use client";

import React from 'react'
import Button from '../elements/Button';

const Hero = () => {
  return (
    <section className='grid place-items-center h-[100dvh]'>
        <div className='text-center flex space-y-7 flex-col md:w-[800px] w-full md:p-0 p-3 items-center'>
            <h1 className='md:text-[74px] text-white
            font-bold leading-[70px] text-[40px]'>WELCOME TO THE METANEXUS WORLD</h1>
            <p className='2xl:text-[29px] md:text-[25px] text-[15px] font-normal text-white md:w-[700px]'>Embrace the future and explore Metanexus, the groundbreaking ecosystem bridging virtual and real-world experiences!</p>
            <Button text={"LEARN MORE"} btnStyle={"text-white p-2 md:w-[234px]"} />
        </div>
    </section>
  )
}

export default Hero