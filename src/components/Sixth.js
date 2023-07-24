import React from 'react'
import 'animate.css';

const Sixth = () => {


  return (
    <div className='h-screen'>
      <style>
     {`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    `
  }
  {`
      @keyframes dropAndStay {
        0% {
          transform: translateY(-100%);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }

  .con{
    height:47rem
  }
  
 
  `}
</style>

<div className='campaign grid grid-cols-2 h-screen'>
<div className='flex flex-col justify-center relative bg-pink-200 border-2 border-black'>
<img src='https://res.cloudinary.com/dszdgdeoh/image/upload/v1663678693/saweetie_njlvjc.svg' className='h-[32rem] -mt-32'/> 
               <div className='absolute bottom-0' data-aos="fade-down" data-aos-duration="1000">
               <div className='flex flex-row -space-x-5 '>
                <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1667315245/Stickers_V1_upkcvo.svg" />
                <img src='https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472718/Group_620_pwc2eo.svg' />
                <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472718/Group_621_k6xcm7.svg"/>
                <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472718/Group_622_v0uhov.svg"/>
                <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472718/Group_623_dp7sg8.svg"/>
                <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472718/Group_624_swqngl.svg"/>
                <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1667315239/image_40_ajgryd.svg" className='rotate-45'/>
               </div>
               </div>
</div>
<div className='flex flex-col justify-center content-center bg-pink-400 border-2 border-black '>
              
               <div className='ml-8'>
 <p className='font-bold font-pressstart2p text-5xl text-white leading-relaxed' data-aos="fade-down" data-aos-duration="1000">Saweetie Sweet </p> 
 <p className='font-bold font-pressstart2p text-white text-4xl' data-aos="fade-down" data-aos-duration="3000">Crocs</p>
 <p className='text-2xl leading-relaxed text-white font-normal mt-8' data-aos="fade-down" data-aos-duration="3000">Make hearts melt but keep your Jibbitz looking cold with an icy drip that only Saweetie can provide. Our all-new Saweetie X Crocs Jibbitz charms are ready to be paired with the irresistible Classic Clogs</p>
 <button className='bg-violet-400 text-xl text-white border-4 font-bold border-white rounded-full px-12 py-3 mt-12'> Style Crocs </button>
 </div>
        </div>
</div>


    </div>
  )
}

export default Sixth