"use client";

import Image from 'next/image';
import React from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import GradientHeading from '../elements/GradientHeading';
import Feature1 from '../../../public/assets/svg/feature1.svg'
import Feature2 from '../../../public/assets/svg/feature2.svg'
import Feature3 from '../../../public/assets/svg/feature3.svg'

const Features = () => {

    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 3 },
    };


    const features = [
        {
            id: 1,
            img: Feature1,
            text: "unique and dynamic universe comprised"
        },
        {
            id: 2,
            img: Feature2,
            text: "unique and dynamic universe comprised"
        },
        {
            id: 3,
            img: Feature3,
            text: "unique and dynamic universe comprised"
        },
        {
            id: 4,
            img: Feature3,
            text: "unique and dynamic universe comprised"
        },
        {
            id: 5,
            img: Feature1,
            text: "unique and dynamic universe comprised"
        },
        {
            id: 6,
            img: Feature2,
            text: "unique and dynamic universe comprised"
        },
    ]

  return (
    <section className='md:mt-[15rem] mt-[8rem] md:w-[78%] w-full m-[0px] m-auto md:p-0 p-6'>
        <div className='text-center space-y-4'>
            <GradientHeading text={"Press Features"} className='2xl:text-[50px] md:text-[40px] md:pt-[4rem] text-[20px] uppercase font-bold' />
        </div>

        <div className='2xl:mt-10 md:mt-8 mt-6'>
            <AliceCarousel
                mouseTracking
                responsive={responsive}
                // controlsStrategy="alternate"
                disableButtonsControls={true}
                autoPlay
                animationDuration={1500}
            >
                {features.map((_, index)=>(
                    <div key={index} className='2xl:w-[389px] md:w-[300px] 2xl:h-[526px] md:h-[400px] rounded-[8px] border-gradient py-10 backdrop-blur-md flex flex-col items-center'>
                        <Image src={_.img} className='2xl:w-[295px] md:w-[220px] rounded-[8px]' alt='' />
                        <p className='2xl:text-[24px] px-5 text-center md:text-[18px] text-[14px] md:mt-4 mt-2 font-normal text-white'>{_.text}</p>
                        <p className='2xl:text-[28px] px-10 w-full text-right md:text-[20px] text-[14px] md:mt-4 mt-2 font-normal text-[#78D3FF]'>See More</p>
                    </div>
                ))}
            </AliceCarousel>
        </div>
    </section>
  )
}

export default Features