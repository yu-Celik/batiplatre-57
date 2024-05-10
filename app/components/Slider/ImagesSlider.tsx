'use client'
import { cn } from "utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Image, { StaticImageData } from 'next/image'; // Importer Image de Next.js

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
        if (autoplay) {
            interval = setInterval(handleNext, 8000);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            if (interval) clearInterval(interval);
        };
    }, [autoplay, handleNext, handlePrevious]);



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

        </div>
    </>
    );
};

export default ImagesSlider;