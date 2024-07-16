"use client";

import Image from 'next/image';
import React from 'react'
import TradeBg from '../../../public/assets/svg/tradeBg.svg';
import TradeBadge from '../../../public/assets/img/tradeBadge.png'
import TradeBg2 from '../../../public/assets/svg/tradeBg2.svg'
import GradientHeading from '../elements/GradientHeading';

const Trade = () => {
  return (
    <main className='trade md:mt-[15rem] mt-6 md:h-[100vh]'>
        <section className=' flex md:flex-row flex-col items-center md:w-[95%] md:p-0 p-4 m-auto m-[0px]'>
            <aside className='flex-[2] md:w-[520px]'>
                <Image src={TradeBadge} className='w-[600px]' alt='' />
            </aside>

            <aside className='md:w-[480px] space-y-5 relative'>
                <Image src={TradeBg2} className='absolute' alt='' />
                <GradientHeading text={"Create and Trade"} className='2xl:text-[50px] md:text-[40px] uppercase text-[20px] font-bold' />

                <p className='text-white 2xl:text-[25px] md:text-[20px] text-[15px]'>Unleash your creativity in Metanexus by designing unique assets and experiences. Trade and monetize your creations with others in our thriving marketplace, empowering both content creators and users to shape the virtual landscape.</p>
            </aside>
        </section>
    </main>
  )
}

export default Trade