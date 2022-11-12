import React from 'react';
import styled from 'styled-components';
import Select from '../buttons/Select';

const Container = styled.div`
    padding: 23px 16px 23px 16px;
    border-bottom: 1px solid #EDEAE3;
    border-left: 1px solid #EDEAE3;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    overflow: auto;
    @media (max-width: 400px) {
        flex-grow: 0;
        flex-shrink: 0;
    }
`
const Title = styled.div`
    font-size: 16px;
    color: #9C8C8C;
    line-height: 21px;
    margin-right: 8px;
`
const FlexRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`

export default function BookComp(): JSX.Element {
    return (
        <Container>
            <FlexRow>
                <Title>
                    Okamžitá rezervace
                </Title>
                <svg id="Icon_Action_Filter" data-name="Icon / Action / Filter" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <g id="light-mode-flash-on">
                        <path id="Combined_Shape" data-name="Combined Shape" d="M0,8a8,8,0,1,1,8,8A8.009,8.009,0,0,1,0,8ZM1,8A7,7,0,1,0,8,1,7.008,7.008,0,0,0,1,8Zm5.129,5.836A.5.5,0,0,1,6,13.45L6.448,9H5.672a1,1,0,0,1-.958-1.288l1.2-4A1,1,0,0,1,6.872,3H10.19a1,1,0,0,1,.894,1.446L10.309,6H11.5a.5.5,0,0,1,.408.79l-5,7a.5.5,0,0,1-.778.045ZM6.87,4l-1.2,4H7a.5.5,0,0,1,.5.549l-.313,3.132L10.529,7H9.5a.5.5,0,0,1-.448-.724L10.191,4H6.871Z" fill="#ff5e55" />
                    </g>
                </svg>
            </FlexRow>
            <Select></Select>
        </Container>
    )
}