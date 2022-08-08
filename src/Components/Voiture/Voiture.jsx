import React from 'react'

export default function Voiture() {
  let marque = 'Dodge',
    modele = 'Corvette',
    year = 2019

  return (
    <div>
      <h2> Specs de voiture</h2>

      <ul>
        <li>{marque}</li>
        <li>{modele}</li>
        <li>{year}</li>
      </ul>
    </div>
  )
}
