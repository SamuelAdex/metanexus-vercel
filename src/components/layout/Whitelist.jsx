"use client";

import Image from 'next/image';
import React from 'react'
import WhiteBg from '../../../public/assets/svg/whitelistBg.svg';
import gradient from '../../../public/assets/svg/rectangleGradient.svg';
import Button from '../elements/Button';
import GradientHeading from '../elements/GradientHeading';

const Whitelist = () => {
  return (
    <section className='relative md:mt-[15rem] mt-[6rem]'>
        {/* <Image src={gradient} alt='' /> */}
        <Image src={WhiteBg} className='opacity-[75%]' alt='' />
        <div className='2xl:w-[742px] absolute md:w-[660px] space-y-5 md:top-[80px] top-[30px] md:px-14 px-10'>
            <GradientHeading type={"outline"} text={"Join the Metanexus Revolution now!"} className='2xl:text-[50px] md:text-[40px] text-[20px] uppercase font-bold' />

            <p className='text-white drop-shadow-xl 2xl:text-[25px] md:text-[20px] text-[15px]'>Explore Metanexus world today and unlock a world of endless opportunities!</p>

            <Button text={"JOIN WHITELIST NOW"} btnStyle={"text-white p-2 md:w-[330px]"} />
        </div>
    </section>
  )
}

export default Whitelist