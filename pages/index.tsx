import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "../src/components/LayoutComponents";
import Card from "../src/components/card/Card";
import { ContextType, DataContext } from "../context/DataContext";
import { fetchData } from "../src/utils/api";
import { RequestParams } from "../src/helpers/types";

const BodyContainer = styled.div`
  width: 100%;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Button = styled.button`
  background-color: ${props => props.disabled ? '#ddd' : '#119383'};
  border-radius: 8px;
  font-size: 16px;
  color: white;
  font-weight: bold;
  padding: 14px 35px;
  outline: none;
  border: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const Home = () => {
  const {
    data,
    currentPage,
    setCurrentPage,
    setData,
    minPrice,
    maxPrice,
    selectedVehicleTypes,
    isDataEnd,
    instantBookable
  }: ContextType = React.useContext(DataContext);

  const handleLoadMore = async () => {
    setCurrentPage(currentPage + 1);
  };

  const intializeData = async () => {
    const requestBody: RequestParams = {
      page: 1,
      minPrice,
      maxPrice,
      vehicleTypes: selectedVehicleTypes,
      instantBookable
    }
    const response = await fetchData(requestBody);
    setData(response.items);
  };

  React.useEffect(() => {
    intializeData();
  }, []);

  return (
    <Layout>
      <BodyContainer>
        {data && data.length > 0 ? (
          data.map((item, index) => <Card {...item} key={index}></Card>)
        ) : (
          <h2>No Data</h2>
        )}
      </BodyContainer>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "16px",
          paddingBottom: "115px",
        }}
      >
        <Button disabled={ data.length === 0 || isDataEnd} onClick={handleLoadMore}>Načíst další</Button>
      </div>
    </Layout>
  );
};

export default Home;
