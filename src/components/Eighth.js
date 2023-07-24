import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Reviews from "./reviews.json";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
const Fourth = () => {
    <style>
     {`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

    `}
</style>
  return (
    <div className='h-screen bg-white'>
            <div className='flex justify-center'>
                <p className='text-black text-5xl font-bold mt-24 font-bold font-pressstart2p'data-aos="fade-down" data-aos-duration="1000">Show Us Your Love</p>
            </div>
            

<div className='flex flex-row mt-32 gap-8'>
{Reviews.collab.map(post=>(
            <div key={post.id} className='flex flex-row gap-8 border-2 border-grap-700 p-4  '>
               <div>
                <img src={post.img}/>
                <div className='flex flex-col place-items-center p-2'>
                    <p className='text-black font-semibold' data-aos="fade-down" data-aos-duration="1000">
                        @{post.tag}
                    </p>
                    <p className='text-xl font-semibold' data-aos="fade-down" data-aos-duration="1000">
                        {post.name}
                    </p>
                </div>
                </div>
            </div>
        ))}
    
</div>
    </div>
  )
}

export default Fourth