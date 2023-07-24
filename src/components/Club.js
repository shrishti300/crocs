import React from 'react'
import img from "../assets/club_10th.svg";
const Club = () => {
    const marqueeRef = React.useRef(null);

    const handleMouseEnter=() =>{
        marqueeRef.current.stop();
    }
    const handleMouseLeave = () =>{
        marqueeRef.current.start();
    }
  return (
    <div className='h-screen'>
<div className='flex flex-row bg-black overflow-hidden'>
<marquee className="flex text-white p-10 " ref={marqueeRef}>
    <span className='text-5xl text-green-500 font-bold font-pressstart2p hover:text-white ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>A scrolling text created with HTML Marquee element. </span>
    <span className='text-5xl text-yellow-500 font-bold font-pressstart2p hover:text-white ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>A scrolling text created with HTML Marquee element. </span>
    </marquee>
</div>
<div className='campaign grid grid-cols-2 con'>
<div className='flex justify-center content-center bg-blue-500 border-2 border-black'>
 <div className='mt-48 ml-16'>
 <p className='font-bold font-pressstart2p text-white text-5xl leading-relaxed' data-aos="fade-down" data-aos-duration="1000">Create Your </p> 
 <p className='font-bold font-pressstart2p text-white text-4xl' data-aos="fade-down" data-aos-duration="1000">Unique style</p>
 <p className='text-2xl leading-relaxed text-white font-normal mt-8' data-aos="fade-down" data-aos-duration="1000">We are creating a new campaign (Project Style Your Uniqueness) to enable our customers choose what look, style or theme their crocs will look like</p>
 <button className='bg-amber-400 text-xl bg-blue-500 text-white border-4 font-bold border-whitw rounded-full px-12 py-3 mt-12'> Style Crocs </button>
 </div>
</div>
<div className='bg-blue-200 border-2 border-black'>

<div className='flex items-stretch p-14 mt-32'>
<img src={img} className=' place-self-center border-8 border-white' />
</div>
                  
                  
        </div>
</div>
    </div>
  )
}

export default Club