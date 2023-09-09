import ProjectRepo from "@/components/ProjectRepo";
import { getProjects } from "@/services";

export const metadata = {
  title: "Explore Latest Tutorial Projects on IndieCoder's Blog",
};

const ProjectPage = async () => {
  const projects = await getProjects();
  return (
    <section className="mx-auto max-w-7xl">
      <h2 className="pageHeading mb-5">Tutorial Projects</h2>
      <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectRepo {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export const revalidate = 3600 * 1;

export default ProjectPage;
