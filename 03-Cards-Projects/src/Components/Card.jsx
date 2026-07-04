import React from 'react'
import {RiBookmarkLine} from '@remixicon/react'

const Card = (props) => {
  return (
    <div className="cards">
        <div className="top">
          <img src={props.logo} alt="Amazon Logo" />
          <button>Save <RiBookmarkLine size={13}/></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.posted}</span></h3>
          <h2>{props.title}</h2>
          <div className="tag">
            <h4>{props.type}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.salary}</h3>
            <h4>{props.location}</h4>
          </div>
          <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card
