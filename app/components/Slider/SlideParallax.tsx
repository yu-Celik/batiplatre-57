'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './stylesSlideParallax.css';
import name from '@/assets/chantier photo/2nd/IMG_20210107_162721.jpg';
import { Parallax, Pagination } from 'swiper/modules';
import { Typography, useTheme } from '@mui/material';
import { CSSProperties } from 'react';

interface CustomCSSProperties extends CSSProperties {
    [key: `--${string}`]: string | undefined;
}

export default function SlideParallax() {
    const theme = useTheme();
    return (
        <>
            <Swiper
                style={{
                    '--swiper-pagination-color': `${theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main}`,
                } as CustomCSSProperties}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
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
                    <Typography variant="h3" fontSize={32} color={theme.palette.mode === 'light' ? 'primary' : 'secondary'} data-swiper-parallax="-300" paragraph sx={{
                        textShadow: '2px 2px 4px #000000ba'
                    }}>
                        Planification Initiale
                    </Typography>
                    <Typography variant="h4" fontSize={24} data-swiper-parallax="-200" paragraph sx={{
                        textShadow: '2px 2px 4px #000000ba'
                    }}>
                        La première étape vers la réussite
                    </Typography>
                    <Typography variant="body2" fontSize={16} data-swiper-parallax="-100" sx={{
                        textShadow: '2px 2px 4px #000000ba'
                    }}>
                        Notre processus commence par une consultation détaillée pour comprendre vos besoins et vos attentes. Nous discutons de vos objectifs, évaluons les contraintes du site et proposons des solutions personnalisées. Cette étape est cruciale pour établir un plan solide qui guidera toutes les phases suivantes du projet.
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="step-number" data-swiper-parallax="-400">Étape 2</div>

                    <Typography variant="h3" fontSize={32} color={theme.palette.mode === 'light' ? 'primary' : 'secondary'} data-swiper-parallax="-300" paragraph sx={{
                        textShadow: '2px 2px 4px #000000ba'
                    }}>
                        Conception et Développement
                    </Typography>
                    <Typography variant="h4" fontSize={24} data-swiper-parallax="-200" paragraph sx={{
                        textShadow: '2px 2px 4px #000000ba'
                    }}>
                        Créer avec précision
                    </Typography>
                    <Typography variant="body2" fontSize={16} data-swiper-parallax="-100" >
                        Après avoir établi un plan clair, nos experts commencent la phase de conception. Utilisant les dernières technologies et des outils de pointe, nous transformons les idées en plans détaillés et en prototypes. Chaque conception est revue et raffinée pour assurer qu&abos;elle répond à vos attentes avant de passer à la réalisation.
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="step-number" data-swiper-parallax="-400">Étape 3</div >

                    <Typography variant="h3" fontSize={32} color={theme.palette.mode === 'light' ? 'primary' : 'secondary'} data-swiper-parallax="-300" paragraph sx={{
                        textShadow: '2px 2px 4px #000000ba'
                    }}>
                        Exécution du Projet
                    </Typography>
                    <Typography variant="h4" fontSize={24} data-swiper-parallax="-200" paragraph sx={{
                        textShadow: '2px 2px 4px #000000ba'
                    }}>
                        Réalisation et finitions
                    </Typography>
                    <Typography variant="body2" fontSize={16} data-swiper-parallax="-100" sx={{
                        textShadow: '2px 2px 4px #000000ba'
                    }}>
                        La dernière étape est l&abos;exécution du projet. Nos équipes travaillent avec efficacité pour matérialiser la conception approuvée, en respectant strictement les normes de qualité et les délais convenus. Nous assurons une communication continue tout au long de cette phase pour garantir que le projet avance selon le plan. Une fois terminé, nous procédons à une inspection finale et à la livraison du projet.
                    </Typography>
                </SwiperSlide>
            </Swiper >
        </>
    );
}
