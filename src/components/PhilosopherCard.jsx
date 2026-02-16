import { philosophers } from "../data/philosophers";

export default function PhilosopherCard({ philosopherId }) {
  const philosopher = philosophers[philosopherId];
  if (!philosopher) return null;

  return (
    <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
      <div className="text-2xl shrink-0">🏛️</div>
      <div>
        <p className="font-semibold text-slate-800 text-sm">
          {philosopher.name}{" "}
          <span className="font-normal text-slate-500">
            ({philosopher.dates})
          </span>
        </p>
        <p className="text-sm text-primary-700 italic mt-0.5">
          "{philosopher.keyIdea}"
        </p>
        <p className="text-xs text-slate-600 mt-1">{philosopher.bio}</p>
      </div>
    </div>
  );
}
