import axios from 'axios'
import { RequestParams, ResponseAPI } from '../helpers/types';

export const fetchData = async (payload: RequestParams): Promise<ResponseAPI> => {
    const res = await axios.post('http://localhost:3000/api/data', payload);
    if (res.status === 404) throw Error(res.data.message)
    return res.data;
}