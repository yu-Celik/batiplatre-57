'use client'

import { heightHeader } from '@/libs/theme';
import Grid from '@mui/material/Unstable_Grid2';
import { Stack, Button } from '@mui/material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
type Props = {
    pages: { label: string, path: string, display?: string }[]
}
export default function RenderTablet({ pages }: Props) {
    const location = usePathname();

    return (
        <Grid id={'RenderTablet'} xs={0} sm={12} md={0} display={{ xs: 'none', sm: 'flex', md: 'none' }} alignItems={'center'} minHeight={heightHeader} justifyContent={'center'}>
            {pages.map((page) => (
                <Stack key={page.label} sx={{ my: 2 }} alignItems={'center'} justifyContent={'center'}>
                    <Button
                        component={Link}
                        href={page.path}
                        variant="text"
                        color="primary"
                        aria-controls="header"
                        aria-label={`Naviguer à ${page.label}`}
                        role="link"
                        sx={{
                            textAlign: 'center',
                            width: 'max-content',
                            minHeight: '61px',
                            paddingX: '1rem',
                            '&.MuiButton-text': {
                                border: 'none',
                                ...(location === page.path && {
                                    color: 'var(--mui-palette-primary-main)',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        display: 'block',
                                        height: '2px',
                                        width: '100%',
                                        background: 'var(--mui-palette-primary-main)'
                                    }
                                }),
                            }
                        }}
                    >
                        {page.label.includes('&') ? (
                            <>
                                {page.label.split(' & ')[0]} & <br />{page.label.split(' & ')[1]}
                            </>
                        ) : (
                            page.label
                        )}
                    </Button>
                </Stack>
            ))}
        </Grid>
    );
}