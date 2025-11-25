import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = (props) => {
  

  return (
    <div className='Card'>
      <div className="top">
        <div className="top-img">
          <img src={props.icon} alt="logo" />
        </div>
        <div className='Save'>
          <h3>Save</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark-icon lucide-bookmark"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" /></svg>
        </div>
      </div>
      <div className="center">
        <div className='center-1'>
          <h3>{props.name}</h3>
          <h4>{props.time}</h4>
        </div>
        <h2 className='center-2'>{props.position}</h2>
        <div className='center-3'>
          <button>{props.tag1}</button>
          <button>{props.tag2}</button>
        </div>

      </div>
      <div className="bottom">
        <div className="btm">
          <h3>{props.pay}</h3>
          <h4>{}</h4>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card
