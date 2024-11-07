'use client'
import { Box, Tab, Tabs, tabsClasses, Divider } from "@mui/material";
import { useState, memo } from "react";
import dynamic from 'next/dynamic';
import { amenagementCombleImg, peintureImg, platerieImg, poseDeSolImg, façadeImg, maçonnerieImg, façadeIsolationImg, electriciteImg, menuiserieImg } from '@/app/data/imagesSlideHome';
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
                }}
            >
                <Tab label="Maçonnerie & extension" value={0} />
                <Tab label="Façade isolation ext et toiture" value={1} />
                <Tab label="Électricité et sol chauffant" value={2} />
                <Tab label="Plâtrerie et isolation intérieur" value={3} />
                <Tab label="Peinture, pose de sol et carrelage" value={4} />
                <Tab label="Menuiserie et plomberie" value={5} />
            </Tabs>
            <Divider sx={{ my: 1, mt: 2, borderColor: 'black', height: '2px', width: '33%' }} />
            <CustomTabPanel value={value} index={0} aria-label="Maçonnerie & extension" aria-controls="Maçonnerie & extension" >
                <EmblaCarousel images={maçonnerieImg.map(img => ({ img: img.src, alt: img.alt }))} options={OPTIONS} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} aria-label="Façade isolation ext et toiture" aria-controls="Façade isolation ext et toiture" >
                <EmblaCarousel images={façadeIsolationImg.map(img => ({ img: img.src, alt: img.alt }))} options={OPTIONS} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2} aria-label="Électricité et sol chauffant" aria-controls="Électricité et sol chauffant" >
                <EmblaCarousel images={electriciteImg.map(img => ({ img: img.src, alt: img.alt }))} options={OPTIONS} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3} aria-label="Plâtrerie et isolation intérieur" aria-controls="Plâtrerie et isolation intérieur" >
                <EmblaCarousel images={platerieImg.map(img => ({ img: img.src, alt: img.alt }))} options={OPTIONS} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4} aria-label="Peinture, pose de sol et carrelage" aria-controls="Peinture, pose de sol et carrelage" >
                <EmblaCarousel images={peintureImg.map(img => ({ img: img.src, alt: img.alt }))} options={OPTIONS} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5} aria-label="Menuiserie et plomberie" aria-controls="Menuiserie et plomberie" >
                <EmblaCarousel images={menuiserieImg.map(img => ({ img: img.src, alt: img.alt }))} options={OPTIONS} />
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