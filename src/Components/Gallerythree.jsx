import React from 'react'
import './Gallerythree.css'
const Gallerythree = () => {
  return (
    <>
   <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3 ">
        <div className="flex flex-col items-center text-start">
          <div
            className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
            style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img
              src="https://i.pinimg.com/564x/42/68/b8/4268b84e91f8bd607da2e645c64fe8a2.jpg"
              alt=""
              className="z-0 h-full w-full rounded-[10px] object-cover"
            />
             <div className="absolute bottom-4 left-4">
              <h1 className="text-xl font-semibold text-white">LIVE MUSIC</h1>
            
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-start">
          <div
            className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
            style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img src="https://i.pinimg.com/564x/f9/ee/a0/f9eea0dbbeaf53b8ea824794d2c4b543.jpg"
              alt=""
              className="z-0 h-full w-full rounded-[10px] object-cover"
              
            />
             <div className="absolute bottom-4 left-4">
              <h1 className="text-xl font-semibold text-white">CHEERS</h1>
            
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-start">
          <div
            className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
            style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img
              src="https://i.pinimg.com/474x/92/ee/a2/92eea29ca2b93f7e0fef00bfd6eb172e.jpg"
              alt=""
              className="z-0 h-full w-full rounded-[10px] object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <h1 className="text-xl font-semibold text-white">SNOOTHING SONGS</h1>
            
            </div>
          </div>
          </div>
      </div>
    
    </>
  )
}

export default Gallerythree