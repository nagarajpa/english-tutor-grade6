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

### For Desktop/Laptop Users

#### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

#### Installation

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

---

### 📱 For iPad Pro Users

There are **three methods** to use this English Tutor on your iPad Pro, from easiest to most advanced:

---

## Method 1: Access Hosted Version (Recommended - Easiest) ⭐

This is the **simplest method** - no installation required!

### Option A: Deploy to GitHub Pages (Free)

1. **On your computer**, navigate to the project directory and build the app:
```bash
npm run build
```

2. Install GitHub Pages deployment tool:
```bash
npm install -g gh-pages
```

3. Add this to your `package.json` (homepage and deploy script):
```json
{
  "homepage": "https://nagarajpa.github.io/english-tutor-grade6",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy to GitHub Pages:
```bash
npm run deploy
```

5. **On your iPad Pro**:
   - Open Safari
   - Go to: `https://nagarajpa.github.io/english-tutor-grade6`
   - Tap the **Share** button → **Add to Home Screen**
   - The app will appear like a native app on your iPad!

**Benefits:**
- ✅ Works instantly on iPad
- ✅ No installation needed
- ✅ Access from anywhere with internet
- ✅ Updates automatically when you redeploy
- ✅ Full-screen experience like a native app

### Option B: Deploy to Netlify (Free, Alternative)

1. **On your computer**, push your code to GitHub (already done!)

2. Go to [netlify.com](https://netlify.com) and sign in with GitHub

3. Click "New site from Git" → Choose your repository

4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

5. Click "Deploy site"

6. **On your iPad Pro**:
   - Open Safari
   - Go to your Netlify URL (e.g., `https://your-app.netlify.app`)
   - Tap **Share** → **Add to Home Screen**

---

## Method 2: Using iSH Terminal App (Advanced - For Local Development)

Run the actual development server on your iPad Pro using a Linux environment.

### Step 1: Install iSH App

1. **On your iPad Pro**, open the App Store
2. Search for **"iSH Shell"** (free app)
3. Install and open iSH

### Step 2: Install Node.js in iSH

```bash
# Update package manager
apk update

# Install Node.js and npm
apk add nodejs npm

# Verify installation
node --version
npm --version
```

### Step 3: Clone the Repository

```bash
# Install git
apk add git

# Clone your repository
git clone https://github.com/nagarajpa/english-tutor-grade6.git

# Navigate to project
cd english-tutor-grade6
```

### Step 4: Install Dependencies

```bash
npm install
```

**Note**: This may take 10-20 minutes on iPad due to ARM processor compilation.

### Step 5: Start the Server

```bash
npm run dev
```

### Step 6: Access in Safari

1. Open Safari on iPad
2. Go to: `http://localhost:3000`
3. Use the app!

**Tips for iSH:**
- Keep iSH app open in background while using Safari
- Server might be slower than on desktop
- Save your work frequently
- iSH simulates x86 Linux, so some packages may have compatibility issues

**Troubleshooting iSH:**
```bash
# If npm install fails, try:
npm install --legacy-peer-deps

# If Vite won't start:
npm run dev -- --host 0.0.0.0
```

---

## Method 3: Using a-Shell App (Alternative Terminal)

Another terminal option for iPad Pro.

### Step 1: Install a-Shell

1. Open App Store on iPad
2. Search for **"a-Shell"** (free) or **"a-Shell mini"**
3. Install and open

### Step 2: Install Tools

```bash
# a-Shell comes with basic tools pre-installed
# Clone repository
lg2 clone https://github.com/nagarajpa/english-tutor-grade6.git

cd english-tutor-grade6
```

### Step 3: Install and Run

```bash
npm install
npm run dev
```

### Step 4: Access in Safari

Open Safari and go to `http://localhost:3000`

---

## Method 4: Using Code Editor Apps on iPad

For editing and running the code directly on iPad.

### Using Play.js (Paid App - $20)

**Best option for serious development on iPad!**

1. **Install Play.js** from App Store
2. Download your repository from GitHub within the app
3. Install dependencies (built-in npm support)
4. Run the development server
5. Access via built-in browser or Safari

**Features:**
- Native Node.js support
- Built-in code editor
- Git integration
- Fast performance
- Local file system access

### Using Replit Mobile (Free)

1. Go to [replit.com](https://replit.com) on iPad Safari
2. Sign in or create account
3. Import from GitHub: `https://github.com/nagarajpa/english-tutor-grade6`
4. Click "Run" - Replit handles everything automatically
5. Access via the provided URL

---

## 📋 Comparison of Methods

| Method | Difficulty | Cost | Performance | Best For |
|--------|-----------|------|-------------|----------|
| **GitHub Pages/Netlify** | ⭐ Easy | Free | Excellent | Students using the app |
| **iSH Terminal** | ⭐⭐⭐ Advanced | Free | Slow | Learning/experimentation |
| **a-Shell** | ⭐⭐⭐ Advanced | Free | Moderate | Alternative to iSH |
| **Play.js** | ⭐⭐ Moderate | $20 | Excellent | Serious iPad development |
| **Replit** | ⭐ Easy | Free | Good | Quick testing/sharing |

---

## 🎯 Recommended Setup for Different Users

### **For Students (Just Want to Use the App):**
→ **Method 1** (GitHub Pages or Netlify)
- No installation needed
- Works perfectly on iPad
- Add to home screen for app-like experience

### **For Teachers/Parents Setting Up:**
→ **Method 1** (Deploy once, all students access via URL)
- One-time setup on your computer
- Share URL with students
- No iPad configuration needed

### **For Developers Learning on iPad:**
→ **Method 4** (Play.js or Replit)
- Real development environment
- Can edit code and see changes
- Good learning tool

### **For Advanced Users:**
→ **Method 2** (iSH) if you want local development experience
- Full control
- Learn terminal commands
- Free but complex

---

## 💡 Quick Start for iPad Pro (Recommended Path)

### For Immediate Use:

1. **On Computer**: Deploy to GitHub Pages (5 minutes)
   ```bash
   npm run build
   npm install -g gh-pages
   npm run deploy
   ```

2. **On iPad Pro**: 
   - Open Safari
   - Visit: `https://nagarajpa.github.io/english-tutor-grade6`
   - Tap Share → Add to Home Screen
   - **Done!** App appears like a native iPad app

### For Development:

1. **Get Play.js** ($20 one-time, worth it for development)
2. **Or use Replit** (free, cloud-based)
3. **Or try iSH** (free, more challenging)

---

## 📱 iPad-Specific Features & Tips

### Making it Feel Like a Native App

After adding to home screen:

1. **Full-Screen Mode**: Taps the app icon - opens without Safari toolbar
2. **Offline Support**: Visit once, then works offline (service workers can be added)
3. **Split Screen**: Use alongside Notes app for studying
4. **Apple Pencil**: Can be used for interacting with the interface

### iPad Pro Optimization

The app is already optimized for iPad:
- ✅ Responsive design works on all screen sizes
- ✅ Touch-friendly buttons and navigation
- ✅ Readable fonts sized for tablet viewing
- ✅ Portrait and landscape modes supported
- ✅ No Flash or other desktop-only technologies

### Recommended Safari Settings

For best experience:
1. Settings → Safari → Desktop Website → OFF (use mobile site)
2. Settings → Safari → Prevent Cross-Site Tracking → OFF (for local storage)
3. Settings → Safari → Block All Cookies → OFF (needed for progress tracking)

---

## 🔧 Troubleshooting on iPad

### Progress Not Saving?
- Check Safari settings allow local storage/cookies
- Try clearing Safari cache and reloading

### App Not Loading?
- Check internet connection (for hosted version)
- For local: Ensure terminal app (iSH/a-Shell) is running
- Try restarting Safari

### Slow Performance?
- Close other apps
- Restart iPad
- Use hosted version (Method 1) instead of local

### Can't Add to Home Screen?
- Must use Safari (not Chrome or other browsers)
- Tap Share icon (box with arrow)
- Scroll down to "Add to Home Screen"

---

## 📚 Additional Resources for iPad Users

- **GitHub repository**: https://github.com/nagarajpa/english-tutor-grade6
- **Report issues**: Create an issue on GitHub
- **Updates**: Pull latest changes and redeploy

---

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

### 📚 Module 1: Vocabulary (8 Chapters - 36 Questions)
1. **Context Clues** - Understanding hints in sentences
2. **Word Roots and Affixes** - Greek and Latin origins
3. **Figurative Language** - Similes, metaphors, personification, hyperbole
4. **Idioms and Expressions** - Non-literal phrases
5. **Synonyms and Antonyms** - Similar and opposite meanings
6. **Connotation and Denotation** - Understanding nuances in word meanings
7. **Multiple Meaning Words** - Words with different definitions
8. **Academic Vocabulary (Tier 2)** - High-frequency academic terms

### ✏️ Module 2: Grammar (7 Chapters - 38 Questions)
1. **Parts of Speech** - Nouns, pronouns, and verbs
2. **Sentence Structure** - Simple and compound sentences
3. **Mastering Pronouns - Part 1** - Pronoun case (subjective, objective, possessive)
4. **Mastering Pronouns - Part 2** - Intensive pronouns and clear antecedents
5. **Punctuation for Clarity** - Parenthetical elements and coordinate adjectives
6. **Sentence Variety and Style** - Simple, compound, and complex sentences
7. **Avoiding Common Errors** - Pronoun shifts and misplaced modifiers

### 📖 Module 3: Reading Comprehension (7 Chapters - 36 Questions)
1. **Main Idea and Supporting Details** - Finding central points
2. **Making Inferences** - Reading between the lines
3. **Citing Textual Evidence** - The "Golden Rule" - proving your answers
4. **Theme vs. Central Idea** - Literature vs. nonfiction analysis
5. **Plot Structure and Text Organization** - How stories and texts are built
6. **Point of View and Author's Purpose** - Perspective shapes meaning (P.I.E.)
7. **Close Reading Strategy** - Three-pass method for difficult texts

### ✍️ Module 4: Writing (7 Chapters - 37 Questions)
1. **Paragraph Structure** - Topic sentences and supporting details
2. **Narrative Writing** - Story elements and sensory details
3. **Argumentative Writing** - Claims, evidence, and formal tone
4. **Informative/Explanatory Writing** - Teaching topics clearly
5. **The Writing Process** - Planning, drafting, revising, editing, publishing
6. **Research Skills** - Evaluating credibility and avoiding plagiarism
7. **Transition Words and Organization** - Making writing flow

### 📊 Complete Course Statistics
- **Total Chapters**: 29
- **Total Practice Questions**: 147
- **California Common Core Aligned**: 100%
- **Grade Level**: 6

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

