const STORAGE_KEY = "philosophy-explorer-progress";

const defaultProgress = {
  version: 1,
  experiments: {},
  tagCounts: {},
};

export function getProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultProgress };
    const parsed = JSON.parse(raw);
    if (parsed.version !== 1) return { ...defaultProgress };
    return parsed;
  } catch {
    return { ...defaultProgress };
  }
}

export function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
}
