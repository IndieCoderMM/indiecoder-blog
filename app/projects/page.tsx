import ProjectRepo from '@/components/ProjectRepo';
import { getProjects } from '@/services';

const ProjectPage = async () => {
  const projects = await getProjects();
  return (
    <section>
      <h1 className="pageHeading mb-5">Tutorial Projects</h1>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectRepo {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectPage;
