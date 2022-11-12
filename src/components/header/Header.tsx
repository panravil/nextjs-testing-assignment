import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import SliderComp from './SliderComp';
import FilterComp from './FilterComp/FilterComp';
import BookComp from './BookComp';


const HeaderContainer = styled.div`
    width: 100%;
`

const HeaderLogoContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center; 
    border-bottom: 1px solid #EDEAE3;
    margin-left: 16px;
`

const FlexRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    @media (max-width: 400px) {
        flex-direction: column;
    }
`

const SubHeaderBox = styled.div`
    width: 1280px;
    display: flex;
    justify-content: flex-start;
    @media (max-width: 1280px) {
        justify-content: center;
    }
`

const LgShow = styled.div`
    display: block;
    overflow: auto;
    @media (max-width: 1280px) {
        display: none;
    }
    @media (max-width: 400px) {
        display: block;        
    }
`

const LgHidden = styled.div`
    display: none;
    @media (max-width: 1280px) {
        display: block;   
    }
    @media (max-width: 400px) {
        display: none;   
    }
    overflow: auto;
`


export default function Header(): JSX.Element {
    return (
        <HeaderContainer>
            <HeaderLogoContainer>
                <SubHeaderBox>
                    <Image src={'/images/logo.png'} alt="logo" width={201} height={35.19} />
                </SubHeaderBox>
            </HeaderLogoContainer>
            <FlexRow>
                <SliderComp></SliderComp>
                <LgShow>
                    <FilterComp></FilterComp>
                </LgShow>
                <BookComp></BookComp>
            </FlexRow>
            <LgHidden>
                <FilterComp></FilterComp>
            </LgHidden>
        </HeaderContainer>
    )
}