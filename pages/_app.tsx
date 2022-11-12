import React, { useEffect } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StylesProvider, createGenerateClassName } from '@mui/styles'
import { DataContext } from '../context/DataContext'
import { fetchData } from '../src/utils/api';
import { filterOptions, MAX_PRICE, MIN_PRICE } from '../src/helpers/constants'
import { RequestParams, ResponseDataType } from '../src/helpers/types';


function MyApp({ Component, pageProps }: AppProps) {

  const [data, setData] = React.useState<ResponseDataType[]>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [minPrice, setMinPrice] = React.useState<number>(MIN_PRICE);
  const [maxPrice, setMaxPrice] = React.useState<number>(MAX_PRICE);
  const [selectedVehicleTypes, setSelectedVehicleTypes] = React.useState<string[]>(filterOptions.map(item => item.type));
  const [isDataEnd, setDataEnd] = React.useState<boolean>(false);
  const [instantBookable, setInstantBookable] = React.useState<boolean | undefined>();

  const handleFetch = async () => {
    const requestBody: RequestParams = {
      page: 1,
      minPrice,
      maxPrice,
      vehicleTypes: selectedVehicleTypes,
      instantBookable
    }
    const receivedData = await fetchData(requestBody)
    setCurrentPage(1)
    setData(receivedData.items);
    if (receivedData.count === receivedData.items.length || receivedData.count === 0) {
      setDataEnd(true)
    } else {
      setDataEnd(false)
    }
  }

  const handleLoadMore = async () => {
    const requestBody: RequestParams = {
      page: currentPage,
      minPrice,
      maxPrice,
      vehicleTypes: selectedVehicleTypes,
      instantBookable
    }
    const response = await fetchData(requestBody);
    const newData = [...data, ...response.items];
    setData(newData);
    if (response.count === newData.length || response.count === 0) {
      setDataEnd(true)
    }
  }

  useEffect(() => {
    handleFetch();
  }, [minPrice, maxPrice, selectedVehicleTypes, instantBookable])

  useEffect(() => {
    if (currentPage > 1) {
      handleLoadMore()
    }
  }, [currentPage])


  return (
    <DataContext.Provider value={{
      data,
      setData,
      currentPage,
      setCurrentPage,
      minPrice,
      setMinPrice,
      maxPrice,
      setMaxPrice,
      selectedVehicleTypes,
      setSelectedVehicleTypes,
      isDataEnd,
      setDataEnd,
      instantBookable,
      setInstantBookable
    }}>
      <StylesProvider generateClassName={createGenerateClassName({ productionPrefix: 'c' })}>
        <Component {...pageProps} />
      </StylesProvider>
    </DataContext.Provider>
  )
}

export default MyApp
