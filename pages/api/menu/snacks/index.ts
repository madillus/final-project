import { NextApiRequest, NextApiResponse } from 'next';
import { getSnacksById } from '../../../../util/dbmenu';

//
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { snacksId } = request.body;

  try {
    await getSnacksById(snacksId);
  } catch (err) {
    return response.status(500).send({ success: false });
  }
  response.send({ success: true });
}
