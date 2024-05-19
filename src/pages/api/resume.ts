/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextApiResponse, type NextApiRequest } from "next";

const GIST_LINK = process.env.NEXT_PUBLIC_GIST_RAW_LINK ?? "";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const resp = await fetch(GIST_LINK);

  const data = await resp.json();
  return res.status(200).json({ data: data.ResumeLink });
}
