import { NextApiRequest, NextApiResponse } from 'next';
import { getDessertsById } from '../../../../util/dbmenu';

//
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { dessertsId } = request.body;

  try {
    await getDessertsById(dessertsId);
  } catch (err) {
    return response.status(500).send({ success: false });
  }
  response.send({ success: true });
}
