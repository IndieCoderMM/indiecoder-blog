import Link from "next/link";
import { getPosts, getProjects } from "@/services";
import PostPreview from "@/components/PostPreview";
import ProjectRepo from "@/components/ProjectRepo";
import { LinkedInIcon } from "@/components/icons";

export const metadata = {
  title: "About Me | Author of IndieCoder's Blog",
};

const AboutPage = async () => {
  const posts = await getPosts();
  const allProjects = await getProjects();

  const projects = allProjects.slice(0, 3);
  const postPreviews = posts
    .slice(0, 3)
    .map((post) => <PostPreview key={post.id} {...post} />);
  return (
    <section className="mx-auto max-w-7xl">
      <div className="my-8 grid grid-cols-12 sm:my-12">
        <div className="col-span-12 lg:col-span-7">
          <h1 className="text-3xl font-bold sm:text-6xl">
            Hi! 👋 My name is{" "}
            <span className="text-accent">Hein&nbsp;Thant</span> and I am a
            <span className="text-accent"> web&nbsp;developer </span>
            from Myanmar.
          </h1>
          <p className="mt-4 text-lg">
            My journey as a developer began in 2019 when I started making mobile
            games using MIT App Inventor. It was all about my love for creating
            fun and engaging experiences through programming. Back then, I was
            eager to learn more and explore.
          </p>
          <p className="mt-4 text-lg">
            In 2022, I joined Microverse and collaborated with talented
            developers from all over the world. I&apos;ve improved my skills,
            made mistakes, and learned from them, but most importantly, had a
            chance to meet so many wonderful people along my journey.
          </p>
        </div>
        <div className="flexCenter col-span-12 lg:col-span-5">
          <img
            src="/blogging.svg"
            alt="Blogging on a laptop"
            width={400}
            height={400}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 border-t border-border py-8 sm:py-16">
        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-xl font-bold sm:text-4xl">Writing</h2>
          <p className="mt-4 text-lg">
            I created this website to share my knowledge and experience, and
            support those who are beginning their journey as a developer. I
            write about web development, programming, and other topics that I
            find interesting. Through my blog, I hope to inspire and connect
            with others who share my passion for coding and technology.
          </p>
        </div>
        <div className="col-span-12 grid w-full grid-cols-1 gap-4 py-2 sm:grid-cols-3 sm:py-8">
          {postPreviews}
        </div>
        <div className="col-span-12">
          <Link
            href="/categories/all"
            className="primaryBtn border-text text-lg font-medium text-text sm:text-xl"
          >
            See All Posts
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 border-t border-border py-8 sm:py-16">
        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-xl font-bold sm:text-4xl">Coding</h2>
          <p className="mt-4 text-lg">
            I love to code and build things that solves problems, or just for
            fun. If you want to see what I&apos;ve been working on, check out my
            GitHub profile. There you&apos;ll find a variety of projects, from
            2D games to real-world web applications.
          </p>
        </div>
        <ul className="col-span-12 my-2 grid w-full grid-cols-1 gap-3 sm:my-8 sm:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectRepo {...project} />
            </li>
          ))}
        </ul>
        <div className="col-span-12">
          <Link
            href="https://github.com/IndieCoderMM"
            target="_blank"
            rel="noreferrer"
            className="primaryBtn border-text text-lg font-medium text-text sm:text-xl"
          >
            Visit My GitHub
          </Link>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-12 border-t border-border py-8 sm:mb-12 sm:py-16">
        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-xl font-bold sm:text-4xl">Join My Network</h2>
          <p className="mt-4 text-lg">
            I&apos;d love for you to connect with me on LinkedIn, where I share
            my latest project updates and insights about the tech industry.
            It&apos;s also a great place to stay in touch and help each other
            grow as developers.
          </p>
        </div>
        <div className="col-span-12 my-2 sm:my-4">
          <Link
            href="https://www.linkedin.com/in/hthantoo/"
            target="_blank"
            rel="noreferrer"
            className="flex w-fit items-center rounded-full border-text bg-dark px-4 py-2 text-lg font-medium text-light transition duration-100 hover:opacity-80 dark:bg-light dark:text-dark sm:px-8 sm:py-4 sm:text-xl"
          >
            <LinkedInIcon className="mr-2 h-6 w-6 fill-white text-dark dark:fill-dark dark:text-light" />
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
