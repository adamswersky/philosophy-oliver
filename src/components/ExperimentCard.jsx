const colorMap = {
  indigo: "bg-indigo-50 border-indigo-200 hover:border-indigo-400",
  amber: "bg-amber-50 border-amber-200 hover:border-amber-400",
  purple: "bg-purple-50 border-purple-200 hover:border-purple-400",
  emerald: "bg-emerald-50 border-emerald-200 hover:border-emerald-400",
  sky: "bg-sky-50 border-sky-200 hover:border-sky-400",
  rose: "bg-rose-50 border-rose-200 hover:border-rose-400",
};

export default function ExperimentCard({ experiment, completed, onStart }) {
  const colors = colorMap[experiment.color] || colorMap.indigo;

  return (
    <button
      onClick={onStart}
      className={`relative text-left p-5 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md ${colors}`}
    >
      {completed && (
        <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          Done
        </span>
      )}
      <span className="text-3xl block mb-3">{experiment.icon}</span>
      <h3 className="font-bold text-lg text-slate-800 mb-1">
        {experiment.title}
      </h3>
      <p className="text-sm text-slate-600 mb-3">{experiment.subtitle}</p>
      <p className="text-xs text-slate-500">
        ~{experiment.estimatedMinutes} min
      </p>
    </button>
  );
}
