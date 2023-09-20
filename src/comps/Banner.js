import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Banner = (props) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      
      modules={[Autoplay, Pagination, Navigation]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >{
      props.dbinfo.bannerdb.map((v,i)=>{
        
        return(
        <SwiperSlide>
          <div className='position-relative'>
            <a href={v.link}>
              <img className='position-relative banner-img' src={`${process.env.PUBLIC_URL}${v.img}`} alt="banner-1" />
              <img className='position-relative banner-mo-img' src={`${process.env.PUBLIC_URL}${v.moimg}`} alt="banner-1" />
            </a>
            <div className='banner-text position-absolute'>
              <h3 className={v.titlestyle}>{v.title}</h3>
              <p className={v.textstyle}>{v.text}</p>
            </div>
          </div>          
        </SwiperSlide>
        )
        
      })      
    }     
      
    </Swiper>
  );
};


export default Banner;