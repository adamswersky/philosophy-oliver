import ShareCard from "./ShareCard";

const tagLabels = {
  utilitarian: { label: "Utilitarian", emoji: "⚖️", desc: "The greatest good for the greatest number" },
  deontological: { label: "Principled", emoji: "📜", desc: "Some rules should never be broken" },
  "virtue-ethics": { label: "Virtue-Driven", emoji: "🏛️", desc: "Character matters more than rules" },
  materialist: { label: "Materialist", emoji: "🔬", desc: "What things are made of defines them" },
  essentialist: { label: "Essentialist", emoji: "💎", desc: "Identity goes deeper than material" },
  nominalist: { label: "Nominalist", emoji: "🏷️", desc: "Categories are useful fictions" },
  idealist: { label: "Idealist", emoji: "✨", desc: "Truth and higher reality matter most" },
  realist: { label: "Realist", emoji: "🌍", desc: "Deal with the world as it actually is" },
  pragmatist: { label: "Pragmatist", emoji: "🔧", desc: "Whatever works is what's true" },
  hedonist: { label: "Hedonist", emoji: "🎉", desc: "Happiness and pleasure are what matter" },
  authenticity: { label: "Authenticity-Seeker", emoji: "🎯", desc: "Real experiences over comfortable illusions" },
  existentialist: { label: "Existentialist", emoji: "🚪", desc: "We create our own meaning" },
  egalitarian: { label: "Egalitarian", emoji: "🤝", desc: "Fairness and equality for everyone" },
  libertarian: { label: "Libertarian", emoji: "🗽", desc: "Individual freedom above all" },
  communitarian: { label: "Communitarian", emoji: "👥", desc: "Community wellbeing shapes individual rights" },
  "social-contract": { label: "Social Contractarian", emoji: "📝", desc: "Rules we all agree on keep society together" },
  egoist: { label: "Self-Interested", emoji: "🪞", desc: "Looking out for yourself is natural" },
};

export default function ResultsSummary({ experiment, choices, onExit, onReplay }) {
  // Count tags from this experiment's choices
  const tagCounts = {};
  for (const choice of choices) {
    for (const tag of choice.tags) {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    }
  }

  // Sort by frequency
  const sortedTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const topTag = sortedTags[0];
  const topLabel = topTag ? tagLabels[topTag[0]] : null;

  const resultStep = experiment.steps.find((s) => s.type === "result");

  const shareText = topLabel
    ? `I explored "${experiment.title}" on Philosophy Explorer!\nMy instincts lean toward: ${topLabel.emoji} ${topLabel.label}\n"${topLabel.desc}"`
    : `I just explored "${experiment.title}" on Philosophy Explorer!`;

  return (
    <div className="slide-up space-y-6">
      <div className="text-center">
        <span className="text-5xl block mb-4">{experiment.icon}</span>
        <h2 className="text-2xl font-bold text-slate-800">
          {resultStep?.title || "Results"}
        </h2>
      </div>

      {resultStep?.text && (
        <p className="text-slate-600 text-center leading-relaxed">
          {resultStep.text}
        </p>
      )}

      {sortedTags.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-4 text-center">
            Your Philosophical Instincts
          </h3>
          <div className="space-y-3">
            {sortedTags.map(([tag, count]) => {
              const info = tagLabels[tag] || {
                label: tag,
                emoji: "🔹",
                desc: "",
              };
              const maxCount = sortedTags[0][1];
              const width = Math.round((count / maxCount) * 100);
              return (
                <div key={tag}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">
                      {info.emoji} {info.label}
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5">
                    <div
                      className="bg-primary-500 h-2.5 rounded-full transition-all duration-700"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{info.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <ShareCard text={shareText} />

      <div className="flex gap-3">
        <button
          onClick={onReplay}
          className="flex-1 py-3 px-6 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
        >
          Try Again
        </button>
        <button
          onClick={onExit}
          className="flex-1 py-3 px-6 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors cursor-pointer"
        >
          More Experiments
        </button>
      </div>
    </div>
  );
}
