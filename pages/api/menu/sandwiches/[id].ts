import { NextApiRequest, NextApiResponse } from 'next';
import {
  getSandwichesById,
  updateSandwichesById,
  deleteSandwichesById,
} from '../../../../util/dbmenu';
import { Sandwiches } from '../../../../util/types';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const sandwichesId = request.query.id as string;

  if (!/^\d+$/.test(sandwichesId)) {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'application/json');
    return response.end(JSON.stringify({ errors: 'Not found' }));
  }

  let sandwiches: Sandwiches | undefined | {} = {};

  if (request.method === 'GET') {
    sandwiches = await getSandwichesById(sandwichesId);
  } else if (request.method === 'PATCH') {
    const newsandwiches = request.body.sandwiches;
    sandwiches = await updateSandwichesById(sandwichesId, newsandwiches);
  } else if (request.method === 'DELETE') {
    sandwiches = await deleteSandwichesById(sandwichesId);
  }
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ sandwiches: sandwiches }));
}

// export  async function handler2(
//   request: NextApiRequest,
//   response: NextApiResponse,
// ) {
//   const sandwichesId = request.query.id as string;

//   if (!/^\d+$/.test(sandwichesId)) {
//     response.statusCode = 404;
//     response.setHeader('Content-Type', 'application/json');
//     return response.end(JSON.stringify({ errors: 'Not found' }));
//   }

//   let sandwiches: sandwiches | undefined | {} = {};

//   if (request.method === 'GET') {
//     sandwiches = await getsandwichesById(sandwichesId);
//   } else if (request.method === 'PATCH') {
//     const newsandwiches = request.body.sandwiches;
//     sandwiches = await updatesandwichesById(sandwichesId, newsandwiches);
//   } else if (request.method === 'DELETE') {
//     sandwiches = await deletesandwichesById(sandwichesId);
//   }

//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'application/json');
//   response.end(JSON.stringify({ sandwiches: sandwiches }));
// }
