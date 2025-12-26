import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { progressTracker } from '../utils/progressTracker';

function ModuleView({ courseData, progress }) {
  const { moduleId } = useParams();
  const module = courseData.modules.find(m => m.id === moduleId);

  if (!module) {
    return (
      <div className="error-page">
        <h2>Module not found</h2>
        <Link to="/" className="btn btn-primary">Back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="module-view">
      <div className="module-header">
        <Link to="/" className="back-link">← Back to Dashboard</Link>
        <div className="module-title-section">
          <span className="module-icon-large">{module.icon}</span>
          <div>
            <h1>{module.title}</h1>
            <p className="module-description-large">{module.description}</p>
          </div>
        </div>
      </div>

      <div className="chapters-list">
        {module.chapters.map((chapter, chapterIndex) => {
          const chapterLessons = chapter.lessons;
          const completedInChapter = chapterLessons.filter(lesson =>
            progressTracker.isLessonCompleted(lesson.id)
          ).length;

          return (
            <div key={chapter.id} className="chapter-card">
              <div className="chapter-header">
                <h2>
                  <span className="chapter-number">Chapter {chapterIndex + 1}</span>
                  {chapter.title.replace(/^Chapter \d+:\s*/, '')}
                </h2>
                <span className="chapter-progress-badge">
                  {completedInChapter}/{chapterLessons.length} completed
                </span>
              </div>

              <div className="lessons-list">
                {chapterLessons.map((lesson, lessonIndex) => {
                  const isCompleted = progressTracker.isLessonCompleted(lesson.id);
                  const exerciseScore = progressTracker.getExerciseScore(lesson.id);

                  return (
                    <Link
                      key={lesson.id}
                      to={`/lesson/${lesson.id}`}
                      className={`lesson-item ${isCompleted ? 'completed' : ''}`}
                    >
                      <div className="lesson-number">{lessonIndex + 1}</div>
                      <div className="lesson-info">
                        <h3>{lesson.title}</h3>
                        <span className={`lesson-type ${lesson.type}`}>
                          {lesson.type === 'lesson' ? '📖 Lesson' : '✏️ Exercise'}
                        </span>
                      </div>
                      <div className="lesson-status">
                        {isCompleted && (
                          <span className="completion-badge">✓ Complete</span>
                        )}
                        {exerciseScore && (
                          <span className={`score-badge ${exerciseScore.percentage >= 70 ? 'good' : 'needs-improvement'}`}>
                            {exerciseScore.percentage}%
                          </span>
                        )}
                        {!isCompleted && !exerciseScore && (
                          <span className="start-badge">Start →</span>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ModuleView;


