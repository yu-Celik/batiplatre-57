'use client'
import { cn } from "@/utils/cn"
import { LazyMotion, m } from "framer-motion"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
    className?: string
}

export default function BoxAnimate({ children, className }: Props) {
    const loadFeatures = () => import('./features').then((res) => res.default)
    return (
        <LazyMotion features={loadFeatures}>
            <m.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    type: 'tween',
                    duration: 0.5
                }}
                className={cn(className)}
            >
                {children}
            </m.div>
        </LazyMotion>
    )
}