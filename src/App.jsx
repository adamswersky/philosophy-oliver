import { useState } from "react";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import ExperimentPlayer from "./components/ExperimentPlayer";
import ProfilePage from "./components/ProfilePage";
import { useProgress } from "./hooks/useProgress";

function App() {
  const [view, setView] = useState("home"); // home | experiment | profile
  const [currentExperimentId, setCurrentExperimentId] = useState(null);
  const { progress, markComplete, reset: resetProgress } = useProgress();

  const startExperiment = (id) => {
    setCurrentExperimentId(id);
    setView("experiment");
  };

  const goHome = () => {
    setCurrentExperimentId(null);
    setView("home");
  };

  const goProfile = () => {
    setView("profile");
  };

  return (
    <Layout
      view={view}
      onHome={goHome}
      onProfile={goProfile}
    >
      {view === "home" && (
        <HomePage
          progress={progress}
          onStartExperiment={startExperiment}
        />
      )}
      {view === "experiment" && currentExperimentId && (
        <ExperimentPlayer
          experimentId={currentExperimentId}
          progress={progress}
          onComplete={markComplete}
          onExit={goHome}
        />
      )}
      {view === "profile" && (
        <ProfilePage
          progress={progress}
          onReset={resetProgress}
          onStartExperiment={startExperiment}
        />
      )}
    </Layout>
  );
}

export default App;
