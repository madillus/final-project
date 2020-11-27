import { NextApiRequest, NextApiResponse } from 'next';
import { getSeasonalById } from '../../../../util/dbmenu';

//
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { seasonalId } = request.body;

  try {
    await getSeasonalById(seasonalId);
  } catch (err) {
    return response.status(500).send({ success: false });
  }
  response.send({ success: true });
}
