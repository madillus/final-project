import { NextApiRequest, NextApiResponse } from 'next';
import {
  getSeasonalById,
  updateSeasonalById,
  deleteSeasonalById,
} from '../../../../util/dbmenu';
import { Seasonal } from '../../../../util/types';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const seasonalId = request.query.id as string;

  if (!/^\d+$/.test(seasonalId)) {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'application/json');
    return response.end(JSON.stringify({ errors: 'Not found' }));
  }

  let seasonal: Seasonal | undefined | {} = {};

  if (request.method === 'GET') {
    seasonal = await getSeasonalById(seasonalId);
  } else if (request.method === 'PATCH') {
    const newseasonal = request.body.seasonal;
    seasonal = await updateSeasonalById(seasonalId, newseasonal);
  } else if (request.method === 'DELETE') {
    seasonal = await deleteSeasonalById(seasonalId);
  }
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ seasonal: seasonal }));
}

// export  async function handler2(
//   request: NextApiRequest,
//   response: NextApiResponse,
// ) {
//   const seasonalId = request.query.id as string;

//   if (!/^\d+$/.test(seasonalId)) {
//     response.statusCode = 404;
//     response.setHeader('Content-Type', 'application/json');
//     return response.end(JSON.stringify({ errors: 'Not found' }));
//   }

//   let seasonal: Seasonal | undefined | {} = {};

//   if (request.method === 'GET') {
//     seasonal = await getSeasonalById(seasonalId);
//   } else if (request.method === 'PATCH') {
//     const newseasonal = request.body.seasonal;
//     seasonal = await updateSeasonalById(seasonalId, newseasonal);
//   } else if (request.method === 'DELETE') {
//     seasonal = await deleteSeasonalById(seasonalId);
//   }

//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'application/json');
//   response.end(JSON.stringify({ seasonal: seasonal }));
// }
