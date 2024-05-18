'use client'
import { cn } from "@/utils/cn"
import { LazyMotion, m } from "framer-motion"
import { useState } from "react"
import 'swiper/css/effect-creative';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Typography } from "@mui/material";



type Tab = {
    title: string;
    value: string;
    content: JSX.Element;
};



export const Tabs = ({ tabs: propTabs, containerClassName, activeTabClassName, tabClassName, contentClassName, }: {
    tabs: Tab[]; containerClassName?: string; activeTabClassName?: string; tabClassName?: string; contentClassName?: string;
}) => {
    const [active, setActive] = useState<Tab>(propTabs[0]);
    const [tabs, setTabs] = useState<Tab[]>(propTabs);
    const loadFeatures = () => import('./features').then((res) => res.default)

    const moveSelectedTabToTop = (idx: number) => {
        const newTabs = [...propTabs];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        setTabs(newTabs);
        setActive(newTabs[0]);
    };

    const [hovering, setHovering] = useState(false);

    return (
        <>
            <LazyMotion features={loadFeatures}>
                <div
                    className={cn(
                        "flex flex-row items-center justify-center [perspective:1000px] absolute bottom-6 overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
                        containerClassName
                    )}
                >
                    {propTabs.map((tab, idx) => (
                        <button
                            key={tab.title}
                            onClick={() => {
                                moveSelectedTabToTop(idx);
                            }}
                            onMouseEnter={() => setHovering(true)}
                            onMouseLeave={() => setHovering(false)}
                            className={cn("relative px-4 py-2 rounded-full text-grey-900 dark:text-grey-50  hover:text-amber-600 dark:hover:text-amber-700 border-none bg-transparent", tabClassName)}
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                        >
                            {active.value === tab.value && (
                                <m.div
                                    layoutId="clickedbutton"
                                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                    className={cn(
                                        "absolute inset-0  bg-amber-600 dark:bg-amber-700 rounded-full",
                                        activeTabClassName
                                    )}
                                />
                            )}
                            <Typography variant="h6" fontSize={18} color={active.value === tab.value ? 'black' : 'text'} className="relative block cursor-pointer">
                                {tab.title}
                            </Typography>
                        </button>
                    ))}
                </div>
                <FadeInDiv
                    tabs={tabs}
                    active={active}
                    key={active.value}
                    hovering={hovering}
                    className={cn("mt-6", contentClassName)}
                />
            </LazyMotion>
        </>
    );
};

type Props = {
    className?: string;
    key?: string;
    tabs: Tab[];
    active: Tab;
    hovering?: boolean;
}

export const FadeInDiv = ({ className, tabs, hovering }: Props) => {
    const loadFeatures = () => import('./features').then((res) => res.default)
    const isActive = (tab: Tab) => {
        return tab.value === tabs[0].value;
    };
    return (
        <>
            <LazyMotion features={loadFeatures}>
                <div className="relative w-full">
                    {tabs.map((tab, idx) => (
                        <m.div
                            key={tab.value}
                            layoutId={tab.value}
                            style={{
                                scale: 1 - idx * 0.1,
                                top: hovering ? idx * -40 : 0,
                                zIndex: -idx,
                                opacity: idx < 3 ? 1 - idx * 0.1 : 0,
                            }}
                            animate={{
                                y: isActive(tab) ? [0, 30, 0] : 0,
                            }}
                            className={cn("w-full absolute top-0 left-0", className)}
                        >
                            {tab.content}
                        </m.div>
                    ))}
                </div>
            </LazyMotion >
        </>
    );
};

