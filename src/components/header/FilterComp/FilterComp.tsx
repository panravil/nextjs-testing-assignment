import React from 'react';
import styled from 'styled-components';
import { FilterOption, filterOptions } from '../../../helpers/constants';
import FilterItem from './FilterItem';

const Container = styled.div`
    padding: 23px 16px;
    border-left: 1px solid #EDEAE3;
    border-bottom: 1px solid #EDEAE3;
    min-width: 672px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    @media (max-width: 400px) {
        min-width: unset;
        padding: 23px 16px 23px 0px;
    }
`

const Title = styled.div`
    font-size: 16px;
    color: #9C8C8C;
    line-height: 21px;
    margin-bottom: 16px;
    @media (max-width: 400px) {
        padding-left: 16px;
    }
`

const FlexRow = styled.div`
    display: flex;
    width: 100%;
    max-width: 100%;
    justify-content: space-between;
    @media (max-width: 400px) {
        flex-wrap: wrap;
    }
`

export default function FilterComp(): JSX.Element {
    return (
        <Container>
            <div style={{width: 672}}>
                <Title>
                    Typ karavanu
                </Title>
                <FlexRow>
                    {
                        filterOptions.map((filterOption: FilterOption, index) => (
                            <FilterItem {...filterOption} key={index}></FilterItem>
                        ))
                    }
                </FlexRow>

            </div>

        </Container>
    )
}