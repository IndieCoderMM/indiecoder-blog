import { CodeIcon, RepoIcon } from './icons';
import { StarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Project } from '@/common.types';

const ProjectRepo = (props: Project) => {
  return (
    <div className="flex flex-col relative h-full text-slate-500 dark:text-slate-200 dark:bg-light-brown border border-slate-300 rounded-md p-5 gap-3 hover:shadow">
      <header className="flex items-center flex-wrap gap-1 ">
        <RepoIcon className="w-6 h-6 text-slate-400 fill-current" />
        <h3>
          <Link
            href={props.repoLink}
            target="_blank"
            className="text-accent-color hover:underline expandLink"
          >
            {props.title}
          </Link>
        </h3>
        <span className="border rounded-full px-2 py-0.5 text-xs">
          {props.category.slug}
        </span>
      </header>
      <div className="text-xs ">
        <p>{props.description}</p>
      </div>
      <div className="flexBetween text-sm  mt-auto">
        <div className="flexCenter gap-1">
          <CodeIcon className="w-5 h-5 fill-current stroke-none" />
          <span>{props.language}</span>
        </div>
        <div className="flexCenter gap-1">
          <StarIcon className="w-5 h-5 text-yellow-400" />
          <span>{props.starCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectRepo;
