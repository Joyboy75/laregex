import React from 'react'
import Chambre from './Chambre'
import Salon from './Salon'
import Cuisine from './Cuisine'

export default function Maison() {
  return (
    <div>
      <ul>
        <Chambre />

        <Salon />

        <Cuisine />
      </ul>
    </div>
  )
}
