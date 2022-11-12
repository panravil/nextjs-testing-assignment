import '../styles/globals.css'
import React from 'react';
import axios from 'axios';
import type { AppProps } from 'next/app'
import { DataContext } from '../context'
import { ResponseDataType } from '../src/helpers/constants'

function MyApp({ Component, pageProps }: AppProps) {

  const [data, setData] = React.useState<ResponseDataType[]>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const fetchData = async (currentPage: number) => {
    const res = await axios.post('http://localhost:3000/api/data', {
      page: currentPage
    });
    setData(res.data.items);
  }

  React.useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <DataContext.Provider value={{
      data,
      setData,
      currentPage,
      setCurrentPage
    }}>
      <Component {...pageProps} />
    </DataContext.Provider>
  )
}

export default MyApp
