"use client";

import React, { useState } from "react";
import NewsCard from "./NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

export interface News {
  header: string;
  date: string;
  link: string;
  imageURI: string;
}

const NewsCarousel = ({ initialNews }: { initialNews: News[] }) => {
  return (
    <div className="container px-4 sm:px-4 md:px-10 lg:px-44 mx-auto">
      {/* large screens */}
      <div className="hidden sm:hidden md:block lg:block">
        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          className="mt-10 mySwiper sm:mx-5 md:mx-5 lg:mx-44"
        >
          {initialNews.map((ns, index) => (
            <SwiperSlide key={index}>
              <NewsCard
                header={ns.header}
                date={ns.date}
                link={ns.link}
                imageURI={ns.imageURI}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="block sm:block md:hidden lg:hidden">
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          autoplay={{
            delay: 1400,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          className="p-5 mx-3 mt-10 mySwiper sm:mx-5 md:mx-5 lg:mx-44"
        >
          {initialNews.map((ns, index) => (
            <SwiperSlide key={index}>
              <NewsCard
                header={ns.header}
                date={ns.date}
                link={ns.link}
                imageURI={ns.imageURI}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewsCarousel;
