import React from 'react';
import styled from 'styled-components';

interface PropTypes extends React.HtmlHTMLAttributes<unknown> {
    title: string;
    content: string;
}

const Container = styled.div<{selected: boolean}>`
    width: 156px;
    padding: 11px 10px 8px 12px;
    border: ${props => props.selected ? '1px solid #119383' : '1px solid #EDEAE3'};
    border-radius: 8px;
    cursor: pointer;
    @media (max-width: 400px) {
        margin-top: 16px;
        margin-left: 16px;
    }
`

const Title = styled.div`
    font-size: 16px;
    line-height: 21px;
    color: black;
`

const Content = styled.div`
    width: 134px;
    height: 44px;
    font-size: 12px;
    line-height: 14px;
    color: #9C8C8C; 
    margin-top: 4px;
`

export default function FilterItem ({title, content}: PropTypes): JSX.Element {

    const [selected, setSelected] = React.useState<boolean>(false);

    return (
        <Container selected={selected} onClick={() => setSelected(!selected)}>
            <Title>
                {
                    title
                }
            </Title>
            <Content>
                {
                    content
                }
            </Content>
        </Container>
    )
}