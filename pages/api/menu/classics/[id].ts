import { NextApiRequest, NextApiResponse } from 'next';
import {
  getClassicsById,
  updateClassicsById,
  deleteClassicsById,
} from '../../../../util/dbmenu';
import { Classics } from '../../../../util/types';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const classicsId = request.query.id as string;

  if (!/^\d+$/.test(classicsId)) {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'application/json');
    return response.end(JSON.stringify({ errors: 'Not found' }));
  }

  let classics: Classics | undefined | {} = {};

  if (request.method === 'GET') {
    classics = await getClassicsById(classicsId);
  } else if (request.method === 'PATCH') {
    const newclassics = request.body.classics;
    classics = await updateClassicsById(classicsId, newclassics);
  } else if (request.method === 'DELETE') {
    classics = await deleteClassicsById(classicsId);
  }
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ classics: classics }));
}

// export  async function handler2(
//   request: NextApiRequest,
//   response: NextApiResponse,
// ) {
//   const classicsId = request.query.id as string;

//   if (!/^\d+$/.test(classicsId)) {
//     response.statusCode = 404;
//     response.setHeader('Content-Type', 'application/json');
//     return response.end(JSON.stringify({ errors: 'Not found' }));
//   }

//   let classics: classics | undefined | {} = {};

//   if (request.method === 'GET') {
//     classics = await getclassicsById(classicsId);
//   } else if (request.method === 'PATCH') {
//     const newclassics = request.body.classics;
//     classics = await updateclassicsById(classicsId, newclassics);
//   } else if (request.method === 'DELETE') {
//     classics = await deleteclassicsById(classicsId);
//   }

//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'application/json');
//   response.end(JSON.stringify({ classics: classics }));
// }
