import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';

export default function SlideHeroSection({ images }: { images: StaticImageData[] }) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                keyboard={true}
                loop={true}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={image}
                            alt={`Nature ${index + 1}`}
                            loading={index === 0 ? "eager" : "lazy"}
                            priority={index === 0 ? true : false}
                            style={{ objectFit: "cover" }}

                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
