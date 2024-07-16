"use client";

import Image from 'next/image';
import React from 'react'
import Button from '../elements/Button';
import Link from 'next/link';
import Logo from '../../../public/assets/img/nexus_logo.png'

const Header = () => {
  return (
    <header className="md:w-[95%] flex justify-evenly gap-8 items-center w-full m-auto m-[0px] md:p-0 p-6">
        <div className='flex-[0.4]'>
            <Image src={Logo} className='w-[86px] h-[86px]' alt='' />
        </div>
        <nav className='md:flex hidden items-center 2xl:text-[24px] md:text-[20px] flex-[4] text-[14px] text-[#fff] justify-around'>
            <Link href={"#"}>MARKETPLACE</Link>
            <Link href={"#"}>BRAND CENTER</Link>
            <Link href={"#"}>CONTENT CREATOR</Link>
            <Link href={"#"}>TEAM</Link>
            <Link href={"#"}>INFO</Link>
        </nav>
        <div className='flex-[0.7] flex justify-end'>
            <Button text={'LOGIN'} btnStyle={"w-full md:w-[170px] w-[100px] text-white p-2"} />
        </div>
    </header>
  )
}

export default Header