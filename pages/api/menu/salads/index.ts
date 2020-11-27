import { NextApiRequest, NextApiResponse } from 'next';
import { getSaladsById } from '../../../../util/dbmenu';

//
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { saladsId } = request.body;

  try {
    await getSaladsById(saladsId);
  } catch (err) {
    return response.status(500).send({ success: false });
  }
  response.send({ success: true });
}
