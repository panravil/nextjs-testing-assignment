import { FilterOption } from "./types";

export const PAGE_LIMIT = 6;

export const MIN_PRICE = 1200;
export const MAX_PRICE = 11200;


export const filterOptions: FilterOption[] = [
    {
        title: 'Campervan',
        type: 'Campervan',
        content: 'Obytka s rozměry osobáku, se kterou dojedete všude.'
    },
    {
        title: 'Integrál',
        type: 'Intergrated',
        content: 'Král mezi karavany. Luxus na kolech.'
    },
    {
        title: 'Vestavba',
        type: 'BuiltIn',
        content: 'Celý byt geniálně poskládaný do dodávky.'
    },
    {
        title: 'Přívěs',
        type: 'Alcove',
        content: 'Tažný karavan za vaše auto. Od kapkovitých až po rodinné.'
    },
]

export const bookList: string[] = [
    'Všechno',
    'Ano',
    'Ne'
]