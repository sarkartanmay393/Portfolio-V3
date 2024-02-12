import { type NextApiRequest, type NextApiResponse } from "next";
import type HashnodeResponse from "~/interfaces/hashnodeResponse";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const endCursor = req.body as string;
  const hashnodeResp = await queryBlogs(endCursor ? endCursor : "");
  return res.json(hashnodeResp);
}

const queryBlogs = async (endCursor: string) => {
  const hashnodeApi = "https://gql.hashnode.com";

  try {
    const resp = await fetch(hashnodeApi, {
      method: "POST",
      headers: {
        Authorization: process.env.HASHNODE_TOKEN ?? "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `{
          publication(host: "tanmaysarkar.hashnode.dev") {
            posts(first: 6, after: ${endCursor}) {
              totalDocuments
              pageInfo {
                hasNextPage
                endCursor
              }
              edges {
                node {
                  id
                  title
                  publishedAt
                  url
                  readTimeInMinutes
                  views
                  coverImage {
                    url
                  }
                }
              }
            }
          }
        }`,
      }),
    });

    const json = (await resp.json()) as { data: HashnodeResponse };
    console.log(json);

    if (!resp.ok) {
      throw new Error("Error");
    }

    const { data } = json.data;
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
