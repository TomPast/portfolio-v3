import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './IgSwiper.scss'

import Draw1 from '../../assets/img/draw-1.jpg'
import Draw2 from '../../assets/img/draw-2.jpg'
import Draw3 from '../../assets/img/draw-3.jpg'
import Draw4 from '../../assets/img/draw-4.jpg'
import Draw5 from '../../assets/img/draw-5.jpg'
import Draw6 from '../../assets/img/draw-6.jpg'
import Draw7 from '../../assets/img/draw-7.jpg'
import Draw8 from '../../assets/img/draw-8.jpg'
import Draw9 from '../../assets/img/draw-9.jpg'
import Draw10 from '../../assets/img/draw-10.jpg'

import { Autoplay, Navigation } from 'swiper/modules'

import type { Swiper as SwiperType } from 'swiper/types'
function IgSwiper({ className }: { className: string }) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper: SwiperType) => console.log(swiper)}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      breakpoints={{
        800: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
      className={`ig-swiper ${className}`}
    >
      <SwiperSlide>
        <div className="draw">
          <img src={Draw1} alt="Draw 1" />
          <p className="caption">Ronaldo, 2024</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="draw">
          <img src={Draw2} alt="Draw 2" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="draw">
          <img src={Draw3} alt="Draw 3" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="draw">
          <img src={Draw4} alt="Draw 4" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="draw">
          <img src={Draw5} alt="Draw 5" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="draw">
          <img src={Draw6} alt="Draw 6" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="draw">
          <img src={Draw7} alt="Draw 7" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="draw">
          <img src={Draw8} alt="Draw 8" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="draw">
          <img src={Draw9} alt="Draw 9" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="draw">
          <img src={Draw10} alt="Draw 10" />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default IgSwiper
