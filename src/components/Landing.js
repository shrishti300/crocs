import React from 'react'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Fifth from "./Fifth"
import Sixth from './Sixth'
import Seventh from './Seventh'
import Eighth from './Eighth'
import Nineth from './nineth'
import Mouse from '../assets/mouse.png';
import Eleventh from './Eleventh'
import Club from './Club'
import Tweleveth from './Tweleveth'
import Thirteen from './Thirteen'

const Landing = () => {
 
  return (
    <div className='overflow-hidden'>
<style>
     {`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

    `}

</style>
        <div className='relative cusor'>
          <div className='relative overflow-hidden'>
               <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1663677405/WaterLand_rvdn6l.svg" alt="" className="" />
               <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1663677392/SurfaceofWater_xndikm.svg" alt="" className='absolute inset-x-0 bottom-0  -z-3 ' />
          </div>
          <header className='absolute top-0 flex flex-row container-wrap'>
               
          <svg  viewBox="0 0 124 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-8 ml-16 mt-8'>
                    <path
                         d="M12.7714 6.4783C14.5297 6.4783 16.1955 7.40369 17.121 8.69941C17.1672 8.74563 17.1673 8.74563 17.2136 8.79184C17.2598 8.83821 17.3061 8.88443 17.3061 8.93079C17.9076 9.71738 18.8794 10.1801 19.9437 10.1801C21.7946 10.1801 23.3216 8.65304 23.3216 6.80212C23.3216 5.92295 22.9978 5.13636 22.4424 4.5348C20.1287 1.6659 17.3524 0 12.725 0C5.46015 0 0 5.04378 0 12.1235C0 19.296 5.46015 24.3396 12.7714 24.3396C17.445 24.3396 20.1751 22.7201 22.4886 20.1288C22.9978 19.5272 23.3216 18.7868 23.3216 17.954C23.3216 16.1031 21.8408 14.6224 19.9899 14.6224C18.972 14.6224 18.0928 15.085 17.4912 15.7791C16.3807 16.8897 15.1313 17.954 12.8176 17.954C9.48596 17.954 7.58882 15.5477 7.58882 12.1235C7.54246 8.83821 9.39338 6.4783 12.7714 6.4783Z"
                         fill="#2B3451"
                    />
                    <path
                         d="M44.2863 1.52736C43.1294 0.925786 42.3428 0.786986 40.6307 0.925787C37.5766 1.20339 35.2167 3.33206 34.8003 3.84105V3.97985C34.8003 3.93363 34.8003 3.88726 34.8003 3.84105C34.6615 1.89754 33.042 0.324219 31.0521 0.324219C28.9699 0.324219 27.304 1.99012 27.2578 4.02606V20.5456C27.304 22.5817 28.9699 24.2012 31.0521 24.2012C33.1344 24.2012 34.8003 22.5353 34.8465 20.4993V16.0108C34.8465 9.9028 38.4096 8.32948 40.3993 8.28326C40.9083 8.28326 42.2502 8.79224 43.3145 8.60708C45.3968 8.23689 46.7388 6.24717 46.3686 4.21123C46.0909 3.00809 45.3043 2.03634 44.2863 1.52736Z"
                         fill="#2B3451"
                    />
                    <path
                         d="M60.8504 18.139C64.1356 18.139 66.0791 15.7329 66.1254 12.2625C66.1254 8.74563 64.1356 6.38572 60.8504 6.38572C57.5649 6.38572 55.529 8.74563 55.529 12.2625C55.529 15.6865 57.5649 18.139 60.8504 18.139ZM60.8504 0C68.0689 0 73.668 5.09 73.668 12.2161C73.668 19.296 68.0689 24.3396 60.8504 24.3396C53.6317 24.3396 47.9863 19.296 47.9863 12.2161C47.9863 5.09 53.6317 0 60.8504 0Z"
                         fill="#2B3451"
                    />
                    <path
                         d="M90.3299 6.4783C92.0884 6.4783 93.7541 7.40369 94.6797 8.69941C94.7259 8.74563 94.7259 8.74563 94.7721 8.79184C94.8185 8.83821 94.8647 8.88443 94.8647 8.93079C95.4662 9.71738 96.438 10.1801 97.5022 10.1801C99.3531 10.1801 100.88 8.65304 100.88 6.80212C100.88 5.92295 100.556 5.13636 100.001 4.5348C97.6873 1.6659 94.9109 0 90.3299 0C83.065 0 77.5586 5.04378 77.5586 12.1235C77.5586 19.296 83.0188 24.3396 90.3299 24.3396C95.0035 24.3396 97.7336 22.7201 100.047 20.1288C100.556 19.5272 100.88 18.7868 100.88 17.954C100.88 16.1031 99.3995 14.6224 97.5486 14.6224C96.5306 14.6224 95.6513 15.085 95.0498 15.7791C93.9393 16.8897 92.6898 17.954 90.3299 17.954C86.9982 17.954 85.1011 15.5477 85.1011 12.1235C85.1473 8.83821 86.9982 6.4783 90.3299 6.4783Z"
                         fill="#2B3451"
                    />
                    <path
                         d="M116.287 9.25461C119.664 10.0413 123.922 11.6145 123.922 16.6121C123.922 20.8691 121.7 24.386 114.343 24.386C109.855 24.386 106.939 22.9978 104.903 21.1931C104.857 21.1469 104.811 21.1005 104.764 21.0543C104.672 21.0079 104.626 20.9155 104.579 20.8691C104.533 20.8229 104.487 20.7303 104.441 20.6841C104.348 20.5915 104.302 20.4989 104.255 20.4065C104.255 20.4065 104.209 20.3601 104.209 20.3139C103.608 19.2034 103.746 17.8152 104.672 16.8897C105.783 15.7329 107.633 15.6865 108.79 16.7509L108.744 16.7047C110.225 17.8614 111.983 18.5556 113.88 18.5556C116.287 18.5556 117.073 18.0928 117.073 17.1211C117.073 15.8253 115.592 15.8253 111.798 14.8537C108.605 14.0208 105.042 12.2625 105.042 7.40369C105.042 2.12852 109.068 0 114.065 0C117.906 0 120.636 1.24935 122.533 3.19286C123.135 3.70184 123.505 4.48858 123.505 5.32138C123.505 6.94092 122.209 8.23664 120.59 8.23664C119.803 8.23664 119.109 7.95904 118.6 7.45006C117.49 6.52452 115.87 5.69157 114.112 5.69157C112.446 5.69157 111.613 6.15433 111.613 7.07987C111.613 8.37544 113.094 8.56061 116.287 9.25461Z"
                         fill="#2B3451"
                    />
               </svg>



               <ul className='flex flex-row gap-12 mt-8 ml-56'>
                    <li className='text-xl'>Men</li>
                    <li className='text-xl'>Women</li>
                    <li className='text-xl'>Kids</li>
                    <li className='text-xl'>Crocs at work</li>
                    <li className='text-xl'>Sales</li>
               </ul>
              
               <div className='mt-8 ml-72'>
                    <button className='bg-blue-600 rounded-3xl text-white font-bold py-3 px-7  '>Sign Up</button>
               </div>
     
          </header>
  
          <div className="absolute flex flex-col inset-y-1/4 mt-16  inset-x-1/5 ml-32">
               <h1>
                    <span className=' text-6xl text-yellow-500 font-bold font-pressstart2p'>Style</span>
                    <span className=' text-6xl text-yellow-500 font-bold font-pressstart2p pl-4'>Your</span>
                    <span className=' text-6xl text-yellow-500 font-bold font-pressstart2p pl-4'>Uniqueness</span>
               </h1>
               <div className="inset-x-1/5 flex mt-24  justify-center">
                    <button className='bg-yellow-500 text-2xl text-black font-bold rounded-3xl py-4 px-12 border-2 border-black'
                    >Start Shopping</button>
               </div>
          </div>
     </div>
    <Second />
    <Third/>
    <Fourth/>
    <Fifth />
<Sixth/>
<Seventh/>
<Eighth />
<Nineth/>
<Club/>
<Eleventh/>
<Tweleveth/>
<Thirteen/>
    </div>
  )
}

export default Landing