"use client";

import Image from 'next/image';
import React from 'react'
import GradientHeading from '../elements/GradientHeading';

const Features = () => {
  return (
    <section className='md:mt-[15rem] mt-[8rem]'>
        <div className='text-center space-y-4 md:w-[78%] w-full m-[0px] m-auto md:p-0 p-6'>
            <GradientHeading text={"Press Features"} className='2xl:text-[50px] md:text-[40px] md:pt-[4rem] text-[20px] uppercase font-bold' />
        </div>
    </section>
  )
}

export default Features