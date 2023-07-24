import React, { useEffect, useState } from 'react'
import Crocs from "./crocs.json";
import 'animate.css';
const Third = () => {

  <style>
    {`
  .star {
    width: 100px;
    height: 100px;
    background-color: #f39c12; /* Replace with your desired color */
    clip-path: polygon(
      50% 0%,
      61.8% 38.2%,
      100% 35.4%,
      72.2% 61.8%,
      81.4% 100%,
      50% 76.6%,
      18.6% 100%,
      27.8% 61.8%,
      0% 35.4%,
      38.2% 38.2%
    );
  }
    
  .my_element{
    animation-duration: infinite,

  }
 
  `}
</style>


  return (
    <div className='h-screen '>
        <div className='flex flex-row gap-6 justify-around mt-16'>
          <p className='bg-white text-black border-4 border-black rounded-3xl text-2xl hover:bg-black hover:text-white px-10 py-3  '>
            New arrival
          </p>
          <p className='bg-white text-black border-4 border-black rounded-3xl text-2xl  hover:bg-black hover:text-white px-10 py-3 '>
            Best Sellers
          </p>
          <p className='bg-white text-black border-4 border-black rounded-3xl text-2xl  hover:bg-black hover:text-white px-10 py-3 '>
            Exclusive
          </p>
          <p className='bg-white text-black border-4 border-black rounded-3xl text-2xl  hover:bg-black hover:text-white px-10 py-3 '>
            Men
          </p>
          <p className='bg-white text-black border-4 border-black rounded-3xl text-2xl  hover:bg-black hover:text-white px-10 py-3 '>
            Women
          </p>
          <p className='bg-white text-black border-4 border-black rounded-3xl text-2xl  hover:bg-black hover:text-white px-10 py-3 '>
            kids
          </p>
          <p className='bg-white text-black border-4 border-black rounded-3xl text-2xl  hover:bg-black hover:text-white px-10 py-3 '>
            Top
          </p>
        </div>
<div>
 {/*{
Crocs.crocs.map(post => (
  <div key={post.id}>
    <p>{post.name}</p>
    </div>
))
}
*/}
<div className='flex flex-row justify-between'>
  {Crocs.crocs.map(post=>(
<div key={post.id} className='relative mt-12' >
<svg viewBox="0 0 253 265" fill="" xmlns="http://www.w3.org/2000/svg" className='h-72 w-72  animate__animated animate__rotateIn  animate__slower animate__infinite'>
                                   <path
                                        d="M120.447 4.53197C123.254 0.465966 129.262 0.465961 132.07 4.53196L152.72 34.44C154.932 37.6434 159.014 38.9698 162.687 37.6783L196.973 25.6203C201.634 23.9811 206.495 27.5124 206.376 32.4521L205.503 68.7863C205.41 72.678 207.933 76.1506 211.663 77.2643L246.489 87.6622C251.223 89.0757 253.08 94.7896 250.08 98.7161L228.017 127.598C225.654 130.692 225.654 134.984 228.017 138.077L250.08 166.96C253.08 170.886 251.223 176.6 246.489 178.013L211.663 188.411C207.933 189.525 205.41 192.998 205.503 196.889L206.376 233.224C206.495 238.163 201.634 241.695 196.973 240.055L162.687 227.997C159.014 226.706 154.932 228.032 152.72 231.236L132.07 261.144C129.262 265.21 123.254 265.21 120.447 261.144L99.7962 231.236C97.5844 228.032 93.502 226.706 89.8297 227.997L55.5435 240.055C50.8823 241.695 46.0218 238.163 46.1404 233.224L47.0132 196.889C47.1067 192.998 44.5837 189.525 40.8536 188.411L6.02795 178.013C1.2934 176.6 -0.563144 170.886 2.4363 166.96L24.4992 138.077C26.8622 134.984 26.8622 130.692 24.4992 127.598L2.43631 98.7161C-0.563142 94.7896 1.29339 89.0757 6.02794 87.6622L40.8536 77.2643C44.5837 76.1506 47.1067 72.678 47.0132 68.7863L46.1404 32.4521C46.0218 27.5124 50.8823 23.9811 55.5435 25.6203L89.8297 37.6783C93.502 38.9698 97.5844 37.6434 99.7962 34.44L120.447 4.53197Z" 
                                        stroke="black"
                                        stroke-width="1.56936"
                                        fill={post.color}
                                        
                                   />
                                  
                      </svg>
                      <img src={post.image} className='absolute top-1/4 left-1/4' data-aos="flip-up" data-aos-duration="1000"/>
                      <div className='flex flex-col ml-20 mt-6'>
                      <p className='text-3xl text-black'> {post.name}</p>
                      <p className='text-3xl text-gray-400 ml-14'>${post.price}</p>
                      </div>
                      </div>
                      
             ))}

</div>
<div className='flex justify-center mt-32'>
  <button className='rounded-full bg-black text-white text-2xl font-bold px-12 py-4'>See All</button>
</div>

</div>
        
    </div>
  )
}

export default Third