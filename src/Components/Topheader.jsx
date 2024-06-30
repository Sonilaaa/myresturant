import React from 'react'

import './Topheader.css'
import { Link } from 'react-router-dom'

const Topheader = () => {
  return (
   <>
   <header className='topheader'>
   <div className='overlay'>
    <h1>"Classic Cuisine Cafe........" </h1>
    <p>For The Best Food In Town</p>
<p className='p1'>With Delightful Experience.......</p>

<Link to='/contact'><button className='reservation'>Reservation</button></Link>
   </div>
   
   </header>
   
   <br></br>
   <hr>
   </hr>
   <hr></hr>
   <hr></hr>
   </>
  )
}

export default Topheader