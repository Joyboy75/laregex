import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'image 1,',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19169015-Ai-Motion-Visual',
  },
  {
    id: 2,
    image: IMG2,
    title: 'image 2,',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19169015-Ai-Motion-Visual',
  },
  {
    id: 3,
    image: IMG3,
    title: 'image 3,',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19169015-Ai-Motion-Visual',
  },
  {
    id: 4,
    image: IMG4,
    title: 'image 4,',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19169015-Ai-Motion-Visual',
  },
  {
    id: 5,
    image: IMG5,
    title: 'image 5,',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19169015-Ai-Motion-Visual',
  },
  {
    id: 6,
    image: IMG6,
    title: 'image 6,',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19169015-Ai-Motion-Visual',
  },
]

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Travaux récents</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__items">
              <div className="portfolio__items-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__items-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
