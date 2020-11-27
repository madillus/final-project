import { NextApiRequest, NextApiResponse } from 'next';
import {
  getDessertsById,
  updateDessertsById,
  deleteDessertsById,
} from '../../../../util/dbmenu';
import { Desserts } from '../../../../util/types';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const dessertsId = request.query.id as string;

  if (!/^\d+$/.test(dessertsId)) {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'application/json');
    return response.end(JSON.stringify({ errors: 'Not found' }));
  }

  let desserts: Desserts | undefined | {} = {};

  if (request.method === 'GET') {
    desserts = await getDessertsById(dessertsId);
  } else if (request.method === 'PATCH') {
    const newdesserts = request.body.desserts;
    desserts = await updateDessertsById(dessertsId, newdesserts);
  } else if (request.method === 'DELETE') {
    desserts = await deleteDessertsById(dessertsId);
  }
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ desserts: desserts }));
}

// export  async function handler2(
//   request: NextApiRequest,
//   response: NextApiResponse,
// ) {
//   const dessertsId = request.query.id as string;

//   if (!/^\d+$/.test(dessertsId)) {
//     response.statusCode = 404;
//     response.setHeader('Content-Type', 'application/json');
//     return response.end(JSON.stringify({ errors: 'Not found' }));
//   }

//   let desserts: desserts | undefined | {} = {};

//   if (request.method === 'GET') {
//     desserts = await getdessertsById(dessertsId);
//   } else if (request.method === 'PATCH') {
//     const newdesserts = request.body.desserts;
//     desserts = await updatedessertsById(dessertsId, newdesserts);
//   } else if (request.method === 'DELETE') {
//     desserts = await deletedessertsById(dessertsId);
//   }

//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'application/json');
//   response.end(JSON.stringify({ desserts: desserts }));
// }
