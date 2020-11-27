import { NextApiRequest, NextApiResponse } from 'next';
import { getSandwichesById } from '../../../../util/dbmenu';

//
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { sandwichesId } = request.body;

  try {
    await getSandwichesById(sandwichesId);
  } catch (err) {
    return response.status(500).send({ success: false });
  }
  response.send({ success: true });
}
