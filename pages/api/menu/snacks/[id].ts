import { NextApiRequest, NextApiResponse } from 'next';
import {
  getSnacksById,
  updateSnacksById,
  deleteSnacksById,
} from '../../../../util/dbmenu';
import { Snacks } from '../../../../util/types';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const snacksId = request.query.id as string;

  if (!/^\d+$/.test(snacksId)) {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'application/json');
    return response.end(JSON.stringify({ errors: 'Not found' }));
  }

  let snacks: Snacks | undefined | {} = {};

  if (request.method === 'GET') {
    snacks = await getSnacksById(snacksId);
  } else if (request.method === 'PATCH') {
    const newsnacks = request.body.snacks;
    snacks = await updateSnacksById(snacksId, newsnacks);
  } else if (request.method === 'DELETE') {
    snacks = await deleteSnacksById(snacksId);
  }
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ snacks: snacks }));
}

// export  async function handler2(
//   request: NextApiRequest,
//   response: NextApiResponse,
// ) {
//   const snacksId = request.query.id as string;

//   if (!/^\d+$/.test(snacksId)) {
//     response.statusCode = 404;
//     response.setHeader('Content-Type', 'application/json');
//     return response.end(JSON.stringify({ errors: 'Not found' }));
//   }

//   let snacks: snacks | undefined | {} = {};

//   if (request.method === 'GET') {
//     snacks = await getsnacksById(snacksId);
//   } else if (request.method === 'PATCH') {
//     const newsnacks = request.body.snacks;
//     snacks = await updatesnacksById(snacksId, newsnacks);
//   } else if (request.method === 'DELETE') {
//     snacks = await deletesnacksById(snacksId);
//   }

//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'application/json');
//   response.end(JSON.stringify({ snacks: snacks }));
// }
