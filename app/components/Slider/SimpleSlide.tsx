'use client'
import React, { useRef, useState, useEffect, CSSProperties } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, EffectCoverflow, Keyboard } from 'swiper/modules';
import './stylesSimpleSlide.css';
import { useTheme, Button } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { PlayArrow, Pause } from '@mui/icons-material';

interface SimpleSlideProps {
    images: { img: StaticImageData, alt: string }[];
}
interface CustomCSSProperties extends CSSProperties {
    [key: `--${string}`]: string | undefined;
}
const SimpleSlide: React.FC<SimpleSlideProps> = ({ images }) => {
    const [isAutoplaying, setIsAutoplaying] = useState(true);
    const theme = useTheme();
    const swiperRef = useRef<SwiperRef | null>(null);

    const toggleAutoplay = () => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;
            if (swiper.autoplay.running) {
                swiper.autoplay.stop();
            } else {
                swiper.autoplay.start();
            }
        }
    };

    return (
        <Swiper
            ref={swiperRef}
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
                '--swiper-pagination-color': `${theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main}`,
            } as CustomCSSProperties}
        >
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={img.img}
                        alt={img.alt}
                        placeholder="blur"
                        quality={100}
                        sizes="100vw"
                        style={{ objectFit: "cover", height: "18rem" }}
                        loading={'lazy'}
                    />
                </SwiperSlide>
            ))}
            <Button
                sx={{
                    position: "absolute",
                    bottom: "0px",
                    right: "0px",
                    zIndex: 10,
                    color: theme.palette.grey[200],
                    boxShadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
                }}
                variant="text"
                startIcon={isAutoplaying ? <Pause /> : <PlayArrow />}
                onClick={() => {
                    toggleAutoplay();
                    setIsAutoplaying(!isAutoplaying);
                }}
                aria-label={isAutoplaying ? "Mettre en pause le diaporama" : "Démarrer le diaporama"}
                aria-pressed={isAutoplaying}
            >
                {isAutoplaying ? "Pause" : "Play"}
            </Button>
        </Swiper>
    );
};

export default SimpleSlide;