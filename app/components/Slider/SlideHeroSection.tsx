'use client'
import { CSSProperties } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, A11y, Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';
import { alpha, useTheme } from '@mui/material';

interface CustomCSSProperties extends CSSProperties {
    [key: `--${string}`]: string | undefined;
}
export default function SlideHeroSection({ images, styleSlide }: { images: { image: StaticImageData, alt: string }[], styleSlide: CSSProperties }) {
    const theme = useTheme();

    return (
        <>
            <Swiper
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
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
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
                            src={image.image}
                            alt={image.alt}
                            loading={index === 0 ? "eager" : "lazy"}
                            priority={index === 0 ? true : false}
                            quality={100}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
                            style={{
                                objectFit: "cover",
                            }}
                            className="imageSlideHeroSection"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
