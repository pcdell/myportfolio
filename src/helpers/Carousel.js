import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProjectList } from "./ProjectList";
import '../styles/Carousel.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation } from 'swiper/modules';

const projects = [];
for (let i = 1; i <= ProjectList.length; i++) {
  projects.push({
    title: ProjectList[i - 1].name,
    img: ProjectList[i - 1].image,
  });
}

function Slider (){

    return (
      <Swiper
       spaceBetween={30}
       breakpoints={{
        // when window width is >= 320px
        700: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        1000: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 1700px
        1700: {
          slidesPerView: 3,
          spaceBetween: 50
        }
      }}
       navigation={true}
       pagination={{clickable: true}}
       modules={[Navigation]}
       className="mySwiper">
   {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <img src={project.img} alt={project.title} className="slider-image"/>
              <div className="slide-text">
                <p>{project.title}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    );
  };
  
  export default Slider;