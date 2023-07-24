import React from 'react'
import 'animate.css';
const Nineth= () => {


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
<div className='flex justify-center content-center bg-orange-300'>
 <div className='mt-48 ml-16'>
 <p className='font-bold font-pressstart2p text-5xl text-teal-950 leading-relaxed' data-aos="fade-down" data-aos-duration="1000"> Crocs Back To School </p> 
 <p className='text-2xl leading-relaxed text-teal-950 font-normal mt-8' data-aos="fade-down" data-aos-duration="1000">Get the best Discount on our back to school deals</p>
 <button className='bg-orange-300 text-xl text-teal-950 border-4 font-bold border-teal-950 rounded-full px-12 py-3 mt-12'> Style Crocs </button>
 </div>
</div>
<div className='flex flex-col justify-center relative bg-orange-300'>
<img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1663859493/b2s_jlezwr.svg" alt="" className='relative' />
<img src='https://crocs-josh.web.app/img/sticker_b2s_1.dfcedd44.svg' className='absolute w-80 h-80 top-0 right-0' data-aos="flip-down" data-aos-duration="1000"/>
<img src='https://crocs-josh.web.app/img/sticker_b2s_2.b91f8218.svg' className='absolute bottom-0 w-80 h-80' data-aos="flip-down" data-aos-duration="1000"/>

   

        </div>
</div>


    </div>
  )
}

export default Nineth