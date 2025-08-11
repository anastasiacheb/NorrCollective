'use client';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider({ Images }: { Images: string[] }) {
  const pagination = {
    clickable: true,
    renderBullet: function () {
      return '<span class="!bg-base-0 !w-2 !h-2 inline-block mx-1 border !rounded-none !border-base-900 swiper-pagination-bullet !opacity-100"></span>';
    },
  };

  return (
    <Swiper
      className="w-full aspect-[375/420] md:aspect-[768/670] lg:aspect-auto border-l border-b border-base-900"
      modules={[Navigation, Pagination]}
      navigation={{
        prevEl: '.swiper-button-prev1',
        nextEl: '.swiper-button-next1',
      }}
      pagination={pagination}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}>
      {Images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            loading="eager"
            src={`/images/${image}`}
            alt="chair"
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
      <button aria-label="previous slide" className="swiper-button-prev1 absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <img src="/icons/left_arrow.svg" alt="left arrow" className="size-8" />
      </button>
      <button aria-label="next slide" className="swiper-button-next1 absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <img src="/icons/right_arrow.svg" alt="right arrow" className="size-8" />
      </button>
    </Swiper>
  );
}
