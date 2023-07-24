
import React from 'react'

import Rv1 from "../assets/rv1.svg"
const Tweleveth = () => {
  return (
    <div className='h-screen'>

<div className='campaign grid grid-cols-2 h-screen'>
<div className='flex justify-center content-center bg-lime-500 border-2 border-black'>
 <div className='mt-48 ml-16'>
 <p className='font-bold font-pressstart2p text-white text-5xl leading-relaxed' data-aos="fade-down" data-aos-duration="1000">Come Say Hi! </p> 

 <p className='text-2xl leading-relaxed text-white font-normal mt-8' data-aos="fade-down" data-aos-duration="1000">See if theres a crocs store in your area. Come Shop We cant wait to see you.</p>
 <button className='bg-amber-400 text-xl bg-lime-500 text-white border-4 font-bold border-whitw rounded-full px-12 py-3 mt-12'> See Store Available </button>
 </div>
</div>
<div className='bg-lime-200 border-2 border-black'>

<div className='flex justify-center items-stretch p-14 mt-32'>
        <img src={Rv1} className='place-self-center border-2 border-white p-4 bg-white'/>
</div>
                  
                  
        </div>
</div>
    </div>
  )
}

export default Tweleveth