import { CodeIcon, RepoIcon } from "./icons";
import { StarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Project } from "@/common.types";

const ProjectRepo = (props: Project) => {
  return (
    <div className="border-border text-text bg-foreground relative flex h-full flex-col gap-3 rounded-md border p-5 hover:shadow">
      <header className="flex flex-wrap items-center gap-1 ">
        <RepoIcon className="h-6 w-6 fill-current text-slate-400" />
        <h3>
          <Link
            href={props.repoLink}
            target="_blank"
            className="text-accent expandLink hover:underline"
          >
            {props.title}
          </Link>
        </h3>
        <span className="rounded-full border px-2 py-0.5 text-xs">
          {props.category.slug}
        </span>
      </header>
      <div className="text-xs ">
        <p>{props.description}</p>
      </div>
      <div className="flexBetween mt-auto  text-sm">
        <div className="flexCenter gap-1">
          <CodeIcon className="h-5 w-5 fill-current stroke-none" />
          <span>{props.language}</span>
        </div>
        <div className="flexCenter gap-1">
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <span>{props.starCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectRepo;
