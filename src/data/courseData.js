// Grade 6 English Language Arts Course Data - California Curriculum Aligned

export const courseData = {
  courseTitle: "English Language Arts - Grade 6",
  description: "A comprehensive course covering Vocabulary, Grammar, Reading Comprehension, and Writing",
  
  modules: [
    {
      id: "vocabulary",
      title: "Vocabulary",
      icon: "📚",
      description: "Expand your word knowledge and understanding",
      chapters: [
        {
          id: "vocab-1",
          title: "Chapter 1: Context Clues",
          lessons: [
            {
              id: "vocab-1-1",
              title: "Understanding Context Clues",
              type: "lesson",
              content: {
                introduction: "Context clues are hints found within a sentence or paragraph that help you understand the meaning of unfamiliar words.",
                explanation: "There are several types of context clues:\n\n1. **Definition Clues**: The word is directly defined in the sentence.\n2. **Synonym Clues**: A similar word is used nearby.\n3. **Antonym Clues**: An opposite word gives you a hint.\n4. **Example Clues**: Examples help explain the word.\n5. **Inference Clues**: You use logic and prior knowledge.",
                examples: [
                  {
                    text: "The luminous stars shone brightly in the night sky.",
                    explanation: "The word 'brightly' helps us understand that 'luminous' means glowing or shining."
                  },
                  {
                    text: "Unlike her gregarious sister, Maria was shy and reserved.",
                    explanation: "The contrast ('Unlike') tells us 'gregarious' means the opposite of shy - sociable and outgoing."
                  }
                ]
              }
            },
            {
              id: "vocab-1-2",
              title: "Practice: Context Clues",
              type: "exercise",
              content: {
                instructions: "Read each sentence and use context clues to determine the meaning of the underlined word.",
                questions: [
                  {
                    id: "q1",
                    question: "The ancient artifact was so fragile that the archaeologists handled it with extreme care.",
                    word: "fragile",
                    options: ["strong and sturdy", "easily broken", "very old", "valuable"],
                    correctAnswer: 1,
                    explanation: "The phrase 'handled it with extreme care' suggests the artifact could break easily."
                  },
                  {
                    id: "q2",
                    question: "The teacher's meticulous grading meant she checked every detail of our essays carefully.",
                    word: "meticulous",
                    options: ["careless", "quick", "very careful and thorough", "strict"],
                    correctAnswer: 2,
                    explanation: "'Checked every detail carefully' helps us understand that meticulous means very thorough and careful."
                  },
                  {
                    id: "q3",
                    question: "The storm caused havoc in the town: trees fell, power lines snapped, and several homes were damaged.",
                    word: "havoc",
                    options: ["peace", "widespread destruction", "rain", "noise"],
                    correctAnswer: 1,
                    explanation: "The examples of damage (trees fell, power lines snapped, homes damaged) show that havoc means chaos and destruction."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "vocab-2",
          title: "Chapter 2: Word Roots and Affixes",
          lessons: [
            {
              id: "vocab-2-1",
              title: "Greek and Latin Roots",
              type: "lesson",
              content: {
                introduction: "Many English words come from Greek and Latin roots. Understanding these word parts helps you 'unlock' the meaning of thousands of unfamiliar words. This is a crucial skill for Grade 6 academic success!",
                explanation: "**Greek Roots:**\n- **bio** (life): biology, biography, biosphere\n- **graph** (write): autograph, paragraph, graphic\n- **tele** (far): telescope, telephone, television\n- **phon** (sound): microphone, symphony, telephone\n- **micro** (small): microscope, microbiome, microwave\n- **scope** (see/look): telescope, microscope, periscope\n\n**Latin Roots:**\n- **port** (carry): transport, portable, export\n- **dict** (say/speak): dictate, predict, dictionary\n- **scrib/script** (write): describe, manuscript, inscription\n- **vid/vis** (see): video, visible, vision\n- **aud** (hear): audio, auditorium, audible\n- **struct** (build): construct, structure, instruct\n\n**Common Prefixes:**\n- **pre-** (before): prefix, predict, prepare, preview\n- **anti-** (against): antidote, antisocial, antiseptic, antibacterial\n- **post-** (after): postpone, postscript, postwar\n- **trans-** (across): transport, transfer, translate\n- **re-** (again): replay, rewrite, return\n\n**The 'Context, Clue, Connect' Method:**\n1. **Context**: Read the word in a full sentence\n2. **Clue**: Look for prefixes, suffixes, or roots you recognize\n3. **Connect**: Try to use the word in a sentence about your own life",
                examples: [
                  {
                    text: "autobiography",
                    explanation: "auto (self) + bio (life) + graph (write) = a written account of one's own life"
                  },
                  {
                    text: "microscope",
                    explanation: "micro (small) + scope (see) = an instrument for seeing very small things"
                  },
                  {
                    text: "predict",
                    explanation: "pre (before) + dict (say) = to say what will happen before it occurs"
                  }
                ]
              }
            },
            {
              id: "vocab-2-2",
              title: "Practice: Roots and Affixes",
              type: "exercise",
              content: {
                instructions: "Use your knowledge of roots, prefixes, and suffixes to determine the meaning of each word. Remember: Context, Clue, Connect!",
                questions: [
                  {
                    id: "q1",
                    question: "What does 'telescope' mean based on its roots? (tele = far, scope = see)",
                    word: "telescope",
                    options: ["to see far away", "to write far away", "to hear far away", "to speak far away"],
                    correctAnswer: 0,
                    explanation: "tele (far) + scope (see) = an instrument for seeing things that are far away"
                  },
                  {
                    id: "q2",
                    question: "What does 'contradict' mean? (contra = against, dict = say)",
                    word: "contradict",
                    options: ["to say loudly", "to say something against or opposite", "to predict", "to speak clearly"],
                    correctAnswer: 1,
                    explanation: "contra (against) + dict (say) = to say something that goes against or opposes what someone else said"
                  },
                  {
                    id: "q3",
                    question: "What does 'biosphere' mean? (bio = life, sphere = ball/globe)",
                    word: "biosphere",
                    options: ["a round ball", "the regions of Earth where life exists", "a type of microscope", "living in space"],
                    correctAnswer: 1,
                    explanation: "bio (life) + sphere (globe) = the regions of Earth's surface and atmosphere where living organisms exist"
                  },
                  {
                    id: "q4",
                    question: "What does 'antiseptic' mean? (anti = against, septic = infection/decay)",
                    word: "antiseptic",
                    options: ["causing infection", "before infection", "preventing infection", "very clean"],
                    correctAnswer: 2,
                    explanation: "anti (against) + septic (infection) = preventing infection or decay by destroying harmful microorganisms"
                  },
                  {
                    id: "q5",
                    question: "What does 'microbiome' mean? (micro = small, bio = life)",
                    word: "microbiome",
                    options: ["small animals", "tiny living organisms in an environment", "a small book", "microscopic viewing"],
                    correctAnswer: 1,
                    explanation: "micro (small) + bio (life) = the community of tiny living organisms (bacteria, fungi) in a particular environment"
                  }
                ]
              }
            }
          ]
        },
        {
          id: "vocab-3",
          title: "Chapter 3: Figurative Language",
          lessons: [
            {
              id: "vocab-3-1",
              title: "Figurative Language: Similes, Metaphors, and More",
              type: "lesson",
              content: {
                introduction: "Figurative language helps writers create vivid images and express ideas in creative ways. California standards require Grade 6 students to identify and understand nuances in word meanings through various types of figurative language.",
                explanation: "**Simile**: A comparison between two unlike things using 'like' or 'as'\n- Example: She was as brave as a lion.\n- Example: Quiet as a mouse.\n- Example: The snow fell like a soft blanket.\n\n**Metaphor**: A direct comparison that says one thing IS another thing (without using 'like' or 'as')\n- Example: Time is money.\n- Example: The snow is a white blanket.\n- Example: Her smile was sunshine on a cloudy day.\n\n**Personification**: Giving human qualities to non-human things\n- Example: The wind whistled through the trees.\n- Example: The sun smiled down on us.\n- Example: Time flies when you're having fun.\n\n**Hyperbole**: An extreme exaggeration for emphasis or effect\n- Example: I've told you a million times!\n- Example: This backpack weighs a ton.\n- Example: I'm so hungry I could eat a horse.\n\n**Key Differences:**\n- Similes use 'like' or 'as' to make comparisons\n- Metaphors make direct comparisons\n- Personification gives human traits to objects/ideas\n- Hyperbole uses extreme exaggeration\n\n**Why Use Them?**\n- Make writing more interesting and descriptive\n- Help readers visualize and understand ideas\n- Create emotional connections\n- Add emphasis or humor",
                examples: [
                  {
                    text: "The classroom was a zoo during the substitute teacher's lesson.",
                    explanation: "This is a metaphor comparing the classroom to a zoo, suggesting it was chaotic and noisy."
                  },
                  {
                    text: "The alarm clock screamed at me to wake up.",
                    explanation: "This is personification. Alarm clocks can't actually scream; this gives the clock human-like qualities."
                  },
                  {
                    text: "I'm so tired I could sleep for a year!",
                    explanation: "This is hyperbole - an obvious exaggeration. The person is very tired but won't actually sleep for a year."
                  }
                ]
              }
            },
            {
              id: "vocab-3-2",
              title: "Practice: Figurative Language",
              type: "exercise",
              content: {
                instructions: "Identify the type of figurative language used in each sentence.",
                questions: [
                  {
                    id: "q1",
                    question: "The moon was a glowing pearl in the night sky.",
                    options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
                    correctAnswer: 1,
                    explanation: "This is a metaphor. The moon is directly compared to a pearl without using 'like' or 'as'."
                  },
                  {
                    id: "q2",
                    question: "After running the marathon, her legs felt like jelly.",
                    options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
                    correctAnswer: 0,
                    explanation: "This is a simile using 'like' to compare her legs to jelly, suggesting they were weak and wobbly."
                  },
                  {
                    id: "q3",
                    question: "The flowers danced in the gentle breeze.",
                    options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
                    correctAnswer: 2,
                    explanation: "This is personification. Flowers can't actually dance; this gives them human-like movement and qualities."
                  },
                  {
                    id: "q4",
                    question: "I have a million things to do before tomorrow!",
                    options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
                    correctAnswer: 3,
                    explanation: "This is hyperbole - an exaggeration for emphasis. The person doesn't actually have a million things to do."
                  },
                  {
                    id: "q5",
                    question: "The old computer groaned as it tried to start up.",
                    options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
                    correctAnswer: 2,
                    explanation: "This is personification. Computers don't actually groan; this gives the computer human-like qualities to show it's struggling."
                  },
                  {
                    id: "q6",
                    question: "Her smile was like sunshine breaking through the clouds.",
                    options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
                    correctAnswer: 0,
                    explanation: "This is a simile using 'like' to compare her smile to sunshine, suggesting it was bright and uplifting."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "vocab-4",
          title: "Chapter 4: Idioms and Expressions",
          lessons: [
            {
              id: "vocab-4-1",
              title: "Understanding Idioms",
              type: "lesson",
              content: {
                introduction: "An idiom is a phrase or expression whose meaning cannot be understood from the individual words. Idioms are common in everyday English.",
                explanation: "**What is an Idiom?**\nAn idiom is a group of words with a meaning that is different from the literal meaning of each word.\n\n**Common English Idioms:**\n- **Break a leg**: Good luck (often said to performers)\n- **It's raining cats and dogs**: It's raining very heavily\n- **Piece of cake**: Something very easy\n- **Cost an arm and a leg**: Very expensive\n- **Hit the books**: To study hard\n- **Under the weather**: Feeling sick\n- **Spill the beans**: Reveal a secret\n- **Bite off more than you can chew**: Take on more than you can handle\n\n**Why Learn Idioms?**\n- They're used frequently in everyday conversation\n- Understanding them helps with reading comprehension\n- They make your speaking and writing more natural",
                examples: [
                  {
                    text: "I need to hit the books tonight because I have a big test tomorrow.",
                    explanation: "This doesn't mean physically hitting books! It means to study intensely."
                  },
                  {
                    text: "The math homework was a piece of cake.",
                    explanation: "The homework wasn't actually cake. This means it was very easy to complete."
                  }
                ]
              }
            },
            {
              id: "vocab-4-2",
              title: "Practice: Idioms",
              type: "exercise",
              content: {
                instructions: "Choose the correct meaning of each idiom as used in the sentence.",
                questions: [
                  {
                    id: "q1",
                    question: "When Sarah heard the good news, she was on cloud nine.",
                    word: "on cloud nine",
                    options: ["very sad", "extremely happy", "confused", "tired"],
                    correctAnswer: 1,
                    explanation: "'On cloud nine' means extremely happy or delighted."
                  },
                  {
                    id: "q2",
                    question: "My mom said we should take the news with a grain of salt.",
                    word: "with a grain of salt",
                    options: ["believe completely", "not believe at all", "view with skepticism", "add salt"],
                    correctAnswer: 2,
                    explanation: "'Take with a grain of salt' means to view something with skepticism or not fully believe it."
                  },
                  {
                    id: "q3",
                    question: "The team really dropped the ball on this project.",
                    word: "dropped the ball",
                    options: ["played sports", "made a mistake", "succeeded", "threw something"],
                    correctAnswer: 1,
                    explanation: "'Dropped the ball' means to make a mistake or fail to do what was expected."
                  },
                  {
                    id: "q4",
                    question: "Let's not beat around the bush - just tell me what happened.",
                    word: "beat around the bush",
                    options: ["avoid the main topic", "speak directly", "garden", "fight"],
                    correctAnswer: 0,
                    explanation: "'Beat around the bush' means to avoid talking about what's important or to speak indirectly."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "vocab-5",
          title: "Chapter 5: Synonyms and Antonyms",
          lessons: [
            {
              id: "vocab-5-1",
              title: "Expanding Your Vocabulary",
              type: "lesson",
              content: {
                introduction: "Understanding synonyms and antonyms helps you choose precise words and understand shades of meaning in reading.",
                explanation: "**Synonyms**: Words that have similar meanings\n- Happy, joyful, cheerful, delighted\n- Big, large, huge, enormous, gigantic\n- Smart, intelligent, clever, bright\n\n**Important Note**: Synonyms rarely have EXACTLY the same meaning. There are often subtle differences:\n- 'Happy' is general; 'ecstatic' is extremely happy\n- 'Big' is basic; 'colossal' suggests something impressively large\n\n**Antonyms**: Words with opposite meanings\n- Hot ↔ Cold\n- Fast ↔ Slow\n- Beginning ↔ End\n- Ancient ↔ Modern\n\n**Why They Matter:**\n- Avoid repetition in writing\n- Choose the most precise word for your meaning\n- Better understand what you read\n- Make your writing more interesting",
                examples: [
                  {
                    text: "Instead of: 'The movie was good. The acting was good. The story was good.'\nBetter: 'The movie was excellent. The acting was superb. The story was compelling.'",
                    explanation: "Using synonyms (excellent, superb, compelling) makes writing more interesting and shows different levels of quality."
                  },
                  {
                    text: "The ancient ruins contrasted sharply with the modern city.",
                    explanation: "Ancient and modern are antonyms that highlight the difference between old and new."
                  }
                ]
              }
            },
            {
              id: "vocab-5-2",
              title: "Practice: Synonyms and Antonyms",
              type: "exercise",
              content: {
                instructions: "Choose the best synonym or antonym for the underlined word.",
                questions: [
                  {
                    id: "q1",
                    question: "Which word is a SYNONYM for 'courageous'?",
                    word: "courageous",
                    options: ["fearful", "brave", "weak", "careful"],
                    correctAnswer: 1,
                    explanation: "Brave is a synonym for courageous, both meaning showing courage or bravery."
                  },
                  {
                    id: "q2",
                    question: "Which word is an ANTONYM for 'generous'?",
                    word: "generous",
                    options: ["kind", "giving", "selfish", "wealthy"],
                    correctAnswer: 2,
                    explanation: "Selfish is the opposite of generous. A generous person gives freely; a selfish person keeps things for themselves."
                  },
                  {
                    id: "q3",
                    question: "Which word is a SYNONYM for 'ancient'?",
                    word: "ancient",
                    options: ["modern", "old", "new", "future"],
                    correctAnswer: 1,
                    explanation: "Old is a synonym for ancient, both referring to something from long ago."
                  },
                  {
                    id: "q4",
                    question: "Which word is an ANTONYM for 'triumph'?",
                    word: "triumph",
                    options: ["victory", "success", "defeat", "celebration"],
                    correctAnswer: 2,
                    explanation: "Defeat is the opposite of triumph. Triumph means victory or success; defeat means loss."
                  },
                  {
                    id: "q5",
                    question: "Which word is a SYNONYM for 'vital' in the sentence: 'Water is vital for all living things'?",
                    word: "vital",
                    options: ["unnecessary", "essential", "optional", "rare"],
                    correctAnswer: 1,
                    explanation: "Essential is a synonym for vital, both meaning absolutely necessary or critically important."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "vocab-6",
          title: "Chapter 6: Connotation and Denotation",
          lessons: [
            {
              id: "vocab-6-1",
              title: "Word Meanings and Feelings - Understanding Nuances",
              type: "lesson",
              content: {
                introduction: "California Grade 6 standards require students to understand nuances in word meanings. Words have two types of meanings: their dictionary definition (denotation) and the feelings or associations they carry (connotation). This skill is critical for both understanding what you read and choosing the right words in your writing.",
                explanation: "**Denotation**: The literal, dictionary definition of a word\n- Example: 'Home' denotes a place where someone lives\n\n**Connotation**: The emotional associations and feelings a word suggests\n- Example: 'Home' connotes warmth, safety, family, and comfort\n\n**Understanding Nuances (Subtle Differences):**\nWords with similar denotations can have very different connotations. This is what we call 'nuances' - the subtle shades of meaning.\n\n**Example Set 1: Words about Being Careful with Money**\n- **Cheap** (negative: poor quality, unwilling to spend)\n- **Inexpensive** (neutral/positive: good value, affordable)\n- **Economical** (positive: wise spending, efficient)\n- **Thrifty** (positive: careful and resourceful)\n\n**Example Set 2: Words about Being Young**\n- **Childish** (negative: immature, silly)\n- **Childlike** (positive: innocent, pure, full of wonder)\n- **Youthful** (positive: energetic, fresh, vibrant)\n- **Immature** (negative: not fully developed, irresponsible)\n\n**Example Set 3: Words about Being Thin**\n- **Slender** (positive: gracefully thin)\n- **Skinny** (negative: too thin, unhealthily thin)\n- **Slim** (positive: attractively thin)\n- **Scrawny** (negative: thin and weak-looking)\n\n**The Connotation Scale:**\nPositive → Neutral → Negative\n\n**Why This Matters:**\n- Writers choose words carefully to create specific feelings\n- Understanding connotation helps you interpret what you read\n- Using words with the right connotation makes your writing more effective",
                examples: [
                  {
                    text: "Compare: 'He is stubborn' vs. 'He is determined' vs. 'He is persistent'",
                    explanation: "All mean someone who doesn't give up. 'Stubborn' is negative (unreasonably refusing to change), 'determined' is positive (strong willpower), and 'persistent' is neutral/positive (continuing despite difficulty)."
                  },
                  {
                    text: "Compare: 'The room smelled unusual' vs. 'The room had a fragrance' vs. 'The room reeked'",
                    explanation: "'Unusual' is neutral, 'fragrance' suggests a pleasant smell (positive), while 'reeked' suggests a strong unpleasant smell (negative)."
                  },
                  {
                    text: "Compare: 'She is confident' vs. 'She is arrogant' vs. 'She is self-assured'",
                    explanation: "'Confident' and 'self-assured' are positive (believing in oneself appropriately), while 'arrogant' is negative (believing you're better than others)."
                  }
                ]
              }
            },
            {
              id: "vocab-6-2",
              title: "Practice: Understanding Nuances in Connotation",
              type: "exercise",
              content: {
                instructions: "Identify the nuances (subtle differences) in word meanings by analyzing their connotations. Remember: understanding connotation is a key Grade 6 California standard!",
                questions: [
                  {
                    id: "q1",
                    question: "Which word has the most POSITIVE connotation? All mean 'to laugh'.",
                    options: ["giggle", "cackle", "snicker", "chortle"],
                    correctAnswer: 0,
                    explanation: "Giggle has the most positive connotation, suggesting light, happy, innocent laughter. Cackle suggests harsh or witch-like laughter, snicker implies mocking, and chortle is somewhat positive but less joyful than giggle."
                  },
                  {
                    id: "q2",
                    question: "Which sentence describes someone in the most NEGATIVE way?",
                    options: [
                      "Marcus is thrifty with his money.",
                      "Marcus is careful with his money.",
                      "Marcus is stingy with his money.",
                      "Marcus is economical with his money."
                    ],
                    correctAnswer: 2,
                    explanation: "Stingy has a negative connotation, suggesting someone is unwilling to spend or share money even when they should. Thrifty is positive (wise with money), careful is neutral, and economical is positive (efficient)."
                  },
                  {
                    id: "q3",
                    question: "Compare these words describing someone thin: 'slender,' 'skinny,' 'slim,' 'scrawny.' Which has the most NEGATIVE connotation?",
                    options: ["slender", "skinny", "slim", "scrawny"],
                    correctAnswer: 3,
                    explanation: "Scrawny has the most negative connotation, suggesting someone is thin, weak-looking, and possibly unhealthy. Slender and slim are positive, while skinny can be negative but less so than scrawny."
                  },
                  {
                    id: "q4",
                    question: "In the sentence 'The politician's scheme was discovered,' what is the connotation of 'scheme'?",
                    options: ["positive", "neutral", "negative", "uncertain"],
                    correctAnswer: 2,
                    explanation: "Scheme has a negative connotation, suggesting a sneaky, dishonest, or secretive plan. A neutral alternative would be 'plan' or 'proposal.'"
                  },
                  {
                    id: "q5",
                    question: "Which word pair shows the GREATEST difference in connotation? Both words in each pair have similar denotations.",
                    options: [
                      "confident / self-assured",
                      "childlike / youthful",
                      "determined / persistent",
                      "childish / youthful"
                    ],
                    correctAnswer: 3,
                    explanation: "Childish (negative: immature) and youthful (positive: energetic and fresh) have the greatest connotation difference. The other pairs have more similar connotations."
                  },
                  {
                    id: "q6",
                    question: "A writer describes a character as 'unique' rather than 'weird.' What is the effect of this word choice?",
                    options: [
                      "Both words have the same effect",
                      "'Unique' sounds more positive - special and one-of-a-kind",
                      "'Weird' sounds more positive",
                      "Neither word has a connotation"
                    ],
                    correctAnswer: 1,
                    explanation: "'Unique' has a positive connotation (special, distinctive), while 'weird' has a negative connotation (strange in an off-putting way). This shows how word choice affects meaning."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "vocab-7",
          title: "Chapter 7: Multiple Meaning Words",
          lessons: [
            {
              id: "vocab-7-1",
              title: "Words with Many Meanings",
              type: "lesson",
              content: {
                introduction: "Many English words have multiple meanings depending on how they are used. Context helps you determine which meaning is intended.",
                explanation: "**Multiple Meaning Words** (also called homonyms or polysemous words) are words that have more than one definition.\n\n**Common Examples:**\n\n**Bank**\n- A place to keep money (noun)\n- The edge of a river (noun)\n- To tilt to one side (verb)\n\n**Bat**\n- A flying mammal (noun)\n- Equipment for hitting a ball (noun)\n- To hit something (verb)\n\n**Fair**\n- Treating people equally (adjective)\n- Light-colored (adjective)\n- A carnival or festival (noun)\n- Average, not bad (adjective)\n\n**Key**\n- Opens a lock (noun)\n- Important or essential (adjective)\n- A musical scale (noun)\n- A button on a keyboard (noun)\n\n**How to Determine Meaning:**\n1. Look at the context of the sentence\n2. Consider the part of speech (noun, verb, adjective)\n3. Think about what makes sense",
                examples: [
                  {
                    text: "We need to address this problem immediately. / Please write your address on the envelope.",
                    explanation: "First sentence: 'address' (verb) means to deal with. Second sentence: 'address' (noun) means location."
                  },
                  {
                    text: "The play was entertaining. / The children play in the park.",
                    explanation: "First sentence: 'play' (noun) means a theatrical performance. Second sentence: 'play' (verb) means to engage in activity for fun."
                  }
                ]
              }
            },
            {
              id: "vocab-7-2",
              title: "Practice: Multiple Meanings",
              type: "exercise",
              content: {
                instructions: "Choose the correct meaning of the underlined word based on how it is used in the sentence.",
                questions: [
                  {
                    id: "q1",
                    question: "The judge ruled in favor of the defendant.",
                    word: "ruled",
                    options: ["measured with a ruler", "made an official decision", "governed a country", "drew a line"],
                    correctAnswer: 1,
                    explanation: "In this context, 'ruled' means made an official legal decision."
                  },
                  {
                    id: "q2",
                    question: "She had a bright idea for the science project.",
                    word: "bright",
                    options: ["shining with light", "intelligent or clever", "cheerful", "colorful"],
                    correctAnswer: 1,
                    explanation: "In this context, 'bright' means intelligent or clever, describing the quality of the idea."
                  },
                  {
                    id: "q3",
                    question: "The bear climbed the tree to escape danger.",
                    word: "bear",
                    options: ["to carry something", "to tolerate", "a large mammal", "to give birth to"],
                    correctAnswer: 2,
                    explanation: "In this context, 'bear' is a noun meaning the animal."
                  },
                  {
                    id: "q4",
                    question: "Please watch the baby while I'm gone.",
                    word: "watch",
                    options: ["a timepiece worn on the wrist", "to look at attentively", "to supervise or guard", "to observe an event"],
                    correctAnswer: 2,
                    explanation: "In this context, 'watch' means to supervise or take care of someone."
                  },
                  {
                    id: "q5",
                    question: "The novel had an interesting plot.",
                    word: "plot",
                    options: ["a small piece of land", "a secret plan", "the story line of a book", "to mark on a graph"],
                    correctAnswer: 2,
                    explanation: "In this context, 'plot' refers to the storyline or sequence of events in the novel."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "vocab-8",
          title: "Chapter 8: Academic Vocabulary (Tier 2)",
          lessons: [
            {
              id: "vocab-8-1",
              title: "High-Frequency Academic Words",
              type: "lesson",
              content: {
                introduction: "Academic vocabulary (Tier 2 words) are words you'll see in textbooks, on tests, and in formal writing across all subjects. Mastering these words is essential for Grade 6 success in California schools.",
                explanation: "These words are used across different subjects (science, history, literature, math) and are crucial for understanding instructions and expressing your ideas clearly.\n\n**Core Academic Vocabulary:**\n\n**Analyze**: To examine something in detail to understand it better\n- Example: Analyze the character's motives in the story.\n- Connect: When you analyze something, you break it down into parts to understand how it works.\n\n**Context**: The circumstances or setting surrounding an event or statement\n- Example: Use context clues to find the meaning of the word.\n- Connect: Context helps you understand what's happening around something.\n\n**Evaluate**: To judge or determine the significance or worth of something\n- Example: Evaluate the effectiveness of the author's argument.\n- Connect: When you evaluate, you decide if something is good, bad, effective, or needs improvement.\n\n**Interpret**: To explain the meaning of information or actions\n- Example: How do you interpret the ending of the poem?\n- Connect: Interpretation means figuring out what something means or represents.\n\n**Significant**: Sufficiently great or important to be worthy of attention\n- Example: The discovery of fire was a significant event in history.\n- Connect: Something significant is important and makes a big difference.\n\n**Summarize**: To give a brief statement of the main points\n- Example: Summarize the first chapter in three sentences.\n- Connect: A summary includes only the most important information, not all the details.\n\n**Additional Key Terms:**\n- **Compare**: Show similarities between two or more things\n- **Contrast**: Show differences between two or more things\n- **Describe**: Give details about characteristics or qualities\n- **Explain**: Make something clear by giving reasons or details\n- **Infer**: Conclude something from evidence and reasoning\n- **Support**: Give evidence or reasons to back up a claim",
                examples: [
                  {
                    text: "Question: 'Analyze why the main character made that decision.'",
                    explanation: "This asks you to examine the character's thoughts, feelings, and circumstances to understand the reasons behind the decision."
                  },
                  {
                    text: "Question: 'What is the significance of the title?'",
                    explanation: "This asks you to evaluate how important the title is and what special meaning or purpose it has."
                  }
                ]
              }
            },
            {
              id: "vocab-8-2",
              title: "Practice: Academic Vocabulary",
              type: "exercise",
              content: {
                instructions: "Choose the academic vocabulary word that best completes each sentence or answers each question.",
                questions: [
                  {
                    id: "q1",
                    question: "When you _____ a text, you provide a brief overview of the main ideas.",
                    options: ["analyze", "summarize", "evaluate", "interpret"],
                    correctAnswer: 1,
                    explanation: "Summarize means to give a brief statement of the main points, creating a short overview."
                  },
                  {
                    id: "q2",
                    question: "To _____ means to examine something carefully to understand its parts and how they work together.",
                    options: ["describe", "analyze", "summarize", "compare"],
                    correctAnswer: 1,
                    explanation: "Analyze means to examine something in detail, breaking it down to understand it better."
                  },
                  {
                    id: "q3",
                    question: "Which word means 'to judge the value or importance of something'?",
                    options: ["context", "evaluate", "significant", "interpret"],
                    correctAnswer: 1,
                    explanation: "Evaluate means to judge or determine the significance or worth of something."
                  },
                  {
                    id: "q4",
                    question: "The _____ of a word includes the surrounding words and sentences that help you understand its meaning.",
                    options: ["context", "summary", "evaluation", "analysis"],
                    correctAnswer: 0,
                    explanation: "Context refers to the circumstances or setting surrounding something, helping you understand it."
                  },
                  {
                    id: "q5",
                    question: "When you _____ a poem, you explain what you think it means based on the words and your understanding.",
                    options: ["summarize", "describe", "interpret", "compare"],
                    correctAnswer: 2,
                    explanation: "Interpret means to explain the meaning of something based on your understanding and analysis."
                  },
                  {
                    id: "q6",
                    question: "A _____ discovery is one that is very important and makes a big difference.",
                    options: ["brief", "significant", "simple", "common"],
                    correctAnswer: 1,
                    explanation: "Significant means sufficiently great or important to be worthy of attention; it matters a lot."
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      id: "grammar",
      title: "Grammar",
      icon: "✏️",
      description: "Master the rules and structure of English",
      chapters: [
        {
          id: "grammar-1",
          title: "Chapter 1: Parts of Speech",
          lessons: [
            {
              id: "grammar-1-1",
              title: "Nouns, Pronouns, and Verbs",
              type: "lesson",
              content: {
                introduction: "Understanding parts of speech is fundamental to constructing clear sentences.",
                explanation: "**Nouns** name people, places, things, or ideas.\n- Common nouns: book, city, teacher\n- Proper nouns: California, Ms. Johnson, Pacific Ocean\n\n**Pronouns** replace nouns to avoid repetition.\n- Personal: I, you, he, she, it, we, they\n- Possessive: my, your, his, her, its, our, their\n\n**Verbs** show action or state of being.\n- Action verbs: run, write, think\n- Linking verbs: is, am, are, was, were, be, being, been",
                examples: [
                  {
                    text: "Sarah threw the ball to her friend.",
                    explanation: "Sarah (proper noun), ball (common noun), her (pronoun), threw (action verb), friend (common noun)"
                  }
                ]
              }
            },
            {
              id: "grammar-1-2",
              title: "Practice: Identifying Parts of Speech",
              type: "exercise",
              content: {
                instructions: "Identify the part of speech for the underlined word in each sentence.",
                questions: [
                  {
                    id: "q1",
                    question: "The quick brown fox jumped over the lazy dog.",
                    word: "jumped",
                    options: ["noun", "verb", "adjective", "adverb"],
                    correctAnswer: 1,
                    explanation: "'Jumped' is an action verb showing what the fox did."
                  },
                  {
                    id: "q2",
                    question: "She brought her umbrella to school.",
                    word: "her",
                    options: ["noun", "verb", "pronoun", "adjective"],
                    correctAnswer: 2,
                    explanation: "'Her' is a possessive pronoun showing ownership of the umbrella."
                  },
                  {
                    id: "q3",
                    question: "The Golden Gate Bridge is a famous landmark.",
                    word: "Golden Gate Bridge",
                    options: ["common noun", "proper noun", "verb", "pronoun"],
                    correctAnswer: 1,
                    explanation: "'Golden Gate Bridge' is a proper noun - it's the specific name of a place."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "grammar-2",
          title: "Chapter 2: Sentence Structure",
          lessons: [
            {
              id: "grammar-2-1",
              title: "Simple and Compound Sentences",
              type: "lesson",
              content: {
                introduction: "Sentences can be structured in different ways to express ideas clearly and effectively.",
                explanation: "**Simple Sentences** contain one independent clause (one subject and one verb).\n- Example: The cat sleeps.\n- Example: Maria and Juan played basketball.\n\n**Compound Sentences** contain two or more independent clauses joined by a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so).\n- Example: The cat sleeps, and the dog barks.\n- Example: I wanted to go to the park, but it started raining.\n\n**Key Rule**: Use a comma before the coordinating conjunction in a compound sentence.",
                examples: [
                  {
                    text: "The sun was shining, so we went to the beach.",
                    explanation: "Two complete thoughts joined by 'so' with a comma before it."
                  }
                ]
              }
            },
            {
              id: "grammar-2-2",
              title: "Practice: Sentence Structure",
              type: "exercise",
              content: {
                instructions: "Identify whether each sentence is simple or compound.",
                questions: [
                  {
                    id: "q1",
                    question: "The teacher explained the lesson, and the students took notes.",
                    options: ["Simple sentence", "Compound sentence"],
                    correctAnswer: 1,
                    explanation: "This is a compound sentence with two independent clauses joined by 'and'."
                  },
                  {
                    id: "q2",
                    question: "My brother and I walked to the store.",
                    options: ["Simple sentence", "Compound sentence"],
                    correctAnswer: 0,
                    explanation: "This is a simple sentence with a compound subject but only one verb."
                  },
                  {
                    id: "q3",
                    question: "I studied hard for the test, yet I still felt nervous.",
                    options: ["Simple sentence", "Compound sentence"],
                    correctAnswer: 1,
                    explanation: "This is a compound sentence with two independent clauses joined by 'yet'."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "grammar-3",
          title: "Chapter 3: Mastering Pronouns - Part 1",
          lessons: [
            {
              id: "grammar-3-1",
              title: "Pronoun Case: Subjective, Objective, and Possessive",
              type: "lesson",
              content: {
                introduction: "Mastering pronouns is arguably the most important grammar goal for 6th graders in California. Understanding pronoun case ensures your writing is clear and correct.",
                explanation: "**Three Types of Pronoun Case:**\n\n**1. Subjective Case (Subject Pronouns)**\nUse when the pronoun is doing the action:\n- **Pronouns**: I, he, she, we, they\n- Example: **She** went to the store. (She is doing the action)\n- Example: **We** finished our homework. (We are doing the action)\n\n**2. Objective Case (Object Pronouns)**\nUse when the pronoun is receiving the action:\n- **Pronouns**: me, him, her, us, them\n- Example: The teacher called **me**. (Me is receiving the action)\n- Example: Dad drove **us** to school. (Us is receiving the action)\n\n**3. Possessive Case (Possessive Pronouns)**\nUse to show ownership:\n- **Pronouns**: my, mine, his, her, hers, our, ours, their, theirs, its\n- Example: That book is **mine**.\n- Example: **Their** project won first place.\n\n**Common Trouble Spots:**\n\n**Problem 1: Compound Subjects and Objects**\n- Wrong: \"Me and John went to the park.\"\n- Right: \"**John and I** went to the park.\" (Remove \"John\" - would you say \"Me went\"?)\n\n- Wrong: \"The coach picked John and I for the team.\"\n- Right: \"The coach picked **John and me** for the team.\" (Remove \"John\" - would you say \"picked I\"?)\n\n**Tip**: Remove the other person and see which pronoun sounds correct!\n\n**Problem 2: After Prepositions (to, for, with, between, etc.)**\nAlways use objective case after prepositions:\n- Wrong: \"Between you and I...\"\n- Right: \"Between you and **me**...\"\n- Wrong: \"Come with Sarah and I.\"\n- Right: \"Come with Sarah and **me**.\"",
                examples: [
                  {
                    text: "Wrong: 'The prize went to Maria and I.' | Right: 'The prize went to Maria and me.'",
                    explanation: "After the preposition 'to,' we need the objective case 'me.' Test: Would you say 'to I'? No, you'd say 'to me.'"
                  },
                  {
                    text: "Wrong: 'Her and I studied together.' | Right: 'She and I studied together.'",
                    explanation: "As the subject doing the action (studying), we need subjective case 'She and I.'"
                  },
                  {
                    text: "The book is mine, and the pencil is hers.",
                    explanation: "Both 'mine' and 'hers' are possessive pronouns showing ownership."
                  }
                ]
              }
            },
            {
              id: "grammar-3-2",
              title: "Practice: Pronoun Case",
              type: "exercise",
              content: {
                instructions: "Choose the correct pronoun for each sentence. Remember to use the 'remove the other person' trick!",
                questions: [
                  {
                    id: "q1",
                    question: "_____ and Sarah went to the library to study.",
                    options: ["Me", "I", "Myself", "Mine"],
                    correctAnswer: 1,
                    explanation: "Use 'I' (subjective case) because the pronoun is the subject doing the action. Test: 'I went' sounds correct, 'Me went' does not."
                  },
                  {
                    id: "q2",
                    question: "The teacher gave the assignment to Carlos and _____.",
                    options: ["I", "me", "myself", "mine"],
                    correctAnswer: 1,
                    explanation: "Use 'me' (objective case) after the preposition 'to.' Test: Would you say 'to I' or 'to me'? Always 'to me.'"
                  },
                  {
                    id: "q3",
                    question: "Between you and _____, I think this is a bad idea.",
                    options: ["I", "me", "myself", "my"],
                    correctAnswer: 1,
                    explanation: "Use 'me' (objective case) after the preposition 'between.' This is a very common error!"
                  },
                  {
                    id: "q4",
                    question: "My sister and _____ finished our project early.",
                    options: ["me", "I", "myself", "mine"],
                    correctAnswer: 1,
                    explanation: "Use 'I' (subjective case) because the pronoun is part of the subject. Test: 'I finished' is correct, 'me finished' is not."
                  },
                  {
                    id: "q5",
                    question: "The coach asked Mike and _____ to lead warm-ups.",
                    options: ["I", "me", "myself", "we"],
                    correctAnswer: 1,
                    explanation: "Use 'me' (objective case) because the pronoun receives the action of being asked. Test: 'asked me' not 'asked I.'"
                  },
                  {
                    id: "q6",
                    question: "That backpack is _____, not yours.",
                    options: ["my", "me", "mine", "I"],
                    correctAnswer: 2,
                    explanation: "Use 'mine' (possessive pronoun) to show ownership. 'My' would need a noun after it (my backpack)."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "grammar-4",
          title: "Chapter 4: Mastering Pronouns - Part 2",
          lessons: [
            {
              id: "grammar-4-1",
              title: "Intensive Pronouns and Clear Antecedents",
              type: "lesson",
              content: {
                introduction: "Beyond basic pronoun case, Grade 6 students must master intensive pronouns for emphasis and ensure all pronouns have clear antecedents (the nouns they refer to).",
                explanation: "**Intensive Pronouns (Adding Emphasis)**\n\nIntensive pronouns add emphasis to a noun or pronoun:\n- **Forms**: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves\n\n**Examples:**\n- I did the homework **myself**. (I did it, no one else)\n- The principal **herself** announced the winners. (emphasizes it was the principal, not someone else)\n- We built the treehouse **ourselves**. (emphasizes we did it without help)\n\n**Key Rule**: Intensive pronouns emphasize who did something. They are NOT required for the sentence to make sense.\n- Test: Remove the intensive pronoun - the sentence still works.\n- \"I did the homework\" still makes sense without \"myself.\"\n\n**Common Mistake:**\n- Wrong: \"Myself and Tom went to the game.\"\n- Right: \"Tom and I went to the game.\" (Don't use 'myself' as a subject!)\n\n---\n\n**Clear Antecedents (Avoiding Vague Pronouns)**\n\nAn **antecedent** is the noun that a pronoun refers to. Every pronoun must have a clear antecedent!\n\n**Problem: Vague Pronoun Reference**\nWhen it's unclear who or what a pronoun refers to:\n\n**Example 1:**\n- **Vague**: \"Sarah and Jane went to the store, and **she** bought milk.\"\n  - Problem: Who is \"she\"? Sarah or Jane?\n- **Clear**: \"Sarah and Jane went to the store, and **Sarah** bought milk.\"\n- **Better**: \"Sarah and Jane went to the store; Sarah bought milk.\"\n\n**Example 2:**\n- **Vague**: \"After I put the vase on the shelf, **it** broke.\"\n  - Problem: What broke? The vase or the shelf?\n- **Clear**: \"After I put the vase on the shelf, **the vase** broke.\"\n\n**Example 3:**\n- **Vague**: \"In the article, **they** say pollution is increasing.\"\n  - Problem: Who is \"they\"?\n- **Clear**: \"In the article, **scientists** say pollution is increasing.\"\n\n**Rules for Clear Pronouns:**\n1. Make sure every pronoun clearly refers to ONE specific noun\n2. When in doubt, repeat the noun instead of using a pronoun\n3. Place pronouns close to their antecedents\n4. Avoid using \"they\" without a clear antecedent",
                examples: [
                  {
                    text: "The director himself approved the final script.",
                    explanation: "The intensive pronoun 'himself' emphasizes that the director personally approved it."
                  },
                  {
                    text: "Vague: 'Tom told Alex that he needed to study more.' | Clear: 'Tom told Alex, \"You need to study more.\"'",
                    explanation: "Who needs to study - Tom or Alex? Using direct dialogue or the person's name makes it clear."
                  },
                  {
                    text: "Vague: 'When I walked my dog, it was beautiful.' | Clear: 'When I walked my dog, the weather was beautiful.'",
                    explanation: "What was beautiful? The dog or the weather? Repeating the noun clarifies the meaning."
                  }
                ]
              }
            },
            {
              id: "grammar-4-2",
              title: "Practice: Intensive Pronouns and Antecedents",
              type: "exercise",
              content: {
                instructions: "Identify correct intensive pronoun use and fix vague pronoun references.",
                questions: [
                  {
                    id: "q1",
                    question: "Which sentence correctly uses an intensive pronoun?",
                    options: [
                      "Myself completed the project.",
                      "I completed the project myself.",
                      "The project was completed by myself.",
                      "Me and myself completed it."
                    ],
                    correctAnswer: 1,
                    explanation: "Correct! 'Myself' adds emphasis that I did it personally. Don't use 'myself' as the subject of a sentence."
                  },
                  {
                    id: "q2",
                    question: "Identify the vague pronoun: 'Lisa called Maria, and she said she would come over later.'",
                    options: [
                      "No vague pronouns",
                      "Both 'she' pronouns are vague",
                      "Only the first 'she' is vague",
                      "Only the second 'she' is vague"
                    ],
                    correctAnswer: 1,
                    explanation: "Both uses of 'she' are vague - we can't tell if Lisa or Maria is coming over, or who said it."
                  },
                  {
                    id: "q3",
                    question: "Which revision fixes this vague pronoun? 'The dog chased the cat until it got tired.'",
                    options: [
                      "Keep it the same",
                      "The dog chased the cat until the dog got tired.",
                      "The dog chased the cat until they got tired.",
                      "It chased it until it got tired."
                    ],
                    correctAnswer: 1,
                    explanation: "Replacing 'it' with 'the dog' makes clear who got tired. We don't know if the dog or cat got tired in the original."
                  },
                  {
                    id: "q4",
                    question: "Which sentence uses an intensive pronoun correctly?",
                    options: [
                      "The students themselves organized the event.",
                      "Themselves organized the event.",
                      "The event was organized by themselves.",
                      "Themselves and I organized it."
                    ],
                    correctAnswer: 0,
                    explanation: "'Themselves' correctly emphasizes that the students (not teachers) organized the event."
                  },
                  {
                    id: "q5",
                    question: "Fix the vague pronoun: 'In the news, they said it would rain tomorrow.' What is the problem?",
                    options: [
                      "No problem",
                      "'They' has no clear antecedent",
                      "'It' is used incorrectly",
                      "Both pronouns are wrong"
                    ],
                    correctAnswer: 1,
                    explanation: "Who is 'they'? Better: 'The meteorologist said it would rain tomorrow' or 'The forecast predicts rain tomorrow.'"
                  }
                ]
              }
            }
          ]
        },
        {
          id: "grammar-5",
          title: "Chapter 5: Punctuation for Clarity",
          lessons: [
            {
              id: "grammar-5-1",
              title: "Parenthetical Elements and Coordinate Adjectives",
              type: "lesson",
              content: {
                introduction: "California Grade 6 standards emphasize using punctuation to manage extra information in sentences. Learning to punctuate parenthetical elements and coordinate adjectives makes your writing clearer and more sophisticated.",
                explanation: "**Parenthetical Elements (Non-Essential Information)**\n\nParenthetical elements are extra pieces of information that can be removed without changing the basic meaning of the sentence. You can set them off with:\n- **Commas** (most common)\n- **Parentheses** (for very extra information)\n- **Dashes** (for emphasis)\n\n**Using Commas for Parenthetical Elements:**\n\n**Example 1: Appositives (Renaming Phrases)**\n- The principal**, Mr. Smith,** gave a speech.\n- My friend**, the one with red hair,** loves soccer.\n- California**, the Golden State,** is known for its beaches.\n\n**Example 2: Non-Essential Clauses**\n- My teacher**, who has taught for 20 years,** is very experienced.\n- The movie**, which won three awards,** was excellent.\n\n**Test**: Remove the information between commas - does the sentence still make sense?\n- \"The principal gave a speech.\" ✓ Still works!\n\n**Using Parentheses:**\nFor information that's really \"extra\" or an aside:\n- The test **(which covers chapters 1-5)** is on Friday.\n- My dog **(a golden retriever)** loves to swim.\n\n**Using Dashes:**\nFor information you want to emphasize:\n- The winner**—my best friend—**was announced on stage.\n- The assignment**—the most difficult one yet—**is due Monday.\n\n---\n\n**Coordinate Adjectives**\n\nCoordinate adjectives are two or more adjectives that **equally** describe the same noun. Use commas to separate them.\n\n**The Test**: Can you:\n1. Put \"and\" between the adjectives? AND\n2. Reverse the order?\n\nIf YES to both, use a comma!\n\n**Examples:**\n- It was a long**, **exhausting day.\n  - Test: \"long and exhausting day\" ✓ | \"exhausting, long day\" ✓\n  - Use comma!\n\n- She is a talented**, **dedicated student.\n  - Test: \"talented and dedicated\" ✓ | \"dedicated, talented\" ✓\n  - Use comma!\n\n**When NOT to Use a Comma:**\nIf adjectives are not coordinate (one modifies the other):\n\n- I bought a small red car.\n  - Test: \"small and red car\"? Sounds awkward.\n  - Test: \"red small car\"? Sounds wrong.\n  - NO comma! \"Small\" modifies \"red car\" as a unit.\n\n- She wore a beautiful silk dress.\n  - Test: \"beautiful and silk\"? Doesn't work.\n  - NO comma! \"Beautiful\" modifies \"silk dress.\"",
                examples: [
                  {
                    text: "My brother, who is in college, visits every weekend.",
                    explanation: "The phrase 'who is in college' is parenthetical (extra info) and is set off with commas."
                  },
                  {
                    text: "The final exam—the hardest one all year—will cover everything.",
                    explanation: "Dashes emphasize the parenthetical information about the exam being the hardest."
                  },
                  {
                    text: "It was a cold, rainy November morning.",
                    explanation: "Cold and rainy are coordinate adjectives (cold and rainy works; rainy, cold works), so use a comma."
                  }
                ]
              }
            },
            {
              id: "grammar-5-2",
              title: "Practice: Punctuation for Clarity",
              type: "exercise",
              content: {
                instructions: "Choose the correctly punctuated sentence or identify whether commas are needed.",
                questions: [
                  {
                    id: "q1",
                    question: "Which sentence is punctuated correctly?",
                    options: [
                      "The principal Mr. Smith gave a speech.",
                      "The principal, Mr. Smith gave a speech.",
                      "The principal, Mr. Smith, gave a speech.",
                      "The principal Mr. Smith, gave a speech."
                    ],
                    correctAnswer: 2,
                    explanation: "The appositive 'Mr. Smith' renames the principal and should be set off with commas on both sides."
                  },
                  {
                    id: "q2",
                    question: "Do these adjectives need a comma? 'It was a long exhausting journey.'",
                    options: [
                      "Yes - they are coordinate adjectives",
                      "No - they are not coordinate adjectives",
                      "Use a semicolon instead",
                      "Use a dash instead"
                    ],
                    correctAnswer: 0,
                    explanation: "Yes! Test: 'long and exhausting journey' ✓ | 'exhausting, long journey' ✓. Both work, so use a comma."
                  },
                  {
                    id: "q3",
                    question: "Which sentence is punctuated correctly?",
                    options: [
                      "The movie which won five awards was amazing.",
                      "The movie, which won five awards was amazing.",
                      "The movie, which won five awards, was amazing.",
                      "The movie which, won five awards, was amazing."
                    ],
                    correctAnswer: 2,
                    explanation: "The clause 'which won five awards' is non-essential information and should be set off with commas on both sides."
                  },
                  {
                    id: "q4",
                    question: "Do these adjectives need a comma? 'She bought a beautiful silver bracelet.'",
                    options: [
                      "Yes - they are coordinate adjectives",
                      "No - they are not coordinate adjectives",
                      "Use parentheses instead",
                      "Use dashes instead"
                    ],
                    correctAnswer: 1,
                    explanation: "No comma. Test: 'beautiful and silver bracelet' sounds awkward. 'Beautiful' modifies 'silver bracelet' as a unit."
                  },
                  {
                    id: "q5",
                    question: "Which punctuation best emphasizes the parenthetical element? 'The winner ___ my best friend ___ jumped for joy.'",
                    options: [
                      "Commas: winner, my best friend, jumped",
                      "Parentheses: winner (my best friend) jumped",
                      "Dashes: winner—my best friend—jumped",
                      "No punctuation needed"
                    ],
                    correctAnswer: 2,
                    explanation: "Dashes create the most emphasis. All three could work, but dashes highlight that your best friend won!"
                  },
                  {
                    id: "q6",
                    question: "Which sentence correctly uses commas with coordinate adjectives?",
                    options: [
                      "It was a bright, sunny day.",
                      "It was a bright sunny, day.",
                      "It was a, bright sunny day.",
                      "It was a bright sunny day."
                    ],
                    correctAnswer: 0,
                    explanation: "Correct! Test: 'bright and sunny day' ✓ | 'sunny, bright day' ✓. They're coordinate, so comma goes between them."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "grammar-6",
          title: "Chapter 6: Sentence Variety and Style",
          lessons: [
            {
              id: "grammar-6-1",
              title: "Simple, Compound, and Complex Sentences",
              type: "lesson",
              content: {
                introduction: "By 6th grade, the goal is to stop writing choppy sentences and start varying your style. Using different sentence patterns shows how ideas relate and makes writing more interesting.",
                explanation: "**Three Types of Sentences:**\n\n**1. Simple Sentence**\nOne independent clause (one complete thought):\n- **Structure**: Subject + Verb\n- Example: The dog barked.\n- Example: Maria and Tom played basketball after school. (still simple - one main action)\n\n**2. Compound Sentence**\nTwo or more independent clauses joined by a coordinating conjunction (FANBOYS: **F**or, **A**nd, **N**or, **B**ut, **O**r, **Y**et, **S**o):\n- **Structure**: Independent Clause **+ comma + FANBOYS +** Independent Clause\n- Example: The dog barked**, and** the cat ran away.\n- Example: I studied hard**, yet** I still felt nervous.\n\n**Key Rule**: Use a comma BEFORE the conjunction!\n\n**3. Complex Sentence**\nOne independent clause + one or more dependent clauses:\n- **Structure**: Independent Clause + Dependent Clause (or reversed)\n- Example: **Because** it was raining, we stayed inside. (dependent, independent)\n- Example: We stayed inside **because** it was raining. (independent, dependent)\n\n**Common Subordinating Conjunctions** (start dependent clauses):\n- Time: when, while, before, after, until, since\n- Cause: because, since, as\n- Condition: if, unless, whether\n- Contrast: although, though, even though, while\n\n**Punctuation Rule for Complex Sentences:**\n- If dependent clause comes FIRST → use comma\n  - **When** I finish homework**, **I'll watch TV.\n- If independent clause comes FIRST → usually no comma\n  - I'll watch TV **when** I finish homework.\n\n---\n\n**Why Vary Sentence Types?**\n\n1. **Avoid Choppy Writing:**\n   - Choppy: \"I woke up. I ate breakfast. I went to school. I saw my friend.\"\n   - Better: \"When I woke up, I ate breakfast before going to school, where I saw my friend.\"\n\n2. **Show Relationships Between Ideas:**\n   - Simple: States a fact\n   - Compound: Shows equal ideas or contrast\n   - Complex: Shows cause/effect, time, or condition\n\n3. **Create Rhythm:**\n   Mix short and long sentences for variety!\n\n**Example of Good Variety:**\n\"The storm began suddenly. (simple) Dark clouds rolled in, and lightning flashed across the sky. (compound) Although we were scared, we stayed calm and found shelter. (complex) We were safe. (simple)\"",
                examples: [
                  {
                    text: "Complex: Although the test was difficult, I did my best.",
                    explanation: "Dependent clause 'Although the test was difficult' + comma + independent clause 'I did my best.'"
                  },
                  {
                    text: "Compound: The book was long, but it was very interesting.",
                    explanation: "Two independent clauses joined by comma + 'but' (FANBOYS)."
                  },
                  {
                    text: "Simple: The students completed the assignment.",
                    explanation: "One independent clause with subject (students) and verb (completed)."
                  }
                ]
              }
            },
            {
              id: "grammar-6-2",
              title: "Practice: Sentence Variety",
              type: "exercise",
              content: {
                instructions: "Identify sentence types and choose correctly punctuated sentences.",
                questions: [
                  {
                    id: "q1",
                    question: "What type of sentence is this? 'Because it was raining, we canceled the picnic.'",
                    options: ["Simple", "Compound", "Complex", "Fragment"],
                    correctAnswer: 2,
                    explanation: "This is complex. It has a dependent clause 'Because it was raining' and an independent clause 'we canceled the picnic.'"
                  },
                  {
                    id: "q2",
                    question: "Which sentence is punctuated correctly?",
                    options: [
                      "I want to go swimming but, it's too cold.",
                      "I want to go swimming, but it's too cold.",
                      "I want to go swimming but it's too cold.",
                      "I want to go, swimming but it's too cold."
                    ],
                    correctAnswer: 1,
                    explanation: "Compound sentences need a comma BEFORE the coordinating conjunction (but)."
                  },
                  {
                    id: "q3",
                    question: "What type of sentence is this? 'The team practiced hard, and they won the championship.'",
                    options: ["Simple", "Compound", "Complex", "Fragment"],
                    correctAnswer: 1,
                    explanation: "This is compound. Two independent clauses joined by comma + 'and.'"
                  },
                  {
                    id: "q4",
                    question: "Which sentence is punctuated correctly?",
                    options: [
                      "When the bell rings we will go to lunch.",
                      "When the bell rings, we will go to lunch.",
                      "When, the bell rings we will go to lunch.",
                      "When the bell, rings we will go to lunch."
                    ],
                    correctAnswer: 1,
                    explanation: "When a dependent clause comes first in a complex sentence, use a comma after it."
                  },
                  {
                    id: "q5",
                    question: "What type of sentence is this? 'My sister and I walked to the park and played on the swings.'",
                    options: ["Simple", "Compound", "Complex", "Run-on"],
                    correctAnswer: 0,
                    explanation: "This is simple (not compound). It has a compound subject and compound verb, but it's still one independent clause."
                  },
                  {
                    id: "q6",
                    question: "Which revision creates a complex sentence? Original: 'The sun set. The temperature dropped.'",
                    options: [
                      "The sun set, and the temperature dropped.",
                      "When the sun set, the temperature dropped.",
                      "The sun set; the temperature dropped.",
                      "The sun set, the temperature dropped."
                    ],
                    correctAnswer: 1,
                    explanation: "Adding 'When' creates a dependent clause, making it a complex sentence. Option A is compound."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "grammar-7",
          title: "Chapter 7: Avoiding Common Errors",
          lessons: [
            {
              id: "grammar-7-1",
              title: "Pronoun Shifts and Misplaced Modifiers",
              type: "lesson",
              content: {
                introduction: "Grade 6 is the year to clean up common errors. Two major pitfalls are pronoun shifts (switching person) and misplaced modifiers (descriptive phrases in the wrong place).",
                explanation: "**Problem 1: Pronoun Shifts**\n\nA pronoun shift occurs when you inconsistently change the person (I, you, one, he, they) you're using.\n\n**Types of Person:**\n- **First person**: I, we, me, us, my, our\n- **Second person**: you, your, yours\n- **Third person**: he, she, it, they, him, her, them, one\n\n**The Rule**: Be consistent! Don't switch persons in the middle of writing.\n\n**Example 1: I → You Shift**\n- **Wrong**: \"When **I** study for a test, **you** should start several days early.\"\n  - Problem: Shifts from first person (I) to second person (you)\n- **Right**: \"When **I** study for a test, **I** start several days early.\"\n- **Also Right**: \"When **you** study for a test, **you** should start several days early.\"\n\n**Example 2: You → One Shift**\n- **Wrong**: \"If **you** want to succeed, **one** must work hard.\"\n  - Problem: Shifts from second person (you) to third person (one)\n- **Right**: \"If **you** want to succeed, **you** must work hard.\"\n\n**Example 3: One → They Shift**\n- **Wrong**: \"When **one** reads carefully, **they** understand better.\"\n  - Problem: Shifts from third singular (one) to third plural (they)\n- **Right**: \"When **one** reads carefully, **one** understands better.\"\n- **Better**: \"When **people** read carefully, **they** understand better.\"\n\n---\n\n**Problem 2: Misplaced Modifiers**\n\nA modifier is a word or phrase that describes something. It must be placed next to what it modifies!\n\n**The Rule**: Place modifiers as close as possible to what they describe.\n\n**Example 1:**\n- **Wrong**: \"I saw a dog **wearing a hat** walking down the street.\"\n  - Problem: Was the hat walking down the street?\n- **Right**: \"**While walking down the street**, I saw a dog wearing a hat.\"\n- **Also Right**: \"I saw a dog wearing a hat **while I was walking down the street**.\"\n\n**Example 2:**\n- **Wrong**: \"The teacher gave the test to the students **that was very difficult**.\"\n  - Problem: Were the students difficult?\n- **Right**: \"The teacher gave **the test that was very difficult** to the students.\"\n\n**Example 3:**\n- **Wrong**: \"We saw the mountain **driving down the highway**.\"\n  - Problem: Was the mountain driving?\n- **Right**: \"**While driving down the highway**, we saw the mountain.\"\n\n**Example 4:**\n- **Wrong**: \"She served sandwiches to the children **on paper plates**.\"\n  - Problem: Were the children on paper plates?\n- **Right**: \"She served sandwiches **on paper plates** to the children.\"\n\n**Tip to Avoid Misplaced Modifiers:**\nAsk yourself: \"What is this phrase describing?\" Then place it next to that word!",
                examples: [
                  {
                    text: "Wrong: 'When you read this book, one will learn a lot.' | Right: 'When you read this book, you will learn a lot.'",
                    explanation: "Don't shift from 'you' (second person) to 'one' (third person). Stay consistent."
                  },
                  {
                    text: "Wrong: 'The car belongs to my neighbor with the red door.' | Right: 'The car with the red door belongs to my neighbor.'",
                    explanation: "The phrase 'with the red door' should be next to 'car,' not 'neighbor,' unless the neighbor has a red door!"
                  },
                  {
                    text: "Wrong: 'If one wants to improve, you must practice.' | Right: 'If one wants to improve, one must practice.' OR 'If you want to improve, you must practice.'",
                    explanation: "Don't mix 'one' and 'you' - pick one and stick with it throughout."
                  }
                ]
              }
            },
            {
              id: "grammar-7-2",
              title: "Practice: Avoiding Common Errors",
              type: "exercise",
              content: {
                instructions: "Identify and correct pronoun shifts and misplaced modifiers.",
                questions: [
                  {
                    id: "q1",
                    question: "Which sentence has a pronoun shift error?",
                    options: [
                      "When I exercise regularly, I feel better.",
                      "When you exercise regularly, you feel better.",
                      "When I exercise regularly, you feel better.",
                      "When people exercise regularly, they feel better."
                    ],
                    correctAnswer: 2,
                    explanation: "Option C shifts from first person 'I' to second person 'you.' This is inconsistent."
                  },
                  {
                    id: "q2",
                    question: "Which sentence fixes the misplaced modifier? 'The girl fed the dog wearing pajamas.'",
                    options: [
                      "The girl wearing pajamas fed the dog.",
                      "The dog fed the girl wearing pajamas.",
                      "Wearing pajamas fed the dog the girl.",
                      "The girl fed wearing pajamas the dog."
                    ],
                    correctAnswer: 0,
                    explanation: "The girl was wearing pajamas, not the dog. Place 'wearing pajamas' next to 'girl.'"
                  },
                  {
                    id: "q3",
                    question: "Which sentence has correct pronoun consistency?",
                    options: [
                      "If you want to learn, one should pay attention.",
                      "If you want to learn, we should pay attention.",
                      "If you want to learn, you should pay attention.",
                      "If you want to learn, I should pay attention."
                    ],
                    correctAnswer: 2,
                    explanation: "Correct! Uses 'you' consistently throughout the sentence."
                  },
                  {
                    id: "q4",
                    question: "Which sentence fixes the misplaced modifier? 'We watched the fireworks sitting on the blanket.'",
                    options: [
                      "Sitting on the blanket fireworks we watched.",
                      "The fireworks sitting on the blanket we watched.",
                      "Sitting on the blanket, we watched the fireworks.",
                      "We watched sitting on the blanket the fireworks."
                    ],
                    correctAnswer: 2,
                    explanation: "We were sitting on the blanket (not the fireworks). The modifier should be at the beginning, clearly modifying 'we.'"
                  },
                  {
                    id: "q5",
                    question: "Identify the pronoun shift: 'When students study hard, you can achieve better grades.'",
                    options: [
                      "No error",
                      "Shifts from third person (students) to second person (you)",
                      "Shifts from first person to third person",
                      "Shifts from plural to singular"
                    ],
                    correctAnswer: 1,
                    explanation: "Correct! Shifts from third person 'students' to second person 'you.' Should be: 'When students study hard, they can achieve better grades.'"
                  },
                  {
                    id: "q6",
                    question: "Which sentence has a correctly placed modifier?",
                    options: [
                      "I found my keys looking under the couch.",
                      "Looking under the couch, I found my keys.",
                      "I found looking under the couch my keys.",
                      "My keys looking under the couch I found."
                    ],
                    correctAnswer: 1,
                    explanation: "Correct! 'Looking under the couch' clearly modifies 'I' and is properly placed at the beginning."
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      id: "reading",
      title: "Reading Comprehension",
      icon: "📖",
      description: "Develop critical reading and analysis skills",
      chapters: [
        {
          id: "reading-1",
          title: "Chapter 1: Main Idea and Supporting Details",
          lessons: [
            {
              id: "reading-1-1",
              title: "Finding the Main Idea",
              type: "lesson",
              content: {
                introduction: "The main idea is the central point or message of a passage. Supporting details provide evidence or examples.",
                explanation: "**Main Idea** answers the question: What is this passage mostly about?\n\n**Strategies to find the main idea:**\n1. Look at the title and headings\n2. Read the first and last sentences of paragraphs\n3. Look for repeated words or concepts\n4. Ask yourself: What point is the author trying to make?\n\n**Supporting Details** answer: What evidence or examples does the author provide?\n- Facts, statistics, examples, descriptions, or reasons that explain or prove the main idea.",
                examples: [
                  {
                    text: "Dolphins are highly intelligent marine mammals. They can learn complex tricks and communicate with each other using clicks and whistles. Scientists have observed dolphins working together to solve problems and even using tools. Some dolphins have been seen using sponges to protect their noses while hunting for food on the ocean floor.",
                    explanation: "Main Idea: Dolphins are highly intelligent. Supporting Details: They learn tricks, communicate, solve problems, and use tools."
                  }
                ]
              }
            },
            {
              id: "reading-1-2",
              title: "Practice: Main Idea",
              type: "exercise",
              content: {
                instructions: "Read the passage and answer the questions.",
                passage: "The California condor is one of the world's rarest birds. By 1987, only 27 California condors remained in the wild. Scientists captured all remaining birds and started a breeding program. Thanks to these conservation efforts, there are now over 500 California condors. About half of them fly free in California, Arizona, and Utah. Although the population has grown, the California condor is still endangered. Scientists continue to monitor and protect these magnificent birds.",
                questions: [
                  {
                    id: "q1",
                    question: "What is the main idea of this passage?",
                    options: [
                      "California condors can fly in three states",
                      "Scientists study birds carefully",
                      "Conservation efforts have helped save the California condor from extinction",
                      "There are 500 California condors today"
                    ],
                    correctAnswer: 2,
                    explanation: "The passage focuses on how conservation efforts helped increase the condor population from near extinction."
                  },
                  {
                    id: "q2",
                    question: "Which detail supports the main idea?",
                    options: [
                      "Condors are magnificent birds",
                      "By 1987, only 27 condors remained",
                      "Condors fly in California",
                      "Scientists monitor birds"
                    ],
                    correctAnswer: 1,
                    explanation: "The fact that only 27 remained in 1987 shows how critical the situation was and why conservation was needed."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "reading-2",
          title: "Chapter 2: Making Inferences",
          lessons: [
            {
              id: "reading-2-1",
              title: "Reading Between the Lines",
              type: "lesson",
              content: {
                introduction: "An inference is a logical conclusion based on evidence from the text and your prior knowledge.",
                explanation: "**Making Inferences** means using clues from the text plus what you already know to figure out something the author doesn't directly state.\n\n**Formula**: Text Clues + What I Know = Inference\n\n**Steps to make inferences:**\n1. Look for clues in the text\n2. Think about what you already know\n3. Combine them to reach a logical conclusion\n4. Check if your inference makes sense with the entire passage",
                examples: [
                  {
                    text: "Maria put on her warmest coat, wrapped a scarf around her neck, and pulled on her mittens. She could see her breath in the air as she stepped outside.",
                    explanation: "Inference: It's very cold outside. Clues: warm coat, scarf, mittens, visible breath. What we know: We dress warmly in cold weather and can see our breath when it's cold."
                  }
                ]
              }
            },
            {
              id: "reading-2-2",
              title: "Practice: Making Inferences",
              type: "exercise",
              content: {
                instructions: "Read each passage and choose the best inference.",
                questions: [
                  {
                    id: "q1",
                    passage: "Jake glanced at the clock nervously. He had studied all week for this test. When the teacher handed out the papers, his hands were shaking slightly. He took a deep breath and wrote his name at the top.",
                    question: "What can you infer about Jake?",
                    options: [
                      "Jake is confident about the test",
                      "Jake is anxious despite being prepared",
                      "Jake forgot to study",
                      "Jake doesn't care about tests"
                    ],
                    correctAnswer: 1,
                    explanation: "Even though Jake studied, his nervousness (glancing at clock, shaking hands, deep breath) shows he's anxious."
                  },
                  {
                    id: "q2",
                    passage: "The crowd erupted in cheers as she crossed the finish line. Tears of joy streamed down her face as her teammates rushed to congratulate her. All those early morning practices had finally paid off.",
                    question: "What can you infer?",
                    options: [
                      "She lost the race",
                      "She won the race and feels accomplished",
                      "She is disappointed",
                      "She didn't practice much"
                    ],
                    correctAnswer: 1,
                    explanation: "The cheers, tears of joy, and reference to practice paying off indicate she won and feels accomplished."
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      id: "writing",
      title: "Writing",
      icon: "✍️",
      description: "Learn to express your ideas clearly and creatively",
      chapters: [
        {
          id: "writing-1",
          title: "Chapter 1: Paragraph Structure",
          lessons: [
            {
              id: "writing-1-1",
              title: "The Perfect Paragraph",
              type: "lesson",
              content: {
                introduction: "A well-structured paragraph has a clear main idea supported by relevant details.",
                explanation: "**Paragraph Structure:**\n\n1. **Topic Sentence**: States the main idea\n   - Usually the first sentence\n   - Tells what the paragraph is about\n\n2. **Supporting Sentences**: Provide details, examples, or evidence\n   - 3-5 sentences that explain or prove the main idea\n   - Use specific examples and details\n\n3. **Concluding Sentence**: Wraps up the paragraph\n   - Restates the main idea in a new way\n   - Can transition to the next paragraph\n\n**Tips for strong paragraphs:**\n- Stay focused on one main idea\n- Use transition words (First, Next, Also, Finally)\n- Include specific examples\n- Make sure all sentences relate to the topic",
                examples: [
                  {
                    text: "Regular exercise provides many important benefits for young people. First, physical activity helps build strong bones and muscles, which is especially important during the growing years. Exercise also improves mental health by reducing stress and boosting mood. Additionally, participating in sports and physical activities helps students develop teamwork and social skills. For all these reasons, students should aim to exercise at least 60 minutes every day.",
                    explanation: "Topic sentence: States benefits of exercise. Supporting sentences: Explains physical, mental, and social benefits. Concluding sentence: Reinforces the importance with a recommendation."
                  }
                ]
              }
            },
            {
              id: "writing-1-2",
              title: "Practice: Paragraph Structure",
              type: "exercise",
              content: {
                instructions: "Read the paragraph and answer questions about its structure.",
                passage: "Recycling helps protect our environment in several ways. When we recycle paper, we save trees from being cut down. Recycling plastic reduces the amount of waste in our oceans, protecting marine life. Metal recycling saves energy and natural resources. Every person can make a difference by recycling at home and school.",
                questions: [
                  {
                    id: "q1",
                    question: "Which sentence is the topic sentence?",
                    options: [
                      "When we recycle paper, we save trees from being cut down.",
                      "Recycling helps protect our environment in several ways.",
                      "Every person can make a difference by recycling at home and school.",
                      "Metal recycling saves energy and natural resources."
                    ],
                    correctAnswer: 1,
                    explanation: "This sentence introduces the main idea that recycling helps the environment in multiple ways."
                  },
                  {
                    id: "q2",
                    question: "How many supporting details are provided?",
                    options: ["1", "2", "3", "4"],
                    correctAnswer: 2,
                    explanation: "Three supporting details are given: saving trees (paper), protecting oceans (plastic), and saving energy (metal)."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "writing-2",
          title: "Chapter 2: Narrative Writing",
          lessons: [
            {
              id: "writing-2-1",
              title: "Elements of Narrative Writing",
              type: "lesson",
              content: {
                introduction: "Narrative writing tells a story with characters, setting, plot, and a clear sequence of events.",
                explanation: "**Key Elements of Narrative Writing:**\n\n1. **Characters**: The people or animals in your story\n   - Protagonist: main character\n   - Describe their traits and feelings\n\n2. **Setting**: Where and when the story takes place\n   - Use sensory details (sight, sound, smell, touch, taste)\n\n3. **Plot**: The sequence of events\n   - Beginning: Introduce characters and setting\n   - Middle: Present a problem or conflict\n   - End: Resolve the problem\n\n4. **Point of View**: Who tells the story\n   - First person: I, we (narrator is in the story)\n   - Third person: He, she, they (narrator is outside)\n\n5. **Dialogue**: Conversations between characters\n   - Use quotation marks\n   - Shows character personality\n\n**Writing Tips:**\n- Show, don't just tell (use actions and dialogue)\n- Use transition words (First, Then, Next, Finally)\n- Include descriptive details\n- Build to a climax",
                examples: [
                  {
                    text: "The old treehouse creaked in the wind as Maya climbed the wooden ladder. She hadn't been up here in years. As she pushed open the dusty door, a flood of memories washed over her. There, in the corner, sat the time capsule she and her best friend had buried five years ago. With trembling hands, she lifted the metal box. 'I wonder if she still remembers,' Maya whispered to herself.",
                    explanation: "This excerpt shows: Character (Maya), Setting (old treehouse), Sensory details (creaked, dusty), First-person perspective (her thoughts), and Dialogue."
                  }
                ]
              }
            },
            {
              id: "writing-2-2",
              title: "Practice: Narrative Elements",
              type: "exercise",
              content: {
                instructions: "Read the narrative passage and identify its elements.",
                passage: "The gymnasium buzzed with excitement as students filed in for the science fair. Alex clutched his project board nervously, hoping the judges would appreciate his volcano experiment. 'You've got this!' his friend Marcus whispered encouragingly. When the judges approached his table, Alex took a deep breath and began his presentation. To his amazement, they listened intently and asked thoughtful questions. As they placed a blue ribbon on his table, Alex's face broke into a huge grin.",
                questions: [
                  {
                    id: "q1",
                    question: "What is the setting of this story?",
                    options: [
                      "A classroom",
                      "A gymnasium during a science fair",
                      "A laboratory",
                      "Marcus's house"
                    ],
                    correctAnswer: 1,
                    explanation: "The story takes place in the gymnasium during the science fair, as stated in the first sentence."
                  },
                  {
                    id: "q2",
                    question: "What is the main conflict or problem?",
                    options: [
                      "Alex doesn't have a project",
                      "The volcano doesn't work",
                      "Alex is nervous about presenting to the judges",
                      "Marcus is competing against Alex"
                    ],
                    correctAnswer: 2,
                    explanation: "Alex is nervous about his presentation, as shown by him clutching his board nervously and taking a deep breath."
                  },
                  {
                    id: "q3",
                    question: "How is the conflict resolved?",
                    options: [
                      "Alex runs away",
                      "Marcus helps present",
                      "Alex successfully presents and wins a blue ribbon",
                      "The judges don't come to his table"
                    ],
                    correctAnswer: 2,
                    explanation: "Alex overcomes his nervousness, presents successfully, and receives a blue ribbon, resolving the conflict."
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ]
};


