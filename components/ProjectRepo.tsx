import { CodeIcon, RepoIcon } from './icons';
import { StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { ProjectInterface } from '@/common.types';

const ProjectRepo = (props: ProjectInterface) => {
  return (
    <div className="flex flex-col relative h-full border border-slate-300 rounded-md p-5 gap-3 hover:shadow">
      <header className="flex items-center flex-wrap gap-1 text-slate-500">
        <RepoIcon className="text-xl" />
        <Link
          href={props.link}
          target="_blank"
          className="text-accent-color hover:underline expandLink"
        >
          {props.title}
        </Link>
        <span className="border rounded-full px-2 py-0.5 text-xs">
          {props.category}
        </span>
      </header>
      <blockquote className="text-sm text-slate-500">
        <p>{props.description}</p>
      </blockquote>
      <div className="flex gap-5 text-sm text-slate-500 mt-auto">
        <div className="flex items-center gap-1">
          <CodeIcon />
          <span>{props.language}</span>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="w-6 h-6 text-yellow-400" />
          <span>{props.star}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectRepo;
