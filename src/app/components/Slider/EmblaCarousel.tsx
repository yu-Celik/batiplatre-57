'use client'
import React, { useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { tabsClasses } from '@mui/material/Tabs';
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import Image, { StaticImageData } from 'next/image'
import styles from './css/embla.module.css'
import { Box, Tab, Tabs } from '@mui/material'
import { amenagementCombleImg, peintureImg, platerieImg, poseDeSolImg } from '@/app/data/imagesSlideHome';


const OPTIONS: EmblaOptionsType = {}
interface PropType {
    images: { img: StaticImageData, alt: string }[];
    options: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = ({ images, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    return (
        <section className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {images.map((img, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <Image className='embla__slide__number' src={img.img} alt={img.alt} />
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

export const EmblaCarouselWithTabs = () => {

    const [value, setValue] = useState(1);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Catégories de services de rénovation"
                variant="scrollable"
                allowScrollButtonsMobile
                scrollButtons='auto'
                TabScrollButtonProps={{
                    'aria-label': 'scroll tabs',
                }}
                sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0.3 },
                    },
                    [`& .${tabsClasses.flexContainer}`]: {
                        justifyContent: 'center',
                    },
                }}
            >
                <Tab label="Débarras & néttoyage" value={0} />
                <Tab label="Plâtrerie & isolation" value={1} />
                <Tab label="Aménagement & décoration" value={2} />
                <Tab label="Peinture" value={3} />
                <Tab label="Pose de sol" value={4} />
            </Tabs>
            <CustomTabPanel value={value} index={0} aria-label="Débarras & néttoyage" aria-controls="Débarras & néttoyage" >
                <EmblaCarousel images={platerieImg.map(img => ({ img: img.src, alt: img.alt }))} options={OPTIONS} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} aria-label="Plâtrerie & isolation" aria-controls="Plâtrerie & isolation" >
                <EmblaCarousel images={platerieImg.map(img => ({ img: img.src, alt: img.alt }))} options={OPTIONS} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2} aria-label="Aménagement & décoration" aria-controls="Aménagement & décoration" >
                <EmblaCarousel images={amenagementCombleImg.map(img => ({ img: img.src, alt: img.alt }))} options={OPTIONS} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3} aria-label="Peinture" aria-controls="Peinture" >
                <EmblaCarousel images={peintureImg.map(img => ({ img: img.src, alt: img.alt }))} options={OPTIONS} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4} aria-label="Pose de sol" aria-controls="Pose de sol" >
                <EmblaCarousel images={poseDeSolImg.map(img => ({ img: img.src, alt: img.alt }))} options={OPTIONS} />
            </CustomTabPanel>
        </>
    )
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}


export default EmblaCarousel

