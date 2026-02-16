import { useState, useCallback, useMemo } from "react";
import { experiments } from "../data/experiments";

export function useExperiment(experimentId) {
  const experiment = useMemo(
    () => experiments.find((e) => e.id === experimentId),
    [experimentId]
  );

  const [currentStepId, setCurrentStepId] = useState(
    experiment?.steps[0]?.id || null
  );
  const [choices, setChoices] = useState([]);
  const [showingOutcome, setShowingOutcome] = useState(false);
  const [finished, setFinished] = useState(false);

  const currentStep = useMemo(
    () => experiment?.steps.find((s) => s.id === currentStepId) || null,
    [experiment, currentStepId]
  );

  const stepIndex = useMemo(
    () => experiment?.steps.findIndex((s) => s.id === currentStepId) || 0,
    [experiment, currentStepId]
  );

  const totalSteps = experiment?.steps.length || 0;

  const makeChoice = useCallback(
    (choice) => {
      setChoices((prev) => [
        ...prev,
        { stepId: currentStepId, label: choice.label, tags: choice.tags },
      ]);
      const nextStep = experiment?.steps.find(
        (s) => s.id === choice.nextStepId
      );
      if (nextStep) {
        if (nextStep.type === "outcome") {
          setCurrentStepId(nextStep.id);
          setShowingOutcome(true);
        } else {
          setCurrentStepId(nextStep.id);
          setShowingOutcome(false);
        }
      }
    },
    [currentStepId, experiment]
  );

  const continueFromOutcome = useCallback(() => {
    if (!currentStep) return;
    if (currentStep.nextStepId) {
      const nextStep = experiment?.steps.find(
        (s) => s.id === currentStep.nextStepId
      );
      if (nextStep) {
        if (nextStep.type === "result") {
          setFinished(true);
        }
        setCurrentStepId(nextStep.id);
        setShowingOutcome(false);
      }
    } else {
      setFinished(true);
    }
  }, [currentStep, experiment]);

  const reset = useCallback(() => {
    setCurrentStepId(experiment?.steps[0]?.id || null);
    setChoices([]);
    setShowingOutcome(false);
    setFinished(false);
  }, [experiment]);

  return {
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
  };
}
