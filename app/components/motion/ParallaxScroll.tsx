"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LazyMotion, m } from "framer-motion"
import Image, { StaticImageData } from "next/image";
import { cn } from "@/utils/cn";

export const ParallaxScroll = ({
    images,
    className,
}: {
    images: StaticImageData[];
    className?: string;
}) => {
    const loadFeatures = () => import('./features').then((res) => res.default)

    const gridRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: gridRef,
        offset: ["start start", "end start"],
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);

    const halfIndex = Math.floor(images.length / 2); // Calcul de l'index pour la moitié du tableau

    const firstPart = images.slice(0, halfIndex); // Première moitié
    const secondPart = images.slice(halfIndex);

    return (
        <LazyMotion features={loadFeatures}>
        <div
            role="grid"
            tabIndex={0}
            className={cn("max-h-[44rem] items-start overflow-y-auto w-full", className)}
            style={{
                scrollbarWidth: "thin",
                scrollSnapType: "y mandatory",
                scrollBehavior: "smooth",
            }}
            ref={gridRef}
        >
            <div
                className="grid grid-cols-1 md:grid-cols-2 items-start  max-w-5xl mx-auto gap-10 pb-40 pr-1"
                ref={gridRef}
            >
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        <m.div
                            style={{ y: translateFirst }} // Apply the translateY m value here
                            key={"grid-1" + idx}
                        >
                            <Image
                                src={el}
                                className="h-60 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 "
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                        </m.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((el, idx) => (
                        <m.div
                            style={{ y: translateSecond }}
                            key={"grid-2" + idx}
                        >
                            <Image
                                src={el}
                                className="h-60 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 "
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                        </m.div>
                    ))}
                </div>
            </div>
        </div>
        </LazyMotion>
    );
};
