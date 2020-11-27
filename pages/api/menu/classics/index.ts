import { NextApiRequest, NextApiResponse } from 'next';
import { getClassicsById } from '../../../../util/dbmenu';

//
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { classicsId } = request.body;

  try {
    await getClassicsById(classicsId);
  } catch (err) {
    return response.status(500).send({ success: false });
  }
  response.send({ success: true });
}
