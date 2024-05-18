'use client'
import { cn } from "utils/cn";
import { LazyMotion, m, AnimatePresence } from "framer-motion"
import { useCallback, useEffect, useState } from "react";
import Image, { StaticImageData } from 'next/image'; // Importer Image de Next.js
import useMediaQuery from '@mui/material/useMediaQuery';

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
    const loadFeatures = () => import('./features').then((res) => res.default)
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobileOrTablet = useMediaQuery('(max-width: 900px)');
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
        if (autoplay && !isMobileOrTablet) {
            interval = setInterval(handleNext, 8000);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            if (interval) clearInterval(interval);
        };
    }, [autoplay, handleNext, handlePrevious, isMobileOrTablet]);

    const slideVariants = {
        initial: {
            scale: isMobileOrTablet ? 1 : 0,
            opacity: isMobileOrTablet ? 1 : 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: isMobileOrTablet ? {} : {
                duration: 1,
                ease: [0.645, 0.045, 0.355, 1.0],
            },
        },
        upExit: isMobileOrTablet ? {} : {
            opacity: 1,
            x: "-150%",
            transition: {
                duration: 2,
            },
        },
        downExit: isMobileOrTablet ? {} : {
            opacity: 1,
            x: "-150%",
            transition: {
                duration: 2,
            },
        },
    };

    return (<>
        <LazyMotion features={loadFeatures}>
            <div className={cn("overflow-hidden h-full w-full relative flex ", className)} style={{ perspective: "1000px" }}>
                {overlay && <div className={cn("absolute inset-0  ", overlayClassName)} />}
                <AnimatePresence initial={false}>
                    {images.length > 0 && (
                        <m.div
                            key={currentIndex}
                            initial="initial"
                            animate="visible"
                            exit={direction === "up" ? "upExit" : "downExit"}
                            variants={slideVariants}
                            className="h-full w-full absolute inset-">
                            <Image
                                src={images[currentIndex].img}
                                alt={images[currentIndex].alt}
                                placeholder="blur"
                                quality={100}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                style={{ objectFit: "cover" }}
                                // priority={currentIndex === 0}
                                loading={currentIndex === 0 ? "eager" : "lazy"}
                            />

                        </m.div>
                    )}
                </AnimatePresence>
                {children}

            </div>
        </LazyMotion>
    </>
    );
};

export default ImagesSlider;