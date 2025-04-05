// SwiperSlider.jsx
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import { DATA } from "../mock_data/data.ts";
// import './SwiperSlider.css';

const SwiperSlider = ({ swiper }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <div className="swiper-block">
      <div className="wrap">
        <div className="swiper-nav">
          <h2>{swiper.title}</h2>
          <div className="swiper-nav-buttons">
            <button
              ref={prevRef}
              className={`custom-arrow left ${isBeginning ? "disabled" : ""}`}
              disabled={isBeginning}
            >
              &#10094;
            </button>
            <button
              ref={nextRef}
              className={`custom-arrow right ${isEnd ? "disabled" : ""}`}
              disabled={isEnd}
            >
              &#10095;
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          // navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            // pauseOnMouseEnter: true,
          }}
          speed={800}
          pagination={false}
          loop={false}
          slidesPerView={4}
          spaceBetween={24}
          className="custom-swiper"
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            // Обязательно обновляем элементы после инициализации
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {swiper.slides.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={`${process.env.PUBLIC_URL}${src.image}`}
                alt={`Slide ${index}`}
                className="slide-image"
              />
              <div className="slide-title">{src.title}</div>
              <div className="slide-description">{src.description}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSlider;
