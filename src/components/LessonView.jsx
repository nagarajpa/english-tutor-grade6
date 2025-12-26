import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { progressTracker } from '../utils/progressTracker';
import LessonContent from './LessonContent';
import ExerciseContent from './ExerciseContent';

function LessonView({ courseData, progress, refreshProgress }) {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [module, setModule] = useState(null);
  const [chapter, setChapter] = useState(null);
  const [nextLesson, setNextLesson] = useState(null);
  const [prevLesson, setPrevLesson] = useState(null);

  useEffect(() => {
    // Find the lesson, module, and chapter
    let foundLesson = null;
    let foundModule = null;
    let foundChapter = null;

    for (const mod of courseData.modules) {
      for (const chap of mod.chapters) {
        const les = chap.lessons.find(l => l.id === lessonId);
        if (les) {
          foundLesson = les;
          foundModule = mod;
          foundChapter = chap;
          break;
        }
      }
      if (foundLesson) break;
    }

    if (foundLesson) {
      setLesson(foundLesson);
      setModule(foundModule);
      setChapter(foundChapter);

      // Find next and previous lessons
      const allLessons = [];
      courseData.modules.forEach(mod => {
        mod.chapters.forEach(chap => {
          allLessons.push(...chap.lessons);
        });
      });

      const currentIndex = allLessons.findIndex(l => l.id === lessonId);
      if (currentIndex > 0) {
        setPrevLesson(allLessons[currentIndex - 1]);
      }
      if (currentIndex < allLessons.length - 1) {
        setNextLesson(allLessons[currentIndex + 1]);
      }

      // Set as current lesson
      progressTracker.setCurrentLesson(lessonId);
    }
  }, [lessonId, courseData]);

  const handleComplete = () => {
    progressTracker.completeLesson(lessonId);
    refreshProgress();
    if (nextLesson) {
      navigate(`/lesson/${nextLesson.id}`);
    } else {
      navigate(`/module/${module.id}`);
    }
  };

  if (!lesson || !module || !chapter) {
    return (
      <div className="error-page">
        <h2>Lesson not found</h2>
        <Link to="/" className="btn btn-primary">Back to Dashboard</Link>
      </div>
    );
  }

  const isCompleted = progressTracker.isLessonCompleted(lessonId);

  return (
    <div className="lesson-view">
      <div className="lesson-header">
        <Link to={`/module/${module.id}`} className="back-link">
          ← Back to {module.title}
        </Link>
        <div className="lesson-breadcrumb">
          <span>{module.title}</span>
          <span className="separator">/</span>
          <span>{chapter.title}</span>
        </div>
      </div>

      <div className="lesson-container">
        <div className="lesson-title-section">
          <h1>{lesson.title}</h1>
          <span className={`lesson-type-badge ${lesson.type}`}>
            {lesson.type === 'lesson' ? '📖 Lesson' : '✏️ Exercise'}
          </span>
          {isCompleted && (
            <span className="completion-badge large">✓ Completed</span>
          )}
        </div>

        {lesson.type === 'lesson' ? (
          <LessonContent 
            content={lesson.content}
            onComplete={handleComplete}
            isCompleted={isCompleted}
          />
        ) : (
          <ExerciseContent
            lessonId={lesson.id}
            content={lesson.content}
            onComplete={handleComplete}
            refreshProgress={refreshProgress}
          />
        )}

        <div className="lesson-navigation">
          {prevLesson && (
            <Link to={`/lesson/${prevLesson.id}`} className="nav-btn prev">
              ← Previous: {prevLesson.title}
            </Link>
          )}
          {nextLesson && (
            <Link to={`/lesson/${nextLesson.id}`} className="nav-btn next">
              Next: {nextLesson.title} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default LessonView;




