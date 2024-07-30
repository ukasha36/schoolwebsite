import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const testimonials = [
  {
    name: "Evanna Lynch",
    review: "Remarkably smooth working with them, and I absolutely adore every design they created for me.",
  },
  {
    name: "Cidalia",
    review: "Working with them was incredibly smooth, and I absolutely adore every design they created for me.",
  },
  {
    name: "Jason Knight",
    review: "Working with Chris at American Web Express was worthwhile. They were eager to please and ultimately delivered as promised.",
  },
  {
    name: "Robert Brown",
    review: "American Web Express are excellent. Quick and efficient with nothing being too much trouble. Would recommend to anyone looking for SEO, web dev, Gfx , ppc.",
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="header-container">
        <h2 className="header-text" data-aos="zoom-in">Testimonials</h2>
      </div>
      <Swiper
        className="swiper-container"
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        direction="horizontal"
        loop={true}
    autoplay={{
      delay: 2200,
      disableOnInteraction: false,
    }}
        pagination={{
          clickable: true,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <h3 className="testimonial-name">{testimonial.name}</h3>
              </div>
              <div className="testimonial-body">
                <p className="testimonial-review">{testimonial.review}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;
