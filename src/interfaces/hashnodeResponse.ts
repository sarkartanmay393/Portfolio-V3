export default interface HashnodeResponse {
  data: {
    publication: {
      posts: {
        totalDocuments: number;
        pageInfo: {
          hasNextPage: boolean;
          endCursor: string;
        };
        edges: [
          {
            nodes: {
              id: string;
              title: string;
              url: string;
              readTimeInMinutes: number;
              publishedAt: string;
              views: number;
              coverImage: {
                url: string;
              };
            };
          }
        ];
      };
    };
  };
}
