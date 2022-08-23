import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem eius sint eligendi labore possimus cumque, quo voluptas id officiis non ipsam, totam ipsum corrupti magnam, consequatur dignissimos odio laborum.',
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem eius sint eligendi labore possimus cumque, quo voluptas id officiis non ipsam, totam ipsum corrupti magnam, consequatur dignissimos odio laborum.',
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem eius sint eligendi labore possimus cumque, quo voluptas id officiis non ipsam, totam ipsum corrupti magnam, consequatur dignissimos odio laborum.',
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem eius sint eligendi labore possimus cumque, quo voluptas id officiis non ipsam, totam ipsum corrupti magnam, consequatur dignissimos odio laborum.',
  },
]

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Retours clients</h5>
      <h2>Témoignages</h2>

      <Swiper
        className="container testimonials__container"
        spaceBetween={40}
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review, index }) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5> {name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
