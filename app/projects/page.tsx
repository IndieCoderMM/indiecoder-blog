import ProjectRepo from '@/components/ProjectRepo';
import { getProjects } from '@/services';

const ProjectPage = async () => {
  const projects = await getProjects();
  return (
    <section>
      <h2 className="pageHeading mb-5">Tutorial Projects</h2>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {projects.map((project) => (
          <li key={project.id} className="lg:p-2">
            <ProjectRepo {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectPage;
