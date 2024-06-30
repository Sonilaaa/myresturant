import React from 'react'
import './Galleryfour.css'
const Galleryfour = () => {
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
              src="https://i.pinimg.com/564x/9a/87/b3/9a87b30e64d3b1f306da2a3294d6eb2e.jpg"
              alt=""
              className="z-0 h-full w-full rounded-[10px] object-cover"
            />
             <div className="absolute bottom-4 left-4">
              <h1 className="text-xl font-semibold text-white">BUTTER NAAN WITH PANEER</h1>
            
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
            <img src="https://i.pinimg.com/564x/b3/f1/ad/b3f1ada878dcbf073760058dd30c607c.jpg"
              alt=""
              className="z-0 h-full w-full rounded-[10px] object-cover"
              
            />
             <div className="absolute bottom-4 left-4">
              <h1 className="text-xl font-semibold text-white">SPAGHETTI</h1>
            
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
              src="https://i.pinimg.com/564x/57/78/f4/5778f4a3c1554a60a9673c14be613c70.jpg"
              alt=""
              className="z-0 h-full w-full rounded-[10px] object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <h1 className="text-xl font-semibold text-white">HALLOUMI BURGERS</h1>
            
            </div>
          </div>
          </div>
      </div>
   </>
  )
}

export default Galleryfour