"use client";

import Image from 'next/image';
import React from 'react'
import MetaLogo from '../../../public/assets/svg/metalogo.svg'
import ShowcaseImg from '../../../public/assets/svg/showcaseImg.svg'

const Showcase = () => {
  return (
    <section className='flex md:flex-row gap-8 md:w-[95%] w-full md:p-0 p-4 m-auto m-[0px] flex-col'>
        <aside className='md:w-[450px] space-y-10'>
            <Image src={MetaLogo} alt='' />
            <p className='text-white 2xl:text-[25px] md:text-[20px] text-[18px] font-normal'>Metanexus is a revolutionary ecosystem merging virtual (web3) and real-world (web2) experiences, unlocking the untapped potential for users, businesses, and content creators. Our immersive, interactive platform captivates and inspires, transforming how we live, work, and socialize.</p>

            <p className='text-white 2xl:text-[25px] md:text-[20px] text-[15px] font-normal'>Join the Metanexus movement and experience a boundless world of innovation, creativity, and opportunities. Shape the future and redefine reality.</p>
        </aside>
        <aside className='flex-[2] md:w-[550px]'>
            <Image src={ShowcaseImg} alt='' />
        </aside>
    </section>
  )
}

export default Showcase