import React,{useRef} from 'react'

import Crocs from "./crocs.json";

const Fourth = () => {
 
    <style>
     {`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

    `}
</style>
  return (
    <div className='h-screen bg-slate-900 ref={ref}'>
            <div className='flex justify-center'>
                <p className={`text-red-300 text-5xl font-bold mt-24 font-bold font-pressstart2p`} data-aos="fade-down" data-aos-duration="1000">Crocs SuperStar Collab</p>
            </div>
            <div className='flex flex-col place-items-center'>
            <p className="text-red-300 text-xl mt-8 content-wrap justify-self-center" data-aos="fade-in" data-aos-duration="1000">We make the most confortable shoes in the world, and by partnering with some of your favourite </p>
            <p className="text-red-300 text-xl mt-4 justify-self-center" data-aos="fade-in" data-aos-duration="1000">celebrities, We bring thier designs and style to you in incredable confort.</p>
            </div>

<div className='flex flex-row mt-32 gap-8'>
{Crocs.collab.map(post=>(
            <span key={post.id}>
                <img src={post.img}/>
            </span>
        ))}
    
</div>
    </div>
  )
}

export default Fourth