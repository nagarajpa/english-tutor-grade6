import React from 'react';

function LessonContent({ content, onComplete, isCompleted }) {
  return (
    <div className="lesson-content">
      <div className="content-section">
        <div className="introduction">
          <h2>Introduction</h2>
          <p>{content.introduction}</p>
        </div>

        <div className="explanation">
          <h2>Explanation</h2>
          <div className="explanation-text">
            {content.explanation.split('\n').map((paragraph, index) => {
              // Handle bold text with **
              const formattedParagraph = paragraph.split('**').map((part, i) => {
                if (i % 2 === 1) {
                  return <strong key={i}>{part}</strong>;
                }
                return part;
              });
              
              return paragraph.trim() ? (
                <p key={index}>{formattedParagraph}</p>
              ) : null;
            })}
          </div>
        </div>

        {content.examples && content.examples.length > 0 && (
          <div className="examples">
            <h2>Examples</h2>
            {content.examples.map((example, index) => (
              <div key={index} className="example-card">
                <div className="example-text">
                  {example.text}
                </div>
                <div className="example-explanation">
                  <strong>Explanation:</strong> {example.explanation}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="lesson-actions">
        {!isCompleted ? (
          <button onClick={onComplete} className="btn btn-primary">
            Mark as Complete
          </button>
        ) : (
          <div className="completed-message">
            <span className="completion-icon">✓</span>
            You've completed this lesson!
          </div>
        )}
      </div>
    </div>
  );
}

export default LessonContent;




