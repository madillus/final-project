import { NextApiRequest, NextApiResponse } from 'next';
import {
  getSausagesById,
  updateSausagesById,
  deleteSausagesById,
} from '../../../../util/dbmenu';
import { Sausages } from '../../../../util/types';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const sausagesId = request.query.id as string;

  if (!/^\d+$/.test(sausagesId)) {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'application/json');
    return response.end(JSON.stringify({ errors: 'Not found' }));
  }

  let sausages: Sausages | undefined | {} = {};

  if (request.method === 'GET') {
    sausages = await getSausagesById(sausagesId);
  } else if (request.method === 'PATCH') {
    const newsausages = request.body.sausages;
    sausages = await updateSausagesById(sausagesId, newsausages);
  } else if (request.method === 'DELETE') {
    sausages = await deleteSausagesById(sausagesId);
  }
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ sausages: sausages }));
}

// export  async function handler2(
//   request: NextApiRequest,
//   response: NextApiResponse,
// ) {
//   const sausagesId = request.query.id as string;

//   if (!/^\d+$/.test(sausagesId)) {
//     response.statusCode = 404;
//     response.setHeader('Content-Type', 'application/json');
//     return response.end(JSON.stringify({ errors: 'Not found' }));
//   }

//   let sausages: sausages | undefined | {} = {};

//   if (request.method === 'GET') {
//     sausages = await getsausagesById(sausagesId);
//   } else if (request.method === 'PATCH') {
//     const newsausages = request.body.sausages;
//     sausages = await updatesausagesById(sausagesId, newsausages);
//   } else if (request.method === 'DELETE') {
//     sausages = await deletesausagesById(sausagesId);
//   }

//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'application/json');
//   response.end(JSON.stringify({ sausages: sausages }));
// }
