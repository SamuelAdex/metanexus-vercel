"use client";

import Image from 'next/image';
import React from 'react'
import tokenImg from '../../../public/assets/svg/DualToken.svg';
import GradientHeading from '../elements/GradientHeading';

const Token = () => {
  return (
    <section className='md:mt-[15rem] mt-[8rem] relative'>
        <div className='text-center space-y-4 md:w-[78%] w-full m-[0px] m-auto md:p-0 p-6'>
            <GradientHeading text={"dual token"} className='2xl:text-[50px] md:text-[40px] md:pt-[4rem] text-[20px] uppercase font-bold' />
            <p className='text-white 2xl:text-[25px] md:text-[20px] text-[15px]'>Explore the financial advantages of Metanexus with our Dual Token system. Utilize MTX, our governance token, to participate in community decision-making, while MGLD, our stable token, facilitates seamless transactions within the ecosystem.</p>
        </div>
        <Image src={tokenImg} className='absolute top-0 z-[-99] md:opacity-[100%] opacity-15' alt='' />
    </section>
  )
}

export default Token