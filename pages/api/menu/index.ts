
import { NextApiRequest, NextApiResponse } from 'next';
import {  getBbqById } from '../../../util/dbmenu';

//
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const {bbqId} = request.body;

  try{
    await getBbqById(bbqId) ;
  } catch(err) {
    return response.status(500).send({ success: false});
  }
  response.send({ success: true});






}

















  //   let users;
//   let user;

//   if (request.method === 'GET') {
//     users = await getBbq();
//   } else if (request.method === 'POST') {
//     const newUser = request.body.user;
//     user = await insertBbq(newUser);
//   }

//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'application/json');
//   response.end(
//     JSON.stringify({
//       // Only add "users" key to object if users exists
//       // (eg. GET request)
//       ...(users ? { users: users } : {}),
//       // Only add "user" key to object if user exists
//       // (eg. POST request)
//       ...(user ? { user: user } : {}),
//     }),
//   );
// }
