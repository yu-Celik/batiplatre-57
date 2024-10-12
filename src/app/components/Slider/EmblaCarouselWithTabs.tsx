'use client'
import { Box, Tab, Tabs, tabsClasses } from "@mui/material";
import { useState, memo } from "react";
import dynamic from 'next/dynamic';
import { amenagementCombleImg, peintureImg, platerieImg, poseDeSolImg, façadeImg } from '@/app/data/imagesSlideHome';
import { EmblaOptionsType } from "embla-carousel";

const EmblaCarousel = dynamic(() => import('./EmblaCarousel'), { ssr: false });

const OPTIONS: EmblaOptionsType = {}

export default memo(function EmblaCarouselWithTabs() {

    const [value, setValue] = useState(0);

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
                    },
                }}
            >
                <Tab label="Débarras & néttoyage" value={0} />
                <Tab label="Plâtrerie & isolation" value={1} />
                <Tab label="Aménagement & décoration" value={2} />
                <Tab label="Peinture" value={3} />
                <Tab label="Pose de sol" value={4} />
                <Tab label="Façade" value={5} />
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
            <CustomTabPanel value={value} index={5} aria-label="Façade" aria-controls="Façade" >
                <EmblaCarousel images={façadeImg.map(img => ({ img: img.src, alt: img.alt }))} options={OPTIONS} />
            </CustomTabPanel>
        </>
    )
})


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


const CustomTabPanel: React.FC<TabPanelProps> = memo(({ children, value, index, ...other }) => {
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
})


CustomTabPanel.displayName = 'CustomTabPanel';