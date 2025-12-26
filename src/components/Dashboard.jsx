import React from 'react';
import { Link } from 'react-router-dom';
import { progressTracker } from '../utils/progressTracker';

function Dashboard({ courseData, progress, refreshProgress }) {
  // Calculate total lessons
  const totalLessons = courseData.modules.reduce((total, module) => {
    return total + module.chapters.reduce((chapterTotal, chapter) => {
      return chapterTotal + chapter.lessons.length;
    }, 0);
  }, 0);

  const overallProgress = progressTracker.calculateProgress(totalLessons);

  // Get all lessons for module progress calculation
  const getAllLessons = (moduleId) => {
    const module = courseData.modules.find(m => m.id === moduleId);
    if (!module) return [];
    return module.chapters.flatMap(chapter => chapter.lessons);
  };

  return (
    <div className="dashboard">
      <section className="welcome-section">
        <h2>Welcome to English Language Arts</h2>
        <p className="course-description">{courseData.description}</p>
        <div className="progress-overview">
          <div className="progress-stat">
            <span className="stat-value">{progress.completedLessons.length}</span>
            <span className="stat-label">Lessons Completed</span>
          </div>
          <div className="progress-stat">
            <span className="stat-value">{overallProgress}%</span>
            <span className="stat-label">Overall Progress</span>
          </div>
          <div className="progress-stat">
            <span className="stat-value">{Object.keys(progress.exerciseScores).length}</span>
            <span className="stat-label">Exercises Completed</span>
          </div>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${overallProgress}%` }}
            />
          </div>
          <span className="progress-text">{overallProgress}% Complete</span>
        </div>
      </section>

      <section className="modules-section">
        <h2>Course Modules</h2>
        <div className="modules-grid">
          {courseData.modules.map(module => {
            const moduleLessons = getAllLessons(module.id);
            const moduleProgress = progressTracker.getModuleProgress(module.id, moduleLessons);
            
            return (
              <Link 
                to={`/module/${module.id}`} 
                key={module.id} 
                className="module-card"
              >
                <div className="module-icon">{module.icon}</div>
                <h3>{module.title}</h3>
                <p className="module-description">{module.description}</p>
                <div className="module-stats">
                  <span className="chapter-count">
                    {module.chapters.length} Chapter{module.chapters.length !== 1 ? 's' : ''}
                  </span>
                  <span className="lesson-count">
                    {moduleLessons.length} Lesson{moduleLessons.length !== 1 ? 's' : ''}
                  </span>
                </div>
                <div className="module-progress">
                  <div className="progress-bar small">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: `${moduleProgress.percentage}%` }}
                    />
                  </div>
                  <span className="progress-text small">
                    {moduleProgress.completed}/{moduleProgress.total} completed
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {progress.completedLessons.length > 0 && (
        <section className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {Object.entries(progress.exerciseScores)
              .slice(-5)
              .reverse()
              .map(([exerciseId, score]) => (
                <div key={exerciseId} className="activity-item">
                  <span className="activity-icon">✓</span>
                  <span className="activity-text">
                    Completed exercise: {exerciseId}
                  </span>
                  <span className={`activity-score ${score.percentage >= 70 ? 'good' : 'needs-improvement'}`}>
                    {score.percentage}%
                  </span>
                </div>
              ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Dashboard;


