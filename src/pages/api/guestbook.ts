import clientPromise from "lib/mongodb";
import { type NextApiRequest, type NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("guestbook-p3");
  const guestbook = db.collection("Guestbook");

  switch (req.method) {
    case "GET":
      const guestMessages = await guestbook.find().sort({ date: -1 }).toArray();
      res.json(JSON.parse(JSON.stringify(guestMessages)));
      break;
    case "POST":
      const { insertedId } = await guestbook.insertOne(
        req.body as Record<string, string>
      );
      res.json({ insertedId: insertedId });
      break;
  }
}
