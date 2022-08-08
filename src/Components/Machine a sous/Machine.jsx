import React from 'react'

export default function Machine({s1, s2, s3}) {
    const gagnant = s1 === s2 && s2 === s3;
  return (
    
    <div>
        <p> {s1} {s2} {s3}</p>

        <p> { gagnant ? "gagnant! " : "perdant"}</p>
    </div>
  )
}
