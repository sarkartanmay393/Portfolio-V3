import BlogArea from "~/components/home/BlogArea";
import Layout from "~/layout/layout";

const BlogsPage = () => {

    return (
        <Layout Title="Blogs | TSX" props={{ marginBottom: "4rem" }}>
            <BlogArea />
        </Layout >
    );
};

export default BlogsPage;
