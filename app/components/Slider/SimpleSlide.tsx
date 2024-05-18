'use client'
import React, { CSSProperties } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow, Keyboard } from 'swiper/modules';
import { Box } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

interface SimpleSlideProps {
    images: { img: StaticImageData, alt: string }[];
}
interface CustomCSSProperties extends CSSProperties {
    [key: `--${string}`]: string | undefined;
}
const SimpleSlide: React.FC<SimpleSlideProps> = ({ images }) => {
    return (
        <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow, Keyboard]}
            effect="coverflow"
            aria-label="Galerie d'images"
            grabCursor={true}
            keyboard={{ enabled: true }}
            centeredSlides={true}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: true,
            }}
            slidesPerView={'auto'}
            spaceBetween={25}
            pagination={{ clickable: true, type: 'bullets' }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            className="simpleSlide"
            style={{
                '--swiper-pagination-color': `var(--mui-palette-blueAndAmber-main)`,
            } as CustomCSSProperties}
        >
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <Box
                        component={Image}
                        src={img.img}
                        alt={img.alt}
                        placeholder="blur"
                        quality={100}
                        sizes="100vw"
                        sx={{
                            objectFit: "cover",
                            height: { xs: '18rem', sm: '30rem' },
                            width: "100%"
                        }}
                        loading={'lazy'}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SimpleSlide;