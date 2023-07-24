import React from 'react'
import 'animate.css';

import first from "../assets/1.svg";
import second from "../assets/2.svg";
import third from "../assets/3.svg";
import fourth from "../assets/4.svg";
import fifth from "../assets/5.svg";
import sixth from "../assets/6.svg";
import seven from "../assets/7.svg";
const Second = () => {
  
  
  const marqueeRef = React.useRef(null);

  const handleMouseEnter=() =>{
      marqueeRef.current.stop();
  }
  const handleMouseLeave = () =>{
      marqueeRef.current.start();
  }



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
 
  `}
</style>
<div className='flex flex-row bg-black overflow-hidden'>
<marquee className="flex text-white p-10 " ref={marqueeRef}>
    <span className='text-5xl text-green-500 font-bold font-pressstart2p hover:text-white ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>A scrolling text created with HTML Marquee element. </span>
    <span className='text-5xl text-yellow-500 font-bold font-pressstart2p hover:text-white ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>A scrolling text created with HTML Marquee element. </span>
    </marquee>
</div>
<div className='campaign grid grid-cols-2 con'>
<div className='flex justify-center content-center bg-amber-400 border-2 border-black'>
 <div className='mt-48 ml-16'>
 <p className='font-bold font-pressstart2p text-5xl leading-relaxed' data-aos="fade-down" data-aos-duration="3000">Create Your </p> 
 <p className='font-bold font-pressstart2p text-4xl' data-aos="fade-down" data-aos-duration="3000">Unique style</p>
 <p className='text-2xl leading-relaxed font-normal mt-8' data-aos="fade-down" data-aos-duration="3000">We are creating a new campaign (Project Style Your Uniqueness) to enable our customers choose what look, style or theme their crocs will look like</p>
 <button className='bg-amber-400 text-xl text-black border-4 font-bold border-black rounded-full px-12 py-3 mt-12'> Style Crocs </button>
 </div>
</div>
<div className='relative bg-orange-100 border-2 border-black'>

    <div className=" absolute bottom-0" data-aos="fade-down" data-aos-duration="500">
               <div className='flex flex-row -space-x-11'>
                  <img src={second} className='' />
                  <img src={third} className=''/>
                  <img src={fourth} className='' />
                  <img src={fifth} className=''/>
                  <img src={sixth} className=''/>
                  <img src={seven} className=''/>
                  </div>
                  </div>
        </div>
</div>


    </div>
  )
}

export default Second