import { NextApiRequest, NextApiResponse } from 'next';
import { getSidesById } from '../../../../util/dbmenu';

//
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { sidesId } = request.body;

  try {
    await getSidesById(sidesId);
  } catch (err) {
    return response.status(500).send({ success: false });
  }
  response.send({ success: true });
}
