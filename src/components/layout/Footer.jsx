"use client";

import Image from 'next/image';
import React from 'react'
import MetaLogo from '../../../public/assets/svg/metalogo.svg'
import GoArrow from '../../../public/assets/svg/goArrow.svg';
import Link from 'next/link';
import Discord from '../../../public/assets/svg/discord_vector.svg';
import Insta from '../../../public/assets/svg/insta_vector.svg';
import Youtube from '../../../public/assets/svg/youtube_vector.svg';
import Telegram from '../../../public/assets/svg/telegram_vector.svg';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer bg-[#181A29] md:h-[70vh] md:pt-[4rem] p-7">
        <section className='2xl:w-[80%] md:w-[95%] flex md:flex-row flex-col gap-8 w-full md:p-0 p-4 m-auto m-[0px]'>
            <div className='flex-[4]'>
                <Image src={MetaLogo} width={320} alt='' />
                <p className='2xl:text-[20px] md:text-[16px] text-[14px] md:mt-4 mt-2 font-normal text-white'>Metanexus is an ecosystem connecting the Metaverse, including virtual reality, augmented reality, and the physical world. Offering real-world utility and endless immersive experiences to participants.</p>
            </div>

            <div className='flex-[2]'>
                <h1 className='text-white md:text-[24px] text-['>Info</h1>
                <div className='mt-3 space-y-4 mt-4'>
                    <div className='flex items-start gap-2'>
                        <Image src={GoArrow} alt='' />
                        <span className='md:text-[16px] text-white text-[14px]'>Privacy Policy</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src={GoArrow} alt='' />
                        <span className='md:text-[16px] text-white text-[14px]'>Legal Notice</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src={GoArrow} alt='' />
                        <span className='md:text-[16px] text-white text-[14px]'>Terms of usee</span>
                    </div>
                </div>
            </div>

            <div className='flex-[2]'>
                <h1 className='text-white md:text-[24px] text-['>Join the community</h1>
                <div className='flex items-center gap-8 mt-4'>
                    <Link href={"#"}>
                        <Image src={Discord} alt='' />
                    </Link>
                    <Link href={"#"}>
                        <FaXTwitter className='text-white text-[25px]' />
                    </Link>
                    <Link href={"#"}>
                        <Image src={Insta} alt='' />
                    </Link>
                    <Link href={"#"}>
                        <Image src={Youtube} alt='' />
                    </Link>
                    <Link href={"#"}>
                        <Image src={Telegram} alt='' />
                    </Link>
                </div>
            </div>
        </section>
        <div className='2xl:w-[80%] md:w-[95%] w-full md:p-0 p-4 m-auto m-[0px] mt-8'>
            <p className='2xl:text-[20px] md:text-[14px] text-[12px] font-normal text-white'>Copyright © 2022 METAHUNTER. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer