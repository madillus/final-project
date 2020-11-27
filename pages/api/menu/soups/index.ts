import { NextApiRequest, NextApiResponse } from 'next';
import { getSoupsById } from '../../../../util/dbmenu';

//
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { soupsId } = request.body;

  try {
    await getSoupsById(soupsId);
  } catch (err) {
    return response.status(500).send({ success: false });
  }
  response.send({ success: true });
}
