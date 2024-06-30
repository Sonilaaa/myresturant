import React from 'react'
import './Words.css'
import { Link } from 'react-router-dom'
const Words = () => {
  return (
    <>
    <div className='words'>
        <h1><u>A Few Word About Our Resturants</u></h1>
        <p>Classic Cuisine Cafe was created by three close friends from Sonila, Shruti, and shreya, decided to bring the authentic cuisines to the town.</p>

        <p>The authentic taste comes from family recipes and from fresh, simple and tasteful ingredients straight from home. In every taco from our menu there is a bit of true Nepali culture and flavor.</p>
        <Link to='/about'><button className='read'>Read More</button>    </Link>    </div>
        <hr>
        </hr>
        <hr></hr>
    </>
  )
}

export default Words