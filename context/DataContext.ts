import React, {SetStateAction} from 'react';
import {  ResponseDataType } from '../src/helpers/types'

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

export const DataContext  = React.createContext({} as ContextType);

