import React from 'react'
import 'animate.css';
const Fifth = () => {


  return (
    <div className=''>
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
<div className='flex justify-center content-center bg-violet-400 border-2 border-black'>
 <div className='mt-48 ml-16'>
 <p className='font-bold font-pressstart2p text-5xl text-white leading-relaxed' data-aos="fade-down" data-aos-duration="1000">Sale Bembury </p> 
 <p className='font-bold font-pressstart2p text-white text-4xl a' data-aos="fade-down" data-aos-duration="1000">Crocs</p>
 <p className='text-2xl leading-relaxed text-white font-normal mt-8 ' data-aos="fade-down" data-aos-duration="1000">Jump into the artistic world of Salehe where he brings his unique designs to crocs.</p>
 <button className='bg-pink-400 text-xl text-white border-4 font-bold border-white rounded-full px-12 py-3 mt-12'> Style Crocs </button>
 </div>
</div>
<div className='flex flex-col justify-center relative bg-purple-200 border-2 border-black '>
               <img src='https://res.cloudinary.com/dszdgdeoh/image/upload/v1663678761/salehe_xintyl.svg' className='h-[32rem] -mt-32'/> 
               <div className='absolute bottom-0' data-aos="fade-down" data-aos-duration="1000">
               <div className='flex flex-row -space-x-5 '>
                <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1667316205/Frame_zilwad.svg" />
                <img src='https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472311/S_xpx4fk.svg' />
                <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472350/A_w7j5bo.svg"/>
                <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472336/L_cbn2zd.svg"/>
                <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472327/E_yarwx6.svg"/>
                <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472336/H_cg0hjs.svg"/>
                <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472327/E__ttmqob.svg"/>
               </div>
         </div>
        </div>
</div>


    </div>
  )
}

export default Fifth