import SolutionCard from '@/components/SolutionCard';
import { solutions } from '@/constants/sample';
import { getSolutions } from '@/services';

const SolutionsPage = async () => {
  // ! Enable before redeploy
  // const solutions = await getSolutions();
  return (
    <section>
      <h2 className="text-lg mb-5">LeetCode Solutions</h2>
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
