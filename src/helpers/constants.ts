export type FilterOption = {
    title: string;
    content: string;
}

export const PAGE_LIMIT = 6;

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

export const filterOptions: FilterOption[] = [
    {
        title: 'Campervan',
        content: 'Obytka s rozměry osobáku, se kterou dojedete všude.'
    },
    {
        title: 'Integrál',
        content: 'Král mezi karavany. Luxus na kolech.'
    },
    {
        title: 'Vestavba',
        content: 'Celý byt geniálně poskládaný do dodávky.'
    },
    {
        title: 'Přívěs',
        content: 'Tažný karavan za vaše auto. Od kapkovitých až po rodinné.'
    },
]

export const bookList: string[] = [
    'Yes',
    'No'
]