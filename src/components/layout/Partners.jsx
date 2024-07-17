"use client";

import React from 'react'
import Partner1 from '../../../public/assets/svg/partner1.svg';
import Partner2 from '../../../public/assets/svg/partner2.svg';
import Partner3 from '../../../public/assets/svg/partner3.svg';
import Partner4 from '../../../public/assets/svg/partner4.svg';
import Partner5 from '../../../public/assets/svg/partner5.svg';
import Image from 'next/image';
import Polygon1 from '../../../public/assets/svg/Polygon1.svg'
import GradientHeading from '../elements/GradientHeading';

const Partners = () => {
  return (
    <section className='md:mt-[44rem] md:h-[1000px] mt-10 overflow-hidden'>
        <div className='text-center space-y-4 relative md:w-[90%] w-full m-[0px] m-auto md:p-0 p-6'>
            <GradientHeading text={"Partners"} className='2xl:text-[50px] md:text-[40px] pt-[4rem] text-[20px] uppercase font-bold' />
            <div className='mt-[3rem] flex items-center flex-wrap justify-center gap-x-10 gap-y-16'>
                <Image src={Partner1} alt='' />
                <Image src={Partner2} alt='' />
                <Image src={Partner3} alt='' />
                <Image src={Partner4} alt='' />
                <Image src={Partner5} alt='' />
            </div>
            <Image src={Polygon1} className='absolute rounded-[100%] md:top-[-11rem] top-0 z-[-99]' alt='' />
        </div>
    </section>
  )
}

export default Partners