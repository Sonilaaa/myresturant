import React from 'react'
import './Events.css'
import { Link } from 'react-router-dom'
const Events = () => {
  return (
    <>
    <div className='events'>
        <h1><u>Events</u></h1>
        <p>Fun Facts About Us Is That We Do diiferent Music Events Every Months.  </p><br></br>
        <h2>Few Snaps....</h2>
                  
        </div>
        <div className='snaps'>
<img src="https://i.pinimg.com/originals/11/52/74/11527455c96d429bf188ac5db183d4c6.jpg"alt="" width="350px" height="300px"/>
<img src="https://i.scdn.co/image/ab6761610000e5eb3ec1defc6a03a700abdd03ff"alt="" width="350px" height="300px"/>
<img src="https://i.pinimg.com/736x/c6/3a/f1/c63af181975b8d9350c8a475f4cc3584.jpg"alt="" width="350px" height="300px"/>
<Link to='/events'><button className='eventbtn'>View More Events..</button></Link> 
          </div>

    </>
  )
}

export default Events