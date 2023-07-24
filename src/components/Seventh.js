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
<div className='flex justify-center content-center bg-cyan-100 border-2 border-black'>
 <div className='mt-48 ml-16'>
 <p className='font-bold font-pressstart2p text-5xl text-teal-950 leading-relaxed' data-aos="fade-down" data-aos-duration="1000"> Sza Unique Crocs </p> 
 <p className='text-2xl leading-relaxed text-teal-950 font-normal mt-8' data-aos="fade-down" data-aos-duration="1000">The SZA X Crocs Classic Clog puts her personality up top, with colorful Jibbitz charms that showcase the world of SZA, totems that keep her grounded, calm, and collective.</p>
 <button className='bg-cyan-100 text-xl text-teal-950 border-4 font-bold border-teal-950 rounded-full px-12 py-3 mt-12'> Style Crocs </button>
 </div>
</div>
<div className='flex flex-col justify-center relative bg-lime-200 border-2 border-black '>
               <img src='https://res.cloudinary.com/dszdgdeoh/image/upload/v1663678703/sza_xvpjn1.svg' className='h-[32rem] -mt-32'/> 
               <div className='absolute bottom-0' data-aos="fade-down" data-aos-duration="1000">
               <div className='flex flex-row space-x-5 '>
                <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472946/Group_625_drpg4v.svg" />
                <img src='https://res.cloudinary.com/dszdgdeoh/image/upload/v1667478770/A_mjc0j9.png' />
                <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472946/Group_626_cu3czr.svg"/>
                <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1667478770/A_mjc0j9.png"/>
                <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472946/Group_627_it0okr.svg"/>
                <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1667478770/A_mjc0j9.png"/>
                <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1665585719/flower_vpuwfr.svg" className='-rotate-180'/>
               </div>
         </div>
        </div>
</div>


    </div>
  )
}

export default Fifth