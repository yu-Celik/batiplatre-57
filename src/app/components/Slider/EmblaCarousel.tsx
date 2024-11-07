'use client'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import Image, { StaticImageData } from 'next/image'
import styles from './css/embla.module.css'
import { memo } from 'react'

interface PropType {
    images: { img: StaticImageData, alt: string }[];
    options: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = ({ images, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

    return (
        <section className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {images.map((img, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <Image className={styles.embla__slide__number} src={img.img} alt={img.alt} style={{ borderRadius: 'var(--mui-shape-borderRadius)', width: '100%', height: '275px', objectFit: 'cover', objectPosition: 'center' }} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.embla__controls}>
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => onDotButtonClick(index)}
                    />
                ))}
            </div>

        </section>
    )
}

export default memo(EmblaCarousel)