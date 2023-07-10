import ProjectRepo from '@/components/ProjectRepo';
import { TutoProjects } from '@/constants';

const ProjectPage = () => {
  return (
    <section>
      <h2 className="text-lg mb-5">Tutorial Projects</h2>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-1">
        {TutoProjects.map((project) => (
          <li key={project.title} className="lg:p-2">
            <ProjectRepo {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectPage;
