import React from 'react'
import './Galleryone.css'
const Galleryone = () => {
  return (
   <>
   
      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
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
              src="https://i.pinimg.com/564x/8e/5d/2c/8e5d2c6492bb3aec5eddca026fe22582.jpg"
              alt=""
              className="z-0 h-full w-full rounded-[10px] object-cover"
            />
             <div className="absolute bottom-4 left-4">
              <h1 className="text-xl font-semibold text-white">OUR CHEF MAKNG FOOD</h1>
            
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
              src="https://i.pinimg.com/564x/a8/0a/ec/a80aece744e0ae6fb966e1f135799972.jpg"
              alt=""
              className="z-0 h-full w-full rounded-[10px] object-cover"
            />
             <div className="absolute bottom-4 left-4">
              <h1 className="text-xl font-semibold text-white">MOMOS</h1>
            
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
              src="https://i.pinimg.com/564x/77/e8/7c/77e87c82acf01aff5fad78fa95b89b8d.jpg"
              alt=""
              className="z-0 h-full w-full rounded-[10px] object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <h1 className="text-xl font-semibold text-white">SPECIAL COURSE OUT HERE</h1>
            
            </div>
          </div>
          </div>
      </div>
    
   </>
  )
}

export default Galleryone