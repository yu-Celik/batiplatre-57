/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { motion, useScroll, useSpring, useTransform, useReducedMotion, LayoutGroup } from 'framer-motion';
import { Children, useRef } from 'react';

export const ScrollBoxHorizontal: React.FC<{ children: React.ReactNode | React.ReactNode[] }> = ({ children }) => {
    const shouldReduceMotion = useReducedMotion();
    const springConfig = { stiffness: 300, damping: 30, bounce: 1 };

    return (
        <>
            {Children.map(children, (child, index) => {
                const ref = useRef<HTMLDivElement>(null);
                const { scrollYProgress } = useScroll({
                    target: ref,
                    offset: ["start end", "150% end"],
                });

                // Utiliser des transformations différentes selon l'index de l'enfant
                const translateY = useTransform(scrollYProgress, [0, 1], index === 0 ? [-300, 0] : [300, 0]);
                const translateYSpring = useSpring(translateY, springConfig);

                const transformOpacity = useTransform(scrollYProgress, [0, 1], [-1, 1]);
                const opacity = useSpring(transformOpacity, springConfig);

                const style = shouldReduceMotion ? {} : {
                    translateY: translateYSpring,
                    opacity: opacity,
                    willChange: 'transform, opacity'
                };

                return (
                    <motion.div key={index} ref={ref} style={style}>
                        {child}
                    </motion.div>
                );
            })}
        </>
    );
};

const springConfig = { stiffness: 300, damping: 30, bounce: 1 };

type Props = {
    children: React.ReactNode
}
export function ScrollBox({ children }: Props) {
    const shouldReduceMotion = useReducedMotion();
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "150% end"]
    })

    const opacityProgress = useSpring(
        useTransform(scrollYProgress, [0, 1.5], [1000, 1]),
        springConfig
    );

    const yProgress = useSpring(
        useTransform(scrollYProgress, [0, 1], [300, 0]),
        springConfig
    );

    const style = shouldReduceMotion ? {} : {
        translateY: yProgress,
        opacity: opacityProgress
    };

    return (
        <motion.div
            ref={ref}
            style={style}
        >
            {children}
        </motion.div>
    )
}