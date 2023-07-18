import SolutionCard from '@/components/SolutionCard';
import { getSolutions } from '@/services';

const SolutionsPage = async () => {
  const solutions = await getSolutions();

  return (
    <section>
      <h1 className="pageHeading mb-5">LeetCode Solutions</h1>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {solutions.map((solution) => (
          <li key={solution.id} className="grid gap-3 lg:p-2">
            <SolutionCard solution={solution} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SolutionsPage;
