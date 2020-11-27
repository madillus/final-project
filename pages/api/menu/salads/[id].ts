import { NextApiRequest, NextApiResponse } from 'next';
import {
  getSaladsById,
  updateSaladsById,
  deleteSaladsById,
} from '../../../../util/dbmenu';
import { Salads } from '../../../../util/types';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const saladsId = request.query.id as string;

  if (!/^\d+$/.test(saladsId)) {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'application/json');
    return response.end(JSON.stringify({ errors: 'Not found' }));
  }

  let salads: Salads | undefined | {} = {};

  if (request.method === 'GET') {
    salads = await getSaladsById(saladsId);
  } else if (request.method === 'PATCH') {
    const newsalads = request.body.salads;
    salads = await updateSaladsById(saladsId, newsalads);
  } else if (request.method === 'DELETE') {
    salads = await deleteSaladsById(saladsId);
  }
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ salads: salads }));
}

// export  async function handler2(
//   request: NextApiRequest,
//   response: NextApiResponse,
// ) {
//   const saladsId = request.query.id as string;

//   if (!/^\d+$/.test(saladsId)) {
//     response.statusCode = 404;
//     response.setHeader('Content-Type', 'application/json');
//     return response.end(JSON.stringify({ errors: 'Not found' }));
//   }

//   let salads: salads | undefined | {} = {};

//   if (request.method === 'GET') {
//     salads = await getsaladsById(saladsId);
//   } else if (request.method === 'PATCH') {
//     const newsalads = request.body.salads;
//     salads = await updatesaladsById(saladsId, newsalads);
//   } else if (request.method === 'DELETE') {
//     salads = await deletesaladsById(saladsId);
//   }

//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'application/json');
//   response.end(JSON.stringify({ salads: salads }));
// }
