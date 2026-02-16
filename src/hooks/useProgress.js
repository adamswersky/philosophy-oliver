import { useState, useCallback } from "react";
import { getProgress, saveProgress, clearProgress } from "../utils/storage";

export function useProgress() {
  const [progress, setProgress] = useState(() => getProgress());

  const markComplete = useCallback((experimentId, choices) => {
    setProgress((prev) => {
      const newTagCounts = { ...prev.tagCounts };
      const choiceTags = [];

      for (const choice of choices) {
        for (const tag of choice.tags) {
          choiceTags.push(tag);
          newTagCounts[tag] = (newTagCounts[tag] || 0) + 1;
        }
      }

      const updated = {
        ...prev,
        experiments: {
          ...prev.experiments,
          [experimentId]: {
            completed: true,
            choices,
            completedAt: new Date().toISOString(),
          },
        },
        tagCounts: newTagCounts,
      };
      saveProgress(updated);
      return updated;
    });
  }, []);

  const reset = useCallback(() => {
    clearProgress();
    setProgress(getProgress());
  }, []);

  return { progress, markComplete, reset };
}
