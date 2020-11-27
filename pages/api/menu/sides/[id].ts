import { NextApiRequest, NextApiResponse } from 'next';
import {
  getSidesById,
  updateSidesById,
  deleteSidesById,
} from '../../../../util/dbmenu';
import { Sides } from '../../../../util/types';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const sidesId = request.query.id as string;

  if (!/^\d+$/.test(sidesId)) {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'application/json');
    return response.end(JSON.stringify({ errors: 'Not found' }));
  }

  let sides: Sides | undefined | {} = {};

  if (request.method === 'GET') {
    sides = await getSidesById(sidesId);
  } else if (request.method === 'PATCH') {
    const newsides = request.body.sides;
    sides = await updateSidesById(sidesId, newsides);
  } else if (request.method === 'DELETE') {
    sides = await deleteSidesById(sidesId);
  }
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ sides: sides }));
}

// export  async function handler2(
//   request: NextApiRequest,
//   response: NextApiResponse,
// ) {
//   const sidesId = request.query.id as string;

//   if (!/^\d+$/.test(sidesId)) {
//     response.statusCode = 404;
//     response.setHeader('Content-Type', 'application/json');
//     return response.end(JSON.stringify({ errors: 'Not found' }));
//   }

//   let sides: sides | undefined | {} = {};

//   if (request.method === 'GET') {
//     sides = await getsidesById(sidesId);
//   } else if (request.method === 'PATCH') {
//     const newsides = request.body.sides;
//     sides = await updatesidesById(sidesId, newsides);
//   } else if (request.method === 'DELETE') {
//     sides = await deletesidesById(sidesId);
//   }

//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'application/json');
//   response.end(JSON.stringify({ sides: sides }));
// }
