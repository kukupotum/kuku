import React from 'react'
import './style.css'
import icon from '../../assets/IconBali.png'

export default function Home() {
  return (
    <div className='h-full overflow-y-hidden'>
    <div className='absolute w-full bg-opacity-80 bg-indigo-500 h-full'></div>
    <div className="container-bg lg:h-screen md:h-screen  h-screen  w-full">
        <div className=' font-pacifico w-full h-full flex items-center justify-center flex-col'>
          <img className='z-10' alt='' src={icon} />
            <div className='z-10 text-white lg:text-5xl md:text-3xl text-2xl lg:leading-[84px] '>A Better way to</div>
            <div className='z-10 text-orangeCustom lg:text-5xl md:text-3xl text-2xl pb-7'>Travel to Bali</div>
            <div className='z-10 font-sans text-white mb-[59px]'>Cheapest and  Easier</div>
            <div className='z-10 flex lg:flex-row md:flex-row flex-col lg:space-x-3 md:space-x-3 space-x-0 lg:space-y-0 md:space-y-0 space-y-2'>
              <div className='z-10 border-2 py-3 w-[156px] text-center rounded-md border-orangeCustom text-orangeCustom'>About Us</div>
              <div className='z-10 py-3 w-[156px] text-center rounded-md bg-orangeCustom text-white'>Reservation</div>
            </div>
        </div>
    </div>
    </div>
  )
}
