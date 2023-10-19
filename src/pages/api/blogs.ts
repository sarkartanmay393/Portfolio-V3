import axios from "axios";

import { type NextApiRequest, type NextApiResponse } from "next";
import type HashnodeResponse from "~/interfaces/hashnodeResponse";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const hashnodeApi = "http://api.hashnode.com/";
  const getHashnodeResponse = async (pageNo: number) => {
    const resp = await axios.post(hashnodeApi, {
      query: queryGeneratorPerPage(pageNo),
    });

    console.log(resp)

    return resp.data as HashnodeResponse;
  };

  let pageNo = 0;
  const hashnodeResp = await getHashnodeResponse(pageNo);
  let totalPostCount = hashnodeResp.data.user.numPosts;

  while (totalPostCount > 6) {
    const againHashnodeResp = await getHashnodeResponse(++pageNo);
    hashnodeResp.data.user.publication.posts.push(
      ...againHashnodeResp.data.user.publication.posts
    );
    totalPostCount -= 6;
  }

  return res.json(hashnodeResp);
}

const queryGeneratorPerPage = (pageNo: number) => {
  return `{
    user(username: "tanmaysarkar") {
      numPosts
      publication {
        posts(page: ${pageNo}) {
          title
          brief
          slug
          coverImage
          readTime
          dateAdded
          views
        }
      }
    }
  }`;
};
