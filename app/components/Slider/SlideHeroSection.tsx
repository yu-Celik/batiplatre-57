'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';

export default function SlideHeroSection({ images, styleSlide }: { images: { image: StaticImageData, alt: string }[], styleSlide: React.CSSProperties }) {
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
                style={{
                    ...styleSlide
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={image.image}
                            alt={image.alt}
                            loading={index === 0 ? "eager" : "lazy"}
                            priority={index === 0 ? true : false}
                            style={{ objectFit: "cover", height: "100svh" }}

                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
