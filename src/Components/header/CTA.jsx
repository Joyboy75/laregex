import React from 'react'
import CV from '../../assets/CV.pdf'

export const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Télécharger mon CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Echangeons !
      </a>
    </div>
  )
}

export default CTA
