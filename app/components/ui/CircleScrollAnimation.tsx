'use client'
import { SxProps, Theme, Typography, TypographyProps, useTheme } from "@mui/material";
import { useTransform, motion, useScroll } from "framer-motion";
import { CSSProperties, useRef } from "react";

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
                width: 48,
                height: 4,
                backgroundColor: theme.palette.secondary.main,
            }}
        />
    );
};

const CircleScrollAnimation = ({ text, ...props }: { text: string }) => {
    const circles = 7;

    return (

        <div className="relative inline-block mb-6 max-w-[90%] mx-auto">
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

export const TextDecoration: React.FC<{ text: string | React.ReactNode, variant: TypographyProps['variant'], styles?: SxProps<Theme> }> = ({ text, variant, styles }) => {
    const theme = useTheme();

    return (
        <div className="flex justify-center items-center relative">
            <Typography
                variant={variant}
                textAlign={'center'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                    height: '100px',
                    maxWidth: '24rem',
                    position: 'relative',
                    zIndex: 1,
                    ...styles,
                    '&::before': {
                        content: '""',
                        backgroundImage: `linear-gradient(-45deg, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main})`,
                        borderRadius: '20px',
                        width: '85%',
                        height: '100%',
                        rotate: { xs: '.1deg', sm: '-.1deg' },
                        position: 'absolute',
                        top: 0,
                        left: { xs: '55%', sm: '35%' },
                        transform: 'translateX(-50%)',
                        zIndex: -1,
                        animation: 'gradient 1s linear infinite',
                        backgroundSize: '400% auto',
                        boxShadow: theme.shadows[5],
                        '@keyframes gradient': {
                            '0%': { backgroundPosition: '0% 50%' },
                            '50%': { backgroundPosition: '100% 50%' },
                            '100%': { backgroundPosition: '0% 50%' },
                        },
                    },
                    '&::after': {
                        content: '""',
                        borderRadius: '20px',
                        backgroundColor: theme.palette.background.default,
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: { xs: '45%', sm: '45%' },
                        transform: 'translateX(-50%)',
                        zIndex: -1,

                    }
                }}>
                {text}
            </Typography>
        </div>
    );
};


