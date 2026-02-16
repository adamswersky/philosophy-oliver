import { experiments } from "../data/experiments";

const tagLabels = {
  utilitarian: { label: "Utilitarian", emoji: "⚖️" },
  deontological: { label: "Principled", emoji: "📜" },
  "virtue-ethics": { label: "Virtue-Driven", emoji: "🏛️" },
  materialist: { label: "Materialist", emoji: "🔬" },
  essentialist: { label: "Essentialist", emoji: "💎" },
  nominalist: { label: "Nominalist", emoji: "🏷️" },
  idealist: { label: "Idealist", emoji: "✨" },
  realist: { label: "Realist", emoji: "🌍" },
  pragmatist: { label: "Pragmatist", emoji: "🔧" },
  hedonist: { label: "Hedonist", emoji: "🎉" },
  authenticity: { label: "Authenticity-Seeker", emoji: "🎯" },
  existentialist: { label: "Existentialist", emoji: "🚪" },
  egalitarian: { label: "Egalitarian", emoji: "🤝" },
  libertarian: { label: "Libertarian", emoji: "🗽" },
  communitarian: { label: "Communitarian", emoji: "👥" },
  "social-contract": { label: "Social Contractarian", emoji: "📝" },
  egoist: { label: "Self-Interested", emoji: "🪞" },
};

export default function ProfilePage({ progress, onReset, onStartExperiment }) {
  const completedCount = Object.values(progress.experiments).filter(
    (e) => e.completed
  ).length;

  const sortedTags = Object.entries(progress.tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  const maxTag = sortedTags[0]?.[1] || 1;

  return (
    <div className="fade-in max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">
          Your Philosophical Profile
        </h1>
        <p className="text-slate-500">
          {completedCount} of {experiments.length} experiments completed
        </p>
      </div>

      {completedCount === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
          <span className="text-4xl block mb-4">🧭</span>
          <p className="text-slate-600 mb-4">
            Complete some experiments to build your philosophical profile!
          </p>
          <button
            onClick={() => onStartExperiment(experiments[0].id)}
            className="py-2 px-6 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors cursor-pointer"
          >
            Start Exploring
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Tag distribution */}
          {sortedTags.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-4">
                Your Philosophical Tendencies
              </h3>
              <div className="space-y-3">
                {sortedTags.map(([tag, count]) => {
                  const info = tagLabels[tag] || {
                    label: tag,
                    emoji: "🔹",
                  };
                  const width = Math.round((count / maxTag) * 100);
                  return (
                    <div key={tag}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-slate-700">
                          {info.emoji} {info.label}
                        </span>
                        <span className="text-xs text-slate-400">{count}</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div
                          className="bg-primary-500 h-2 rounded-full transition-all duration-700"
                          style={{ width: `${width}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Experiment list */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-4">
              Experiments
            </h3>
            <div className="space-y-2">
              {experiments.map((exp) => {
                const done = progress.experiments[exp.id]?.completed;
                return (
                  <button
                    key={exp.id}
                    onClick={() => onStartExperiment(exp.id)}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer text-left"
                  >
                    <span className="text-xl">{exp.icon}</span>
                    <div className="flex-1">
                      <p className="font-medium text-slate-800 text-sm">
                        {exp.title}
                      </p>
                      <p className="text-xs text-slate-500">{exp.subtitle}</p>
                    </div>
                    {done ? (
                      <span className="text-green-500 text-sm">✓</span>
                    ) : (
                      <span className="text-xs text-slate-400">Start →</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reset */}
          <div className="text-center">
            <button
              onClick={onReset}
              className="text-sm text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
            >
              Reset all progress
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
