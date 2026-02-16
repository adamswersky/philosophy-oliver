import ChoiceButton from "./ChoiceButton";

export default function ScenarioStep({ step, onChoice }) {
  return (
    <div className="fade-in">
      <div className="prose prose-slate max-w-none mb-8">
        {step.text.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-slate-700 text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="space-y-3">
        {step.choices.map((choice, i) => (
          <ChoiceButton
            key={i}
            label={choice.label}
            onClick={() => onChoice(choice)}
          />
        ))}
      </div>
    </div>
  );
}
