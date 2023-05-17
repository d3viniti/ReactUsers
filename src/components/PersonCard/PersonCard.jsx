import React from 'react'
import './PersonCard.css'

function PersonCard({person}) {
  return (
    <div className="person-card">
        <img src={person.imageUrl} className="person-img"></img>
        <h3>{person.username}</h3>
        <p>{person.country}</p>
        <p>{person.job}</p>
    </div>
  )
}

export default PersonCard