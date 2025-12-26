# English Language Arts - Grade 6 Interactive Course

A comprehensive, interactive web-based English Language Arts course designed for Grade 6 students following the California curriculum. This platform covers Vocabulary, Grammar, Reading Comprehension, and Writing with progress tracking and interactive exercises.

## Features

### 📚 Comprehensive Curriculum
- **Vocabulary**: Context clues, word roots, Greek and Latin origins
- **Grammar**: Parts of speech, sentence structure, and language mechanics
- **Reading Comprehension**: Main ideas, supporting details, and making inferences
- **Writing**: Paragraph structure, narrative writing, and composition skills

### 🎯 Interactive Learning
- Engaging lessons with clear explanations and examples
- Practice exercises with immediate feedback
- Multiple-choice questions with detailed explanations
- Reading passages with comprehension questions

### 📊 Progress Tracking
- Track completed lessons and exercises
- View scores and performance statistics
- Monitor progress across all modules
- Resume where you left off

### 🎨 Modern Interface
- Clean, intuitive design
- Responsive layout for all devices
- Easy navigation between chapters and lessons
- Visual progress indicators

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Navigate to the project directory:
```bash
cd "/Users/nputti/English Tutor"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
English Tutor/
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ModuleView.jsx
│   │   ├── LessonView.jsx
│   │   ├── LessonContent.jsx
│   │   └── ExerciseContent.jsx
│   ├── data/
│   │   └── courseData.js   # Course content and curriculum
│   ├── utils/
│   │   └── progressTracker.js  # Progress tracking utility
│   ├── styles/
│   │   └── main.css        # Application styles
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Course Content

### Module 1: Vocabulary
- **Chapter 1**: Context Clues
  - Understanding different types of context clues
  - Practice exercises with real-world examples
  
- **Chapter 2**: Word Roots and Affixes
  - Greek and Latin roots
  - Building vocabulary through word analysis

### Module 2: Grammar
- **Chapter 1**: Parts of Speech
  - Nouns, pronouns, and verbs
  - Identifying parts of speech in context
  
- **Chapter 2**: Sentence Structure
  - Simple and compound sentences
  - Proper punctuation and conjunctions

### Module 3: Reading Comprehension
- **Chapter 1**: Main Idea and Supporting Details
  - Finding the main idea
  - Identifying supporting evidence
  
- **Chapter 2**: Making Inferences
  - Reading between the lines
  - Drawing conclusions from text

### Module 4: Writing
- **Chapter 1**: Paragraph Structure
  - Topic sentences and supporting details
  - Writing cohesive paragraphs
  
- **Chapter 2**: Narrative Writing
  - Story elements (characters, setting, plot)
  - Point of view and dialogue

## How to Use

### For Students

1. **Start at the Dashboard**: View all available modules and your overall progress

2. **Select a Module**: Choose from Vocabulary, Grammar, Reading Comprehension, or Writing

3. **Work Through Chapters**: Each module contains multiple chapters with lessons and exercises

4. **Complete Lessons**: Read through lesson content with examples and explanations

5. **Practice with Exercises**: Test your knowledge with interactive exercises
   - Answer all questions
   - Submit for immediate feedback
   - Review explanations for each answer
   - Retry exercises to improve your score

6. **Track Progress**: Monitor your completion status and scores on the dashboard

### For Educators/Parents

- Progress is saved locally in the browser
- Students can work at their own pace
- Exercises provide immediate feedback
- All content aligns with Grade 6 California standards

## Customization

### Adding New Content

To add new lessons or exercises, edit `src/data/courseData.js`:

```javascript
{
  id: "unique-lesson-id",
  title: "Lesson Title",
  type: "lesson", // or "exercise"
  content: {
    // Add lesson/exercise content here
  }
}
```

### Modifying Styles

Edit `src/styles/main.css` to customize colors, fonts, and layout.

## Technology Stack

- **React 18**: UI framework
- **React Router**: Navigation and routing
- **Vite**: Build tool and development server
- **CSS3**: Styling with custom properties
- **Local Storage**: Client-side progress tracking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

Potential features for future versions:
- User authentication and cloud-based progress sync
- Additional modules (Speaking & Listening, Research)
- More interactive exercise types (drag-and-drop, fill-in-blank)
- Printable worksheets
- Teacher dashboard for monitoring multiple students
- Gamification elements (badges, achievements)

## License

This project is created for educational purposes.

## Support

For questions or issues, please refer to the documentation or contact your instructor.

---

Built with ❤️ for Grade 6 students learning English Language Arts

