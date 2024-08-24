"use client";

import Image from 'next/image';
import React, { useState } from 'react'
import Button from '../elements/Button';
import Link from 'next/link';
import Logo from '../../../public/assets/img/nexus_logo.png'
import { RiMenu4Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [isNav, setIsNav] = useState(false);
  return (
    <header className="md:w-[95%] flex backdrop-blur-lg z-40 md:px-8 fixed top-0 gap-8 items-center w-full m-auto m-[0px] md:p-0 p-6">
        <div className='flex-[0.4]'>
            <Image src={Logo} className='md:w-[86px] w-[60px]  md:h-[86px] h-[60px]' alt='' />
        </div>
        {/* <nav className='md:flex hidden items-center 2xl:text-[24px] md:text-[20px] flex-[4] text-[14px] text-[#fff] justify-around'>
            <Link href={"#"}>MARKETPLACE</Link>
            <Link href={"#"}>BRAND CENTER</Link>
            <Link href={"#"}>CONTENT CREATOR</Link>
            <Link href={"#"}>TEAM</Link>
            <Link href={"#"}>INFO</Link>
        </nav>
        <div className='flex-[0.7] flex justify-end'>
            <Button text={'LOGIN'} btnStyle={"w-full md:flex hidden md:w-[170px] w-[100px] text-white p-2"} />
            {isNav == true ? (
              <MdClose onClick={()=> setIsNav(!isNav)} className='md:hidden flex text-white cursor-pointer text-[40px]' />
            ) : (
              <RiMenu4Line onClick={()=> setIsNav(!isNav)} className='md:hidden flex text-white cursor-pointer text-[40px]' />
            )}
        </div> */}
        {
          isNav == true && <MobNav setIsNav={setIsNav} />
        }
    </header>
  )
}

function MobNav(){
  return (
    <section className="text-[14px] fixed top-[100px] text-white w-full md:hidden flex flex-col z-40 gap-5 divide-y backdrop-blur-lg bg-[rgba(0,0,0,0.7)] h-[100dvh]">
      <Link href={"#"} className='p-3 pt-9 flex flex-col items-center bakbak'>MARKETPLACE</Link>
      <Link href={"#"} className='p-3 pt-9 flex flex-col items-center bakbak'>BRAND CENTER</Link>
      <Link href={"#"} className='p-3 pt-9 flex flex-col items-center bakbak'>CONTENT CREATOR</Link>
      <Link href={"#"} className='p-3 pt-9 flex flex-col items-center bakbak'>TEAM</Link>
      <Link href={"#"} className='p-3 pt-9 flex flex-col items-center bakbak'>INFO</Link>
      <Button text={'LOGIN'} btnStyle={"text-white p-3 w-[400px] mx-auto mx-[0px]"} />
      
    </section>
  );
}

export default Header