import React from 'react'
import Logo from '../../public/assets/img/nexus_logo.png'
import Image from 'next/image'

const Loading = () => {
  return (
    <section className="h-[100vh] w-full flex justify-center items-center flex-col">
        <Image src={Logo} className='md:w-[86px] w-[60px]  md:h-[86px] h-[60px]' alt='' />
    </section>
  )
}

export default Loading;