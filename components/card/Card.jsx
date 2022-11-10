import React from 'react'
import card from './Card.module.css'
const Card = () => {
  return (
      <div className={card.container}>
      <div className={`${card.card} ${card.overlay}`}>
              <div className={card.img}></div>
      </div>
      
      <div className={card.text}>
          <h1 className={card.heading}>Equilibrium #3429</h1>
          <p className={card.paragraph}>Our Equilibrium collection promotes balance and calm.</p>
      </div>
    </div>
  )
}

export default Card