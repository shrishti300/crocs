import React from 'react'
import wave from '../assets/wave.svg'
const Eleventh = () => {
    <style>
    {`
 @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

   `}
</style>
  return (
    <div class="relative overflow-hidden">
    <img src={wave} alt="Avatar" class="object-cover w-full h-screen" />
    <div class="absolute w-full  top-4 inset-x-0 text-white text-xs text-center leading-4">
        <p className=' font-bold mt-4 font-bold font-pressstart2p text-5xl' data-aos="fade-down" data-aos-duration="1000"> Download The Crocs App </p>
        <button className='bg-white text-violet-600 font-bold text-2xl rounded-full px-8 py-4 mt-14 '> App Store</button>
        <button className='bg-white text-violet-600 font-bold text-2xl rounded-full px-8 py-4 mt-14 ml-8 '> Play Store</button>
        
    <div className='flex justify-center relative'>
        <img src="https://crocs-josh.web.app/img/142.fa202ee9.svg" className='bottom-0 h-128 mt-32' data-aos="fade-up" data-aos-duration="1000"/>
    </div>
    <img src="https://crocs-josh.web.app/img/sticker_app_1.0262640a.svg" className='absolute top-48 left-48' data-aos="fade-right" data-aos-duration="1000"/>
        <img src="https://crocs-josh.web.app/img/sticker_app_3.050d35b6.svg" className='absolute right-48 top-48' data-aos="fade-left" data-aos-duration="1000"/>
        <img src="https://crocs-josh.web.app/img/sticker_app_2.e17c7098.svg" className='absolute bottom-1/2 left-64' data-aos="fade-right" data-aos-duration="1000"/>
        <img src="https://crocs-josh.web.app/img/sticker_app_4.c2630d73.svg" className='absolute bottom-1/2 right-64' data-aos="fade-left" data-aos-duration="1000"/>
    </div>
  </div>
  )
}

export default Eleventh