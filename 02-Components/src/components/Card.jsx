import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.img} />
        <h1>{props.name}</h1>
        <p> {props.p} </p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
