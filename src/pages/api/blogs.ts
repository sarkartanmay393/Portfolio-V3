/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextApiRequest, type NextApiResponse } from "next";

const HashnodeToken = process.env.NEXT_PUBLIC_HASHNODE_TOKEN;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { endCursor } = req.query as { endCursor: string };
  const hashnodeResp = await queryBlogs(endCursor);
  const posts = hashnodeResp.data.publication.posts as {
    totalDocuments: number;
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
    edges: [
      {
        node: {
          id: string;
          title: string;
          brief: string;
          publishedAt: string;
          url: string;
          readTimeInMinutes: number;
          views: number;
          coverImage: {
            url: string;
          };
        };
      }
    ];
  };
  const format = {
    blogs: posts.edges.map((n) => ({
      id: n.node.id,
      title: n.node.title,
      description: n.node.brief,
      publishedAt: n.node.publishedAt,
      url: n.node.url,
      readTimeInMinutes: n.node.readTimeInMinutes,
      views: n.node.views,
      image: n.node.coverImage.url,
    })),
    total: posts.totalDocuments,
    hasNext: posts.pageInfo.hasNextPage,
    endCursor: posts.pageInfo.endCursor,
  };

  // console.log(format);
  return res.status(200).json(format);
}

const queryBlogs = async (endCursor: string) => {
  const hashnodeApi = "https://gql.hashnode.com";

  try {
    const resp = await fetch(hashnodeApi, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HashnodeToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query ($endCursor: String) {
            publication(host: "tanmaysarkar.hashnode.dev") {
              posts(first: 6, after: $endCursor) {
                totalDocuments
                pageInfo {
                  hasNextPage
                  endCursor
                }
                edges {
                  node {
                    id
                    title
                    brief
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
          }
        `,
        variables: {
          endCursor: endCursor,
        },
      }),
    });

    const json = await resp.json();

    if (!resp.ok) {
      throw new Error("Error");
    }

    return json;
  } catch (err) {
    console.error(err);
    return null;
  }
};

// {
//     "publication": {
//         "posts": {
//             "totalDocuments": 12,
//             "pageInfo": {
//                 "hasNextPage": false,
//                 "endCursor": "NjMwMDBmODQ4YmVjM2QwYzQ1ODhkNWViXzIwMjItMDgtMTlUMjI6MzI6MzYuMzUxWg=="
//             },
//             "edges": [
//                 {
//                     "node": {
//                         "id": "63ab2a0c51443bfa954a9230",
//                         "title": "Get Free Swags as a beginner in Tech",
//                         "publishedAt": "2022-12-27T17:23:24.602Z",
//                         "url": "https://tanmaysarkar.hashnode.dev/get-free-swags-in-tech",
//                         "readTimeInMinutes": 2,
//                         "views": 469,
//                         "coverImage": {
//                             "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1672162034665/b61f30fb-0b2b-4d14-b1a5-c28490b40783.png"
//                         }
//                     }
//                 },
//                 {
//                     "node": {
//                         "id": "636769d7de3c871e2d19a5a7",
//                         "title": "Build Sudoku Solver Engine using Go",
//                         "publishedAt": "2022-11-06T08:01:27.000Z",
//                         "url": "https://tanmaysarkar.hashnode.dev/build-sudoku-solver-engine-using-go",
//                         "readTimeInMinutes": 7,
//                         "views": 442,
//                         "coverImage": {
//                             "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1667654155553/H-nukWZ2r.png"
//                         }
//                     }
//                 },
//                 {
//                     "node": {
//                         "id": "635a0cf67366ac150ec50f1f",
//                         "title": "Deploy your containerized Go Web Application",
//                         "publishedAt": "2022-10-27T04:45:42.617Z",
//                         "url": "https://tanmaysarkar.hashnode.dev/deploy-your-containerized-go-web-application",
//                         "readTimeInMinutes": 6,
//                         "views": 290,
//                         "coverImage": {
//                             "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1666810316079/8b-KW6oLp.png"
//                         }
//                     }
//                 },
//                 {
//                     "node": {
//                         "id": "635223f6eb49c7b94b2f2cee",
//                         "title": "Building a IMDB Web Scraper using Go",
//                         "publishedAt": "2022-10-21T04:45:42.313Z",
//                         "url": "https://tanmaysarkar.hashnode.dev/building-a-imdb-web-scraper-using-go",
//                         "readTimeInMinutes": 9,
//                         "views": 526,
//                         "coverImage": {
//                             "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1666263676327/ouczJNN0b.png"
//                         }
//                     }
//                 },
//                 {
//                     "node": {
//                         "id": "634ccfe6d68edc6df7ba7093",
//                         "title": "Connect Database in your Go project with ease",
//                         "publishedAt": "2022-10-17T03:45:42.352Z",
//                         "url": "https://tanmaysarkar.hashnode.dev/connect-database-in-your-go-project-with-ease",
//                         "readTimeInMinutes": 9,
//                         "views": 139,
//                         "coverImage": {
//                             "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1665944777101/WqrxpGCgm.png"
//                         }
//                     }
//                 },
//                 {
//                     "node": {
//                         "id": "63000f848bec3d0c4588d5eb",
//                         "title": "Beginners Guide to Argo CD",
//                         "publishedAt": "2022-08-19T22:32:36.351Z",
//                         "url": "https://tanmaysarkar.hashnode.dev/beginners-guide-to-argo-cd",
//                         "readTimeInMinutes": 8,
//                         "views": 3379,
//                         "coverImage": {
//                             "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1660949481544/twcQ2ERRv.jpg"
//                         }
//                     }
//                 }
//             ]
//         }
//     }
// }
