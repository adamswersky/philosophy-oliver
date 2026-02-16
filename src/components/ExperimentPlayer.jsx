import { useExperiment } from "../hooks/useExperiment";
import ProgressBar from "./ProgressBar";
import ScenarioStep from "./ScenarioStep";
import OutcomeReveal from "./OutcomeReveal";
import ResultsSummary from "./ResultsSummary";

export default function ExperimentPlayer({
  experimentId,
  progress,
  onComplete,
  onExit,
}) {
  const {
    experiment,
    currentStep,
    stepIndex,
    totalSteps,
    choices,
    showingOutcome,
    finished,
    makeChoice,
    continueFromOutcome,
    reset,
  } = useExperiment(experimentId);

  if (!experiment || !currentStep) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">Experiment not found.</p>
        <button
          onClick={onExit}
          className="mt-4 text-primary-600 hover:underline cursor-pointer"
        >
          Go back
        </button>
      </div>
    );
  }

  const handleComplete = () => {
    onComplete(experimentId, choices);
  };

  if (finished) {
    // Mark complete on first render of results
    if (!progress.experiments[experimentId]?.completed) {
      handleComplete();
    }

    return (
      <div className="max-w-2xl mx-auto">
        <ResultsSummary
          experiment={experiment}
          choices={choices}
          onExit={onExit}
          onReplay={reset}
        />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={onExit}
            className="text-sm text-slate-500 hover:text-slate-700 cursor-pointer"
          >
            ← Back
          </button>
          <h2 className="font-bold text-slate-800">{experiment.title}</h2>
          <span className="text-xs text-slate-400">
            {stepIndex + 1}/{totalSteps}
          </span>
        </div>
        <ProgressBar current={stepIndex + 1} total={totalSteps} />
      </div>

      {showingOutcome && currentStep.type === "outcome" ? (
        <OutcomeReveal step={currentStep} onContinue={continueFromOutcome} />
      ) : currentStep.type === "narrative" ? (
        <ScenarioStep step={currentStep} onChoice={makeChoice} />
      ) : null}
    </div>
  );
}
