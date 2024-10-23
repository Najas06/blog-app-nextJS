import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black text-white py-5 items-center'>
        <Image src={assets.logo_light} alt='logo white' width={120} />
        <p className='text-sm '>© 2024. All rights reserved</p>
        <div className='flex '>
            <Image src={assets.facebook_icon} alt='facebook icon' width={40}/>
            <Image src={assets.twitter_icon} alt='facebook icon' width={40}/>
            <Image src={assets.googleplus_icon} alt='facebook icon' width={40}/>
        </div>
    </div>
  )
}

export default Footer