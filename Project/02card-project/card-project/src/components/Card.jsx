import React from 'react'
import "../App.css"
import {Bookmark} from 'lucide-react'
const Card = () => {
  return (
    <div className='card'>
        <div className="top">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6U-KSnY_r4hsTsVxDuaaM1suHkBJRHcyaf65xF5PJQ&s=10" alt="logo" className='card-img' />
            <button type="submit" className='card-btn'>Save <Bookmark className='bookmark'/></button>
        </div>
        <div className="middle">
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div>
                <h4>Part-time</h4>
                <h4>Senior level</h4>
            </div>
        </div>
        <div className="bottom">
            <div>
            <h3>$120/hr</h3>
            <p>Mumbai,India</p>
            </div>
            <button type="submit" className='card-btn1'>Apply Now</button>
        </div>
    </div>
  )
}

export default Card