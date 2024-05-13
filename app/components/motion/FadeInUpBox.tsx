'use client'
import { cn } from "@/utils/cn"
import { LazyMotion, m } from "framer-motion"
import { ReactNode } from "react"
import { useInView } from 'react-intersection-observer'; 

type Props = {
    children: ReactNode
    className?: string
}

export default function BoxAnimate({ children, className }: Props) {
    const loadFeatures = () => import('./features').then((res) => res.default)
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5  // Déclenche l'animation quand 50% de l'élément est visible
    });

    return (
        <LazyMotion features={loadFeatures}>
            <m.div
                ref={ref}
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: 'tween', duration: 0.5 }}
                className={cn(className)}
            >
                {children}
            </m.div>
        </LazyMotion>
    )
}