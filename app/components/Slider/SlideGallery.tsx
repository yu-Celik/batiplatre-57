'use client'
import { alpha, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Keyboard, Navigation, Pagination } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';
import { CSSProperties } from "react";
import './stylesSlideGallery.css'

type SlideGalleryProps = {
    items: { id: string; img: StaticImageData; alt: string; }[];
}
interface CustomCSSProperties extends CSSProperties {
    [key: `--${string}`]: string | undefined;
}
export default function SlideGallery({ items }: SlideGalleryProps) {
    const theme = useTheme()

    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                keyboard={{ enabled: true }}
                centeredSlides={true}
                style={{
                    '--swiper-navigation-color': theme.palette.grey[200],
                    '--swiper-pagination-bullet-inactive-color': `${alpha(theme.palette.grey[800], 0.5)}`,
                    '--swiper-theme-color': theme.palette.mode === 'light' ? theme.palette.secondary.main : theme.palette.secondary.light,
                } as CustomCSSProperties}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                slidesPerView={1}
                modules={[EffectCreative, Pagination, Keyboard, Navigation]}
                className="slideGallery"
                pagination={pagination}
                navigation={true}


            >
                {items.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <Image
                                src={item.img.src}
                                alt={item.alt}
                                width={item.img.width}
                                height={item.img.height}
                                className="max-h-[30rem] min-h-[30rem] rounded-xl"
                                loading={'lazy'}
                                sizes="100vw"
                                quality={100}
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                }}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

