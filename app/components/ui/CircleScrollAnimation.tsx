'use client'
import { Typography, useTheme } from "@mui/material";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

interface CircleProps {
    start: number;
    end: number;
}

const Circle: React.FC<CircleProps> = ({ start, end }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`end end`, `1.33 start`], // Assurez-vous que le format est correct
    });
    const theme = useTheme();

    const x = useTransform(scrollYProgress, [0, 1], [`${start * 1.1}%`, `${-500 + end * 1100}%`]);
    const opacity = useTransform(scrollYProgress, [0, start, end, 1], [1, 1, 0, 1]);
    // const springX = useSpring(x, { stiffness: 200, damping: 50, bounce: 1 });
    // const springOpacity = useSpring(opacity, { stiffness: 500, damping: 250, bounce: 1 });

    return (
        <motion.div
            ref={ref}
            style={{
                translateX: x,
                opacity: opacity,
                width: 24,
                height: 4,
                backgroundColor: theme.palette.secondary.main,

            }}
        />
    );
};

const CircleScrollAnimation = ({ text, ...props }: { text: string }) => {
    const circles = 7;

    return (

        <div className="relative inline-block mb-6 w-full">
            <Typography variant="h2" textAlign={"center"} gutterBottom {...props}>
                <span className="absolute inset-y-full -inset-x-0 ">
                    <motion.span style={{ display: 'flex', overflow: 'hidden', justifyContent: 'flex-start' }}>
                        {Array.from({ length: circles }).map((_, index) => {
                            const start = index * 0.1;
                            const end = start + 0.9;
                            return <Circle key={index} start={start} end={end} />;
                        })}
                    </motion.span>
                </span>
                {text}
            </Typography>
        </div>
    );
};

export default CircleScrollAnimation;


interface CircleNoAnimateProps {
    start: number;
}

export const CircleNoAnimate: React.FC<CircleNoAnimateProps> = ({ start }) => {
    const theme = useTheme();
    const circles = 10;

    return (
        <div className="flex w-full items-center justify-center my-6">
            {Array.from({ length: circles }).map((_, index) => (
                <div
                    key={index}
                    style={{
                        width: 24,
                        height: 4,
                        backgroundColor: theme.palette.secondary.main,
                        marginLeft: `${start * 10}%`, // Ajustement pour positionner les cercles sans animation
                    }}
                />
            ))}
        </div>
    );
};

