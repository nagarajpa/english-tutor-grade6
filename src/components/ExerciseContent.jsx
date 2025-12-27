import React, { useState, useEffect } from 'react';
import { progressTracker } from '../utils/progressTracker';

function ExerciseContent({ lessonId, content, onComplete, refreshProgress }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const existingScore = progressTracker.getExerciseScore(lessonId);

  useEffect(() => {
    // If exercise was already completed, show results
    if (existingScore) {
      setShowResults(true);
      setScore(existingScore.score);
    }
  }, [existingScore]);

  const questions = content.questions || [];
  const hasPassage = content.passage;

  const handleAnswerSelect = (questionId, answerIndex) => {
    if (showResults) return; // Don't allow changes after submission
    
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex
    });
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach(question => {
      const selectedAnswer = selectedAnswers[question.id];
      if (selectedAnswer === question.correctAnswer) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setShowResults(true);

    // Save score to progress
    progressTracker.saveExerciseScore(lessonId, correctCount, questions.length);
    progressTracker.completeLesson(lessonId);
    refreshProgress();
  };

  const handleRetry = () => {
    // Clear saved progress for this exercise
    progressTracker.clearExerciseScore(lessonId);
    
    // Reset local state
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
    setCurrentQuestion(0);
    
    // Refresh progress in parent component
    refreshProgress();
  };

  const isAnswered = (questionId) => {
    return selectedAnswers.hasOwnProperty(questionId);
  };

  const allAnswered = questions.every(q => isAnswered(q.id));

  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="exercise-content">
      <div className="exercise-instructions">
        <h2>Instructions</h2>
        <p>{content.instructions}</p>
      </div>

      {hasPassage && (
        <div className="reading-passage">
          <h3>Reading Passage</h3>
          <div className="passage-text">
            {content.passage}
          </div>
        </div>
      )}

      <div className="questions-container">
        {questions.map((question, index) => {
          const isSelected = isAnswered(question.id);
          const selectedAnswer = selectedAnswers[question.id];
          const isCorrect = selectedAnswer === question.correctAnswer;

          return (
            <div key={question.id} className="question-card">
              <div className="question-header">
                <span className="question-number">Question {index + 1}</span>
                {showResults && (
                  <span className={`result-badge ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </span>
                )}
              </div>

              <div className="question-text">
                {question.passage && (
                  <div className="question-passage">
                    <em>{question.passage}</em>
                  </div>
                )}
                {question.word && (
                  <div className="question-word">
                    Word: <strong>{question.word}</strong>
                  </div>
                )}
                <p>{question.question}</p>
              </div>

              <div className="answer-options">
                {question.options.map((option, optionIndex) => {
                  const isThisSelected = selectedAnswer === optionIndex;
                  const isThisCorrect = optionIndex === question.correctAnswer;
                  
                  let optionClass = 'answer-option';
                  if (showResults) {
                    if (isThisCorrect) {
                      optionClass += ' correct';
                    } else if (isThisSelected && !isThisCorrect) {
                      optionClass += ' incorrect';
                    }
                  } else if (isThisSelected) {
                    optionClass += ' selected';
                  }

                  return (
                    <button
                      key={optionIndex}
                      className={optionClass}
                      onClick={() => handleAnswerSelect(question.id, optionIndex)}
                      disabled={showResults}
                    >
                      <span className="option-letter">
                        {String.fromCharCode(65 + optionIndex)}.
                      </span>
                      <span className="option-text">{option}</span>
                      {showResults && isThisCorrect && (
                        <span className="check-icon">✓</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {showResults && (
                <div className="explanation-box">
                  <strong>Explanation:</strong> {question.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="exercise-actions">
        {!showResults ? (
          <button
            onClick={handleSubmit}
            className="btn btn-primary"
            disabled={!allAnswered}
          >
            {allAnswered ? 'Submit Answers' : `Answer all questions (${Object.keys(selectedAnswers).length}/${questions.length})`}
          </button>
        ) : (
          <div className="results-section">
            <div className="score-display">
              <div className={`score-circle ${percentage >= 70 ? 'pass' : 'needs-improvement'}`}>
                <span className="score-percentage">{percentage}%</span>
                <span className="score-fraction">{score}/{questions.length}</span>
              </div>
              <div className="score-message">
                {percentage >= 90 && <p>🌟 Excellent work! You've mastered this topic!</p>}
                {percentage >= 70 && percentage < 90 && <p>✓ Good job! You have a solid understanding.</p>}
                {percentage < 70 && <p>Keep practicing! Review the lesson and try again.</p>}
              </div>
            </div>
            <div className="results-actions">
              <button onClick={handleRetry} className="btn btn-secondary">
                Try Again
              </button>
              <button onClick={onComplete} className="btn btn-primary">
                Continue to Next Lesson
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExerciseContent;




