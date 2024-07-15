"use client";

import Image from 'next/image';
import React from 'react';
import PreviewImg from '../../../public/assets/svg/preview.svg'
import GradientHeading from '../elements/GradientHeading';

const Preview = () => {
  return (
    <section className='md:mt-[15rem] mt-[8rem]  flex md:flex-row flex-col md:w-[95%] md:p-0 p-4 gap-8 m-auto m-[0px]'>
        <aside className='md:w-[450px] space-y-10'>
            <GradientHeading text={"Immersive & Interactive World"} className='2xl:text-[50px] md:text-[40px] uppercase text-[20px] font-bold' />

            <p className='text-white 2xl:text-[25px] md:text-[20px] text-[18px]'>Explore Metanexus, a realm where the boundaries between the virtual and the physical blur. Immerse yourself in stunning landscapes, engage with interactive environments, and discover endless possibilities.</p>
        </aside>

        <aside className='flex-[2] md:w-[550px]'>
            <Image src={PreviewImg} alt='' />
        </aside>
    </section>
  )
}

export default Preview