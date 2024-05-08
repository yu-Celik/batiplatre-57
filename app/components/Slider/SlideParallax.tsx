'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './stylesSlideParallax.css';
import name from '@/assets/chantier photo/2nd/IMG_20210107_162721.jpg';
import { Parallax, Pagination } from 'swiper/modules';
import { Typography, alpha, useTheme } from '@mui/material';
import { CSSProperties } from 'react';

interface CustomCSSProperties extends CSSProperties {
    [key: `--${string}`]: string | undefined;
}

export default function SlideParallax() {
    const theme = useTheme();
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <>
            <Swiper
                style={{
                    '--swiper-pagination-bullet-inactive-color': `${alpha(theme.palette.grey[800], 0.5)}`,
                    '--swiper-pagination-color': `${theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main}`,
                    '--swiper-pagination-bullet-active-color': `${theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main}`,
                } as CustomCSSProperties}
                speed={600}
                parallax={true}
                pagination={pagination}
                modules={[Parallax, Pagination]}
                className="slideParallax"
            >
                <div
                    slot="container-start"
                    className="absolute left-0 top-0 w-[130%] h-full bg-cover bg-center bg-url"
                    style={{
                        'backgroundImage': `url(${name.src})`,
                    }}
                    data-swiper-parallax="-23%"
                ></div>

                <SwiperSlide>
                    <div className="step-number" data-swiper-parallax="-400">Étape 1</div>
                    <Typography variant="h3" fontSize={32} color={theme.palette.mode === 'light' ? 'primary' : 'secondary'} data-swiper-parallax="-300" gutterBottom >
                        <strong>Planification Initiale</strong>
                    </Typography>
                    <Typography variant="h4" fontSize={24} data-swiper-parallax="-200" gutterBottom >
                        La première étape vers la <strong>réussite</strong>
                    </Typography>
                    <Typography variant="body1" fontSize={16} lineHeight={1.75} data-swiper-parallax="-100" >
                        Notre processus commence par une <strong>consultation détaillée</strong> pour comprendre vos <strong>besoins</strong> et vos attentes. Nous discutons de vos <strong>objectifs</strong>, évaluons les <strong>contraintes</strong> et proposons des <strong>solutions personnalisées</strong>. Cette étape est cruciale pour établir un plan solide qui guidera toutes les phases suivantes du projet.
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="step-number" data-swiper-parallax="-400">Étape 2</div>

                    <Typography variant="h3" fontSize={32} color={theme.palette.mode === 'light' ? 'primary' : 'secondary'} data-swiper-parallax="-300" gutterBottom >
                        <strong>Conception</strong> et <strong>Développement</strong>
                    </Typography>
                    <Typography variant="h4" fontSize={24} data-swiper-parallax="-200" gutterBottom >
                        Créer avec <strong>précision</strong>
                    </Typography>
                    <Typography variant="body1" fontSize={16} lineHeight={1.75} data-swiper-parallax="-100" >
                        Après avoir établi un plan clair, nous démarrerons la phase de <strong>conception</strong>. Utilisant les dernières <strong>technologies de pointe</strong>, nous transformons les idées en plans détaillés. Chaque <strong>conception</strong> est revue et raffinée pour assurer qu&apos;elle répond bien à vos attentes avant de passer à la <strong>réalisation</strong>.
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="step-number" data-swiper-parallax="-400">Étape 3</div >

                    <Typography variant="h3" fontSize={32}  color={theme.palette.mode === 'light' ? 'primary' : 'secondary'} data-swiper-parallax="-300" gutterBottom>
                        <strong>Exécution</strong> du Projet
                    </Typography>
                    <Typography variant="h4" fontSize={24} data-swiper-parallax="-200" gutterBottom >
                        <strong>Réalisation</strong> et <strong>finitions</strong>
                    </Typography>
                    <Typography variant="body1" fontSize={16} lineHeight={1.75} data-swiper-parallax="-100" >
                        La dernière étape est l&apos;<strong>exécution</strong> du projet. Nos équipes travaillent avec efficacité pour <strong>matérialiser</strong> votre projet, en respectant strictement les normes de qualité du DTU et les délais convenus. Nous assurons une communication continue tout au long de cette phase pour garantir que le projet avance selon le plan. Une fois terminé, nous procédons à une inspection finale et à la <strong>livraison</strong> du projet.
                    </Typography>
                </SwiperSlide>
            </Swiper >
        </>
    );
}
