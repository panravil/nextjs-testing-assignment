import React from 'react';
import styled from "styled-components";
import Header from './header/Header';

interface PropTypes extends React.HTMLAttributes<unknown> {
  children: React.ReactNode
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`

export default function Layout({ children }: PropTypes): JSX.Element {
  return (
    <Container>
      <div style={{flex: '0 0 auto'}}>
        <Header></Header>
      </div>
      <div style={{flex: '1 1 auto'}}>
        {
          children
        }
      </div>

    </Container>
  )
}