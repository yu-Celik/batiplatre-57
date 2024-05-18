'use client'
import { CSSProperties } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, A11y, Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';

interface CustomCSSProperties extends CSSProperties {
    [key: `--${string}`]: string | undefined;
}
export default function SlideHeroSection({ images, styleSlide }: { images: { image: StaticImageData, alt: string }[], styleSlide: CSSProperties }) {
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
                    '--swiper-theme-color': 'var(--mui-palette-secondary-main)',
                    '--swiper-pagination-bullet-horizontal-gap': '0.5rem',
                    '--swiper-pagination-bullet-size': '1.25rem',
                    '--swiper-pagination-bullet-border-radius': '50%',
                    '--swiper-pagination-bullet-inactive-color': 'var(--mui-palette-secondary-dark)',
                } as CustomCSSProperties}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={image.image}
                            alt={image.alt}
                            loading={index === 0 ? "eager" : "lazy"}
                            priority={index === 0 ? true : false}
                            sizes="100vw"
                            quality={100}
                            fill
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
