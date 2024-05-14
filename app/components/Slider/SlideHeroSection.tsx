'use client'
import { useRef, useState, CSSProperties } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { alpha, useTheme } from "@mui/material";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './stylesSlideHeroSection.css'
// import required modules
import { EffectFade, Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';

interface CustomCSSProperties extends CSSProperties {
    [key: `--${string}`]: string | undefined;
}
export default function SlideHeroSection({ images, styleSlide }: { images: { image: StaticImageData, alt: string }[], styleSlide: CSSProperties }) {
    const theme = useTheme()
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                keyboard={true}
                loop={true}
                modules={[EffectFade, Pagination, A11y, Autoplay]}
                className="SlideHeroSection"
                allowTouchMove={false}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                style={{
                    ...styleSlide,
                    '--swiper-theme-color': theme.palette.secondary.main,
                    '--swiper-pagination-bullet-horizontal-gap': '0.5rem',
                    '--swiper-pagination-bullet-size': '1.25rem',
                    '--swiper-pagination-bullet-border-radius': '50%',
                    '--swiper-pagination-bullet-inactive-color': theme.palette.secondary.dark,
                } as CustomCSSProperties}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={image.image}
                            alt={image.alt}
                            loading={index === 0 ? "eager" : "lazy"}
                            priority={index === 0 ? true : false}
                            quality={100}
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            className="imageSlideHeroSection"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
