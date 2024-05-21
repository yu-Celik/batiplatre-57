'use client'
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, A11y, Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';
import { alpha, useTheme } from '@mui/material';

interface CustomCSSProperties extends React.CSSProperties {
    [key: `--${string}`]: string | undefined;
}

export default function SlideHeroSection({ images, styleSlide }: { images: { image: StaticImageData, alt: string }[], styleSlide: React.CSSProperties }) {
    const theme = useTheme();
    const swiperRef = useRef<any>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.on('slideChange', () => {
                setCurrentSlide(swiperRef.current.swiper.realIndex);
            });
        }
    }, []);

    return (
        <Swiper
            ref={swiperRef}
            spaceBetween={30}
            effect={'fade'}
            pagination={{
                clickable: true,
            }}
            keyboard={true}
            modules={[EffectFade, Pagination, A11y, Autoplay]}
            className="SlideHeroSection"
            allowTouchMove={false}
            autoplay={{
                delay: 10000,
            }}
            style={{
                ...styleSlide,
                '--swiper-theme-color': 'var(--mui-palette-secondary-main)',
                '--swiper-pagination-bullet-horizontal-gap': '0.5rem',
                '--swiper-pagination-bullet-size': '1.25rem',
                '--swiper-pagination-bullet-border-radius': '50%',
                '--swiper-pagination-bullet-inactive-color': `${alpha(theme.palette.grey[100], 0.9)}`,
            } as CustomCSSProperties}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <Image
                        key={currentSlide === index ? `active-${index}` : `inactive-${index}`}
                        src={image.image}
                        alt={image.alt}
                        loading={index === 0 ? "eager" : "lazy"}
                        priority={index === 0 ? true : false}
                        quality={100}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw"
                        style={{
                            objectFit: "cover",
                        }}
                        className="imageSlideHeroSection animate"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}