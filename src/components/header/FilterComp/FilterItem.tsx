import React, { useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from '../../../../context/DataContext';

interface PropTypes extends React.HtmlHTMLAttributes<unknown> {
    title: string;
    content: string;
    type: string;
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
        min-width: 156px;
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

export default function FilterItem ({title, content, type}: PropTypes): JSX.Element {

    const [selected, setSelected] = React.useState<boolean>(false);

    const {
        selectedVehicleTypes,
        setSelectedVehicleTypes,
    } = useContext(DataContext)

    const handleClick = async () => {
        
        let newVehicleTypes;

        // check old selected state
        if(!selected)
            newVehicleTypes = [...selectedVehicleTypes, type];
        else
            newVehicleTypes = selectedVehicleTypes.filter(vehicleType => vehicleType !== type);
        
        setSelectedVehicleTypes(newVehicleTypes);
        setSelected(!selected);

    }

    return (
        <Container selected={selected} onClick={handleClick}>
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