
import { NextApiRequest, NextApiResponse } from 'next';
import {
  getBbqById,
  deleteBbqById,
  updateBbqById,
} from '../../../../util/dbmenu';
import { Bbq } from '../../../../util/types';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const bbqId = request.query.id as string;

  if (!/^\d+$/.test(bbqId)) {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'application/json');
    return response.end(JSON.stringify({ errors: 'Not found' }));
  }

  let bbq: Bbq | undefined | {} = {};

  if (request.method === 'GET') {
    bbq = await getBbqById(bbqId);
  } else if (request.method === 'PATCH') {
    const newbbq = request.body.bbq;
    bbq = await updateBbqById(bbqId, newbbq);
  } else if (request.method === 'DELETE') {
    bbq = await deleteBbqById(bbqId);
  }

  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ bbq: bbq }));
}