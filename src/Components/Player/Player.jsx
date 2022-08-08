import React from 'react'

export default function Player() {
  // const score = 500
  const playerName = 'OD'
  const playerLastname = 'DO'
  const permisDeConduire = true
  let playerAge = 1

  return (
    <b>
      <h1>
        {playerName} {playerLastname}
      </h1>
      {playerAge >= 18 ? <h1> Majeur </h1> : <h1> Mineur </h1>}
      {permisDeConduire === true ? (
        <h1>Peut conduire</h1>
      ) : (
        <h1>Ne peut pas conduire</h1>
      )}
    </b>
  )
}
// return (
//   <b>
//     {playerName} {playerIsMajor ? ' - majeur' : null}
//   </b>
// )
