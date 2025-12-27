// Progress Tracking Utility using Local Storage

const PROGRESS_KEY = 'english-tutor-progress';

export const progressTracker = {
  // Initialize progress
  initProgress() {
    const existingProgress = this.getProgress();
    if (!existingProgress) {
      const initialProgress = {
        completedLessons: [],
        exerciseScores: {},
        lastAccessed: null,
        currentLesson: null
      };
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(initialProgress));
      return initialProgress;
    }
    return existingProgress;
  },

  // Get all progress
  getProgress() {
    const progress = localStorage.getItem(PROGRESS_KEY);
    return progress ? JSON.parse(progress) : null;
  },

  // Mark a lesson as complete
  completeLesson(lessonId) {
    const progress = this.getProgress() || this.initProgress();
    if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId);
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    }
  },

  // Check if a lesson is completed
  isLessonCompleted(lessonId) {
    const progress = this.getProgress() || this.initProgress();
    return progress.completedLessons.includes(lessonId);
  },

  // Save exercise score
  saveExerciseScore(exerciseId, score, totalQuestions) {
    const progress = this.getProgress() || this.initProgress();
    progress.exerciseScores[exerciseId] = {
      score,
      totalQuestions,
      percentage: Math.round((score / totalQuestions) * 100),
      completedAt: new Date().toISOString()
    };
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  },

  // Get exercise score
  getExerciseScore(exerciseId) {
    const progress = this.getProgress() || this.initProgress();
    return progress.exerciseScores[exerciseId] || null;
  },

  // Clear exercise score (for retrying)
  clearExerciseScore(exerciseId) {
    const progress = this.getProgress() || this.initProgress();
    if (progress.exerciseScores[exerciseId]) {
      delete progress.exerciseScores[exerciseId];
      // Also remove from completed lessons to allow retaking
      progress.completedLessons = progress.completedLessons.filter(
        id => id !== exerciseId
      );
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    }
  },

  // Set current lesson
  setCurrentLesson(lessonId) {
    const progress = this.getProgress() || this.initProgress();
    progress.currentLesson = lessonId;
    progress.lastAccessed = new Date().toISOString();
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  },

  // Get current lesson
  getCurrentLesson() {
    const progress = this.getProgress() || this.initProgress();
    return progress.currentLesson;
  },

  // Calculate overall progress percentage
  calculateProgress(totalLessons) {
    const progress = this.getProgress() || this.initProgress();
    const completed = progress.completedLessons.length;
    return totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
  },

  // Get module progress
  getModuleProgress(moduleId, lessons) {
    const progress = this.getProgress() || this.initProgress();
    const moduleLessons = lessons.filter(lesson => 
      lesson.id.startsWith(moduleId)
    );
    const completed = moduleLessons.filter(lesson =>
      progress.completedLessons.includes(lesson.id)
    ).length;
    return {
      completed,
      total: moduleLessons.length,
      percentage: moduleLessons.length > 0 ? Math.round((completed / moduleLessons.length) * 100) : 0
    };
  },

  // Reset all progress
  resetProgress() {
    localStorage.removeItem(PROGRESS_KEY);
    return this.initProgress();
  }
};


