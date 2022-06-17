import React from 'react'
import '../styles/card.css'
import { Top } from './Top'
import { Bottom } from './Bottom'

function Card() {
  return (
    <div className='card'>
      <>
        <Top/>
        <Bottom/>
      </>
    </div>
  )
}

export  {Card}