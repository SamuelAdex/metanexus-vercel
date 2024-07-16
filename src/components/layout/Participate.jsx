"use client";

import React from 'react'
import Button from '../elements/Button';
import Image from 'next/image';
import TierHouse from '../../../public/assets/svg/TierHouse.svg'
import GradientHeading from '../elements/GradientHeading';

const Participate = () => {
  return (
    <main className='participate md:mt-[15rem] flex flex-col justify-center mt-[8rem] md:h-[100vh]'>
        <section className='md:w-[95%] w-full m-auto m-[0px] md:p-0 p-4'>
            <div className='2xl:w-[742px] md:w-[500px] space-y-5 relative'>
                <GradientHeading text={"Participate for free"} className='2xl:text-[50px] md:text-[40px] text-[20px] uppercase font-bold' />

                <p className='text-white 2xl:text-[25px] md:text-[20px] text-[15px]'>{"Join the Metanexus community today and claim your free studio house! Experience the metaverse without any initial investment and start exploring the endless possibilities within our virtual world. Don't miss out on this limited-time offer; register now and secure your place in the future of digital interaction."}</p>

                <Button text={"CLAIM YOUR FREE STUDIO HOUSE NOW"} btnStyle={"text-white p-2 md:w-[330px]"} />
                <Image src={TierHouse} className='house absolute bottom-[-140px] md:right-[-140px] right-[-10px] md:z-10 z-[-99]' alt='' />
            </div>
        </section>
    </main>
  )
}

export default Participate