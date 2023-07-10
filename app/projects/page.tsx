import { ProjectsData } from '@/constants';
import { GoCode, GoRepo } from 'react-icons/go';
import { AiFillStar } from 'react-icons/ai';

const ProjectPage = () => {
  return (
    <section>
      <h2>These are my tutorial projects.</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {ProjectsData.map((project) => (
          <div className="flex flex-col border border-slate-400 rounded-md p-5">
            <header className="flex items-center gap-1">
              <GoRepo className="text-xl" />
              <h3 className="text-primary-blue text-lg">{project.title}</h3>
              <span className="border rounded-full px-2 py-0.5">
                {project.category}
              </span>
            </header>
            <blockquote>
              <p>{project.description}</p>
            </blockquote>
            <div className="flex">
              <div>
                <GoCode />
                <span>{project.lang}</span>
              </div>
              <div>
                <AiFillStar />
                <span>{project.star}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
