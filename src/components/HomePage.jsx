import { experiments } from "../data/experiments";
import ExperimentCard from "./ExperimentCard";

export default function HomePage({ progress, onStartExperiment }) {
  const completedCount = Object.values(progress.experiments).filter(
    (e) => e.completed
  ).length;

  return (
    <div className="fade-in">
      <div className="mb-10">
        <img
          src="/banner.png"
          alt="Oliver versus Philosophy"
          className="w-full rounded-2xl shadow-md mb-6"
        />
        <div className="text-center">
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Explore history's greatest thought experiments. Make choices, discover
            consequences, and find out what your instincts reveal about your
            philosophy.
          </p>
          {completedCount > 0 && (
            <p className="mt-3 text-sm text-slate-500">
              {completedCount} of {experiments.length} experiments completed
            </p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiments.map((exp) => (
          <ExperimentCard
            key={exp.id}
            experiment={exp}
            completed={progress.experiments[exp.id]?.completed}
            onStart={() => onStartExperiment(exp.id)}
          />
        ))}
      </div>
    </div>
  );
}
