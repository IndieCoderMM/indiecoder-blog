import SolutionCard from "@/components/SolutionCard";
import { getSolutions } from "@/services";

export const metadata = {
  title: "Level Up Coding Skills with LeetCode Solutions | IndieCoder's Blog",
};

const SolutionsPage = async () => {
  const solutions = await getSolutions();

  return (
    <section className="mx-auto max-w-7xl">
      <h1 className="pageHeading mb-5">LeetCode Solutions</h1>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution) => (
          <li key={solution.id} className="grid gap-3 lg:p-2">
            <SolutionCard solution={solution} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export const revalidate = 3600 * 1;

export default SolutionsPage;
