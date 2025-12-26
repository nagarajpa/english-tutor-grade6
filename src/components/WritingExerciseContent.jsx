import React, { useState, useEffect } from 'react';
import { progressTracker } from '../utils/progressTracker';

function WritingExerciseContent({ lessonId, content, onComplete, refreshProgress }) {
  const [writingText, setWritingText] = useState('');
  const [showRubric, setShowRubric] = useState(false);
  const [showExample, setShowExample] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [lastSaved, setLastSaved] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  // Load saved writing from localStorage
  useEffect(() => {
    const savedWriting = localStorage.getItem(`writing_${lessonId}`);
    if (savedWriting) {
      try {
        const data = JSON.parse(savedWriting);
        setWritingText(data.text || '');
        setLastSaved(data.timestamp ? new Date(data.timestamp) : null);
      } catch (e) {
        console.error('Error loading saved writing:', e);
      }
    }
  }, [lessonId]);

  // Update word count whenever text changes
  useEffect(() => {
    const words = writingText.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  }, [writingText]);

  // Auto-save every 10 seconds
  useEffect(() => {
    if (writingText.length > 0) {
      const timer = setTimeout(() => {
        saveWriting();
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [writingText]);

  const saveWriting = () => {
    setIsSaving(true);
    const data = {
      text: writingText,
      timestamp: new Date().toISOString(),
      wordCount: wordCount
    };
    localStorage.setItem(`writing_${lessonId}`, JSON.stringify(data));
    setLastSaved(new Date());
    setIsSaving(false);
  };

  const handleTextChange = (e) => {
    setWritingText(e.target.value);
  };

  const handleMarkComplete = () => {
    saveWriting();
    progressTracker.completeLesson(lessonId);
    refreshProgress();
    alert('Your writing has been saved! Great work on completing this assignment.');
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear your writing? This cannot be undone.')) {
      setWritingText('');
      localStorage.removeItem(`writing_${lessonId}`);
      setLastSaved(null);
      setWordCount(0);
    }
  };

  const getWordCountStatus = () => {
    const minWords = content.writingSpace?.minWords || 100;
    const suggestedRange = content.writingSpace?.suggestedWords || '150-180 words';
    
    if (wordCount === 0) return { status: 'empty', message: 'Start writing...' };
    if (wordCount < minWords) return { status: 'below', message: `${minWords - wordCount} words to minimum` };
    return { status: 'good', message: `Suggested: ${suggestedRange}` };
  };

  const wordCountStatus = getWordCountStatus();

  return (
    <div className="writing-exercise-content">
      {/* Assignment Header */}
      <div className="writing-header">
        <h2>{content.assignmentType ? `${content.assignmentType.charAt(0).toUpperCase() + content.assignmentType.slice(1)} Writing Assignment` : 'Writing Assignment'}</h2>
      </div>

      {/* Prompt Section */}
      <div className="writing-prompt">
        <h3>📝 Your Assignment</h3>
        <div className="prompt-text" dangerouslySetInnerHTML={{ __html: content.prompt?.replace(/\n/g, '<br />') }} />
      </div>

      {/* Instructions Section */}
      {content.instructions && (
        <div className="writing-instructions">
          <h3>📋 Instructions & Requirements</h3>
          <div className="instructions-text" dangerouslySetInnerHTML={{ __html: content.instructions.replace(/\n/g, '<br />') }} />
        </div>
      )}

      {/* Helpful Hints (Collapsible) */}
      {content.helpfulHints && content.helpfulHints.length > 0 && (
        <div className="writing-hints">
          <details>
            <summary>💡 Helpful Hints (Click to expand)</summary>
            <ul>
              {content.helpfulHints.map((hint, index) => (
                <li key={index}>{hint}</li>
              ))}
            </ul>
          </details>
        </div>
      )}

      {/* Writing Area */}
      <div className="writing-area">
        <div className="writing-area-header">
          <h3>✍️ Your Writing</h3>
          <div className="writing-controls">
            <span className={`word-count ${wordCountStatus.status}`}>
              Words: {wordCount} <span className="word-count-hint">({wordCountStatus.message})</span>
            </span>
            {lastSaved && (
              <span className="last-saved">
                {isSaving ? 'Saving...' : `Saved: ${lastSaved.toLocaleTimeString()}`}
              </span>
            )}
          </div>
        </div>
        
        <textarea
          className="writing-textarea"
          placeholder={content.writingSpace?.placeholder || "Start writing here..."}
          value={writingText}
          onChange={handleTextChange}
          onBlur={saveWriting}
          rows={15}
        />
        
        <div className="writing-actions">
          <button onClick={saveWriting} className="btn btn-secondary" disabled={isSaving}>
            💾 Save Draft
          </button>
          <button onClick={handleClear} className="btn btn-danger">
            🗑️ Clear
          </button>
        </div>
      </div>

      {/* Rubric (Collapsible) */}
      {content.rubric && (
        <div className="writing-rubric">
          <button 
            className="rubric-toggle"
            onClick={() => setShowRubric(!showRubric)}
          >
            {showRubric ? '▼' : '▶'} Grading Rubric {showRubric ? '(Click to hide)' : '(Click to view)'}
          </button>
          
          {showRubric && (
            <div className="rubric-content">
              {content.rubric.title && <h4>{content.rubric.title}</h4>}
              {content.rubric.criteria ? (
                <div className="rubric-criteria">
                  {content.rubric.criteria.map((criterion, index) => (
                    <div key={index} className="rubric-item">
                      <div className="rubric-item-header">
                        <strong>{criterion.name}</strong>
                        <span className="rubric-points">({criterion.points} points)</span>
                      </div>
                      <p>{criterion.description}</p>
                    </div>
                  ))}
                </div>
              ) : Array.isArray(content.rubric) ? (
                <ul>
                  {content.rubric.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          )}
        </div>
      )}

      {/* Example Response (Collapsible) */}
      {content.exampleResponse && (
        <div className="writing-example">
          <button 
            className="example-toggle"
            onClick={() => setShowExample(!showExample)}
          >
            {showExample ? '▼' : '▶'} Example Response {showExample ? '(Click to hide)' : '(Click to view)'}
          </button>
          
          {showExample && (
            <div className="example-content">
              <div className="example-warning">
                ⚠️ <strong>Note:</strong> This is an example to guide you. Write your own original response—do not copy this!
              </div>
              {typeof content.exampleResponse === 'string' ? (
                <div className="example-text" dangerouslySetInnerHTML={{ __html: content.exampleResponse.replace(/\n/g, '<br />') }} />
              ) : (
                <div className="example-text">
                  {content.exampleResponse.prompt && (
                    <div className="example-prompt">
                      <strong>Prompt:</strong> {content.exampleResponse.prompt}
                    </div>
                  )}
                  {content.exampleResponse.response && (
                    <div className="example-response" dangerouslySetInnerHTML={{ __html: content.exampleResponse.response.replace(/\n/g, '<br />') }} />
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Completion Actions */}
      <div className="writing-completion">
        <div className="completion-info">
          <p>✅ When you're satisfied with your writing, mark it as complete below.</p>
          <p>💾 Your work is automatically saved every 10 seconds and when you click "Save Draft".</p>
        </div>
        <div className="completion-actions">
          <button onClick={onComplete} className="btn btn-secondary">
            ← Back to Module
          </button>
          <button 
            onClick={handleMarkComplete} 
            className="btn btn-primary"
            disabled={wordCount < (content.writingSpace?.minWords || 100)}
          >
            ✓ Mark as Complete
          </button>
        </div>
      </div>
    </div>
  );
}

export default WritingExerciseContent;

