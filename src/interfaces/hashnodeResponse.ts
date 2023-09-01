export default interface HashnodeResponse {
  data: {
    user: {
      numPosts: number;
      publication: {
        posts: [
          {
            title: string;
            brief: string;
            slug: string;
            coverImage: string;
            readTime: number;
            dateAdded: string;
            views: number;
          }
        ];
      };
    };
  };
}
