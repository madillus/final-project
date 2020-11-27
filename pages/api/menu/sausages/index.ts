import { NextApiRequest, NextApiResponse } from 'next';
import { getSausagesById } from '../../../../util/dbmenu';

//
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { sausagesId } = request.body;

  try {
    await getSausagesById(sausagesId);
  } catch (err) {
    return response.status(500).send({ success: false });
  }
  response.send({ success: true });
}
