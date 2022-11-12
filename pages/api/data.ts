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

  const page = req.body.currentPage ? req.body.currentPage : 1;
  const limit = PAGE_LIMIT;
  console.log("request body is ", req.body);
  const returnData = data.items.slice((page - 1) * limit, page * limit);

  const newData = {
    count: 30,
    items: returnData.map(({ location, instantBookable, name, passengersCapacity, pictures, sleepCapacity, price, toilet, shower, vehicleType  }) => {
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
