import React, {
    useCallback,
    useEffect,
    useState
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import { IconButton, IconButtonProps } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
}

export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}

interface ArrowButtonProps extends Omit<IconButtonProps, 'disabled'> {
    disabled?: boolean
}

export const PrevButton: React.FC<ArrowButtonProps> = ({ disabled, ...props }) => {
    return (
        <IconButton
            disabled={disabled}
            sx={{
                color: 'primary.main',
                '&:hover': {
                    backgroundColor: 'action.hover',
                },
                '&.Mui-disabled': {
                    color: 'action.disabled',
                },
            }}
            {...props}
        >
            <ArrowBackIosNewIcon />
        </IconButton>
    )
}

export const NextButton: React.FC<ArrowButtonProps> = ({ disabled, ...props }) => {
    return (
        <IconButton
            disabled={disabled}
            sx={{
                color: 'primary.main',
                '&:hover': {
                    backgroundColor: 'action.hover',
                },
                '&.Mui-disabled': {
                    color: 'action.disabled',
                },
            }}
            {...props}
        >
            <ArrowForwardIosIcon />
        </IconButton>
    )
}