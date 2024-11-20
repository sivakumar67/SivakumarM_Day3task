import React from 'react'
import './Profilecard.css'
function Profilecard() {
  return (
    <div className='container'>
        <img src='https://www.shutterstock.com/image-vector/caucasian-plus-size-man-smirking-260nw-2507868283.jpg'
        alt='profile-image' className="profile-image"></img>
        <h2 className='profile-name'>Sivakumar M</h2>
        <h4 className='profile-title'>Full Stack Developer</h4>
        <p className='profile-description'> Proficient in Web technologies like HTML,CSS and Bootstrap.
            Familiar with MERN stack and SQL database.
            Seeking an opportunity to apply my skills in a collaborative environment.
            Eager to grow in full stack development and contribute to impactful projects.
        </p>
        <button className='profile-button'>Contact</button>

    </div>
  )
}

export default Profilecard