import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "../src/components/LayoutComponents";
import Card from '../src/components/card/Card';
import { DataContext } from '../context/index';

const BodyContainer = styled.div`
  width: 100%;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const Button = styled.button`
  background-color: #119383;
  border-radius: 8px;
  font-size: 16px;
  color: white;
  font-weight: bold;
  padding: 14px 35px;
  outline: none;
  border: none;
  cursor: pointer;
`

const Home = () => {



  
  const { data } = React.useContext(DataContext);


  return (
    <Layout>
      <BodyContainer>
        {
          data && data.map((item, index) => (
            <Card {...item} key={index}></Card>
          ))
        }
      </BodyContainer>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '16px', paddingBottom: '115px' }}>
        <Button>
          Načíst další
        </Button>
      </div>
    </Layout>
  )
}



export default Home
