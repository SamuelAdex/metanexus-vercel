'use client';

import React from 'react'
import GamingBg from '../../../public/assets/svg/GamingBg.svg';
import GamingPad from '../../../public/assets/svg/GamingPad.svg';
import Ellipse from '../../../public/assets/svg/Ellipse 9.svg';
import Image from 'next/image';
import GradientHeading from '../elements/GradientHeading';

const Gaming = () => {
  return (
    <section className='md:mt-[15rem] mt-6 flex md:flex-row flex-col items-center md:w-[95%] md:p-0 p-4 gap-8 m-auto m-[0px]'>
            <aside className='flex-[2] relative md:w-[400px]'>
                <Image src={Ellipse} className='absolute' alt='' />
                <Image src={GamingBg} alt='' className='' />
            </aside>

            <aside className='md:w-[600px] space-y-5 relative z-20'>
                <Image src={GamingPad} className='absolute md:right-20 top-[-80px] opacity-10' alt='' />
                <GradientHeading text={'Multiplayer'} className='2xl:text-[50px] md:text-[40px] text-[20px] font-bold uppercase' />

                <p className='text-white 2xl:text-[25px] md:text-[20px] text-[15px]'>Experience the thrill of competition and cooperation in Metanexus with our Multiplayer feature. Engage in a various interactive games and challenges, unlocking achievements, and creating unforgettable memories with fellow friends and family.</p>
            </aside>
    </section>
  )
}

export default Gaming