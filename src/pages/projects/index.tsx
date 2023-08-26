import Layout from "~/layout/layout";
import ProjectArea from "~/components/home/ProjectArea";

const ProjectsPage = () => {

  return (
    <Layout Title="Projects" props={{ marginBottom: '2rem' }}>
      <ProjectArea />
    </Layout >
  );
};

export default ProjectsPage;
