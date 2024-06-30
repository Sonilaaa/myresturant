import React from 'react'
import './Course.css'
import { Link } from 'react-router-dom'
const Course = () => {
  return (
    <>
    <div className='course'>
<div className='text3'>
    <h1><u>Main Courses</u></h1>
    <h2>Grilled Shrimp with Sauce............................<span className='price'>Rs.850</span></h2><br></br>
    <h2>Classic Burger with Fregola.........................<span className='price'>Rs.540</span></h2><br></br>
    <h2>Classic Burger with Fregola.........................<span className='price'>Rs.250</span></h2><br></br>
    <h2>Classic Burger with Fries.............................<span className='price'>Rs.750</span></h2><br></br>
    <h2>Butter Naan with Chicken............................<span className='price'>Rs.550</span></h2><br></br>
    <h2>Lamb Salad with Fregola.............................<span className='price'>Rs.950</span></h2><br></br>
    </div>
    <div className='img3'>
    <img src="https://i.pinimg.com/564x/17/ec/37/17ec37b8f0696b788ab3380ea9950a4b.jpg" alt="" />
    </div>

   

    </div>
    <Link to='/menu'><button className='btnmenu'>More Menu</button></Link>  
    </>
  )
}

export default Course