/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextApiResponse, type NextApiRequest } from "next";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const resp = await fetch(
    "https://gist.githubusercontent.com/sarkartanmay393/48e4abba0771ef804c4a3a17df08f4d9/raw/455ab529a274ce405b2cf7b2fd13b148a74af428/portfolio_gist.txt"
  );

  const data = await resp.json();
  // console.log(data.ProjectDetails);

  return res.status(200).json({ data: data.ProjectDetails });
}
