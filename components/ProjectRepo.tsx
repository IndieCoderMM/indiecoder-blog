import { CodeIcon, RepoIcon } from './icons';
import { StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { Project } from '@/common.types';

const ProjectRepo = (props: Project) => {
  return (
    <div className="flex flex-col relative h-full border border-slate-300 rounded-md p-5 gap-3 hover:shadow">
      <header className="flex items-center flex-wrap gap-1 text-slate-500">
        <RepoIcon className="w-6 h-6 text-slate-400 fill-current" />
        <Link
          href={props.repoLink}
          target="_blank"
          className="text-accent-color hover:underline expandLink"
        >
          {props.title}
        </Link>
        <span className="border rounded-full px-2 py-0.5 text-xs">
          {props.category.slug}
        </span>
      </header>
      <blockquote className="text-xs text-slate-500">
        <p>{props.description}</p>
      </blockquote>
      <div className="flex items-center justify-between text-sm text-slate-500 mt-auto">
        <div className="flex items-center gap-1">
          <CodeIcon className="w-5 h-5 fill-current stroke-none" />
          <span>{props.language}</span>
        </div>
        <div className="flex items-start gap-1">
          <StarIcon className="w-5 h-5 text-yellow-400" />
          <span>{props.starCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectRepo;
