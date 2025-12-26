import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { courseData } from './data/courseData';
import { progressTracker } from './utils/progressTracker';
import Dashboard from './components/Dashboard';
import ModuleView from './components/ModuleView';
import LessonView from './components/LessonView';
import Header from './components/Header';

function App() {
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    // Initialize progress on load
    const initialProgress = progressTracker.initProgress();
    setProgress(initialProgress);
  }, []);

  const refreshProgress = () => {
    setProgress(progressTracker.getProgress());
  };

  if (!progress) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Router>
      <div className="app">
        <Header courseTitle={courseData.courseTitle} />
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={
                <Dashboard 
                  courseData={courseData} 
                  progress={progress}
                  refreshProgress={refreshProgress}
                />
              } 
            />
            <Route 
              path="/module/:moduleId" 
              element={
                <ModuleView 
                  courseData={courseData}
                  progress={progress}
                  refreshProgress={refreshProgress}
                />
              } 
            />
            <Route 
              path="/lesson/:lessonId" 
              element={
                <LessonView 
                  courseData={courseData}
                  progress={progress}
                  refreshProgress={refreshProgress}
                />
              } 
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;


