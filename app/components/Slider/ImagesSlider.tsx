'use client'
import { cn } from "utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Image, { StaticImageData } from 'next/image'; // Importer Image de Next.js
import { Button, useTheme } from '@mui/material'
import { PlayArrow, Pause } from '@mui/icons-material';

const ImagesSlider = ({
    images,
    children,
    overlay = true,
    overlayClassName,
    className,
    autoplay = true,
    direction = "up",
}: {
    images: { img: StaticImageData, alt: string }[];
    children: React.ReactNode;
    overlay?: React.ReactNode;
    overlayClassName?: string;
    className?: string;
    autoplay?: boolean;
    direction?: "up" | "down";
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const theme = useTheme();

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const handlePrevious = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowRight") {
                handleNext();
            } else if (event.key === "ArrowLeft") {
                handlePrevious();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        let interval: NodeJS.Timeout | undefined;
        if (autoplay && !isPaused) {
            interval = setInterval(handleNext, 8000);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            if (interval) clearInterval(interval);
        };
    }, [autoplay, handleNext, handlePrevious, isPaused]);



    const slideVariants = {
        initial: {
            scale: 0,
            opacity: 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.645, 0.045, 0.355, 1.0],
            },
        },
        upExit: {
            opacity: 1,
            x: "-150%",
            transition: {
                duration: 2,
            },
        },
        downExit: {
            opacity: 1,
            x: "-150%",
            transition: {
                duration: 2,
            },
        },
    };
    const togglePause = useCallback(() => {
        setIsPaused(!isPaused);
    }, [isPaused]);

    return (<>
        <div className={cn("overflow-hidden h-full w-full relative flex ", className)} style={{ perspective: "1000px" }}>
            {overlay && <div className={cn("absolute inset-0  ", overlayClassName)} />}
            <AnimatePresence initial={false}>
                {images.length > 0 && (
                    <motion.div
                        key={currentIndex}
                        initial="initial"
                        animate="visible"
                        exit={direction === "up" ? "upExit" : "downExit"}
                        variants={slideVariants}
                        className="h-full w-full absolute inset-0 bg-blend-multiply brightness-75">
                        <Image
                            src={images[currentIndex].img}
                            alt={images[currentIndex].alt}
                            placeholder="blur"
                            quality={100}
                            fill
                            sizes="100dvw"
                            style={{ objectFit: "cover" }}
                            priority={currentIndex === 0} 
                            loading={currentIndex === 0 ? "eager" : "lazy"}
                            />
                            
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
            <Button sx={{
                position: "absolute",
                bottom: "-0px",
                right: "0px",
                zIndex: 10,
                color: theme.palette.grey[200],
                boxShadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
            }} variant="text" startIcon={isPaused ? <PlayArrow /> : <Pause />} onClick={togglePause} aria-label={isPaused ? "Reprendre le diaporama" : "Mettre le diaporama en pause"}>
                {isPaused ? "Play" : "Pause"}
            </Button>
        </div>
    </>
    );
};

export default ImagesSlider;