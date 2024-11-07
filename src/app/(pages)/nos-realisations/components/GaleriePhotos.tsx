'use client';
import React, { useState, useMemo, useEffect } from 'react';
import {
    Box,
    Tab,
    Tabs,
    ImageList,
    ImageListItem,
    Pagination,
    Typography,
    tabsClasses,
    useTheme,
    useMediaQuery,
    Modal
} from '@mui/material';
import Image, { StaticImageData } from 'next/image';

type PhotoItem = {
    id: string;
    src: StaticImageData;
    alt: string;
    category: string;
};

type GaleriePhotosProps = {
    photos: PhotoItem[];
};

const getUniqueCategories = (photos: PhotoItem[]): string[] => {
    return Array.from(new Set(photos.map(photo => photo.category)));
};

export default function GaleriePhotos({ photos }: GaleriePhotosProps) {
    const [currentTab, setCurrentTab] = useState<string>('toutes');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const photosPerPage = 9;
    const categories = useMemo(() => ['toutes', ...getUniqueCategories(photos)], [photos]);
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    const isSm = useMediaQuery(theme.breakpoints.only('sm'));
    const isMd = useMediaQuery(theme.breakpoints.only('md'));
    const filteredPhotos = useMemo(() =>
        currentTab === 'toutes' ? photos : photos.filter(photo => photo.category === currentTab),
        [currentTab, photos]);

    const pageCount = Math.ceil(filteredPhotos.length / photosPerPage);

    const currentPhotos = filteredPhotos.slice(
        (currentPage - 1) * photosPerPage,
        currentPage * photosPerPage
    );

    const [selectedImage, setSelectedImage] = useState<PhotoItem | null>(null);

    const modalStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .MuiBox-root': {
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none',
        },
        '& img': {
            maxWidth: '100%',
            maxHeight: '90vh',
            objectFit: 'contain',
        }
    };

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setCurrentTab(newValue);
        setCurrentPage(1); // Réinitialiser la page lors du changement d'onglet
    };

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    // Réinitialiser la page à 1 lorsque les photos filtrées changent
    useEffect(() => {
        setCurrentPage(1);
    }, [filteredPhotos]);

    const handleImageClick = (photo: PhotoItem) => {
        setSelectedImage(photo);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={currentTab}
                onChange={handleTabChange}
                aria-label="Catégories de photos"
                variant="scrollable"
                allowScrollButtonsMobile
                scrollButtons='auto'
                TabScrollButtonProps={{
                    'aria-label': 'scroll tabs',
                }}
                sx={{
                    mb: 2,
                    [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0.3 },
                    },
                }}
            >
                {categories.map((category) => (
                    <Tab
                        key={category}
                        label={category.charAt(0).toUpperCase() + category.slice(1)}
                        value={category}
                    />
                ))}
            </Tabs>

            <ImageList variant="masonry" cols={isXs ? 1 : isSm ? 2 : isMd ? 3 : 4} gap={8} sx={{ maxHeight: '850px' }}>
                {currentPhotos.map((photo, index) => (
                    <ImageListItem 
                        key={`${photo.id}-${index}`}
                        onClick={() => handleImageClick(photo)}
                        sx={{ 
                            cursor: 'pointer',
                            '&:hover': {
                                opacity: 0.8,
                                transition: 'opacity 0.3s ease-in-out'
                            }
                        }}
                    >
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            layout="responsive"
                            width={photo.src.width}
                            height={photo.src.height}
                            className='object-cover max-h-[300px]'
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <Modal
                open={selectedImage !== null}
                onClose={handleCloseModal}
                aria-labelledby="modal-image"
                aria-describedby="modal-image-description"
                sx={modalStyle}
                onClick={handleCloseModal}
            >
                <Box>
                    {selectedImage && (
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            width={selectedImage.src.width}
                            height={selectedImage.src.height}
                            priority
                        />
                    )}
                </Box>
            </Modal>

            {pageCount > 1 && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Pagination
                        count={pageCount}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                        size="large"
                    />
                </Box>
            )}

            <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                Page {currentPage} sur {pageCount}
            </Typography>
        </Box>
    );
}