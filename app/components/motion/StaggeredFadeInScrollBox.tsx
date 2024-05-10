import { cn } from "@/utils/cn";
import { LazyMotion, m } from "framer-motion";
import { ReactNode } from "react";

type Props = {
    children: ReactNode[];
    className?: string;
};

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0,
            staggerChildren: 0.1,
        }
    }
};

const itemVariants = (index: number) => ({
    hidden: {
        opacity: 0,
        y: index === 0 ? 200 : -200,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            duration: 2,
            damping: 16,
            stiffness: 200
        }
    }
});

export const StaggeredFadeInScrollBox: React.FC<Props> = ({ children, className }) => {
    const loadFeatures = () => import('./features').then((res) => res.default);

    return (
        <LazyMotion features={loadFeatures}>
            <m.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                className={cn(className)}
                style={{
                    willChange: 'transform, opacity'
                }}
            >
                {children.map((child, index) => (
                    <m.div
                        key={index}
                        variants={itemVariants(index)}
                        style={{
                            willChange: 'transform, opacity'
                        }}
                    >
                        {child}
                    </m.div>
                ))}
            </m.div>
        </LazyMotion>
    );
};