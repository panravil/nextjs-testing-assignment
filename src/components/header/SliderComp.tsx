import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Slider, OutlinedInput, InputAdornment } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MIN_PRICE } from '../../helpers/constants';
import { DataContext } from '../../../context/DataContext';



const Container = styled.div`
    padding: 23px 16px 23px 16px;
    border-bottom: 1px solid #EDEAE3;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    @media (max-width: 400px) {
        flex-grow: 0;
        flex-shrink: 0;
    }
`

const Title = styled.div`
    font-size: 16px;
    color: #9C8C8C;
    display: flex;
    width: 328px;
    justify-content: start;
    @media (max-width: 400px) {
        width: 100%;
    }
`

const FlexRow = styled.div`
    width: 328px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 400px) {
        width: 100%;
    }
`

const SliderBox = styled.div`
    width: 328px;
    @media (max-width: 400px) {
        width: 100%;
    }
`



const minDistance = 0;

export default function SliderComp(): JSX.Element {

    const { minPrice, setMinPrice, maxPrice, setMaxPrice, data, setData, currentPage, setCurrentPage, selectedVehicleTypes, setSelectedVehicleTypes } = useContext(DataContext);
    const [currentMinPrice, setCurrentMinPrice] = useState(0);
    const [currentMaxPrice, setCurrentMaxPrice] = useState(0);

    React.useEffect(() => {
        setCurrentMinPrice(minPrice);
        setCurrentMaxPrice(maxPrice);
    }, [minPrice, maxPrice])

    const styles = makeStyles({
        slider: {
            color: '#119383',
            width: 'calc(100% - 24px)',
            marginLeft: 12,
            '& .MuiSlider-rail': {
                backgroundColor: '#EDEAE3',
                height: 4
            },
            '& .MuiSlider-thumb': {
                width: 24,
                height: 24,
            }
        },
        outlinedInput: {
            borderRadius: 8,
            width: '156px',
            '& input': {
                fontSize: 16,
                padding: '14px 12px'
            }
        }
    });

    const classes = styles();

    const handleChange = async (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0)
            setCurrentMinPrice(MIN_PRICE + newValue[0] * 100)
        else
            setCurrentMaxPrice(MIN_PRICE + newValue[1] * 100)
    };

    const handleChangeCommited = async (
        event: React.SyntheticEvent | Event,
        newValue: number | number[]
    ) => {
        setMinPrice(currentMinPrice);
        setMaxPrice(currentMaxPrice);
    }


    return (
        <Container>
            <Title>
                Cena za den
            </Title>
            <SliderBox>
                <Slider
                    value={[(currentMinPrice - MIN_PRICE) / 100, (currentMaxPrice - MIN_PRICE) / 100]}
                    onChange={handleChange}
                    onChangeCommitted={handleChangeCommited}
                    valueLabelDisplay="off"
                    disableSwap
                    className={classes.slider}
                />
            </SliderBox>
            <FlexRow>
                <OutlinedInput
                    endAdornment={<InputAdornment position='end'>Kč</InputAdornment>}
                    inputProps={{
                        'aria-label': 'weight'
                    }}
                    className={classes.outlinedInput}
                    value={currentMinPrice}
                />
                <OutlinedInput
                    endAdornment={<InputAdornment position='end'>Kč</InputAdornment>}
                    inputProps={{
                        'aria-label': 'weight'
                    }}
                    className={classes.outlinedInput}
                    value={currentMaxPrice}
                />
            </FlexRow>
        </Container>
    )
}