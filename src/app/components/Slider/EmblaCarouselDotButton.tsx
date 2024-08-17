import React, {
    useCallback,
    useEffect,
    useState,
    memo
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import { IconButton, IconButtonProps } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

type UseDotButtonType = {
    selectedIndex: number
    scrollSnaps: number[]
    onDotButtonClick: (index: number) => void
}

export const useDotButton = (
    emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return
            emblaApi.scrollTo(index)
        },
        [emblaApi]
    )

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick
    }
}

interface DotButtonProps extends Omit<IconButtonProps, 'onClick'> {
    selected: boolean
    onClick: () => void
}

export const DotButton: React.FC<DotButtonProps> = memo(({ selected, onClick, ...props }) => {
    return (
        <IconButton
            onClick={onClick}
            sx={{
                color: selected ? 'primary.main' : 'action.disabled',
                '&:hover': {
                    backgroundColor: 'action.hover',
                },
            }}
            {...props}
        >
            <FiberManualRecordIcon fontSize="small" />
        </IconButton>
    )
})


DotButton.displayName = 'DotButton';
