import { NextApiHandler } from 'next';


const handler: NextApiHandler = (req, res) => {
  const authorization = req.headers.authorization;
  /*
        Basic Authentication: base64encoded string
        string :- email:password | clientId:secret
    */

  if (!authorization)
    return res
      .status(401)
      .json({ loggedIn: false, error: 'Missing Auth token' });

  const [tokenType, encodedToken] = authorization.split(' '); //Basic ZW1haWw6cGFzc3dvcmQ=
  if (tokenType.toLowerCase() !== 'basic')
    return res
      .status(401)
      .json({ loggedIn: false, error: 'Invalid Authentication Type' });

  const decodedToken = Buffer.from(encodedToken, 'base64').toString('utf-8');
  const [email, password] = decodedToken.split(':');

  return res.status(200).json({ email, password, loggedIn: true }); // {email:email,password:password}
};

export default handler;