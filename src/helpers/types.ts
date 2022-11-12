export type FilterOption = {
    title: string;
    content: string;
    type: string;
}


export type ResponseDataType = {
    location: string,
    instantBookable: boolean,
    name: string,
    passengersCapacity: number,
    sleepCapacity: number,
    price: number,
    toilet: boolean,
    shower: boolean,
    vehicleType: string,
    pictures: string[]
}

export type ResponseAPI = {
    count: number;
    items: ResponseDataType[];
}

export type RequestParams = {
    page?: number, 
    minPrice?: number, 
    maxPrice?: number, 
    vehicleTypes?: string[], 
    instantBookable?: boolean
}