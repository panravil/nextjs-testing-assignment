import React from 'react';
import styled from 'styled-components';
import ClickAwayListener from '@mui/base/ClickAwayListener'
import { bookList } from '../../helpers/constants';

const Container = styled.div`
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #EDEAE3;
    position: relative;
    width: 176px;
`
const Input = styled.input`
    outline: none;
    border: none;
    width: 144px;
    border-radius: 8px;
    padding: 14px 0px 14px 12px;
    font-size: 16px;
    line-height: 21px;
    &:disabled {
        background-color: white;
    }
`
const Menu = styled.div`
    position: absolute;
    width: 176px;
    background-color: white;
    z-index: 1000;
    border-top: 1px solid #EDEAE3;
    border-left: 1px solid #EDEAE3;
    border-right: 1px solid #EDEAE3;
`
const Item = styled.div`
    padding: 14px 12px;
    font-size: 16px;
    line-height: 21px;
    border-bottom: 1px solid #EDEAE3;
    cursor: pointer;
    &:hover {
        background-color: #dedcd8;
    }
`

export default function Select(): JSX.Element {

    const [showMenu, setShowMenu] = React.useState<boolean>(false);
    const [selectedItem, setSelectedItem] = React.useState<string>('');

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
        setShowMenu(false);
    }

    return (
        <React.Fragment>
            <Container>
                <Input value={selectedItem} disabled></Input>
                <div style={{ cursor: "pointer" }} onClick={() => setShowMenu(!showMenu)}>
                    <svg style={{ marginRight: '8px' }} id="expand_more_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path id="Path_11" data-name="Path 11" d="M24,24H0V0H24Z" fill="none" opacity="0.87" />
                        <path id="Path_12" data-name="Path 12" d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" fill="#edeae3" />
                    </svg>
                </div>
            </Container>
            {
                showMenu ?
                    <ClickAwayListener onClickAway={() => setShowMenu(false)}>
                        <Menu>
                            {
                                bookList.map((item, index) => (
                                    <Item key={index} onClick={() => handleItemClick(item)}>
                                        {
                                            item
                                        }
                                    </Item>
                                ))
                            }
                        </Menu>
                    </ClickAwayListener>
                    : <></>
            }
        </React.Fragment>
    )
}