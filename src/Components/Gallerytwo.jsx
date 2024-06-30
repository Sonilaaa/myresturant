import React from 'react'
import './Gallerytwo.css'
const Gallerytwo = () => {
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
              src="https://i.pinimg.com/564x/ba/a2/29/baa2293e5c722c455ff30412ac6caa53.jpg"
              alt=""
              className="z-0 h-full w-full rounded-[10px] object-cover"
            />
             <div className="absolute bottom-4 left-4">
              <h1 className="text-xl font-semibold text-white">GATHERING</h1>
            
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
            <img src="https://i.pinimg.com/564x/fc/43/e7/fc43e75c68d326e08803425185f29ff6.jpg"
              alt=""
              className="z-0 h-full w-full rounded-[10px] object-cover"
              
            />
             <div className="absolute bottom-4 left-4">
              <h1 className="text-xl font-semibold text-white">NIGHT VIBES</h1>
            
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
              src="https://i.pinimg.com/564x/0c/be/38/0cbe383313ddcaac0170677577b0ab8e.jpg"
              alt=""
              className="z-0 h-full w-full rounded-[10px] object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <h1 className="text-xl font-semibold text-white">F.R.I.E.N.D.S</h1>
            
            </div>
          </div>
          </div>
      </div>
    
    
    </>
  )
}

export default Gallerytwo