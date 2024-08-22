'use client';

import React, { useMemo } from 'react';
import { Card, CardContent, Typography, Box, Chip, Paper } from '@mui/material';
import { loadIcon } from '@/app/utils/iconLoader';
import { IconName } from '@/app/utils/iconMap';

type ChipData = {
    icon: IconName;
    label: string;
};

type CardProcessProps = {
    title: string;
    subTitle: string;
    description: string;
    chips: ChipData[];
    icon: IconName;
};

export default function CardProcess({ title, subTitle, description, chips, icon }: CardProcessProps) {
    const IconComponent = loadIcon(icon);
    const IconComponents = useMemo(
        () =>
            chips.map((chip) => ({
                IconComponent: loadIcon(chip.icon),
                label: chip.label,
            })),
        [chips]
    );

    return (
        <Card component="article" sx={{ overflow: 'visible', position: 'relative', mb: 4 }}>
            <CardContent>
                <Typography variant="overline" color="text.secondary" component="p">
                    {subTitle}
                </Typography>
                <Typography variant="h2" sx={{ fontSize: '1.5rem', lineHeight: 1.2, mb: 1.5 }}>
                    {title}
                </Typography>
                <Typography variant="body2" gutterBottom>{description}</Typography>
                <Paper
                    sx={{
                        position: 'absolute',
                        top: '-5%',
                        right: '2.5%',
                        p: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    elevation={3}
                    aria-hidden="true"
                >
                    {IconComponent && <IconComponent sx={{ fontSize: '2rem', color: 'primary.main' }}/>}
                </Paper>

                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    {IconComponents.map(({ IconComponent, label }, index) => (
                        <Chip
                            icon={IconComponent && <IconComponent aria-hidden="true" sx={{ p: 0.25 }} />}
                            label={label}
                            variant="outlined"
                            key={index}
                            sx={{ mr: 0.5, mt: 0.5 }}
                        />
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
}