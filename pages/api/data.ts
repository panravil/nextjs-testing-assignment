import type { NextApiRequest, NextApiResponse } from 'next'
import { PAGE_LIMIT } from '../../src/helpers/constants';

import data from '../../src/__nemazat/data.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {


  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  }

  let filteredData = data.items;

  if(req.body.minPrice) {
    filteredData = filteredData.filter((element) => element.price >= req.body.minPrice);
  }

  if(req.body.maxPrice) {
    filteredData = filteredData.filter((element) => element.price <= req.body.maxPrice);
  }

  if(req.body.vehicleTypes.length > 0) {
    filteredData = filteredData.filter((element) => req.body.vehicleTypes.find((item: string) => item === element.vehicleType))
  }

  if(typeof(req.body.instantBookable) !== "undefined") {
    filteredData = filteredData.filter((element) => element.instantBookable === req.body.instantBookable)
  }

  const page = req.body.page ? req.body.page : 1;
  const limit = PAGE_LIMIT;

  if ((page - 1) * limit >= filteredData.length){
    res.json({count:0, items:[]});
    return;
  }
  const returnData = filteredData.slice((page - 1) * limit, page * limit);

  const newData = {
    count: filteredData.length,
    items: returnData.map(({ location, instantBookable, name, passengersCapacity, pictures, sleepCapacity, price, toilet, shower, vehicleType }) => {
      return {
        location,
        instantBookable,
        name,
        passengersCapacity,
        sleepCapacity,
        price,
        vehicleType,
        toilet,
        shower,
        // toilet: [true, false][getRandomInt(2)],
        // shower: [true, false][getRandomInt(2)],
        // vehicleType: ['Campervan', 'Intergrated', 'Alcove', 'BuiltIn'][getRandomInt(4)],
        pictures,
      }
    })
  }

  res.status(200).json(newData)
}
