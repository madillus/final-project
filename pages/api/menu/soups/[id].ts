import { NextApiRequest, NextApiResponse } from 'next';
import {
  getSoupsById,
  updateSoupsById,
  deleteSoupsById,
} from '../../../../util/dbmenu';
import { Soups } from '../../../../util/types';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const soupsId = request.query.id as string;

  if (!/^\d+$/.test(soupsId)) {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'application/json');
    return response.end(JSON.stringify({ errors: 'Not found' }));
  }

  let soups: Soups | undefined | {} = {};

  if (request.method === 'GET') {
    soups = await getSoupsById(soupsId);
  } else if (request.method === 'PATCH') {
    const newsoups = request.body.soups;
    soups = await updateSoupsById(soupsId, newsoups);
  } else if (request.method === 'DELETE') {
    soups = await deleteSoupsById(soupsId);
  }
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ soups: soups }));
}

// export  async function handler2(
//   request: NextApiRequest,
//   response: NextApiResponse,
// ) {
//   const soupsId = request.query.id as string;

//   if (!/^\d+$/.test(soupsId)) {
//     response.statusCode = 404;
//     response.setHeader('Content-Type', 'application/json');
//     return response.end(JSON.stringify({ errors: 'Not found' }));
//   }

//   let soups: soups | undefined | {} = {};

//   if (request.method === 'GET') {
//     soups = await getsoupsById(soupsId);
//   } else if (request.method === 'PATCH') {
//     const newsoups = request.body.soups;
//     soups = await updatesoupsById(soupsId, newsoups);
//   } else if (request.method === 'DELETE') {
//     soups = await deletesoupsById(soupsId);
//   }

//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'application/json');
//   response.end(JSON.stringify({ soups: soups }));
// }
