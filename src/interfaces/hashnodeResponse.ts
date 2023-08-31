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
          }
        ];
      };
    };
  };
}
