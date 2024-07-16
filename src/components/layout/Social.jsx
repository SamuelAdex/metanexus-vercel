"use client";

import React from 'react'
import GradientHeading from '../elements/GradientHeading';

const Social = () => {
  return (
    <main className='social md:mt-[15rem] mt-[8rem]  2xl:h-[80vh] md:h-[100vh] flex flex-col justify-center'>
        <section className=' md:w-[95%] w-full m-auto m-[0px] md:p-0 p-4'>
            <div className='2xl:w-[742px] md:w-[500px] space-y-5'>
                <GradientHeading text={'Social and Matching'} className='2xl:text-[50px] md:text-[40px] text-[20px] font-bold uppercase' />

                <p className='text-white 2xl:text-[25px] md:text-[20px] text-[15px]'>Engage in the Metanexus world by connecting with like-minded individuals through our social and Matching feature. Discover friends, collaborators, or business partners in a seamless and interactive environment, fastering lasting relationships and opportunities.</p>
            </div>
        </section>
    </main>
  )
}

export default Social