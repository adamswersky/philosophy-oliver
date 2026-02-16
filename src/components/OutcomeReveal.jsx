import PhilosopherCard from "./PhilosopherCard";
import GoDeeper from "./GoDeeper";

export default function OutcomeReveal({ step, onContinue }) {
  return (
    <div className="slide-up space-y-6">
      <div>
        <p className="text-slate-700 text-lg leading-relaxed">{step.text}</p>
        {step.consequence && (
          <p className="mt-3 text-slate-600 italic">{step.consequence}</p>
        )}
      </div>

      {step.whatYouExplored && (
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-5">
          <h3 className="font-bold text-primary-800 text-sm uppercase tracking-wide mb-2">
            What You Just Explored
          </h3>
          <p className="text-slate-700">{step.whatYouExplored}</p>
        </div>
      )}

      {step.perspectives?.map((perspective, i) => (
        <div key={i} className="space-y-3">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h4 className="font-bold text-slate-800 mb-2">
              {perspective.school}
            </h4>
            <p className="text-slate-600 text-sm">{perspective.explanation}</p>
          </div>
          {perspective.philosopherId && (
            <PhilosopherCard philosopherId={perspective.philosopherId} />
          )}
        </div>
      ))}

      {step.realWorld && (
        <GoDeeper>
          <h4 className="font-semibold text-slate-700 mb-1">
            Real-World Connection
          </h4>
          <p>{step.realWorld}</p>
        </GoDeeper>
      )}

      <button
        onClick={onContinue}
        className="w-full py-3 px-6 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors cursor-pointer active:scale-[0.98]"
      >
        Continue
      </button>
    </div>
  );
}
