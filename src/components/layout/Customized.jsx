"use client";

import React from 'react'
import Button from '../elements/Button';
import Image from 'next/image';
import Avatar from '../../../public/assets/svg/customAvatar.svg'
import GradientHeading from '../elements/GradientHeading';

const Customized = () => {
  return (
    <section className='md:mt-[15rem] mt-[8rem]  flex md:flex-row flex-col items-center gap-8 md:w-[95%] w-full m-auto m-[0px] md:p-0 p-4'>
        <div className='2xl:w-[742px] md:w-[500px] space-y-5'>
            <GradientHeading text={"Customizable Avatar"} className='2xl:text-[50px] md:text-[40px] text-[20px] uppercase font-bold' />

            <p className='text-white 2xl:text-[25px] md:text-[20px] text-[15px]'>Create your unique identity in the Metanexus metaverse with our fully customizable avatars. Express your style and personality by choosing from an extensive range of outfits, accessories, and features. Dive into the immersive world and interact with others as your virtual self.</p>
        </div>

        <div className='flex-[2] md:w-[500px]'>
            <Image src={Avatar} className='w-full' alt='' />
        </div>
    </section>
  )
}

export default Customized