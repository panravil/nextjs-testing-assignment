import React, { SetStateAction } from 'react';
import { ResponseDataType } from '../src/helpers/constants';

export interface ContextType {
    data: ResponseDataType[],
    setData: React.Dispatch<SetStateAction<ResponseDataType[]>>,
    currentPage: number,
    setCurrentPage: React.Dispatch<SetStateAction<number>>
}

export const DataContext = React.createContext({} as ContextType);

