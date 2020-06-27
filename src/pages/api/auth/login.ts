import next, { NextApiRequest, NextApiResponse } from 'next'
import auth0 from '../../../auth/auth0';
import { BAD_REQUEST } from '../../../http/codes';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    console.log("velkommen")
}