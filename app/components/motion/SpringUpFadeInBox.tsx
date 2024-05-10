'use client'

import { cn } from "@/utils/cn";
import { LazyMotion, m } from "framer-motion";
import { ReactNode } from "react";


type Props = {
    children: ReactNode
    className?: string
}

const variants = {
    hidden: {
        opacity: 0,
        y: 150
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            duration: 1
        }
    }
}

export function SpringUpFadeInBox({ children, className }: Props) {
    const loadFeatures = () => import('./features').then((res) => res.default);

    return (
        <LazyMotion features={loadFeatures}>
            <m.div
                className={cn("w-full", className)}
                initial='hidden'
                whileInView='visible'
                variants={variants}
                style={{
                    willChange: 'transform, opacity'
                }}
            >
                {children}
            </m.div>
        </LazyMotion>
    )
}