import React, { SetStateAction, useEffect } from 'react';
import { filterOptions, MAX_PRICE, MIN_PRICE } from '../src/helpers/constants';
import { FilterOption, RequestParams, ResponseAPI, ResponseDataType } from '../src/helpers/types'
import { fetchData } from '../src/utils/api';

interface ProviderPropTypes {
    children: React.ReactNode
}
export interface ContextType {
    data: ResponseDataType[],
    setData: React.Dispatch<SetStateAction<ResponseDataType[]>>,
    currentPage: number,
    setCurrentPage: React.Dispatch<SetStateAction<number>>,
    minPrice: number,
    setMinPrice: React.Dispatch<SetStateAction<number>>,
    maxPrice: number,
    setMaxPrice: React.Dispatch<SetStateAction<number>>,
    selectedVehicleTypes: string[],
    setSelectedVehicleTypes: React.Dispatch<SetStateAction<string[]>>,
    isDataEnd: boolean,
    setDataEnd: React.Dispatch<SetStateAction<boolean>>,
    instantBookable: boolean | undefined,
    setInstantBookable: React.Dispatch<SetStateAction<boolean | undefined>>
}

export const DataContext = React.createContext({} as ContextType);

export default function DataProvider({ children }: ProviderPropTypes): JSX.Element {

    const [data, setData] = React.useState<ResponseDataType[]>([]);
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [minPrice, setMinPrice] = React.useState<number>(MIN_PRICE);
    const [maxPrice, setMaxPrice] = React.useState<number>(MAX_PRICE);
    const [selectedVehicleTypes, setSelectedVehicleTypes] = React.useState<string[]>([]);
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
        const receivedData: ResponseAPI = await fetchData(requestBody)
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
        const response: ResponseAPI = await fetchData(requestBody);
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
        <DataContext.Provider
            value={{
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
            }}
        >
            {
                children
            }
        </DataContext.Provider>
    )
}