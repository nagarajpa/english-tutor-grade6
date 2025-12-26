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
              title: "Mastering Context Clues - The IDEAS Method",
              type: "lesson",
              content: {
                introduction: "Context clues are 'detective hints' hidden in the text that help you understand unfamiliar words. In 6th grade, you'll encounter complex academic vocabulary in all subjects, so mastering context clues is essential. To help you remember the different types, we use the acronym IDEAS.",
                explanation: "**💡 THE IDEAS STRATEGY**\n\nThis powerful mnemonic device helps you remember the five types of context clues:\n\n---\n\n**I = INFERENCE Clue**\n\n**How to Spot It**: The meaning is NOT given directly; you must use logic and 'read between the lines.'\n\n**Strategy**: Look at what's happening in the sentence. Use your brain + the clues to figure it out.\n\n**Example**: 'The team felt **melancholy** after losing the championship game in the final second; many sat in silence with their heads down.'\n\n**Analysis**: The text doesn't define melancholy, but the logic tells us:\n- They lost the game (sad event)\n- They sat in silence (quiet behavior)\n- Heads down (body language of sadness)\n\n**Therefore**: Melancholy = a feeling of deep sadness or depression\n\n---\n\n**D = DEFINITION Clue (Punctuation)**\n\n**How to Spot It**: The author uses commas, dashes (—), or parentheses to define the word immediately.\n\n**Signal Punctuation**: , — or ( )\n\n**Strategy**: Look for punctuation that acts like an equals sign!\n\n**Example**: 'The **biome**—a large naturally occurring community of flora and fauna—is being studied by the scientists.'\n\n**Analysis**: The dashes (—) provide the definition right in the sentence.\n\n**Therefore**: Biome = a community of plants and animals in their natural environment\n\n**More Examples**:\n- 'The **protagonist**, or main character, faces many challenges.'\n- 'She felt **exuberant** (extremely happy and energetic) about the news.'\n\n---\n\n**E = EXAMPLE Clue**\n\n**How to Spot It**: Look for phrases like 'such as,' 'including,' 'for instance,' 'for example,' or 'like.'\n\n**Strategy**: The examples given are all types of the unknown word!\n\n**Example**: 'The kitchen was filled with **confections**, such as chocolate truffles, glazed donuts, and peppermint bark.'\n\n**Analysis**: All the examples (truffles, donuts, bark) are types of sweets or candy.\n\n**Therefore**: Confections = sweet foods, candies, or desserts\n\n**More Examples**:\n- 'Various **citrus** fruits, including lemons, oranges, and grapefruits, are rich in vitamin C.'\n- 'The museum displayed ancient **artifacts**, such as pottery, weapons, and jewelry.'\n\n---\n\n**A = ANTONYM Clue (Contrast)**\n\n**How to Spot It**: Look for 'signal words' like: however, unlike, but, whereas, although, on the other hand, in contrast, yet\n\n**Strategy**: The unknown word means the OPPOSITE of a word you know!\n\n**Example**: 'The movie was quite **banal**; however, the book it was based on was incredibly original and exciting.'\n\n**Analysis**: \n- Signal word: 'however' (shows contrast)\n- The book was 'original and exciting'\n- The movie must be the opposite\n\n**Therefore**: Banal = boring, unoriginal, ordinary, predictable\n\n**More Examples**:\n- 'Unlike the **tranquil** morning, the afternoon was chaotic and noisy.'\n- 'The task seemed **arduous**, but it turned out to be quite easy.'\n\n---\n\n**S = SYNONYM Clue**\n\n**How to Spot It**: The author uses a similar, easier word to clarify the difficult one.\n\n**Signal Words**: or, also known as, in other words, that is, meaning\n\n**Strategy**: Look for a friendlier word nearby that means almost the same thing!\n\n**Example**: 'The desert air was **arid**, or extremely dry, making it difficult for the travelers to stay hydrated.'\n\n**Analysis**: The word 'or' introduces a synonym: 'extremely dry'\n\n**Therefore**: Arid = very dry, lacking moisture\n\n**More Examples**:\n- 'The scientist made a **hypothesis**, or educated guess, about the experiment's outcome.'\n- 'The athlete was **tenacious**, meaning she never gave up despite the challenges.'\n\n---\n\n**🎯 QUICK REFERENCE TABLE**\n\n| Letter | Type | Signal Words | Example |\n|--------|------|--------------|----------|\n| **I** | Inference | (none - use logic) | Behavior/situation clues |\n| **D** | Definition | , — ( ) 'or' | Word = definition |\n| **E** | Example | such as, like, including | Lists examples |\n| **A** | Antonym | however, unlike, but | Shows opposite |\n| **S** | Synonym | or, meaning, that is | Gives similar word |\n\n---\n\n**🔍 HOW TO USE IDEAS**\n\n**Step 1**: Read the entire sentence carefully\n**Step 2**: Ask yourself: 'Which IDEAS strategy can I use?'\n**Step 3**: Apply that strategy to determine meaning\n**Step 4**: Check if your answer makes sense in context\n\n**Remember**: Sometimes sentences use MORE THAN ONE type of clue! Use them all!",
                examples: [
                  {
                    text: "INFERENCE: 'The aroma of freshly baked bread and cinnamon rolls was so enticing that customers lined up outside the bakery before it even opened.'",
                    explanation: "Logic tells us: People lining up early means something is very appealing. Enticing = attractive, tempting, appealing."
                  },
                  {
                    text: "DEFINITION: 'The expedition required stamina—the physical and mental strength to endure long periods of activity—from all participants.'",
                    explanation: "The dashes provide the definition. Stamina = strength and endurance."
                  },
                  {
                    text: "EXAMPLE: 'The garden contained various flora, such as roses, tulips, sunflowers, and daisies.'",
                    explanation: "All examples are flowers/plants. Flora = plants."
                  },
                  {
                    text: "ANTONYM: 'Although the instructions seemed ambiguous at first, they became crystal clear once we started.'",
                    explanation: "'Although' signals contrast. Opposite of 'crystal clear' is ambiguous = unclear, confusing."
                  },
                  {
                    text: "SYNONYM: 'The lecture was mundane, or ordinary and boring, so many students struggled to stay awake.'",
                    explanation: "'Or' introduces synonyms. Mundane = ordinary and boring."
                  }
                ]
              }
            },
            {
              id: "vocab-1-2",
              title: "Practice: The IDEAS Method",
              type: "exercise",
              content: {
                instructions: "Use the IDEAS method to determine the meaning of each underlined word. First, identify which type of context clue is being used (Inference, Definition, Example, Antonym, or Synonym), then choose the correct meaning.",
                questions: [
                  {
                    id: "q1",
                    question: "The ancient artifact was so fragile that the archaeologists handled it with extreme care, wrapping it in special protective material.",
                    word: "fragile",
                    options: ["strong and sturdy", "easily broken or delicate", "very old and ancient", "valuable and rare"],
                    correctAnswer: 1,
                    explanation: "INFERENCE clue: The careful handling and protective wrapping tell us logically that 'fragile' means easily broken or delicate."
                  },
                  {
                    id: "q2",
                    question: "The teacher's meticulous grading—checking every detail, comma, and spelling error—meant students received thorough feedback.",
                    word: "meticulous",
                    options: ["careless and rushed", "quick and efficient", "extremely careful and thorough", "strict and mean"],
                    correctAnswer: 2,
                    explanation: "DEFINITION clue: The dashes (—) provide the definition directly: checking every detail = meticulous means extremely careful and thorough."
                  },
                  {
                    id: "q3",
                    question: "The storm caused havoc in the town: trees were uprooted, power lines snapped, several homes lost their roofs, and flooding covered the streets.",
                    word: "havoc",
                    options: ["peace and calm", "widespread chaos and destruction", "heavy rain", "loud noise"],
                    correctAnswer: 1,
                    explanation: "EXAMPLE clue: The colon (:) introduces examples of damage. All examples show destruction, so havoc = widespread chaos and destruction."
                  },
                  {
                    id: "q4",
                    question: "The doctor's prognosis, or prediction about the patient's recovery, was optimistic.",
                    word: "prognosis",
                    options: ["medical treatment", "prediction or forecast", "diagnosis of illness", "prescription medicine"],
                    correctAnswer: 1,
                    explanation: "SYNONYM clue: The word 'or' introduces a synonym: 'prediction' clarifies that prognosis = a prediction or forecast about recovery."
                  },
                  {
                    id: "q5",
                    question: "Although the hike up the mountain was arduous, the walk back down was surprisingly easy and relaxing.",
                    word: "arduous",
                    options: ["easy and simple", "dangerous and scary", "difficult and exhausting", "boring and dull"],
                    correctAnswer: 2,
                    explanation: "ANTONYM clue: 'Although' signals contrast. The opposite of 'easy and relaxing' is arduous = difficult and exhausting."
                  },
                  {
                    id: "q6",
                    question: "The celebration included various festivities, such as fireworks, live music, dancing, and a parade through town.",
                    word: "festivities",
                    options: ["serious meetings", "joyful celebration activities", "food and drinks", "decorations"],
                    correctAnswer: 1,
                    explanation: "EXAMPLE clue: 'Such as' introduces examples. All examples (fireworks, music, dancing, parade) are celebration activities. Festivities = joyful celebration activities."
                  },
                  {
                    id: "q7",
                    question: "The dessert looked delectable—absolutely delicious and appealing—so everyone wanted to try it.",
                    word: "delectable",
                    options: ["expensive", "colorful", "delicious and appealing", "healthy"],
                    correctAnswer: 2,
                    explanation: "DEFINITION clue: The dashes (—) provide the definition directly: 'absolutely delicious and appealing' = delectable."
                  },
                  {
                    id: "q8",
                    question: "Unlike the protagonist who was brave and heroic, the antagonist was cowardly and cruel throughout the story.",
                    word: "protagonist",
                    options: ["villain or bad character", "main character or hero", "author of the story", "narrator who tells the story"],
                    correctAnswer: 1,
                    explanation: "ANTONYM clue + Context: 'Unlike' shows contrast with 'antagonist' (the opposing character). The protagonist is described as 'brave and heroic,' indicating the main character or hero."
                  },
                  {
                    id: "q9",
                    question: "The student's response was concise, meaning brief and to the point, which impressed the teacher.",
                    word: "concise",
                    options: ["long and detailed", "brief and to the point", "confusing and unclear", "well-written"],
                    correctAnswer: 1,
                    explanation: "SYNONYM clue: 'Meaning' introduces a synonym phrase. Concise = brief and to the point."
                  },
                  {
                    id: "q10",
                    question: "After three hours of intense debate, the committee finally reached a consensus and announced their unified decision to the public.",
                    word: "consensus",
                    options: ["disagreement", "general agreement", "vote", "compromise"],
                    correctAnswer: 1,
                    explanation: "INFERENCE clue: After long debate, they reached something and announced a 'unified decision.' Logic tells us consensus = general agreement among a group."
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
              title: "Word Building Blocks: Greek and Latin Roots & Affixes",
              type: "lesson",
              content: {
                introduction: "Many English words come from Greek and Latin 'building blocks' called roots and affixes. Understanding these parts helps you 'unlock' the meaning of thousands of unfamiliar words—like having a superpower for vocabulary! This is one of the most important skills for Grade 6 academic success because academic vocabulary is built from these roots.",
                explanation: "**🏛️ WHY LEARN ROOTS AND AFFIXES?**\n\n**The Power of Word Parts**:\n- English has over 1 million words, but knowing just 20 Greek and Latin roots helps you understand over 100,000 words!\n- When you see an unfamiliar word on a test or in a book, you can use word parts to figure out its meaning.\n- Academic vocabulary (words used in science, history, and literature) is mostly based on Greek and Latin.\n\n**THE THREE PARTS OF A WORD**:\n\n1. **PREFIX** = Beginning (changes or adds to the meaning)\n2. **ROOT** = Middle (core meaning)\n3. **SUFFIX** = End (changes the word type or meaning)\n\n**Example**: **un**-**break**-**able**\n- **un-** (prefix) = not\n- **break** (root) = to separate into pieces\n- **-able** (suffix) = capable of\n- **Meaning**: not capable of being broken\n\n---\n\n**📚 COMMON PREFIXES (BEGINNING)**\n\n**Prefixes Meaning 'NOT' or 'OPPOSITE'**:\n\n| Prefix | Meaning | Examples |\n|--------|---------|----------|\n| **un-** | not, opposite | unhappy, unlock, unfair |\n| **in-/im-/il-/ir-** | not | inactive, impossible, illegal, irregular |\n| **dis-** | not, opposite | disagree, disappear, dislike |\n| **non-** | not | nonfiction, nonstop, nonsense |\n| **anti-** | against | antibacterial, antisocial, antidote |\n\n**Prefixes About TIME**:\n\n| Prefix | Meaning | Examples |\n|--------|---------|----------|\n| **pre-** | before | preview, predict, prefix, prehistoric |\n| **post-** | after | postpone, postscript, postwar, postgame |\n| **re-** | again, back | rewrite, return, replay, rebuild |\n\n**Prefixes About PLACE or DIRECTION**:\n\n| Prefix | Meaning | Examples |\n|--------|---------|----------|\n| **trans-** | across, beyond | transport, transfer, translate, transcontinental |\n| **sub-** | under, below | submarine, subway, subzero, subtitle |\n| **super-** | above, beyond | superhero, supernatural, superior |\n| **inter-** | between | international, interact, interrupt |\n| **ex-** | out, from | exit, export, exclude, exhale |\n\n---\n\n**🌱 COMMON ROOTS (MIDDLE) - THE CORE MEANING**\n\n**GREEK ROOTS**:\n\n| Root | Meaning | Examples |\n|------|---------|----------|\n| **bio** | life | biology (study of life), biography (life story), biosphere (area of life) |\n| **graph** | write | autograph (self-written), paragraph (written section), graphic (written/drawn) |\n| **tele** | far, distance | telescope (see far), telephone (sound from far), television (see from far) |\n| **phon** | sound | microphone (small sound amplifier), symphony (sounds together), telephone |\n| **micro** | small | microscope (see small), microwave (small wave), microbiome (small life) |\n| **scope** | see, look | telescope (see far), microscope (see small), periscope (see around) |\n| **therm** | heat, temperature | thermometer (measure heat), thermal (relating to heat), thermostat |\n| **geo** | earth | geography (earth writing/study), geology (earth study), geothermal |\n| **photo** | light | photograph (light writing), photosynthesis (light putting together) |\n| **auto** | self | automatic (self-acting), autobiography (self-life story), automobile |\n\n**LATIN ROOTS**:\n\n| Root | Meaning | Examples |\n|------|---------|----------|\n| **port** | carry | transport (carry across), portable (able to be carried), export (carry out) |\n| **dict** | say, speak | dictate (say orders), predict (say before), dictionary (book of sayings) |\n| **scrib/script** | write | describe (write about), manuscript (hand-written), inscription (written in) |\n| **vid/vis** | see | video (I see), visible (able to be seen), vision (sight), evidence |\n| **aud** | hear | audio (sound), auditorium (place to hear), audible (able to be heard) |\n| **struct** | build | construct (build together), structure (something built), instruct (build in/teach) |\n| **rupt** | break | interrupt (break between), erupt (break out), disrupt (break apart) |\n| **tract** | pull, drag | attract (pull toward), tractor (vehicle that pulls), extract (pull out) |\n| **spect** | look, see | inspect (look into), spectator (one who looks), respect (look back at) |\n| **duc/duct** | lead | conduct (lead together), educate (lead out), reduce (lead back) |\n\n---\n\n**🎯 COMMON SUFFIXES (ENDING)**\n\n**Suffixes That Make NOUNS** (person, place, thing, idea):\n\n| Suffix | Meaning | Examples |\n|--------|---------|----------|\n| **-er, -or** | person who | teacher, actor, conductor, editor |\n| **-ist** | person who practices | scientist, artist, biologist, pianist |\n| **-ology** | study of | biology, geology, psychology, zoology |\n| **-tion, -sion** | act or process | education, creation, decision, confusion |\n| **-ment** | state of being | movement, enjoyment, government |\n| **-ness** | quality of | happiness, darkness, kindness, sadness |\n\n**Suffixes That Make ADJECTIVES** (describing words):\n\n| Suffix | Meaning | Examples |\n|--------|---------|----------|\n| **-able, -ible** | capable of, able to | readable, visible, breakable, edible |\n| **-ful** | full of | beautiful, helpful, cheerful, powerful |\n| **-less** | without | careless, homeless, hopeless, fearless |\n| **-ous, -ious** | full of, having | dangerous, nervous, curious, famous |\n\n**Suffixes That Make VERBS** (action words):\n\n| Suffix | Meaning | Examples |\n|--------|---------|----------|\n| **-ify** | to make | clarify (make clear), simplify (make simple) |\n| **-ize** | to become | modernize (make modern), realize |\n| **-ate** | to make, to do | activate (make active), celebrate |\n\n---\n\n**🔬 PUTTING IT ALL TOGETHER: WORD ANALYSIS**\n\n**Example 1**: **autobiography**\n- **auto-** (self) + **bio** (life) + **-graph** (write) + **-y** (makes it a noun)\n- **Meaning**: A written account of one's own life\n\n**Example 2**: **microscope**\n- **micro-** (small) + **-scope** (see)\n- **Meaning**: An instrument for seeing very small things\n\n**Example 3**: **predict**\n- **pre-** (before) + **-dict** (say)\n- **Meaning**: To say what will happen before it occurs\n\n**Example 4**: **transportation**\n- **trans-** (across) + **-port** (carry) + **-tion** (act of)\n- **Meaning**: The act of carrying something or someone across a distance\n\n**Example 5**: **geology**\n- **geo-** (earth) + **-ology** (study of)\n- **Meaning**: The scientific study of Earth's physical structure and substances\n\n---\n\n**💡 STRATEGY: THE 'BREAK IT DOWN' METHOD**\n\nWhen you encounter an unfamiliar word:\n\n**Step 1**: Break the word into parts (prefix | root | suffix)\n**Step 2**: Define each part\n**Step 3**: Combine the meanings\n**Step 4**: Check if it makes sense in context\n\n**Practice Example**: **interstate**\n- **Step 1**: inter- | state\n- **Step 2**: inter = between, state = a region/state\n- **Step 3**: between states\n- **Step 4**: 'We drove on the interstate highway.' ✓ Makes sense!\n\n---\n\n**🎓 WHY THIS MATTERS FOR GRADE 6**\n\nIn 6th grade, you'll encounter complex academic vocabulary in:\n- **Science**: photosynthesis, ecosystem, hypothesis\n- **Social Studies**: geography, democracy, civilization\n- **Math**: calculate, equation, geometry\n- **Language Arts**: autobiography, metaphor, analyze\n\nUnderstanding roots and affixes lets you decode these words independently!",
                examples: [
                  {
                    text: "**autobiography** (auto + bio + graph + y)",
                    explanation: "**auto** (self) + **bio** (life) + **graph** (write) + **-y** (noun) = A written account of one's own life. Example: Benjamin Franklin's *Autobiography* tells his life story in his own words."
                  },
                  {
                    text: "**microscope** (micro + scope)",
                    explanation: "**micro** (small) + **scope** (see) = An instrument for seeing very small things. Example: We used a microscope in science class to examine cells that are invisible to the naked eye."
                  },
                  {
                    text: "**predict** (pre + dict)",
                    explanation: "**pre** (before) + **dict** (say) = To say what will happen before it occurs. Example: Meteorologists predict the weather by analyzing atmospheric data."
                  },
                  {
                    text: "**transportation** (trans + port + tion)",
                    explanation: "**trans** (across) + **port** (carry) + **-tion** (act of) = The act of carrying people or goods from one place to another. Example: Public transportation in the city includes buses, trains, and subways."
                  },
                  {
                    text: "**geothermal** (geo + therm + al)",
                    explanation: "**geo** (earth) + **therm** (heat) + **-al** (relating to) = Relating to heat from within the Earth. Example: Iceland uses geothermal energy from underground hot springs to heat homes."
                  }
                ]
              }
            },
            {
              id: "vocab-2-2",
              title: "Practice: Decoding Words with Roots and Affixes",
              type: "exercise",
              content: {
                instructions: "Use your knowledge of Greek and Latin roots, prefixes, and suffixes to determine the meaning of each word. Apply the 'Break It Down' method: identify each word part, define it, then combine the meanings!",
                questions: [
                  {
                    id: "q1",
                    question: "What does **telescope** mean based on its roots? (tele = far, scope = see)",
                    word: "telescope",
                    options: ["to see far away", "to write far away", "to hear far away", "to speak far away"],
                    correctAnswer: 0,
                    explanation: "**tele** (far) + **scope** (see) = An instrument for seeing things that are far away, like stars and planets."
                  },
                  {
                    id: "q2",
                    question: "What does **contradict** mean? (contra = against, dict = say)",
                    word: "contradict",
                    options: ["to say loudly", "to say something against or opposite", "to predict the future", "to speak clearly"],
                    correctAnswer: 1,
                    explanation: "**contra** (against) + **dict** (say) = To say something that goes against or opposes what someone else said."
                  },
                  {
                    id: "q3",
                    question: "What does **biosphere** mean? (bio = life, sphere = ball/globe)",
                    word: "biosphere",
                    options: ["a round ball", "the regions of Earth where life exists", "a type of microscope", "living in space"],
                    correctAnswer: 1,
                    explanation: "**bio** (life) + **sphere** (globe) = The regions of Earth's surface and atmosphere where living organisms exist."
                  },
                  {
                    id: "q4",
                    question: "What does **antiseptic** mean? (anti = against, septic = infection/decay)",
                    word: "antiseptic",
                    options: ["causing infection", "before infection", "preventing infection", "very clean water"],
                    correctAnswer: 2,
                    explanation: "**anti** (against) + **septic** (infection) = Preventing infection or decay by destroying harmful microorganisms. Think of antiseptic wipes!"
                  },
                  {
                    id: "q5",
                    question: "What does **microbiome** mean? (micro = small, bio = life)",
                    word: "microbiome",
                    options: ["small animals", "tiny living organisms in an environment", "a small book about life", "microscopic viewing"],
                    correctAnswer: 1,
                    explanation: "**micro** (small) + **bio** (life) = The community of tiny living organisms (bacteria, fungi) in a particular environment, like your gut."
                  },
                  {
                    id: "q6",
                    question: "What does **audible** mean? (aud = hear, -ible = able to be)",
                    word: "audible",
                    options: ["able to be heard", "able to be seen", "very loud", "relating to audio equipment"],
                    correctAnswer: 0,
                    explanation: "**aud** (hear) + **-ible** (able to be) = Able to be heard. 'The teacher's voice was barely audible over the noise.'"
                  },
                  {
                    id: "q7",
                    question: "What does **geothermal** mean? (geo = earth, therm = heat, -al = relating to)",
                    word: "geothermal",
                    options: ["relating to cold earth", "relating to heat from within Earth", "measuring temperature", "earth science"],
                    correctAnswer: 1,
                    explanation: "**geo** (earth) + **therm** (heat) + **-al** (relating to) = Relating to heat from within the Earth, like hot springs or volcanic activity."
                  },
                  {
                    id: "q8",
                    question: "What does **construct** mean? (con = together, struct = build)",
                    word: "construct",
                    options: ["to tear down", "to build together", "to plan ahead", "to measure"],
                    correctAnswer: 1,
                    explanation: "**con** (together) + **struct** (build) = To build or put together. 'The students will construct a model bridge in science class.'"
                  },
                  {
                    id: "q9",
                    question: "What does **interrupt** mean? (inter = between, rupt = break)",
                    word: "interrupt",
                    options: ["to break apart", "to break between or stop temporarily", "to continue", "to repair something broken"],
                    correctAnswer: 1,
                    explanation: "**inter** (between) + **rupt** (break) = To break between or stop something temporarily. 'Please don't interrupt while I'm speaking.'"
                  },
                  {
                    id: "q10",
                    question: "What does **photosynthesis** mean? (photo = light, syn = together, thesis = putting/placing)",
                    word: "photosynthesis",
                    options: ["taking pictures", "the process plants use to make food with light", "light therapy", "studying photography"],
                    correctAnswer: 1,
                    explanation: "**photo** (light) + **syn** (together) + **thesis** (putting) = The process by which plants put together (create) food using light energy, water, and carbon dioxide."
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
              title: "Figurative Language: Beyond Literal Meanings",
              type: "lesson",
              content: {
                introduction: "Figurative language is when words mean MORE than their literal (dictionary) definition. Writers use figurative language to create vivid images, express emotions, and make writing more engaging. In Grade 6, you'll encounter figurative language in literature, poetry, and even informational texts.",
                explanation: "**Understanding Figurative vs. Literal Language:**\n\n**Literal**: Words mean exactly what they say\n- 'The cat sat on the mat.' (The cat actually sat there)\n\n**Figurative**: Words have a deeper or different meaning\n- 'The classroom was a zoo.' (The classroom was chaotic, not actually a zoo!)\n\n---\n\n**THE FIVE MAIN TYPES:**\n\n**1. SIMILE** 📊\n\n**Definition**: A comparison between two unlike things using 'like' or 'as'\n\n**Signal Words**: like, as, resembles, similar to\n\n**Purpose**: Help readers visualize by comparing to something familiar\n\n**Examples**:\n- 'She was **as brave as a lion**.' (comparing bravery to a lion's courage)\n- '**Quiet as a mouse**.' (comparing quietness to a mouse)\n- 'The snow fell **like a soft blanket**.' (comparing snow to a blanket)\n- 'His words were **sharp as knives**.' (comparing hurtful words to knives)\n- 'The runner was **as fast as lightning**.' (comparing speed to lightning)\n\n**Why Writers Use Similes**: They make descriptions more vivid and relatable\n\n---\n\n**2. METAPHOR** 🎭\n\n**Definition**: A direct comparison that says one thing IS another thing (NO 'like' or 'as')\n\n**Key Difference from Simile**: More direct - doesn't use comparison words\n\n**Purpose**: Create powerful, memorable images\n\n**Examples**:\n- '**Time is money**.' (suggesting time is valuable like money)\n- '**The snow is a white blanket** covering the earth.' (direct comparison)\n- 'Her **smile was sunshine** on a cloudy day.' (smile = sunshine)\n- 'The **classroom was a zoo** during the substitute.' (classroom = zoo)\n- 'His **brain is a computer**.' (comparing thinking to a computer)\n- 'Life is a **rollercoaster**.'\n\n**Extended Metaphors**: Sometimes writers extend a metaphor across multiple sentences or even an entire poem!\n\n---\n\n**3. PERSONIFICATION** 👤\n\n**Definition**: Giving human qualities, emotions, or actions to non-human things (objects, animals, ideas)\n\n**What Can Be Personified**: Nature, objects, animals, abstract concepts\n\n**Purpose**: Make non-human things relatable and vivid\n\n**Examples**:\n- '**The wind whistled** through the trees.' (wind can't actually whistle)\n- '**The sun smiled** down on us.' (sun can't smile)\n- '**Time flies** when you're having fun.' (time can't fly)\n- '**The flowers danced** in the breeze.' (flowers can't dance)\n- '**The car coughed and sputtered**.' (cars don't cough)\n- '**Opportunity knocked** at his door.' (opportunity can't knock)\n- '**The storm raged** all night long.' (showing anger, a human emotion)\n\n**Why Writers Use Personification**: Makes descriptions come alive and creates emotional connections\n\n---\n\n**4. HYPERBOLE** 📈\n\n**Definition**: Extreme exaggeration for emphasis or effect (NOT meant to be taken literally)\n\n**Purpose**: Add humor, emphasize a point, create dramatic effect\n\n**How to Recognize**: The statement is clearly impossible or ridiculous\n\n**Examples**:\n- 'I've told you **a million times**!' (you haven't said it a million times)\n- 'This backpack **weighs a ton**.' (it doesn't actually weigh 2,000 pounds)\n- 'I'm **so hungry I could eat a horse**.' (you wouldn't actually eat a horse)\n- 'I've been waiting for **ages**!' (not literally ages/years)\n- 'That test was **so hard it killed me**.' (you're not actually dead)\n- 'I'm **dying** of boredom.' (not literally dying)\n\n**Why Writers Use Hyperbole**: Makes points memorable and adds dramatic flair\n\n---\n\n**5. ONOMATOPOEIA** 💥\n\n**Definition**: Words that sound like what they mean (sound words)\n\n**Purpose**: Add sensory details; help readers 'hear' the story\n\n**How to Recognize**: Say the word out loud - it sounds like the actual sound!\n\n**Examples by Category**:\n\n**Animal Sounds**:\n- buzz (bees), hiss (snakes), meow (cats), woof (dogs), chirp (birds)\n\n**Nature Sounds**:\n- splash (water), crackle (fire), rustle (leaves), pitter-patter (rain)\n\n**Action Sounds**:\n- bang, crash, thud, boom, pop, crack, snap\n\n**Human Sounds**:\n- whisper, giggle, gulp, munch, slurp\n\n**Technology/Object Sounds**:\n- beep, click, whoosh, zoom, vroom\n\n**Example in Context**:\n'The bacon **sizzled** in the pan while the coffee pot **gurgled** on the counter. Suddenly, a loud **crash** came from upstairs, followed by a **thud**.'\n\n**Why Writers Use Onomatopoeia**: Makes writing more vivid and engaging; appeals to sense of hearing\n\n---\n\n**🎯 QUICK COMPARISON CHART**\n\n| Type | Key Feature | Example |\n|------|------------|----------|\n| **Simile** | Uses 'like' or 'as' | Brave **as** a lion |\n| **Metaphor** | Direct comparison (IS) | Life **is** a journey |\n| **Personification** | Human traits to non-human | Wind **whispered** |\n| **Hyperbole** | Extreme exaggeration | Waited **forever** |\n| **Onomatopoeia** | Sound words | **Splash**, **buzz** |\n\n---\n\n**🔍 HOW TO IDENTIFY FIGURATIVE LANGUAGE**\n\n**Step 1**: Ask yourself: 'Is this literally true?'\n- If NO → It's probably figurative!\n\n**Step 2**: Look for signal words\n- 'Like' or 'as' → Simile\n- 'Is' or 'was' (comparing) → Metaphor\n- Human actions for non-human things → Personification\n- Impossible exaggeration → Hyperbole\n- Sound word → Onomatopoeia\n\n**Step 3**: Determine the effect\n- What is the writer trying to make you feel or visualize?\n\n---\n\n**💡 WHY FIGURATIVE LANGUAGE MATTERS**\n\n1. **Makes Writing More Interesting**: Plain sentences become vivid images\n2. **Helps You Visualize**: Creates pictures in your mind\n3. **Adds Emotion**: Makes you feel what the writer wants you to feel\n4. **Improves Your Writing**: Using figurative language makes YOUR writing better\n5. **Common in Literature**: You'll see it in every story, poem, and novel\n\n**Remember**: When reading stories, don't take figurative language literally! The character doesn't ACTUALLY have butterflies in their stomach! 🦋",
                examples: [
                  {
                    text: "SIMILE: 'The test was as easy as pie, so I finished quickly and confidently.'",
                    explanation: "Uses 'as...as' to compare the test's easiness to pie (which is considered easy). This is NOT a metaphor because it uses 'as.'"
                  },
                  {
                    text: "METAPHOR: 'The library is a treasure trove of knowledge waiting to be discovered.'",
                    explanation: "Directly compares the library to a treasure trove (no 'like' or 'as'). Suggests the library is full of valuable information."
                  },
                  {
                    text: "PERSONIFICATION: 'The old house groaned and creaked as the wind battered its walls.'",
                    explanation: "Houses can't actually groan (a human sound). This gives the house human-like qualities to show it's old and struggling."
                  },
                  {
                    text: "HYPERBOLE: 'I'm so tired I could sleep for a year!'",
                    explanation: "Obviously impossible - no one sleeps for a year! This exaggeration emphasizes extreme tiredness."
                  },
                  {
                    text: "ONOMATOPOEIA: 'The bacon sizzled and popped in the hot pan.'",
                    explanation: "'Sizzled' and 'popped' are sound words that help you hear the bacon cooking. Say them out loud!"
                  },
                  {
                    text: "MIXED: 'The thunder roared like an angry giant, making the windows rattle.'",
                    explanation: "Contains BOTH simile ('like an angry giant') and onomatopoeia ('roared' - a sound word). Writers often combine types!"
                  }
                ]
              }
            },
            {
              id: "vocab-3-2",
              title: "Practice: Figurative Language",
              type: "exercise",
              content: {
                instructions: "Read each sentence carefully and identify the type of figurative language being used. Remember to look for signal words and ask yourself if the statement is literally true.",
                questions: [
                  {
                    id: "q1",
                    question: "The moon was a glowing pearl in the night sky, casting its gentle light across the valley.",
                    options: ["Simile", "Metaphor", "Personification", "Hyperbole", "Onomatopoeia"],
                    correctAnswer: 1,
                    explanation: "This is a **metaphor**. The moon is directly compared to a pearl without using 'like' or 'as'. The comparison suggests the moon is round, white, and luminous."
                  },
                  {
                    id: "q2",
                    question: "After running the marathon in the scorching heat, her legs felt like jelly, barely able to support her weight.",
                    options: ["Simile", "Metaphor", "Personification", "Hyperbole", "Onomatopoeia"],
                    correctAnswer: 0,
                    explanation: "This is a **simile** using 'like' to compare her tired legs to jelly, suggesting they were weak, wobbly, and unstable."
                  },
                  {
                    id: "q3",
                    question: "The flowers danced gracefully in the gentle breeze, swaying back and forth like ballerinas on a stage.",
                    options: ["Simile only", "Metaphor only", "Personification only", "Both simile and personification", "Onomatopoeia"],
                    correctAnswer: 3,
                    explanation: "This contains **both personification** (flowers 'danced' - a human action) **and simile** ('like ballerinas' - uses 'like' for comparison)."
                  },
                  {
                    id: "q4",
                    question: "I have a million things to do before tomorrow, and I haven't even started the first one!",
                    options: ["Simile", "Metaphor", "Personification", "Hyperbole", "Onomatopoeia"],
                    correctAnswer: 3,
                    explanation: "This is **hyperbole** - an extreme exaggeration for emphasis. The person doesn't literally have a million tasks; they're emphasizing feeling overwhelmed."
                  },
                  {
                    id: "q5",
                    question: "The old computer groaned and wheezed as it struggled to start up, protesting against being turned on.",
                    options: ["Simile", "Metaphor", "Personification", "Hyperbole", "Onomatopoeia"],
                    correctAnswer: 2,
                    explanation: "This is **personification**. Computers don't actually groan, wheeze, or protest - these are human sounds and actions, giving the computer human-like qualities."
                  },
                  {
                    id: "q6",
                    question: "Her smile was like sunshine breaking through dark storm clouds, warming everyone around her.",
                    options: ["Simile", "Metaphor", "Personification", "Hyperbole", "Onomatopoeia"],
                    correctAnswer: 0,
                    explanation: "This is a **simile** using 'like' to compare her smile to sunshine, suggesting it was bright, uplifting, and brought joy to others."
                  },
                  {
                    id: "q7",
                    question: "The thunder boomed and rumbled across the sky, while the rain pitter-pattered on the roof.",
                    options: ["Simile", "Metaphor", "Personification", "Hyperbole", "Onomatopoeia"],
                    correctAnswer: 4,
                    explanation: "This uses **onomatopoeia**. 'Boomed,' 'rumbled,' and 'pitter-pattered' are all sound words that imitate the actual sounds they describe."
                  },
                  {
                    id: "q8",
                    question: "Time is a thief that steals our most precious moments when we're not paying attention.",
                    options: ["Simile", "Metaphor with personification", "Personification only", "Hyperbole", "Onomatopoeia"],
                    correctAnswer: 1,
                    explanation: "This is a **metaphor** (time IS a thief - direct comparison) combined with **personification** (time 'steals' - a human action)."
                  },
                  {
                    id: "q9",
                    question: "I'm so hungry I could eat an entire elephant right now!",
                    options: ["Simile", "Metaphor", "Personification", "Hyperbole", "Onomatopoeia"],
                    correctAnswer: 3,
                    explanation: "This is **hyperbole** - obvious exaggeration for effect. The person is very hungry but wouldn't actually eat an elephant!"
                  },
                  {
                    id: "q10",
                    question: "The snake slithered silently through the grass, its scales making a soft hiss as it moved.",
                    options: ["Simile", "Metaphor", "Personification", "Hyperbole", "Onomatopoeia"],
                    correctAnswer: 4,
                    explanation: "This uses **onomatopoeia**. 'Slithered' and 'hiss' are sound words that help you hear the snake's movement."
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
              title: "Mastering Idioms: When Words Don't Mean What They Say",
              type: "lesson",
              content: {
                introduction: "An idiom is a cultural phrase or expression whose meaning CANNOT be understood from the individual words alone. If you translate idioms word-by-word, they often sound silly or confusing! Idioms are extremely common in everyday English conversation, literature, and even formal writing.",
                explanation: "**🔍 WHAT IS AN IDIOM?**\n\nAn idiom is a group of words with a **figurative meaning** that is completely different from the **literal meaning** of each word.\n\n**Example**:\n- **Literal**: 'Break a leg' → Injure your leg\n- **Idiomatic**: 'Break a leg' → Good luck! (especially to performers)\n\n**Why Can't You Guess the Meaning?**\n\nIdioms developed over time within a culture. Their meanings come from history, tradition, or common usage - NOT from the individual words. This is why idioms are hard for language learners and why you must memorize them!\n\n---\n\n**📚 COMMON GRADE 6 IDIOMS BY CATEGORY**\n\n**SCHOOL & LEARNING**\n\n1. **Hit the books** = Study hard\n   - *'I need to hit the books tonight for my science test.'*\n\n2. **Teacher's pet** = Student the teacher favors\n   - *'Everyone thinks Maria is the teacher's pet because she always gets special treatment.'*\n\n3. **Pass with flying colors** = Succeed easily and with high marks\n   - *'She studied every night and passed the exam with flying colors.'*\n\n4. **Learn the ropes** = Learn how to do something (often a new job or activity)\n   - *'The first week of middle school was tough, but I'm starting to learn the ropes.'*\n\n5. **A piece of cake** = Something very easy\n   - *'The math homework was a piece of cake after the teacher explained it.'*\n\n**FEELINGS & EMOTIONS**\n\n6. **Under the weather** = Feeling sick or ill\n   - *'I'm feeling under the weather today, so I might stay home from school.'*\n\n7. **On cloud nine** = Extremely happy\n   - *'When I found out I made the basketball team, I was on cloud nine!'*\n\n8. **Down in the dumps** = Feeling sad or depressed\n   - *'My best friend moved away, and I've been down in the dumps ever since.'*\n\n9. **Butterflies in my stomach** = Feeling nervous or anxious\n   - *'I had butterflies in my stomach before giving my presentation.'*\n\n10. **Walking on air** = Feeling very happy and excited\n    - *'After winning the spelling bee, I felt like I was walking on air.'*\n\n**DIFFICULTY & CHALLENGES**\n\n11. **Bite off more than you can chew** = Take on more than you can handle\n    - *'I joined three clubs and now realize I bit off more than I could chew.'*\n\n12. **An uphill battle** = A very difficult task\n    - *'Convincing my parents to let me get a dog is going to be an uphill battle.'*\n\n13. **Back to the drawing board** = Start over because the first attempt failed\n    - *'Our science experiment didn't work, so it's back to the drawing board.'*\n\n14. **Jump through hoops** = Do many difficult things to achieve something\n    - *'I had to jump through hoops to get permission for the field trip.'*\n\n**COMMUNICATION & SECRETS**\n\n15. **Spill the beans** = Reveal a secret\n    - *'Don't spill the beans about the surprise party!'*\n\n16. **Let the cat out of the bag** = Accidentally reveal a secret\n    - *'I let the cat out of the bag when I mentioned Mom's birthday present.'*\n\n17. **Beat around the bush** = Avoid saying what you mean directly\n    - *'Stop beating around the bush and just tell me what happened!'*\n\n18. **Get it off your chest** = Share something that's been bothering you\n    - *'I needed to get it off my chest, so I told my teacher I didn't understand the assignment.'*\n\n**MONEY & VALUE**\n\n19. **Cost an arm and a leg** = Very expensive\n    - *'The new gaming system costs an arm and a leg!'*\n\n20. **Break the bank** = Use up all your money\n    - *'We can go to the movies; it won't break the bank.'*\n\n21. **Worth its weight in gold** = Very valuable\n    - *'My graphing calculator is worth its weight in gold for math class.'*\n\n**WEATHER & NATURE IDIOMS**\n\n22. **It's raining cats and dogs** = Raining very heavily\n    - *'We can't go outside - it's raining cats and dogs!'*\n\n23. **Every cloud has a silver lining** = There's something good in every bad situation\n    - *'I didn't make the soccer team, but every cloud has a silver lining - now I have more time for art class.'*\n\n24. **Snowed under** = Overwhelmed with work\n    - *'I'm snowed under with homework this week.'*\n\n---\n\n**🎯 HOW TO UNDERSTAND IDIOMS IN STORIES**\n\n**Step 1: Recognize It's an Idiom**\n- Does the sentence sound strange if taken literally?\n- Would the meaning be silly or impossible?\n\n**Step 2: Use Context Clues**\n- What is happening in the story?\n- What would make sense given the situation?\n\n**Step 3: Check for Cultural Knowledge**\n- Have you heard this phrase before?\n- Does it sound like a common expression?\n\n**Example**:\n*'When Mom saw my report card, she hit the roof!'*\n\n❌ Literal: Mom physically hit the ceiling (makes no sense)\n✅ Idiomatic: Mom became very angry (makes sense in context)\n\n---\n\n**💡 WHY LEARN IDIOMS?**\n\n1. **Reading Comprehension**: You'll encounter idioms in books, articles, and tests\n2. **Natural Speech**: Native speakers use idioms constantly in conversation\n3. **Cultural Understanding**: Idioms reveal how a culture thinks and communicates\n4. **Better Writing**: Using idioms (when appropriate) makes your writing more engaging\n5. **Test Success**: Standardized tests often ask about figurative language, including idioms\n\n**⚠️ IMPORTANT TIPS**\n\n**When to Use Idioms**:\n- In creative writing or dialogue\n- In informal speech\n- To add color and personality to writing\n\n**When NOT to Use Idioms**:\n- In formal essays or research papers\n- When writing for non-native English speakers\n- When clarity is more important than style\n\n**Remember**: Idioms are figurative language, so don't take them literally when reading stories!",
                examples: [
                  {
                    text: "'I need to hit the books tonight because I have a huge science test tomorrow on photosynthesis.'",
                    explanation: "**Hit the books** doesn't mean physically hitting books! It's an idiom meaning 'to study hard.' The context (science test tomorrow) helps us understand the student needs to study intensely."
                  },
                  {
                    text: "'The math homework was a piece of cake after the teacher explained long division step by step.'",
                    explanation: "**A piece of cake** means 'very easy' - the homework wasn't actually cake! The idiom suggests the work was simple and effortless once explained properly."
                  },
                  {
                    text: "'Sarah let the cat out of the bag when she accidentally mentioned the surprise party in front of Mom.'",
                    explanation: "**Let the cat out of the bag** means 'to accidentally reveal a secret.' There's no actual cat! This idiom suggests Sarah ruined the surprise by speaking without thinking."
                  },
                  {
                    text: "'The new skateboard costs an arm and a leg, but I've been saving my allowance for six months.'",
                    explanation: "**Cost an arm and a leg** means 'very expensive' - you don't actually pay with body parts! The idiom emphasizes how much money the skateboard costs."
                  }
                ],
                quickPractice: {
                  question: "Read this sentence and determine the idiomatic meaning:\n\n'When my brother saw the mess in his room, he hit the roof!'\n\nWhat does 'hit the roof' mean in this context?",
                  hint: "(Think about what would happen if someone is angry about a messy room...)",
                  answer: "'Hit the roof' means to become very angry or furious. The brother didn't literally hit the ceiling - he got extremely mad about the mess!"
                }
              }
            },
            {
              id: "vocab-4-2",
              title: "Practice: Idioms and Cultural Expressions",
              type: "exercise",
              content: {
                instructions: "Choose the correct idiomatic meaning of each underlined phrase as used in the sentence. Remember: don't think literally - think about what makes sense in the context!",
                questions: [
                  {
                    id: "q1",
                    question: "When Sarah heard the good news about winning the essay contest, she was **on cloud nine**.",
                    word: "on cloud nine",
                    options: ["very sad", "extremely happy", "confused", "very tired"],
                    correctAnswer: 1,
                    explanation: "'**On cloud nine**' is an idiom meaning extremely happy or delighted. Sarah's winning the contest would make her very happy!"
                  },
                  {
                    id: "q2",
                    question: "My mom said we should take the politician's campaign promises **with a grain of salt**.",
                    word: "with a grain of salt",
                    options: ["believe completely", "not believe at all", "view with skepticism", "add salt to it"],
                    correctAnswer: 2,
                    explanation: "'**Take with a grain of salt**' means to view something with skepticism or not fully trust it. Mom is suggesting not to completely believe the promises."
                  },
                  {
                    id: "q3",
                    question: "The team really **dropped the ball** when they forgot to submit their science project on time.",
                    word: "dropped the ball",
                    options: ["played sports well", "made a serious mistake", "succeeded perfectly", "threw something"],
                    correctAnswer: 1,
                    explanation: "'**Dropped the ball**' means to make a mistake or fail to do what was expected. Forgetting to submit the project was a significant error."
                  },
                  {
                    id: "q4",
                    question: "Let's not **beat around the bush** - just tell me directly why you're upset with me.",
                    word: "beat around the bush",
                    options: ["avoid the main topic", "speak very directly", "work in the garden", "fight physically"],
                    correctAnswer: 0,
                    explanation: "'**Beat around the bush**' means to avoid talking about what's important or to speak indirectly. The speaker wants direct, honest communication."
                  },
                  {
                    id: "q5",
                    question: "I'm feeling **under the weather** today, so I think I'll stay home and rest instead of going to the party.",
                    word: "under the weather",
                    options: ["extremely happy", "feeling sick or ill", "caught in the rain", "angry"],
                    correctAnswer: 1,
                    explanation: "'**Under the weather**' is an idiom meaning feeling sick, ill, or unwell. The person is too sick to attend the party."
                  },
                  {
                    id: "q6",
                    question: "When Tommy **spilled the beans** about the surprise party, everyone got mad at him.",
                    word: "spilled the beans",
                    options: ["made a mess with food", "revealed a secret", "cooked dinner", "told a joke"],
                    correctAnswer: 1,
                    explanation: "'**Spilled the beans**' means to reveal a secret or disclose information that was supposed to be kept private. Tommy ruined the surprise!"
                  },
                  {
                    id: "q7",
                    question: "The new gaming system **costs an arm and a leg**, so I'll need to save my allowance for months.",
                    word: "costs an arm and a leg",
                    options: ["is dangerous", "is very cheap", "is extremely expensive", "requires surgery"],
                    correctAnswer: 2,
                    explanation: "'**Costs an arm and a leg**' means something is very expensive. The gaming system costs a lot of money (not actual body parts!)."
                  },
                  {
                    id: "q8",
                    question: "After failing the first experiment, the science team went **back to the drawing board** to design a better approach.",
                    word: "back to the drawing board",
                    options: ["went to art class", "started over from the beginning", "gave up completely", "moved forward"],
                    correctAnswer: 1,
                    explanation: "'**Back to the drawing board**' means to start over because the first attempt failed or didn't work properly. The team is redesigning their experiment."
                  },
                  {
                    id: "q9",
                    question: "I **bit off more than I could chew** when I signed up for soccer, chess club, and band all in the same semester.",
                    word: "bit off more than I could chew",
                    options: ["ate too much food", "took on too many responsibilities", "succeeded at everything", "hurt my mouth"],
                    correctAnswer: 1,
                    explanation: "'**Bit off more than you can chew**' means to take on more tasks or responsibilities than you can handle. The person is overwhelmed by too many activities."
                  },
                  {
                    id: "q10",
                    question: "Our coach's advice before the championship game was simple: 'Just **give it your all** and have fun out there!'",
                    word: "give it your all",
                    options: ["give away everything", "try your absolute hardest", "share with teammates", "quit trying"],
                    correctAnswer: 1,
                    explanation: "'**Give it your all**' means to try your absolute hardest and put in maximum effort. The coach wants the team to do their best."
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
              title: "Synonyms and Antonyms: Choosing the Perfect Word",
              type: "lesson",
              content: {
                introduction: "Understanding synonyms and antonyms is crucial for Grade 6 students! Synonyms help you choose the most precise word and avoid boring repetition in writing. Antonyms help you understand contrasts and comparisons in reading. Both are essential for improving your vocabulary and writing variety.",
                explanation: "**📖 WHAT ARE SYNONYMS?**\n\n**Synonyms**: Words that have similar (but rarely identical) meanings\n\n**Important**: Synonyms are NOT interchangeable in all situations! Each has subtle differences (nuances) in:\n- **Intensity** (how strong the feeling is)\n- **Formality** (casual vs. formal)\n- **Connotation** (positive, negative, or neutral feeling)\n\n**Example Synonym Sets**:\n\n**1. Words for 'HAPPY'** (intensity increases):\n- **Content** → **Pleased** → **Happy** → **Delighted** → **Ecstatic** → **Overjoyed**\n- 'I'm content' (mildly satisfied) vs. 'I'm ecstatic!' (extremely excited)\n\n**2. Words for 'BIG'** (intensity and formality):\n- **Large** (neutral, formal) → **Big** (casual) → **Huge** → **Enormous** → **Gigantic** → **Colossal** (impressively large)\n\n**3. Words for 'SMART'**:\n- **Intelligent** (formal, academic) → **Smart** (casual) → **Clever** (quick-thinking) → **Bright** (naturally gifted) → **Brilliant** (exceptionally smart)\n\n**4. Words for 'SAD'**:\n- **Unhappy** → **Sad** → **Sorrowful** → **Melancholy** (poetically sad) → **Devastated** (extremely sad)\n\n**5. Words for 'SAID'** (adds meaning to dialogue):\n- **Whispered** (quietly) → **Muttered** (complained) → **Said** (neutral) → **Announced** (formally) → **Shouted** (loudly) → **Exclaimed** (with excitement)\n\n---\n\n**🔄 WHAT ARE ANTONYMS?**\n\n**Antonyms**: Words with opposite meanings\n\n**Three Types of Antonyms**:\n\n**1. Gradable Antonyms** (can exist on a scale with degrees between):\n- **Hot** ↔ **Cold** (with warm, cool in between)\n- **Fast** ↔ **Slow** (with moderate speed in between)\n- **Tall** ↔ **Short** (with average height in between)\n\n**2. Complementary Antonyms** (no middle ground - it's one or the other):\n- **Alive** ↔ **Dead** (nothing in between)\n- **True** ↔ **False**\n- **Present** ↔ **Absent**\n\n**3. Relational Antonyms** (opposite roles or relationships):\n- **Teacher** ↔ **Student**\n- **Parent** ↔ **Child**\n- **Buy** ↔ **Sell**\n- **Above** ↔ **Below**\n\n**Common Academic Antonym Pairs** (important for Grade 6):\n| Word | Antonym |\n|------|----------|\n| Ancient | Modern |\n| Expand | Contract |\n| Include | Exclude |\n| Accept | Reject |\n| Increase | Decrease |\n| Simple | Complex |\n| Abundant | Scarce |\n| Praise | Criticize |\n| Unite | Divide |\n| Transparent | Opaque |\n\n---\n\n**🎯 WHY SYNONYMS AND ANTONYMS MATTER**\n\n**For Writing**:\n1. **Avoid Repetition**: Don't use the same word over and over\n2. **Add Variety**: Make your writing more interesting and sophisticated\n3. **Show Precision**: Choose the EXACT word you mean\n4. **Demonstrate Vocabulary**: Show teachers you know more than just basic words\n\n**For Reading Comprehension**:\n1. **Context Clues**: Authors often use synonyms to clarify meaning\n2. **Contrasts**: Antonyms help authors show differences and make comparisons\n3. **Understanding Tone**: The synonym chosen affects the mood and tone\n\n**For Tests**:\n- Many standardized tests ask you to identify synonyms and antonyms\n- Essay prompts often use academic synonyms you need to understand\n\n---\n\n**💡 USING A THESAURUS WISELY**\n\n**DO**:\n✅ Use a thesaurus to find words when you're stuck\n✅ Check the definition before using a new synonym\n✅ Consider the context and tone of your writing\n\n**DON'T**:\n❌ Use big words just to sound smart (if you don't know them well)\n❌ Replace every simple word with a fancy one\n❌ Ignore connotation differences\n\n**Bad Example**: 'I masticated a delectable repast.' (Too fancy!)\n**Better**: 'I ate a delicious meal.'\n**Even Better**: 'I devoured a delicious meal.' (adds meaning: ate hungrily)\n\n---\n\n**🎓 THE SYNONYM SCALE: CHOOSING THE RIGHT INTENSITY**\n\n**Anger Scale** (low to high intensity):\nAnnoyed → Irritated → Angry → Furious → Enraged\n\n**Laughter Scale**:\nSmile → Grin → Chuckle → Laugh → Giggle → Cackle → Roar with laughter\n\n**Cold Scale**:\nCool → Chilly → Cold → Freezing → Frigid → Arctic\n\n**Size Scale**:\nTiny → Small → Little → Medium → Large → Huge → Enormous → Gigantic → Colossal\n\n**Choosing the Right Word**: Always ask yourself:\n1. How strong is the feeling or description?\n2. Is this formal or casual writing?\n3. What is the connotation (feeling) of this word?",
                examples: [
                  {
                    text: "**BEFORE** (repetitive): 'The movie was good. The acting was good. The story was good.'",
                    explanation: "**AFTER** (using synonyms): 'The movie was excellent. The acting was superb. The story was compelling.' → Using synonyms (excellent, superb, compelling) makes writing more interesting and shows different levels of praise."
                  },
                  {
                    text: "**Antonym Contrast**: 'The ancient ruins stood in stark contrast to the modern glass skyscrapers of the city.'",
                    explanation: "**Ancient** and **modern** are antonyms that emphasize the dramatic difference between old historical structures and contemporary buildings. This contrast makes the description more vivid."
                  },
                  {
                    text: "**Synonym Precision**: 'She wasn't just happy about winning—she was **ecstatic**!'",
                    explanation: "Replacing 'very happy' with the more precise synonym 'ecstatic' conveys a stronger emotion and makes the writing more impactful. This shows the intensity of her joy."
                  },
                  {
                    text: "**Antonym in Argument**: 'Unlike the arid desert climate, the humid rainforest receives abundant rainfall year-round.'",
                    explanation: "**Arid** and **humid** are antonyms (dry vs. moist), and **desert** and **rainforest** are also antonyms. Using these opposites helps clarify the extreme differences between the two ecosystems."
                  }
                ],
                quickPractice: {
                  question: "Choose the best synonym to replace 'said' in this sentence:\n\n'Stop right there!' the police officer **said** loudly.\n\nOptions: whispered, muttered, announced, shouted, murmured",
                  hint: "Think about how the police officer would speak when trying to stop someone...",
                  answer: "**Shouted** is the best choice because the officer spoke 'loudly,' which matches the intensity and volume of shouting. 'Announced' could work but doesn't capture the urgency and loudness as well."
                }
              }
            },
            {
              id: "vocab-5-2",
              title: "Practice: Synonyms and Antonyms in Context",
              type: "exercise",
              content: {
                instructions: "Choose the best synonym or antonym for the underlined word. Pay attention to the intensity, formality, and connotation of each choice!",
                questions: [
                  {
                    id: "q1",
                    question: "Which word is the best SYNONYM for **courageous** in this sentence: 'The firefighter's courageous actions saved three lives'?",
                    word: "courageous",
                    options: ["fearful", "brave", "weak", "careful"],
                    correctAnswer: 1,
                    explanation: "**Brave** is the best synonym for **courageous**, both meaning showing courage or bravery in the face of danger."
                  },
                  {
                    id: "q2",
                    question: "Which word is an ANTONYM for **generous** in this sentence: 'Unlike his generous sister, he was quite _____ with his money'?",
                    word: "generous",
                    options: ["kind", "giving", "selfish", "wealthy"],
                    correctAnswer: 2,
                    explanation: "**Selfish** is the opposite of **generous**. A generous person gives freely; a selfish person keeps things for themselves."
                  },
                  {
                    id: "q3",
                    question: "Which word is the best SYNONYM for **ancient** in this context: 'The archaeologists discovered ancient pottery dating back 3,000 years'?",
                    word: "ancient",
                    options: ["modern", "old", "new", "future"],
                    correctAnswer: 1,
                    explanation: "**Old** is a synonym for **ancient**, both referring to something from long ago. In this context, 'ancient' emphasizes the historical significance."
                  },
                  {
                    id: "q4",
                    question: "Which word is an ANTONYM for **triumph** in this sentence: 'The team's triumph turned into _____ when they lost the championship'?",
                    word: "triumph",
                    options: ["victory", "success", "defeat", "celebration"],
                    correctAnswer: 2,
                    explanation: "**Defeat** is the opposite of **triumph**. Triumph means victory or success; defeat means loss."
                  },
                  {
                    id: "q5",
                    question: "Which word is the best SYNONYM for **vital** in this sentence: 'Water is vital for all living things'?",
                    word: "vital",
                    options: ["unnecessary", "essential", "optional", "rare"],
                    correctAnswer: 1,
                    explanation: "**Essential** is the best synonym for **vital**, both meaning absolutely necessary or critically important."
                  },
                  {
                    id: "q6",
                    question: "Choose the SYNONYM with the STRONGEST intensity for **sad**: 'When her best friend moved away, she felt _____'.",
                    word: "sad",
                    options: ["unhappy", "sorrowful", "devastated", "gloomy"],
                    correctAnswer: 2,
                    explanation: "**Devastated** shows the strongest intensity of sadness, meaning extremely upset or emotionally destroyed. It best conveys the depth of emotion when losing a best friend."
                  },
                  {
                    id: "q7",
                    question: "Which word is an ANTONYM for **expand** in this sentence: 'The company decided to _____ its operations instead of expanding'?",
                    word: "expand",
                    options: ["grow", "increase", "contract", "enlarge"],
                    correctAnswer: 2,
                    explanation: "**Contract** is the antonym of **expand**. Expand means to grow larger; contract means to become smaller or reduce in size."
                  },
                  {
                    id: "q8",
                    question: "Which is the most FORMAL synonym for **said** in this sentence: 'The principal _____ that school would be closed tomorrow'?",
                    word: "said",
                    options: ["whispered", "muttered", "announced", "yelled"],
                    correctAnswer: 2,
                    explanation: "**Announced** is the most formal synonym for 'said' in this official context. Principals make formal announcements, not whispers or mutters."
                  },
                  {
                    id: "q9",
                    question: "Which word is an ANTONYM for **transparent** in this sentence: 'The glass was transparent, but the wall was _____'?",
                    word: "transparent",
                    options: ["clear", "see-through", "opaque", "invisible"],
                    correctAnswer: 2,
                    explanation: "**Opaque** is the antonym of **transparent**. Transparent means you can see through it; opaque means you cannot see through it at all."
                  },
                  {
                    id: "q10",
                    question: "Choose the SYNONYM that best fits a NEGATIVE connotation: 'The _____ actor refused to share the spotlight with anyone'.",
                    word: "confident (need negative)",
                    options: ["confident", "self-assured", "arrogant", "proud"],
                    correctAnswer: 2,
                    explanation: "**Arrogant** has a negative connotation, suggesting someone thinks they're better than others. Confident and self-assured are positive, while 'arrogant' fits the negative context of refusing to share."
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
              title: "Multiple Meaning Words (Homographs): Context is Key",
              type: "lesson",
              content: {
                introduction: "Many English words have multiple meanings depending on how they are used! These are called **homographs** (homo = same, graph = writing) or **polysemous** words. Understanding how context determines meaning is crucial for Grade 6 reading comprehension in California.",
                explanation: "**📚 WHAT ARE MULTIPLE MEANING WORDS?**\n\n**Multiple Meaning Words** are words that are spelled the same but have different meanings. Context (the words around it) helps you determine which meaning is intended.\n\n**Two Main Types**:\n\n**1. Same Pronunciation, Different Meanings**\n- **Bark**: The sound a dog makes (noun/verb) | The outer covering of a tree (noun)\n- **Bat**: A flying mammal (noun) | Equipment for hitting a ball (noun) | To hit (verb)\n- **Ring**: A circular band (noun) | The sound a bell makes (verb/noun) | A boxing arena (noun)\n\n**2. Different Pronunciation AND Different Meanings**\n- **Tear**: [teer] liquid from your eye | [tair] to rip something\n- **Bow**: [boh] to bend forward | [bau] weapon that shoots arrows, or front of a ship\n- **Lead**: [leed] to guide or be in front | [led] a heavy metal\n- **Wind**: [wind] moving air | [wined] to turn or twist\n- **Read**: [reed] present tense (I read every day) | [red] past tense (I read that book yesterday)\n\n---\n\n**🎯 COMMON GRADE 6 MULTIPLE MEANING WORDS**\n\n**1. BANK**\n- **Meaning 1** (noun): A financial institution where you keep money\n  - 'I deposited my allowance at the bank.'\n- **Meaning 2** (noun): The edge of a river or stream\n  - 'We sat on the bank of the river and fished.'\n- **Meaning 3** (verb): To tilt to one side (in aviation)\n  - 'The airplane banked sharply to the left.'\n\n**2. BAT**\n- **Meaning 1** (noun): A nocturnal flying mammal\n  - 'The bat hung upside down in the cave.'\n- **Meaning 2** (noun): Sports equipment for hitting a ball\n  - 'She swung the baseball bat with confidence.'\n- **Meaning 3** (verb): To hit something\n  - 'The cat will bat at the toy mouse.'\n\n**3. FAIR**\n- **Meaning 1** (adjective): Just and impartial; treating people equally\n  - 'The referee made a fair decision.'\n- **Meaning 2** (adjective): Light-colored (skin or hair)\n  - 'She has fair skin that sunburns easily.'\n- **Meaning 3** (noun): A carnival, festival, or exhibition\n  - 'We went to the county fair and rode the Ferris wheel.'\n- **Meaning 4** (adjective): Average; moderately good\n  - 'His performance was fair, but not outstanding.'\n\n**4. KEY**\n- **Meaning 1** (noun): A metal instrument that opens a lock\n  - 'I lost my house key!'\n- **Meaning 2** (adjective): Important or essential\n  - 'Education is key to success.'\n- **Meaning 3** (noun): A musical scale (Music term)\n  - 'The song is written in the key of C major.'\n- **Meaning 4** (noun): A button on a keyboard or piano\n  - 'Press the Enter key to submit.'\n- **Meaning 5** (noun): An answer guide (like an answer key)\n  - 'The teacher used the answer key to grade the tests.'\n\n**5. WATCH**\n- **Meaning 1** (noun): A timepiece worn on the wrist\n  - 'My grandmother gave me her old watch.'\n- **Meaning 2** (verb): To look at something attentively\n  - 'Let's watch a movie tonight.'\n- **Meaning 3** (verb): To supervise or guard\n  - 'Please watch the baby while I'm gone.'\n- **Meaning 4** (verb): To be careful or cautious\n  - 'Watch out for that car!'\n\n**6. ADDRESS**\n- **Meaning 1** (noun): [AD-dress] A location or mailing address\n  - 'What is your home address?'\n- **Meaning 2** (verb): [uh-DRESS] To deal with or speak to\n  - 'We need to address this problem immediately.'\n- **Meaning 3** (verb): [uh-DRESS] To formally speak to a group\n  - 'The principal will address the student body.'\n\n**7. PLOT**\n- **Meaning 1** (noun): A small piece of land\n  - 'They own a plot of land in the countryside.'\n- **Meaning 2** (noun): The storyline of a book, movie, or play\n  - 'The novel had an interesting and complex plot.'\n- **Meaning 3** (noun): A secret plan (usually negative)\n  - 'The villains hatched a plot to rob the bank.'\n- **Meaning 4** (verb): To mark points on a graph\n  - 'Plot these coordinates on the graph.'\n\n**8. PRESENT**\n- **Meaning 1** (noun): [PREZ-ent] A gift\n  - 'I wrapped the birthday present carefully.'\n- **Meaning 2** (adjective): [PREZ-ent] Existing now; current\n  - 'All students present should raise their hands.'\n- **Meaning 3** (verb): [prih-ZENT] To give or show something formally\n  - 'I will present my project to the class tomorrow.'\n- **Meaning 4** (noun): [PREZ-ent] The current time (not past or future)\n  - 'Live in the present, not the past.'\n\n---\n\n**🔍 HOW TO DETERMINE THE CORRECT MEANING**\n\n**Strategy: The 3 C's**\n\n**1. CONTEXT** - What is happening in the sentence or paragraph?\n**2. CLUES** - What other words give hints about the meaning?\n**3. CHECK** - Does your chosen meaning make sense?\n\n**Example**:\n'The judge **ruled** in favor of the defendant.'\n\n- **Context**: This is in a courtroom setting\n- **Clues**: 'judge' and 'favor of defendant' suggest a legal decision\n- **Check**: 'Made a decision' makes sense; 'used a ruler' does not!\n- **Answer**: 'Ruled' means 'made an official decision'\n\n---\n\n**💡 WHY THIS MATTERS**\n\n**In Reading**:\n- Misunderstanding a multiple meaning word can change the entire meaning of a sentence!\n- Authors sometimes use these words for **wordplay** or **puns** (jokes)\n\n**In Writing**:\n- Be clear about which meaning you intend\n- Use context clues to help your reader understand\n\n**On Tests**:\n- Many reading comprehension questions test your ability to determine word meanings from context\n- You might be asked: 'What does the word ____ mean as used in line 12?'\n\n---\n\n**🎓 PART OF SPEECH MATTERS**\n\nThe word's part of speech (noun, verb, adjective, adverb) is a huge clue!\n\n**Example: LIGHT**\n- **Noun**: 'Turn on the light.' (illumination)\n- **Verb**: 'Please light the candles.' (to ignite)\n- **Adjective (weight)**: 'The box is light.' (not heavy)\n- **Adjective (color)**: 'She wore a light blue dress.' (pale color)\n\n**Ask yourself**: Is this word acting as a person/place/thing (noun), an action (verb), or a describing word (adjective)?",
                examples: [
                  {
                    text: "'We need to **address** this problem immediately.' vs. 'Please write your **address** on the envelope.'",
                    explanation: "**First sentence**: '**address**' [uh-DRESS] is a **verb** meaning to deal with or tackle. **Second sentence**: '**address**' [AD-dress] is a **noun** meaning location. Part of speech AND pronunciation change!"
                  },
                  {
                    text: "'The **play** was entertaining.' vs. 'The children **play** in the park every afternoon.'",
                    explanation: "**First sentence**: '**play**' is a **noun** meaning a theatrical performance. **Second sentence**: '**play**' is a **verb** meaning to engage in activity for fun. Context and part of speech help us understand the difference."
                  },
                  {
                    text: "'The scientist wanted to **conduct** an experiment.' vs. 'Copper is a good **conduct**or of electricity.'",
                    explanation: "**First sentence**: '**conduct**' [kun-DUKT] is a **verb** meaning to carry out or perform. **Second sentence**: '**conduct**or' [KON-duk-tor] is a **noun** meaning something that allows electricity or heat to pass through. (Note: This shows a related word form!)"
                  },
                  {
                    text: "'My heart felt **light** after hearing the good news.' vs. 'The room was filled with bright **light**.'",
                    explanation: "**First sentence**: '**light**' is an **adjective** describing an emotional feeling (happy, unburdened). **Second sentence**: '**light**' is a **noun** meaning illumination. Same spelling, different meanings and parts of speech!"
                  }
                ],
                quickPractice: {
                  question: "What does the word '**watch**' mean in this sentence?\n\n'Please watch the baby while I run to the store.'\n\nA) A timepiece worn on the wrist\nB) To look at attentively\nC) To supervise or take care of\nD) To be careful",
                  hint: "Think about what action is being requested... Is someone asking you to look at the baby, or do something more?",
                  answer: "**C) To supervise or take care of** is correct! The context shows someone is leaving and needs another person to be responsible for the baby's safety, not just look at them. 'Watch' here means to supervise or guard."
                }
              }
            },
            {
              id: "vocab-7-2",
              title: "Practice: Multiple Meanings in Context",
              type: "exercise",
              content: {
                instructions: "Choose the correct meaning of the underlined word based on how it is used in the sentence. Use the 3 C's strategy: Context, Clues, and Check!",
                questions: [
                  {
                    id: "q1",
                    question: "The judge **ruled** in favor of the defendant after reviewing all the evidence presented in court.",
                    word: "ruled",
                    options: ["measured with a ruler", "made an official decision", "governed a country", "drew a straight line"],
                    correctAnswer: 1,
                    explanation: "In this legal context, '**ruled**' means made an official decision. The judge made a determination based on evidence."
                  },
                  {
                    id: "q2",
                    question: "She had a **bright** idea for solving the complex science problem that had stumped everyone.",
                    word: "bright",
                    options: ["shining with light", "intelligent or clever", "cheerful and happy", "colorful"],
                    correctAnswer: 1,
                    explanation: "In this context, '**bright**' means intelligent or clever, describing the quality of the idea, not a physical light."
                  },
                  {
                    id: "q3",
                    question: "The **bear** climbed the tree quickly to escape from the approaching danger below.",
                    word: "bear",
                    options: ["to carry something heavy", "to tolerate a difficulty", "a large wild mammal", "to give birth to offspring"],
                    correctAnswer: 2,
                    explanation: "In this context, '**bear**' is a noun meaning the animal. The context of climbing a tree confirms this meaning."
                  },
                  {
                    id: "q4",
                    question: "Please **watch** the baby carefully while I run to the store for some milk.",
                    word: "watch",
                    options: ["a timepiece worn on the wrist", "to look at attentively", "to supervise or guard", "to observe an event for entertainment"],
                    correctAnswer: 2,
                    explanation: "In this context, '**watch**' means to supervise or take care of someone. It implies responsibility for the baby's safety, not just looking."
                  },
                  {
                    id: "q5",
                    question: "The novel had an interesting **plot** with unexpected twists that kept readers engaged until the last page.",
                    word: "plot",
                    options: ["a small piece of land", "a secret plan or scheme", "the storyline of a book", "to mark points on a graph"],
                    correctAnswer: 2,
                    explanation: "In this literary context, '**plot**' refers to the storyline or sequence of events in the novel."
                  },
                  {
                    id: "q6",
                    question: "We need to **address** this serious issue immediately before it gets worse.",
                    word: "address",
                    options: ["a mailing location", "to deal with or tackle", "to speak formally to a group", "to write a location on an envelope"],
                    correctAnswer: 1,
                    explanation: "As a verb, '**address**' [uh-DRESS] means to deal with or tackle a problem. The context of 'need to' and 'immediately' confirms this meaning."
                  },
                  {
                    id: "q7",
                    question: "The hikers sat on the **bank** of the river to rest and enjoy the peaceful scenery.",
                    word: "bank",
                    options: ["a financial institution", "the edge or side of a river", "to tilt to one side", "a place to store valuables"],
                    correctAnswer: 1,
                    explanation: "'**Bank**' here means the edge of the river. The context of 'of the river' and 'sat on' makes this clear."
                  },
                  {
                    id: "q8",
                    question: "The principal will **present** the awards to the honor roll students at tomorrow's assembly.",
                    word: "present",
                    options: ["existing now or current", "a gift given to someone", "to formally give or show", "the current time period"],
                    correctAnswer: 2,
                    explanation: "As a verb [prih-ZENT], '**present**' means to formally give or show something. The principal is giving out awards."
                  },
                  {
                    id: "q9",
                    question: "The astronomer used a telescope to **track** the movement of the comet across the night sky.",
                    word: "track",
                    options: ["a path or trail", "a song on an album", "to follow or monitor", "a circular racing course"],
                    correctAnswer: 2,
                    explanation: "As a verb, '**track**' means to follow or monitor something's movement. The astronomer is following the comet's path."
                  },
                  {
                    id: "q10",
                    question: "The students had to **conduct** a science experiment to test their hypothesis about plant growth.",
                    word: "conduct",
                    options: ["behavior or manner", "to carry out or perform", "to lead an orchestra", "a substance that transmits heat or electricity"],
                    correctAnswer: 1,
                    explanation: "As a verb [kun-DUKT], '**conduct**' means to carry out or perform. The students are performing an experiment."
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
              title: "Practice: Mastering Academic Vocabulary",
              type: "exercise",
              content: {
                instructions: "Choose the academic vocabulary word that best completes each sentence or answers each question. These Tier 2 words are essential for test success!",
                questions: [
                  {
                    id: "q1",
                    question: "When you _____ a text, you provide a brief overview of the main ideas without including minor details.",
                    options: ["analyze", "summarize", "evaluate", "interpret"],
                    correctAnswer: 1,
                    explanation: "**Summarize** means to give a brief statement of the main points, creating a short overview. Think: the 'highlight reel.'"
                  },
                  {
                    id: "q2",
                    question: "To _____ means to examine something carefully by breaking it into parts to understand how they work together.",
                    options: ["describe", "analyze", "summarize", "compare"],
                    correctAnswer: 1,
                    explanation: "**Analyze** means to examine something in detail, breaking it down to understand it better. Like being a detective!"
                  },
                  {
                    id: "q3",
                    question: "Which word means 'to judge the value, quality, or importance of something'?",
                    options: ["context", "evaluate", "significant", "interpret"],
                    correctAnswer: 1,
                    explanation: "**Evaluate** means to judge or determine the significance or worth of something. You're deciding if it works well or not."
                  },
                  {
                    id: "q4",
                    question: "The _____ of a word includes the surrounding words and sentences that help you understand its meaning.",
                    options: ["context", "summary", "evaluation", "analysis"],
                    correctAnswer: 0,
                    explanation: "**Context** refers to the circumstances or setting surrounding something. It helps you understand what's happening around a word or event."
                  },
                  {
                    id: "q5",
                    question: "When you _____ a poem, you explain what you think it means based on the words and your understanding.",
                    options: ["summarize", "describe", "interpret", "compare"],
                    correctAnswer: 2,
                    explanation: "**Interpret** means to explain the meaning of something based on your understanding and analysis. It's YOUR explanation backed by evidence."
                  },
                  {
                    id: "q6",
                    question: "A _____ discovery is one that is very important and makes a big difference.",
                    options: ["brief", "significant", "simple", "common"],
                    correctAnswer: 1,
                    explanation: "**Significant** means sufficiently great or important to be worthy of attention. If something is significant, it really matters!"
                  },
                  {
                    id: "q7",
                    question: "To _____ your answer means to provide evidence, examples, or reasons that back up your claim.",
                    options: ["support", "contrast", "conclude", "describe"],
                    correctAnswer: 0,
                    explanation: "**Support** means to provide evidence or reasoning to back up a claim. You're proving your point with facts!"
                  },
                  {
                    id: "q8",
                    question: "When you _____ from a text, you draw logical conclusions based on evidence even though it's not directly stated.",
                    options: ["summarize", "infer", "describe", "quote"],
                    correctAnswer: 1,
                    explanation: "**Infer** means to conclude something from evidence and reasoning. You're being a detective, using clues to figure out what's not directly said!"
                  },
                  {
                    id: "q9",
                    question: "Facts, information, or quotes that prove something is true are called _____.",
                    options: ["opinions", "evidence", "summaries", "perspectives"],
                    correctAnswer: 1,
                    explanation: "**Evidence** refers to facts, information, or signs that prove something is true. It's the proof that backs up your claims!"
                  },
                  {
                    id: "q10",
                    question: "To _____ two texts means to examine them to find similarities, while to _____ them means to find differences.",
                    options: ["evaluate / analyze", "compare / contrast", "interpret / explain", "describe / support"],
                    correctAnswer: 1,
                    explanation: "**Compare** means to show similarities, and **contrast** means to show differences. These words are often used together in test questions!"
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
              title: "Parts of Speech: The Engine of the Sentence",
              type: "lesson",
              content: {
                introduction: "Parts of speech are the 'building blocks' of every sentence. Think of them as different types of LEGO pieces—each has a specific job and fits together in particular ways. Understanding these three core parts of speech (nouns, pronouns, and verbs) is fundamental to constructing clear, powerful sentences in Grade 6 and beyond!",
                explanation: "**🔑 THE THREE CORE PARTS OF SPEECH**\n\nEvery complete sentence needs at least two parts: **WHO/WHAT** (noun/pronoun) and **DOES/IS** (verb). This is the engine that makes English work!\n\n---\n\n**1. NOUNS: Naming Words** 📝\n\n**Definition**: A noun names a person, place, thing, or idea.\n\n**Two Types of Nouns:**\n\n**A. Common Nouns** (general, everyday things)\n- **People**: teacher, student, doctor, athlete\n- **Places**: city, school, park, ocean\n- **Things**: book, computer, backpack, pizza\n- **Ideas**: freedom, happiness, courage, democracy\n\n**How to Recognize**: Common nouns are lowercase unless they start a sentence\n\n**B. Proper Nouns** (specific names - always capitalized!)\n- **People**: Ms. Johnson, Abraham Lincoln, Taylor Swift\n- **Places**: California, San Francisco, Pacific Ocean, Yosemite National Park\n- **Things**: iPhone, Golden Gate Bridge, Statue of Liberty\n- **Ideas/Events**: Fourth of July, Renaissance, World War II\n\n**Grade 6 Rule**: ALL words in a proper noun get capitalized EXCEPT small words like 'of,' 'the,' 'a' (unless they're the first word)\n- Example: United States **of** America, University **of** California\n\n**Concrete vs. Abstract Nouns:**\n- **Concrete**: You can see, touch, hear, taste, or smell them (dog, music, lemon)\n- **Abstract**: Ideas and concepts you can't physically experience (love, justice, intelligence)\n\n---\n\n**2. PRONOUNS: Noun Replacements** 🔄\n\n**Definition**: A pronoun replaces a noun to avoid boring repetition.\n\n**Why We Need Pronouns:**\n\n❌ **Without pronouns**: \"Sarah went to Sarah's locker. Sarah got Sarah's books. Sarah walked to Sarah's class.\"\n\n✅ **With pronouns**: \"Sarah went to **her** locker. **She** got **her** books. **She** walked to **her** class.\"\n\n**Types of Pronouns (Grade 6 Focus):**\n\n**A. Personal Pronouns** (replace people/things)\n- **Singular**: I, you, he, she, it\n- **Plural**: we, you, they\n\n**B. Possessive Pronouns** (show ownership)\n- **Singular**: my, mine, your, yours, his, her, hers, its\n- **Plural**: our, ours, your, yours, their, theirs\n\n**Important Note**: The noun a pronoun replaces is called its **antecedent**\n- Example: \"**Maria** forgot **her** lunch.\" (Maria is the antecedent of 'her')\n\n**Common Error to Avoid:**\n- ❌ \"Its'\" is NEVER correct!\n- ✅ **Its** = possessive (The dog wagged its tail)\n- ✅ **It's** = contraction for 'it is' (It's raining today)\n\n---\n\n**3. VERBS: The Action or State of Being** ⚡\n\n**Definition**: A verb shows what something DOES or what something IS.\n\n**Two Main Types:**\n\n**A. Action Verbs** (show what the subject DOES)\n\n**Physical Actions** (you can see them):\n- run, jump, throw, write, dance, eat, swim, build\n- Example: \"The athlete **jumped** over the hurdle.\"\n\n**Mental Actions** (happen in your mind):\n- think, believe, understand, remember, imagine, wonder, decide\n- Example: \"I **believe** that teamwork matters.\"\n\n**Verbal Actions** (involve speaking/communication):\n- said, shouted, whispered, announced, explained, asked\n- Example: \"The teacher **explained** the assignment.\"\n\n**B. Linking Verbs** (show what the subject IS or SEEMS LIKE)\n\n**Forms of 'to be'** (the most common linking verbs):\n- Present: am, is, are\n- Past: was, were\n- Future: will be\n- Other forms: be, being, been\n\n**Other Linking Verbs** (connect the subject to a description):\n- **Sense verbs**: feel, look, smell, taste, sound\n- **State verbs**: seem, appear, become, remain\n\n**How to Identify a Linking Verb:**\nUse the \"= Test\": Can you replace the verb with an equal sign?\n- \"The soup **tastes** delicious.\" → The soup = delicious ✓ (linking verb)\n- \"I **taste** the soup.\" → I = the soup ✗ (action verb - I'm doing the tasting)\n\n---\n\n**💡 THE NOUN-VERB-NOUN PATTERN (The Foundation of English)**\n\nMost English sentences follow this basic pattern:\n\n**NOUN (or PRONOUN) + VERB + NOUN (or PRONOUN)**\n\n**Examples:**\n1. **Sarah** + **threw** + **the ball**\n   - Subject (who) + Action (does) + Object (what)\n\n2. **The dog** + **is** + **friendly**\n   - Subject (who) + Linking verb (is) + Description (what)\n\n3. **We** + **finished** + **our homework**\n   - Subject (who) + Action (does) + Object (what)\n\n**Understanding this pattern helps you:**\n- Build complete sentences\n- Identify fragments (missing pieces)\n- Understand subject-verb agreement\n\n---\n\n**📊 SUBJECT-VERB AGREEMENT (Critical for Grade 6!)**\n\n**The Rule**: Subjects and verbs must MATCH in number\n\n**Singular subject** → **Singular verb**\n- The student **studies**. (one student, -s on verb)\n- She **is** happy. (singular subject, singular form of 'be')\n\n**Plural subject** → **Plural verb**\n- The students **study**. (multiple students, no -s on verb)\n- They **are** happy. (plural subject, plural form of 'be')\n\n**Tricky Situations:**\n\n**1. Compound Subjects with 'and'** (always plural)\n- Sarah **and** Maria **are** friends. (two people = plural)\n\n**2. Compound Subjects with 'or'** (match the closest subject)\n- Neither the teacher **nor** the students **were** ready. (students is closest and plural)\n- Neither the students **nor** the teacher **was** ready. (teacher is closest and singular)\n\n**3. Words that come between subject and verb**\n- The box of crayons **is** on the table. (box = singular, not crayons)\n- The students in the class **are** taking notes. (students = plural, not class)\n\n**Memory Trick**: Cross out prepositional phrases to find the real subject!\n\n---\n\n**🎯 WHY THIS MATTERS**\n\n**For Writing:**\n- Clear subjects and verbs make your ideas easy to understand\n- Correct agreement shows you're a skilled writer\n- Varied verbs make writing more interesting\n\n**For Reading:**\n- Identifying subjects and verbs helps you understand complex sentences\n- Understanding parts of speech improves comprehension\n\n**For Tests:**\n- Grammar questions often test subject-verb agreement\n- Identifying parts of speech is a common standardized test skill\n\n**For Speaking:**\n- Using correct agreement makes you sound educated and professional\n\n---\n\n**✨ QUICK IDENTIFICATION STRATEGIES**\n\n**To Find the NOUN:**\n- Ask \"What is this sentence about?\"\n- Can you put 'the' or 'a' in front of it?\n- Does it name a person, place, thing, or idea?\n\n**To Find the PRONOUN:**\n- Does it replace a noun?\n- Is it one of the personal or possessive pronouns?\n- Can you identify what noun it's replacing (its antecedent)?\n\n**To Find the VERB:**\n- Ask \"What is the subject doing?\" (action verb)\n- Ask \"What is the subject?\" (linking verb)\n- Can you put 'to' in front of it? (to run, to think, to be)\n- Does it change when you change the time? (walk → walked)",
                examples: [
                  {
                    text: "**Example 1**: 'Sarah threw the ball to her friend at the park.'",
                    explanation: "**Breakdown**: **Sarah** (proper noun - specific person), **threw** (action verb - past tense), **ball** (common noun - thing), **her** (possessive pronoun - refers to Sarah), **friend** (common noun - person), **park** (common noun - place). **Pattern**: Noun + Verb + Noun structure!"
                  },
                  {
                    text: "**Example 2**: 'The students are excited about their field trip to Yosemite National Park.'",
                    explanation: "**Breakdown**: **students** (common noun - plural people), **are** (linking verb - form of 'be'), **excited** (adjective describing students), **their** (possessive pronoun - refers to students), **field trip** (common noun - thing/event), **Yosemite National Park** (proper noun - specific place, all words capitalized). **Agreement**: Plural subject 'students' matches plural verb 'are'!"
                  },
                  {
                    text: "**Example 3**: 'My brother and I believe that honesty matters.'",
                    explanation: "**Breakdown**: **brother** (common noun), **I** (personal pronoun), **believe** (mental action verb - present tense), **honesty** (abstract noun - idea), **matters** (action verb). **Special Notes**: Compound subject 'brother and I' takes plural verb 'believe.' 'Honesty' is an abstract noun (you can't see or touch it, but it's still a noun!)"
                  },
                  {
                    text: "**Example 4 - Agreement Challenge**: 'The box of old photographs **is** in the attic.' (NOT 'are')",
                    explanation: "**Tricky!** The subject is '**box**' (singular), not 'photographs' (plural). The phrase 'of old photographs' just describes which box. Cross out the prepositional phrase: 'The box ~~of old photographs~~ is in the attic.' Now it's clear that 'box' (singular) needs 'is' (singular)!"
                  },
                  {
                    text: "**Example 5 - Linking vs. Action Verb**: 'The soup tastes delicious.' vs. 'I taste the soup.'",
                    explanation: "**First sentence**: '**tastes**' is a **linking verb** (soup = delicious, connects subject to description). **Second sentence**: '**taste**' is an **action verb** (I am doing the action of tasting). Same word, different jobs!"
                  }
                ],
                quickPractice: {
                  question: "Analyze this sentence and identify each part:\n\n'The excited students and their teacher are planning a science experiment.'\n\nFind: 1) All nouns, 2) All pronouns, 3) The verb, 4) Is subject-verb agreement correct?",
                  hint: "Remember compound subjects with 'and' are always plural!",
                  answer: "**Nouns**: students (common, plural), teacher (common, singular), science (common - modifying 'experiment'), experiment (common, singular). **Pronouns**: their (possessive, refers to 'students'). **Verb**: are planning (linking + action combination, plural). **Agreement**: ✓ CORRECT! Compound subject 'students and their teacher' (plural) matches plural verb 'are.' Note: 'excited' is an adjective, not a noun!"
                }
              }
            },
            {
              id: "grammar-1-2",
              title: "Practice: Identifying Parts of Speech",
              type: "exercise",
              content: {
                instructions: "Identify the part of speech for the underlined word in each sentence. Remember to think about the word's JOB in the sentence, not just what it looks like!",
                questions: [
                  {
                    id: "q1",
                    question: "The quick brown fox **jumped** over the lazy dog.",
                    word: "jumped",
                    options: ["noun", "verb", "adjective", "adverb"],
                    correctAnswer: 1,
                    explanation: "'**Jumped**' is an **action verb** showing what the fox did. Test: Can you put 'to' in front? 'to jump' - yes! It's a verb."
                  },
                  {
                    id: "q2",
                    question: "She brought **her** umbrella to school because of the rain.",
                    word: "her",
                    options: ["noun", "verb", "pronoun", "adjective"],
                    correctAnswer: 2,
                    explanation: "'**Her**' is a **possessive pronoun** showing ownership of the umbrella. It replaces a noun (the girl's) and shows whose umbrella it is."
                  },
                  {
                    id: "q3",
                    question: "The **Golden Gate Bridge** is a famous landmark in San Francisco.",
                    word: "Golden Gate Bridge",
                    options: ["common noun", "proper noun", "verb", "pronoun"],
                    correctAnswer: 1,
                    explanation: "'**Golden Gate Bridge**' is a **proper noun** - it's the specific name of a particular bridge. All words are capitalized because it's a proper noun."
                  },
                  {
                    id: "q4",
                    question: "My **freedom** to express my ideas is protected by the Constitution.",
                    word: "freedom",
                    options: ["proper noun", "common noun", "verb", "pronoun"],
                    correctAnswer: 1,
                    explanation: "'**Freedom**' is an **abstract common noun** (an idea you can't touch). It's lowercase because it's not a specific name. Test: Can you put 'the' or 'my' in front? Yes - 'my freedom.'"
                  },
                  {
                    id: "q5",
                    question: "The students **are** preparing for their final exam.",
                    word: "are",
                    options: ["action verb", "linking verb", "pronoun", "noun"],
                    correctAnswer: 1,
                    explanation: "'**Are**' is a **linking verb** (form of 'be'). It connects 'students' to what they're doing. Use the = test: 'students = preparing' makes sense!"
                  },
                  {
                    id: "q6",
                    question: "I **believe** that education is the key to success.",
                    word: "believe",
                    options: ["linking verb", "action verb (mental)", "noun", "pronoun"],
                    correctAnswer: 1,
                    explanation: "'**Believe**' is a **mental action verb** - it happens in your mind, not your body. Test: Can you put 'to' in front? 'to believe' - yes!"
                  },
                  {
                    id: "q7",
                    question: "The box of crayons **is** on the table.",
                    word: "is",
                    options: ["action verb", "linking verb", "helping verb", "noun"],
                    correctAnswer: 1,
                    explanation: "'**Is**' is a **linking verb** (form of 'be'). Linking verbs connect the subject to information about it. Notice: 'box' (singular) needs 'is' (singular), not 'are'!"
                  },
                  {
                    id: "q8",
                    question: "**Abraham Lincoln** delivered the Gettysburg Address in 1863.",
                    word: "Abraham Lincoln",
                    options: ["common noun", "proper noun", "pronoun", "verb"],
                    correctAnswer: 1,
                    explanation: "'**Abraham Lincoln**' is a **proper noun** - the specific name of a person. Both words are capitalized."
                  },
                  {
                    id: "q9",
                    question: "Maria and **they** finished the project early.",
                    word: "they",
                    options: ["proper noun", "common noun", "personal pronoun", "possessive pronoun"],
                    correctAnswer: 2,
                    explanation: "'**They**' is a **personal pronoun** (plural) that replaces the names of specific people. It's the subject doing the action (finishing)."
                  },
                  {
                    id: "q10",
                    question: "The soup **tastes** delicious after simmering all day.",
                    word: "tastes",
                    options: ["action verb", "linking verb", "noun", "adjective"],
                    correctAnswer: 1,
                    explanation: "'**Tastes**' is a **linking verb** here. Use the = test: 'soup = delicious' ✓ The verb connects the subject to a description. (If the sentence was 'I taste the soup,' then 'taste' would be an action verb!)"
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
              title: "Sentence Structure: Building Complete Thoughts",
              type: "lesson",
              content: {
                introduction: "A sentence is like a building—it needs a solid foundation (subject + verb) to stand. In Grade 6, you'll learn to construct different types of sentences and avoid common errors like fragments and run-ons. Mastering sentence structure is essential for clear, effective writing!",
                explanation: "**🏗️ WHAT IS A COMPLETE SENTENCE?**\n\nA complete sentence must have TWO things:\n1. **A SUBJECT** (who or what)\n2. **A PREDICATE** (what the subject does or is)\n\n**Example**: **The dog** (subject) **barked loudly** (predicate).\n\n---\n\n**📝 TYPE 1: SIMPLE SENTENCES**\n\n**Definition**: A simple sentence contains ONE independent clause (one complete thought).\n\n**Structure**: Subject + Verb (+ other words)\n\n**Important**: 'Simple' doesn't mean 'short'! A simple sentence can be long, but it has only ONE subject-verb combination expressing ONE complete thought.\n\n**Examples:**\n\n**Short Simple Sentences:**\n- Birds fly.\n- She laughed.\n- The sun sets.\n\n**Longer Simple Sentences:**\n- The excited students cheered loudly for their team.\n- Maria and her brother walked to the library after school.\n- The old oak tree in our backyard provides shade during summer.\n\n**Types of Simple Sentences:**\n\n**1. Simple Subject + Simple Verb**\n- Dogs bark.\n- Rain falls.\n\n**2. Compound Subject (two subjects, one verb)**\n- **Sarah and Maria** went to the movies. (two subjects, one action)\n- **The cat and the dog** played together. (two subjects, one action)\n\n**3. Compound Verb (one subject, two verbs)**\n- The athlete **ran and jumped**. (one subject, two actions)\n- We **studied and reviewed** for the test. (one subject, two actions)\n\n**4. Compound Subject + Compound Verb**\n- **Sarah and I** **walked and talked** on the way home.\n\n**Note**: Even with compound subjects or verbs, if there's only ONE independent clause, it's still a SIMPLE sentence!\n\n---\n\n**🔗 TYPE 2: COMPOUND SENTENCES**\n\n**Definition**: A compound sentence contains TWO or more independent clauses (two complete thoughts) joined together.\n\n**Structure**: Independent Clause + **Comma + FANBOYS** + Independent Clause\n\n**The FANBOYS (Coordinating Conjunctions):**\n\n| Letter | Word | Meaning | Example |\n|--------|------|---------|----------|\n| **F** | For | because (reason) | I stayed home, **for** I was sick. |\n| **A** | And | plus/addition | She studied, **and** she passed. |\n| **N** | Nor | not this or that | He didn't call, **nor** did he text. |\n| **B** | But | however/contrast | I tried, **but** I failed. |\n| **O** | Or | choice/alternative | We can walk, **or** we can drive. |\n| **Y** | Yet | however/despite | It rained, **yet** we had fun. |\n| **S** | So | therefore/result | I was tired, **so** I went to bed. |\n\n**Compound Sentence Formula:**\n\n**Independent Clause , FANBOYS Independent Clause**\n\n**✓ Correct Examples:**\n- The sun was shining, **so** we went to the beach.\n- I wanted pizza, **but** my brother wanted tacos.\n- She could study now, **or** she could study later.\n- The test was difficult, **yet** most students passed.\n\n**Important Rules:**\n\n**Rule 1**: ALWAYS use a COMMA before the FANBOYS conjunction!\n- ❌ Wrong: \"I studied hard and I passed the test.\" (missing comma)\n- ✅ Right: \"I studied hard, and I passed the test.\"\n\n**Rule 2**: BOTH sides must be COMPLETE sentences (independent clauses)!\n- ❌ Wrong: \"The dog barked, and ran away.\" ('ran away' is not a complete sentence)\n- ✅ Right: \"The dog barked, and he ran away.\" (both sides complete)\n\n**Rule 3**: Don't confuse compound sentences with simple sentences that have compound verbs!\n- **Simple (compound verb)**: \"Sarah walked and talked.\" (one subject, two verbs - NO comma needed)\n- **Compound**: \"Sarah walked, and Maria talked.\" (two subjects, two verbs - COMMA needed)\n\n---\n\n**❌ ERROR 1: SENTENCE FRAGMENTS**\n\n**Definition**: A fragment is an INCOMPLETE sentence that's missing a subject, a verb, or doesn't express a complete thought.\n\n**Types of Fragments:**\n\n**1. Missing Subject**\n- ❌ Fragment: \"Ran to the store.\" (Who ran?)\n- ✅ Complete: \"**She** ran to the store.\"\n\n**2. Missing Verb**\n- ❌ Fragment: \"The tall building in the city.\" (What about it?)\n- ✅ Complete: \"The tall building in the city **collapsed**.\"\n\n**3. Dependent Clause Standing Alone**\n- ❌ Fragment: \"Because it was raining.\" (Incomplete thought - what happened?)\n- ✅ Complete: \"**We stayed inside** because it was raining.\"\n- ✅ Complete: \"Because it was raining, **we stayed inside**.\"\n\n**4. Phrase Fragments (missing both subject AND verb)**\n- ❌ Fragment: \"In the morning.\"\n- ✅ Complete: \"**We left** in the morning.\"\n\n**How to Fix Fragments:**\n1. **Add the missing subject or verb**\n2. **Attach the fragment to a nearby complete sentence**\n3. **Rewrite to create a complete thought**\n\n**Fragment Fix Examples:**\n\n**Example 1:**\n- ❌ \"Walking down the street. I saw my friend.\"\n- ✅ \"**While** walking down the street, I saw my friend.\" (attached)\n- ✅ \"**I was** walking down the street. I saw my friend.\" (added subject + verb)\n\n**Example 2:**\n- ❌ \"The book on the table. It belongs to Maria.\"\n- ✅ \"The book on the table belongs to Maria.\" (combined)\n\n---\n\n**❌ ERROR 2: RUN-ON SENTENCES**\n\n**Definition**: A run-on sentence incorrectly joins two or more independent clauses without proper punctuation or conjunctions.\n\n**Two Types of Run-Ons:**\n\n**1. Fused Sentence** (NO punctuation between independent clauses)\n- ❌ Run-on: \"I love reading **I read every day.**\"\n- ✅ Fixed: \"I love reading**. I** read every day.\" (period)\n- ✅ Fixed: \"I love reading**, and I** read every day.\" (comma + FANBOYS)\n- ✅ Fixed: \"I love reading**; I** read every day.\" (semicolon)\n\n**2. Comma Splice** (only a comma between independent clauses, NO conjunction)\n- ❌ Run-on: \"The movie was long**,** it was boring.\"\n- ✅ Fixed: \"The movie was long**. It** was boring.\" (period)\n- ✅ Fixed: \"The movie was long**, and it** was boring.\" (comma + FANBOYS)\n- ✅ Fixed: \"The movie was long**; it** was boring.\" (semicolon)\n\n**How to Fix Run-Ons (4 Methods):**\n\n**Method 1: Split into Two Sentences** (use a period)\n- \"I studied hard**.** I passed the test.\"\n\n**Method 2: Use Comma + FANBOYS**\n- \"I studied hard**, so** I passed the test.\"\n\n**Method 3: Use a Semicolon** (; )\n- \"I studied hard**;** I passed the test.\"\n\n**Method 4: Make One Clause Dependent**\n- \"**Because** I studied hard, I passed the test.\"\n\n---\n\n**🎯 IDENTIFICATION STRATEGIES**\n\n**To Identify a SIMPLE Sentence:**\n- Find the subject and verb\n- Check: Is there only ONE independent clause?\n- Even with compound subjects/verbs, if it's ONE thought, it's simple!\n\n**To Identify a COMPOUND Sentence:**\n- Look for FANBOYS conjunctions\n- Check BOTH sides: Are they BOTH complete sentences?\n- Is there a comma before the FANBOYS?\n\n**To Identify a FRAGMENT:**\n- Read it alone\n- Ask: \"Is this a complete thought?\"\n- Check: Does it have BOTH a subject AND a verb?\n- Ask: \"Am I left hanging, wanting more information?\"\n\n**To Identify a RUN-ON:**\n- Count the independent clauses (complete thoughts)\n- If there are 2+, check the punctuation\n- Is there proper punctuation OR a conjunction between them?\n- Comma alone = comma splice (a type of run-on!)\n\n---\n\n**💡 WHY THIS MATTERS**\n\n**For Writing:**\n- Clear sentences make your ideas easy to understand\n- Varying sentence types makes writing more interesting\n- Avoiding fragments and run-ons shows writing maturity\n\n**For Reading:**\n- Understanding sentence structure improves comprehension\n- Helps you analyze how authors construct complex ideas\n\n**For Tests:**\n- Identifying and correcting sentence errors is a common test question\n- Writing assessments penalize fragments and run-ons\n\n**For Speaking:**\n- Complete sentences make you sound educated and professional\n\n---\n\n**✨ GRADE 6 WRITING TIP**\n\n**Good writers use sentence VARIETY:**\n- Mix simple and compound sentences\n- Start sentences different ways\n- Vary sentence length\n\n**Example of Good Variety:**\n\"The storm approached quickly. Dark clouds covered the sky, and the wind began to howl. Everyone rushed inside. We were safe, but we were worried about the power going out.\"\n\n(Simple → Compound → Simple → Compound = Good variety!)",
                examples: [
                  {
                    text: "**Simple Sentence**: 'The excited students and their dedicated teacher prepared carefully for the important science fair.'",
                    explanation: "This is a **simple sentence** even though it's long! Why? It has ONE subject (students and teacher) and ONE verb (prepared). It's one complete thought. Compound subject + one verb = still simple!"
                  },
                  {
                    text: "**Compound Sentence**: 'The sun was shining brightly, so we decided to go to the beach for the afternoon.'",
                    explanation: "This is a **compound sentence**: TWO complete thoughts joined by **comma + 'so'** (FANBOYS). Test: 'The sun was shining' = complete ✓ 'We decided to go to the beach' = complete ✓"
                  },
                  {
                    text: "**Fragment → Fixed**: ❌ 'Because it was raining.' ✅ 'We stayed inside because it was raining.'",
                    explanation: "**Fragment problem**: 'Because it was raining' leaves you hanging—what happened BECAUSE of the rain? **Fixed**: Added an independent clause 'We stayed inside' to complete the thought."
                  },
                  {
                    text: "**Run-On → Fixed**: ❌ 'I love reading, I read every day.' ✅ 'I love reading, and I read every day.'",
                    explanation: "**Run-on problem**: This is a **comma splice** (comma alone between two complete sentences). **Fixed**: Added FANBOYS conjunction 'and' after the comma. Could also use a period or semicolon."
                  },
                  {
                    text: "**Tricky Example**: 'Maria studied hard and passed the test.' (Simple or Compound?)",
                    explanation: "This is **SIMPLE**, not compound! Why? 'Passed the test' is NOT a complete sentence by itself (no subject). This is ONE subject (Maria) with TWO verbs (studied, passed). Compound verb ≠ compound sentence. NO comma needed!"
                  }
                ],
                quickPractice: {
                  question: "Fix this sentence and identify what's wrong:\n\n'My favorite sport is basketball, I play every weekend at the park.'\n\nWhat type of error is this, and how can you fix it?",
                  hint: "Look carefully at the punctuation between the two complete thoughts...",
                  answer: "**Error Type**: **Comma Splice** (a type of run-on). Two independent clauses are joined by only a comma with no conjunction. **Three Ways to Fix**: 1) **Period**: 'My favorite sport is basketball. I play every weekend.' 2) **Comma + FANBOYS**: 'My favorite sport is basketball, and I play every weekend.' 3) **Semicolon**: 'My favorite sport is basketball; I play every weekend.' All three are correct!"
                }
              }
            },
            {
              id: "grammar-2-2",
              title: "Practice: Sentence Structure, Fragments, and Run-Ons",
              type: "exercise",
              content: {
                instructions: "Identify the sentence type or error. Remember: Simple = one independent clause, Compound = two independent clauses joined properly, Fragment = incomplete, Run-on = improperly joined!",
                questions: [
                  {
                    id: "q1",
                    question: "The teacher explained the lesson clearly, and the students took detailed notes.",
                    options: ["Simple sentence", "Compound sentence", "Fragment", "Run-on sentence"],
                    correctAnswer: 1,
                    explanation: "This is a **compound sentence** with two independent clauses: 'The teacher explained the lesson' + 'the students took notes,' joined by **comma + 'and'** (FANBOYS)."
                  },
                  {
                    id: "q2",
                    question: "My brother and I walked to the store after dinner.",
                    options: ["Simple sentence", "Compound sentence", "Fragment", "Run-on sentence"],
                    correctAnswer: 0,
                    explanation: "This is a **simple sentence** with a compound subject ('My brother and I') but only ONE verb ('walked'). Compound subject ≠ compound sentence!"
                  },
                  {
                    id: "q3",
                    question: "I studied hard for the test, yet I still felt nervous about it.",
                    options: ["Simple sentence", "Compound sentence", "Fragment", "Run-on sentence"],
                    correctAnswer: 1,
                    explanation: "This is a **compound sentence** with two complete thoughts joined by **comma + 'yet'** (FANBOYS). Both sides are independent clauses."
                  },
                  {
                    id: "q4",
                    question: "Because it was raining heavily outside.",
                    options: ["Simple sentence", "Compound sentence", "Fragment", "Run-on sentence"],
                    correctAnswer: 2,
                    explanation: "This is a **fragment**! It starts with 'Because' (makes it dependent) and doesn't have an independent clause. We're left hanging—what happened because it was raining? Incomplete thought!"
                  },
                  {
                    id: "q5",
                    question: "The movie was long, it was also very boring.",
                    options: ["Simple sentence", "Compound sentence", "Fragment", "Run-on (comma splice)"],
                    correctAnswer: 3,
                    explanation: "This is a **comma splice** (type of run-on)! Two complete sentences joined by only a comma with NO conjunction. Fix: Add period, add FANBOYS after comma, or use semicolon."
                  },
                  {
                    id: "q6",
                    question: "Sarah ran quickly and jumped over the fence.",
                    options: ["Simple sentence", "Compound sentence", "Fragment", "Run-on sentence"],
                    correctAnswer: 0,
                    explanation: "This is a **simple sentence** with a compound verb ('ran' and 'jumped'). One subject (Sarah), two verbs. NO comma needed before 'and' because this isn't a compound sentence!"
                  },
                  {
                    id: "q7",
                    question: "I love reading books I read every single day after school.",
                    options: ["Simple sentence", "Compound sentence", "Fragment", "Run-on (fused sentence)"],
                    correctAnswer: 3,
                    explanation: "This is a **fused sentence** (run-on)! Two complete sentences ('I love reading books' + 'I read every day') with NO punctuation between them. Fix: Add period, comma + FANBOYS, or semicolon."
                  },
                  {
                    id: "q8",
                    question: "The tall building in downtown San Francisco.",
                    options: ["Simple sentence", "Compound sentence", "Fragment", "Run-on sentence"],
                    correctAnswer: 2,
                    explanation: "This is a **fragment**! It has a subject ('building') but NO VERB. What about the building? Incomplete thought. Fix: 'The tall building in downtown San Francisco **collapsed**.'"
                  },
                  {
                    id: "q9",
                    question: "We could go to the movies, or we could stay home and watch a show.",
                    options: ["Simple sentence", "Compound sentence", "Fragment", "Run-on sentence"],
                    correctAnswer: 1,
                    explanation: "This is a **compound sentence**. Two complete thoughts: 'We could go to the movies' + 'we could stay home,' joined by **comma + 'or'** (FANBOYS). Proper punctuation!"
                  },
                  {
                    id: "q10",
                    question: "The excited students prepared for the big game.",
                    options: ["Simple sentence", "Compound sentence", "Fragment", "Run-on sentence"],
                    correctAnswer: 0,
                    explanation: "This is a **simple sentence**. ONE subject ('students'), ONE verb ('prepared'), ONE complete thought. Even though it has modifiers ('excited,' 'for the big game'), it's still just one independent clause."
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
                instructions: "Choose the correct pronoun for each sentence. Remember to use the 'remove the other person' trick for compound subjects/objects!",
                questions: [
                  {
                    id: "q1",
                    question: "_____ and Sarah went to the library to study for the exam.",
                    options: ["Me", "I", "Myself", "Mine"],
                    correctAnswer: 1,
                    explanation: "Use '**I**' (subjective case) because the pronoun is the subject doing the action. Test: Remove 'and Sarah' → 'I went' sounds correct, 'Me went' does not."
                  },
                  {
                    id: "q2",
                    question: "The teacher gave the assignment to Carlos and _____.",
                    options: ["I", "me", "myself", "mine"],
                    correctAnswer: 1,
                    explanation: "Use '**me**' (objective case) after the preposition 'to.' Test: Remove 'Carlos and' → Would you say 'to I' or 'to me'? Always 'to me.'"
                  },
                  {
                    id: "q3",
                    question: "Between you and _____, I think this plan won't work.",
                    options: ["I", "me", "myself", "my"],
                    correctAnswer: 1,
                    explanation: "Use '**me**' (objective case) after the preposition 'between.' This is a VERY common error! Never say 'between you and I'—always 'between you and me.'"
                  },
                  {
                    id: "q4",
                    question: "My sister and _____ finished our science project early.",
                    options: ["me", "I", "myself", "mine"],
                    correctAnswer: 1,
                    explanation: "Use '**I**' (subjective case) because the pronoun is part of the subject doing the action. Test: Remove 'My sister and' → 'I finished' is correct, 'me finished' is not."
                  },
                  {
                    id: "q5",
                    question: "The coach asked Mike and _____ to lead the team warm-ups.",
                    options: ["I", "me", "myself", "we"],
                    correctAnswer: 1,
                    explanation: "Use '**me**' (objective case) because the pronoun receives the action of being asked. Test: Remove 'Mike and' → 'asked me' not 'asked I.'"
                  },
                  {
                    id: "q6",
                    question: "That colorful backpack on the floor is _____, not yours.",
                    options: ["my", "me", "mine", "I"],
                    correctAnswer: 2,
                    explanation: "Use '**mine**' (possessive pronoun) to show ownership standing alone. 'My' would need a noun after it (my backpack), but 'mine' can stand by itself."
                  },
                  {
                    id: "q7",
                    question: "The principal congratulated both the students and _____ on the successful event.",
                    options: ["we", "us", "our", "ours"],
                    correctAnswer: 1,
                    explanation: "Use '**us**' (objective case) because the pronoun receives the action of being congratulated. Test: Remove 'the students and' → 'congratulated us' not 'congratulated we.'"
                  },
                  {
                    id: "q8",
                    question: "_____ students completed all the homework assignments on time.",
                    options: ["Us", "We", "Our", "Ours"],
                    correctAnswer: 1,
                    explanation: "Use '**We**' (subjective case) because the pronoun is the subject doing the action (completing). Test: 'We completed' is correct. Note: This isn't 'we students' vs. 'us students'—the pronoun IS the subject here!"
                  },
                  {
                    id: "q9",
                    question: "The prize for best essay went to David and _____.",
                    options: ["I", "me", "myself", "my"],
                    correctAnswer: 1,
                    explanation: "Use '**me**' (objective case) after the preposition 'to.' Test: Remove 'David and' → 'went to me' not 'went to I.' This is one of the most commonly tested pronoun errors!"
                  },
                  {
                    id: "q10",
                    question: "_____ and her brother practice piano together every afternoon.",
                    options: ["Her", "She", "Hers", "Herself"],
                    correctAnswer: 1,
                    explanation: "Use '**She**' (subjective case) because the pronoun is part of the compound subject doing the action (practicing). Test: Remove 'and her brother' → 'She practices' is correct, 'Her practices' is not."
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
              title: "Practice: Intensive Pronouns and Clear Antecedents",
              type: "exercise",
              content: {
                instructions: "Identify correct intensive pronoun use and fix vague pronoun references. Remember: The Mirror Test—remove the intensive pronoun and the sentence should still work!",
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
                    explanation: "Correct! '**Myself**' adds emphasis that I did it personally. Never use 'myself' as the subject! Test: Remove 'myself' → 'I completed the project' still works ✓"
                  },
                  {
                    id: "q2",
                    question: "Identify the vague pronoun problem: 'Lisa called Maria, and she said she would come over later.'",
                    options: [
                      "No vague pronouns",
                      "Both 'she' pronouns are vague",
                      "Only the first 'she' is vague",
                      "Only the second 'she' is vague"
                    ],
                    correctAnswer: 1,
                    explanation: "**Both** uses of 'she' are vague—we can't tell if Lisa or Maria is coming over, or who said it. Fix: 'Lisa called Maria and said, **\"I'll** come over later.\"'"
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
                    explanation: "Replacing 'it' with '**the dog**' makes clear WHO got tired. In the original, we don't know if the dog or cat got tired!"
                  },
                  {
                    id: "q4",
                    question: "Which sentence uses an intensive pronoun correctly?",
                    options: [
                      "The students themselves organized the entire event.",
                      "Themselves organized the event.",
                      "The event was organized by themselves.",
                      "Themselves and I organized it."
                    ],
                    correctAnswer: 0,
                    explanation: "'**Themselves**' correctly emphasizes that the students (not teachers or parents) organized the event. Test: Remove 'themselves' → still makes sense ✓"
                  },
                  {
                    id: "q5",
                    question: "Fix the vague pronoun: 'In the news, they said it would rain tomorrow.' What is the main problem?",
                    options: [
                      "No problem",
                      "'They' has no clear antecedent",
                      "'It' is used incorrectly",
                      "Both pronouns are wrong"
                    ],
                    correctAnswer: 1,
                    explanation: "Who is '**they**'? Better: '**The meteorologist** said it would rain' or '**The forecast** predicts rain.' Always identify WHO 'they' refers to!"
                  },
                  {
                    id: "q6",
                    question: "The President _____ delivered the important speech to the nation.",
                    options: ["himself", "hisself", "themselves", "itself"],
                    correctAnswer: 0,
                    explanation: "Use '**himself**' (intensive pronoun) to emphasize the President personally delivered it. Note: 'hisself' is NOT a word—always use 'himself'!"
                  },
                  {
                    id: "q7",
                    question: "Which sentence has a vague pronoun that needs fixing?",
                    options: [
                      "Maria told her mom that she needed a break.",
                      "The teacher herself graded all the tests.",
                      "I finished my homework before dinner.",
                      "They went to the movies together."
                    ],
                    correctAnswer: 0,
                    explanation: "'**She**' is vague—who needs a break, Maria or her mom? Fix: 'Maria told her mom, **\"I need a break.\"**' or 'Maria said **she herself** needed a break.'"
                  },
                  {
                    id: "q8",
                    question: "Which is the correct use of an intensive pronoun?",
                    options: [
                      "Myself and Sarah went shopping.",
                      "Sarah went shopping with myself.",
                      "Sarah and I ourselves went shopping.",
                      "Sarah herself went shopping without help."
                    ],
                    correctAnswer: 3,
                    explanation: "'**Herself**' correctly emphasizes Sarah did it alone. Options A & B misuse 'myself' as subject/object. Option C is grammatically correct but awkward—better: 'Sarah and I went shopping ourselves.'"
                  },
                  {
                    id: "q9",
                    question: "Fix this vague pronoun: 'When I put the book on the shelf, it broke.' What's unclear?",
                    options: [
                      "Nothing is unclear",
                      "Did the book or the shelf break?",
                      "Who put the book there?",
                      "When did this happen?"
                    ],
                    correctAnswer: 1,
                    explanation: "'**It**' is vague—did the book or shelf break? Fix: 'When I put the book on the shelf, **the shelf broke**' or '**the book's spine broke**.'"
                  },
                  {
                    id: "q10",
                    question: "The team members _____ raised all the money for the trip through hard work.",
                    options: ["theirselves", "themselves", "themself", "theyselves"],
                    correctAnswer: 1,
                    explanation: "'**Themselves**' is correct (intensive pronoun emphasizing the team did it). Note: 'theirselves,' 'themself,' and 'theyselves' are NOT words!"
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
                instructions: "Choose the correctly punctuated sentence or identify whether commas are needed. Remember the And/Reverse Test for coordinate adjectives!",
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
                    explanation: "The appositive '**Mr. Smith**' renames 'the principal' and must be set off with commas on **both sides**. Test: Remove 'Mr. Smith' → sentence still works!"
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
                    explanation: "**Yes!** And Test: 'long **and** exhausting' ✓ | Reverse Test: 'exhausting, long' ✓. Both work, so they're coordinate. Correct: 'It was a long**,** exhausting journey.'"
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
                    explanation: "The clause '**which won five awards**' is non-essential (parenthetical) and must have commas on **both sides**. Test: Remove it → 'The movie was amazing' still works!"
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
                    explanation: "**No comma needed.** And Test: 'beautiful **and** silver' sounds awkward ✗ | 'Beautiful' describes 'silver bracelet' as a **unit**, not silver by itself. Not coordinate!"
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
                    explanation: "**Dashes** create the most emphasis and excitement! All three *could* work, but dashes dramatically highlight that YOUR BEST FRIEND won!"
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
                    explanation: "Correct! And Test: 'bright **and** sunny day' ✓ | Reverse Test: 'sunny, bright day' ✓. They're coordinate, so comma goes **between** them."
                  },
                  {
                    id: "q7",
                    question: "Which sentence correctly punctuates the parenthetical element?",
                    options: [
                      "My sister who lives in New York visits often.",
                      "My sister, who lives in New York, visits often.",
                      "My sister who, lives in New York visits often.",
                      "My sister, who lives in New York visits often."
                    ],
                    correctAnswer: 1,
                    explanation: "'**Who lives in New York**' is extra information (parenthetical). Commas on **both sides**! Test: 'My sister visits often' → still makes sense without the extra info."
                  },
                  {
                    id: "q8",
                    question: "Do these adjectives need a comma? 'The old stone bridge collapsed.'",
                    options: [
                      "Yes - coordinate adjectives need a comma",
                      "No - these are not coordinate adjectives",
                      "Use a dash instead",
                      "Use parentheses instead"
                    ],
                    correctAnswer: 1,
                    explanation: "**No comma.** And Test: 'old **and** stone bridge' sounds wrong ✗ | 'Old' modifies 'stone bridge' as a unit. Not coordinate! 'Stone' is part of what makes it a bridge."
                  },
                  {
                    id: "q9",
                    question: "Which punctuation mark should be used? 'My favorite book ___ the one with the blue cover ___ is missing.'",
                    options: [
                      "Commas on both sides",
                      "Parentheses on both sides",
                      "Dashes on both sides",
                      "All three could work depending on emphasis"
                    ],
                    correctAnswer: 3,
                    explanation: "**All three work!** Commas (neutral), Parentheses (extra aside), or Dashes (emphasis). Choose based on how much attention you want to draw to 'the one with the blue cover.'"
                  },
                  {
                    id: "q10",
                    question: "Do these adjectives need a comma? 'She wore a warm fuzzy sweater.'",
                    options: [
                      "Yes - they are coordinate adjectives",
                      "No - they are not coordinate adjectives",
                      "Sometimes yes, sometimes no",
                      "Use a semicolon"
                    ],
                    correctAnswer: 0,
                    explanation: "**Yes!** And Test: 'warm **and** fuzzy sweater' ✓ (common phrase!) | Reverse Test: 'fuzzy, warm sweater' ✓. Both work, so they're coordinate. Correct: 'warm**,** fuzzy sweater.'"
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
                    explanation: "Adding '**When**' creates a dependent clause, making it a complex sentence. Option A is compound (two independent clauses)."
                  },
                  {
                    id: "q7",
                    question: "What type of sentence is this? 'Although she was tired, Maria finished her homework.'",
                    options: ["Simple", "Compound", "Complex", "Fragment"],
                    correctAnswer: 2,
                    explanation: "This is **complex**. Dependent clause '**Although** she was tired' + independent clause 'Maria finished her homework.' 'Although' is an AAAWWUBBIS word!"
                  },
                  {
                    id: "q8",
                    question: "Which sentence combines these correctly as a complex sentence? 'The movie started. We arrived.'",
                    options: [
                      "The movie started, and we arrived.",
                      "Before we arrived, the movie started.",
                      "The movie started; we arrived.",
                      "The movie started we arrived."
                    ],
                    correctAnswer: 1,
                    explanation: "'**Before** we arrived' creates a dependent clause (AAAWWUBBIS!), making it complex. Option A is compound, Option C uses a semicolon (compound), Option D is a run-on."
                  },
                  {
                    id: "q9",
                    question: "What type of sentence is this? 'The students studied hard, yet some still failed the test.'",
                    options: ["Simple", "Compound", "Complex", "Run-on"],
                    correctAnswer: 1,
                    explanation: "This is **compound**. Two independent clauses: 'The students studied hard' + 'some still failed the test,' joined by comma + '**yet**' (FANBOYS)."
                  },
                  {
                    id: "q10",
                    question: "Which sentence needs a comma? Select the correctly punctuated version.",
                    options: [
                      "After the game ended we went home.",
                      "After the game ended, we went home.",
                      "After, the game ended we went home.",
                      "After the game, ended we went home."
                    ],
                    correctAnswer: 1,
                    explanation: "When a dependent clause (starting with **After**, an AAAWWUBBIS word) comes FIRST, put a comma after it! '**After the game ended,** we went home.'"
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
                    explanation: "Correct! '**Looking under the couch**' clearly modifies 'I' and is properly placed at the beginning of the sentence."
                  },
                  {
                    id: "q7",
                    question: "Which sentence avoids a pronoun shift?",
                    options: [
                      "If one wants success, you must work hard.",
                      "If one wants success, one must work hard.",
                      "If one wants success, they must work hard.",
                      "If one wants success, we must work hard."
                    ],
                    correctAnswer: 1,
                    explanation: "Correct! Stays consistent with '**one**' throughout. Don't mix 'one' with 'you,' 'they,' or 'we.'"
                  },
                  {
                    id: "q8",
                    question: "Which sentence fixes the misplaced modifier? 'Running late, the bus had already left.'",
                    options: [
                      "The bus running late had already left.",
                      "Running late, I missed the bus.",
                      "The bus had already left running late.",
                      "Already left the bus running late."
                    ],
                    correctAnswer: 1,
                    explanation: "**I** was running late, not the bus! The modifier 'Running late' should be next to who was late. Fixed: '**Running late, I** missed the bus.'"
                  },
                  {
                    id: "q9",
                    question: "Identify the error: 'When we practice daily, you will see improvement.'",
                    options: [
                      "No error",
                      "Pronoun shift from 'we' (first person plural) to 'you' (second person)",
                      "Misplaced modifier",
                      "Missing comma"
                    ],
                    correctAnswer: 1,
                    explanation: "**Pronoun shift!** Shifts from '**we**' (first person) to '**you**' (second person). Fix: 'When we practice daily, **we** will see improvement.'"
                  },
                  {
                    id: "q10",
                    question: "Which sentence has NO misplaced modifier?",
                    options: [
                      "Covered in mud, I hosed off the dog.",
                      "I hosed off the dog covered in mud.",
                      "The dog I hosed off covered in mud.",
                      "Covered in mud hosed off the dog I."
                    ],
                    correctAnswer: 1,
                    explanation: "Correct! '**The dog**' was covered in mud, and 'covered in mud' is placed right next to 'dog.' Option A makes it sound like **I** was covered in mud!"
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
        },
        {
          id: "reading-3",
          title: "Chapter 3: Citing Textual Evidence",
          lessons: [
            {
              id: "reading-3-1",
              title: "The Golden Rule: Prove Your Answers",
              type: "lesson",
              content: {
                introduction: "This is the 'Golden Rule' of 6th-grade reading: You can no longer just give an answer; you must PROVE it with evidence from the text. This is the foundation of all California Grade 6 reading standards.",
                explanation: "**Three Types of Textual Evidence:**\n\n**1. Explicit Evidence (Direct Quotes)**\nFinding exactly what the text says:\n- The author directly states the information\n- You can point to specific words or sentences\n- Example: \"The author states that 'the ocean covers 71% of Earth's surface.'\"\n\n**2. Inferences (Logical Conclusions)**\nDrawing conclusions based on:\n- Text clues + What you already know = Inference\n- The author suggests but doesn't directly state\n- Example: If a character is shivering and rubbing their hands, you can infer it's cold\n\n**3. Quote Integration (Smooth Citation)**\nLearning to smoothly incorporate quotes into your own sentences:\n\n**Poor Integration:**\n\"The story is about courage. 'He faced his fears.'\" (choppy)\n\n**Good Integration:**\nThe story demonstrates courage when the narrator explains that \"he faced his fears\" despite being terrified.\n\n---\n\n**How to Cite Evidence:**\n\n**Step 1: Make Your Point**\nState your answer or claim clearly.\n\n**Step 2: Introduce the Evidence**\nUse phrases like:\n- According to the text...\n- The author states that...\n- For example, the passage says...\n- As shown in paragraph 3...\n\n**Step 3: Provide the Quote**\nUse quotation marks around exact words.\n\n**Step 4: Explain the Connection**\nShow how the evidence supports your point.\n\n**Example:**\nThe main character shows bravery throughout the story. **According to the text**, when faced with danger, \"she stood her ground and refused to back down.\" **This demonstrates** that she chose courage over fear, even when it would have been easier to run away.",
                examples: [
                  {
                    text: "Question: How does the author feel about recycling?\n\nWeak Answer: The author likes recycling.\n\nStrong Answer: The author strongly supports recycling. According to the text, \"Recycling is one of the most important actions individuals can take to protect the environment.\" This shows the author believes recycling is not just helpful, but essential.",
                    explanation: "The strong answer makes a claim, provides a direct quote, and explains how the evidence supports the point."
                  },
                  {
                    text: "Using Inference:\n\nPassage: 'Marcus slammed his locker and stormed down the hallway without saying goodbye to anyone.'\n\nInference: We can infer that Marcus is angry or upset. The text clues are 'slammed' and 'stormed,' which are actions associated with anger. Additionally, ignoring friends suggests he's too upset to be social.",
                    explanation: "This combines text evidence (specific words) with logical reasoning to make an inference."
                  }
                ]
              }
            },
            {
              id: "reading-3-2",
              title: "Practice: Citing Evidence",
              type: "exercise",
              content: {
                instructions: "Read the passage and answer questions by citing textual evidence.",
                passage: "The California redwood trees are the tallest living things on Earth, with some reaching heights of over 350 feet. These magnificent giants can live for more than 2,000 years. Redwoods thrive in the foggy coastal regions of Northern California, where the moisture from fog provides nearly 40% of their water needs. Sadly, only 5% of the original old-growth redwood forests remain today due to logging in the 1800s and 1900s. Conservation efforts are now working to protect these remaining ancient forests for future generations.",
                questions: [
                  {
                    id: "q1",
                    question: "Which quote provides explicit evidence that redwoods are extremely tall?",
                    options: [
                      "\"These magnificent giants can live for more than 2,000 years.\"",
                      "\"...some reaching heights of over 350 feet.\"",
                      "\"Redwoods thrive in the foggy coastal regions...\"",
                      "\"Conservation efforts are now working...\""
                    ],
                    correctAnswer: 1,
                    explanation: "This quote directly states their height (350 feet), providing explicit evidence of how tall they are."
                  },
                  {
                    id: "q2",
                    question: "Based on the passage, what can you INFER about why redwoods grow in foggy regions?",
                    options: [
                      "They like cold weather",
                      "They need the moisture that fog provides",
                      "Fog protects them from logging",
                      "Other trees can't grow there"
                    ],
                    correctAnswer: 1,
                    explanation: "The text states fog provides 40% of their water needs, so we can infer they grow there because they need that moisture."
                  },
                  {
                    id: "q3",
                    question: "Which statement BEST integrates evidence about redwood conservation?",
                    options: [
                      "Conservation is important. 'Only 5% remain.'",
                      "Conservation efforts are protecting redwoods because the passage says so.",
                      "Due to extensive logging, 'only 5% of the original old-growth redwood forests remain today,' making conservation efforts critical.",
                      "Redwoods need protection and conservation efforts are working."
                    ],
                    correctAnswer: 2,
                    explanation: "This option smoothly integrates the quote, provides context (logging), and explains why conservation is important."
                  },
                  {
                    id: "q4",
                    question: "What evidence supports the idea that redwoods are ancient trees?",
                    options: [
                      "They are the tallest living things",
                      "They can live for more than 2,000 years",
                      "They grow in Northern California",
                      "Fog provides their water"
                    ],
                    correctAnswer: 1,
                    explanation: "Living for over 2,000 years is explicit evidence that makes them ancient. This directly supports the claim."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "reading-4",
          title: "Chapter 4: Theme vs. Central Idea",
          lessons: [
            {
              id: "reading-4-1",
              title: "Theme in Literature vs. Central Idea in Nonfiction",
              type: "lesson",
              content: {
                introduction: "California standards distinguish between 'summary' and 'analysis.' Understanding theme (in literature) and central idea (in nonfiction) is crucial for Grade 6 reading success.",
                explanation: "**Theme (For Literature/Fiction)**\n\nA theme is the underlying message, lesson, or moral of a story.\n\n**Key Points:**\n- Theme is NOT the topic (friendship, courage, family)\n- Theme is a complete statement about life or human nature\n- One story can have multiple themes\n- Theme is what the author wants you to learn or think about\n\n**How to Find Theme:**\n1. What does the main character learn?\n2. How do they change?\n3. What message is the author sending?\n4. What statement about life does this story make?\n\n**Examples:**\n- ❌ Topic: \"friendship\" (too simple)\n- ✓ Theme: \"True friendship requires sacrifice and loyalty.\"\n\n- ❌ Topic: \"courage\"\n- ✓ Theme: \"Courage means doing what's right even when you're afraid.\"\n\n---\n\n**Central Idea (For Informational/Nonfiction)**\n\nThe central idea is the main point the author is making about the topic.\n\n**Key Points:**\n- What is the author's main point?\n- What do all the details support?\n- Usually found in the introduction or conclusion\n- Supported by facts, examples, and evidence\n\n**How to Find Central Idea:**\n1. What is the topic?\n2. What is the author saying about that topic?\n3. What do most paragraphs discuss?\n4. What point do all the details support?\n\n**Example:**\n- ❌ Topic: \"Recycling\" (too simple)\n- ✓ Central Idea: \"Recycling is essential for reducing waste and protecting the environment for future generations.\"\n\n---\n\n**Objective Summary (Required for Both!)**\n\nAn objective summary recaps the text WITHOUT adding opinions.\n\n**Rules:**\n- ❌ No \"I think\" or \"I feel\"\n- ❌ No personal opinions\n- ✓ Only main points and key details\n- ✓ Keep it brief (3-5 sentences)\n- ✓ Use your own words (don't just copy)\n\n**Summary Structure:**\n1. State the title and author\n2. Identify the main topic/theme/central idea\n3. Include only the most important details\n4. Explain the outcome or conclusion\n\n**Weak Summary:**\n\"This story is really good. I liked when the character won. It was exciting.\"\n\n**Strong Summary:**\n\"In 'The Race,' by Maria Santos, a young runner overcomes self-doubt to compete in a championship. Through dedication and support from her coach, she learns that true victory comes from personal growth, not just winning.\"",
                examples: [
                  {
                    text: "Story: A student struggles with math but refuses to give up. After months of extra practice and asking for help, she finally understands and passes the test.\n\nWeak Theme: 'math' or 'school'\nStrong Theme: 'Persistence and asking for help lead to success.'",
                    explanation: "The theme is a complete statement about life (persistence pays off), not just the topic (math)."
                  },
                  {
                    text: "Article: Discusses how bees pollinate flowers, how their populations are declining, and why this threatens food supplies.\n\nWeak Central Idea: 'bees'\nStrong Central Idea: 'Declining bee populations threaten our food supply because bees are essential pollinators.'",
                    explanation: "The central idea states what the author is arguing about bees, not just the topic."
                  }
                ]
              }
            },
            {
              id: "reading-4-2",
              title: "Practice: Theme and Central Idea",
              type: "exercise",
              content: {
                instructions: "Identify themes, central ideas, and distinguish between objective and subjective statements.",
                questions: [
                  {
                    id: "q1",
                    question: "Which is a complete THEME statement (not just a topic)?",
                    options: [
                      "The story is about honesty.",
                      "Honesty is important.",
                      "Honesty, even when difficult, builds trust and strengthens relationships.",
                      "The character learns about honesty."
                    ],
                    correctAnswer: 2,
                    explanation: "This is a complete theme statement - it expresses a full message about life and human nature, not just the topic."
                  },
                  {
                    id: "q2",
                    passage: "An article explains that exercising regularly improves heart health, boosts mood, reduces stress, and increases energy levels. The author emphasizes that just 30 minutes a day can make a significant difference.",
                    question: "What is the CENTRAL IDEA of this article?",
                    options: [
                      "Exercise",
                      "Regular exercise provides numerous health benefits and requires only 30 minutes daily.",
                      "Exercise is fun.",
                      "Heart health is important."
                    ],
                    correctAnswer: 1,
                    explanation: "This central idea states the main point about exercise (it's beneficial and manageable), not just the topic."
                  },
                  {
                    id: "q3",
                    question: "Which is an OBJECTIVE summary statement (no opinions)?",
                    options: [
                      "I think this story is really interesting and exciting.",
                      "The best part was when the character won the race.",
                      "The protagonist overcomes obstacles to achieve her goal.",
                      "This story is better than the last one we read."
                    ],
                    correctAnswer: 2,
                    explanation: "This is objective - it states facts about the story without personal opinions or 'I think' statements."
                  },
                  {
                    id: "q4",
                    passage: "A short story follows a girl who moves to a new school. She feels lonely at first but decides to join the soccer team. By working together with her teammates and supporting each other, she makes lasting friendships.",
                    question: "What is the THEME of this story?",
                    options: [
                      "Soccer",
                      "Moving to a new school",
                      "Taking risks and being open to new experiences can lead to meaningful connections.",
                      "The girl joins a soccer team."
                    ],
                    correctAnswer: 2,
                    explanation: "This theme expresses the life lesson - that taking risks (joining the team) leads to connections (friendships)."
                  },
                  {
                    id: "q5",
                    question: "Which summary is OBJECTIVE (no opinions)?",
                    options: [
                      "The article was boring and too long.",
                      "I feel like the author made good points about recycling.",
                      "The author argues that recycling reduces waste and conserves natural resources.",
                      "This is the most important article I've ever read."
                    ],
                    correctAnswer: 2,
                    explanation: "This states what the author argues without adding personal feelings or opinions."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "reading-5",
          title: "Chapter 5: Plot Structure and Text Organization",
          lessons: [
            {
              id: "reading-5-1",
              title: "Understanding How Stories and Texts Are Built",
              type: "lesson",
              content: {
                introduction: "Students must understand how a story or article is 'built.' For fiction, this means understanding plot stages. For nonfiction, it means recognizing text structures.",
                explanation: "**FICTION: Plot Structure**\n\nEvery story follows a pattern called the plot diagram:\n\n**1. Exposition (Beginning)**\n- Introduces characters, setting, and situation\n- Background information\n- Sets up the story\n- Example: \"Meet the main character in their normal world\"\n\n**2. Rising Action (Conflict Builds)**\n- Problems and challenges arise\n- Tension increases\n- Series of events that complicate the situation\n- Example: \"Character faces obstacles\"\n\n**3. Climax (Turning Point)**\n- The most intense moment\n- The peak of the action\n- Where the main conflict reaches its highest point\n- Usually the most exciting part\n- Example: \"The big showdown or decision\"\n\n**4. Falling Action (After the Climax)**\n- Events after the climax\n- Tension decreases\n- Loose ends start to tie up\n- Example: \"Consequences of the climax\"\n\n**5. Resolution (End)**\n- Conflicts are resolved\n- Story concludes\n- Shows the new normal\n- Example: \"How things turned out\"\n\n---\n\n**NONFICTION: Text Structures**\n\nNonfiction texts are organized in specific ways to present information:\n\n**1. Chronological Order (Time Order)**\n- Events in the order they happened\n- Uses time words: first, next, then, finally, before, after\n- Common in: biographies, history, process explanations\n- Example: \"First, mix the ingredients. Then, bake for 30 minutes.\"\n\n**2. Cause and Effect**\n- Shows why something happened (cause) and what happened as a result (effect)\n- Signal words: because, since, as a result, therefore, consequently, leads to\n- Common in: science, history, social studies\n- Example: \"Because it rained heavily, the game was postponed.\"\n\n**3. Compare and Contrast**\n- Shows similarities and differences\n- Signal words: similarly, however, on the other hand, both, unlike, while, whereas\n- Common in: articles comparing topics\n- Example: \"While both mammals, dolphins live in water whereas dogs live on land.\"\n\n**4. Problem and Solution**\n- Presents a problem and explains how it was or could be solved\n- Signal words: problem, solution, solve, challenge, resolve, address\n- Common in: persuasive texts, proposals\n- Example: \"The problem of littering can be solved through education and more trash cans.\"\n\n**5. Description (Main Idea and Details)**\n- Describes a topic with supporting details\n- Signal words: for example, such as, characteristics, features\n- Common in: encyclopedia entries, informational articles\n- Example: \"Dolphins are intelligent. For example, they can learn tricks and communicate.\"",
                examples: [
                  {
                    text: "Plot Example:\nExposition: Sarah is nervous about her first day at a new school.\nRising Action: She can't find her classes, drops her lunch, and feels invisible.\nClimax: She decides to audition for the school play despite her fears.\nFalling Action: She makes the cast and starts making friends.\nResolution: Sarah realizes taking risks helped her find where she belongs.",
                    explanation: "This shows all five plot stages in a simple story arc."
                  },
                  {
                    text: "Text Structure Example:\n'Because plastic takes hundreds of years to decompose, it accumulates in oceans. As a result, marine animals often mistake it for food, which leads to injury or death.'\n\nStructure: Cause and Effect (plastic doesn't decompose → accumulates → animals harmed)",
                    explanation: "The signal words 'because,' 'as a result,' and 'leads to' indicate cause and effect structure."
                  }
                ]
              }
            },
            {
              id: "reading-5-2",
              title: "Practice: Plot and Text Structure",
              type: "exercise",
              content: {
                instructions: "Identify plot stages and text structures in the following passages.",
                questions: [
                  {
                    id: "q1",
                    passage: "In a small village, a young inventor named Alex dreamed of creating a flying machine. Everyone said it was impossible.",
                    question: "Which plot stage is this?",
                    options: ["Exposition", "Rising Action", "Climax", "Resolution"],
                    correctAnswer: 0,
                    explanation: "This is exposition - it introduces the character (Alex), setting (small village), and situation (wants to build a flying machine)."
                  },
                  {
                    id: "q2",
                    passage: "Alex's machine crashed three times. The village council threatened to ban his experiments. His materials were running out, and time was running short.",
                    question: "Which plot stage is this?",
                    options: ["Exposition", "Rising Action", "Climax", "Falling Action"],
                    correctAnswer: 1,
                    explanation: "This is rising action - problems are building up (crashes, council opposition, running out of supplies), increasing tension."
                  },
                  {
                    id: "q3",
                    passage: "Global warming causes ice caps to melt. As a result, sea levels rise, which leads to coastal flooding. Therefore, many island nations face the threat of disappearing underwater.",
                    question: "What text structure is used here?",
                    options: ["Chronological Order", "Cause and Effect", "Compare and Contrast", "Problem and Solution"],
                    correctAnswer: 1,
                    explanation: "Signal words 'causes,' 'as a result,' 'leads to,' and 'therefore' indicate cause and effect structure."
                  },
                  {
                    id: "q4",
                    passage: "While both reptiles, snakes and lizards have some key differences. Snakes have no legs and move by slithering, whereas most lizards have four legs. However, both are cold-blooded and lay eggs.",
                    question: "What text structure is used here?",
                    options: ["Chronological Order", "Cause and Effect", "Compare and Contrast", "Description"],
                    correctAnswer: 2,
                    explanation: "Signal words 'both,' 'differences,' 'whereas,' and 'however' indicate compare and contrast structure."
                  },
                  {
                    id: "q5",
                    passage: "Standing at the edge of the cliff, Alex pushed the button. The machine sputtered, roared to life, and lifted off the ground. The crowd below gasped as he soared above the village square.",
                    question: "Which plot stage is this?",
                    options: ["Exposition", "Rising Action", "Climax", "Resolution"],
                    correctAnswer: 2,
                    explanation: "This is the climax - the most intense moment when the machine finally works and Alex achieves flight."
                  },
                  {
                    id: "q6",
                    passage: "Many schools struggle with food waste. One solution is to implement a share table where students can place unwanted items for others to take. Another approach is to teach students about portion sizes.",
                    question: "What text structure is used here?",
                    options: ["Chronological Order", "Cause and Effect", "Compare and Contrast", "Problem and Solution"],
                    correctAnswer: 3,
                    explanation: "The passage presents a problem (food waste) and offers solutions (share table, teaching), using problem-solution structure."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "reading-6",
          title: "Chapter 6: Point of View and Author's Purpose",
          lessons: [
            {
              id: "reading-6-1",
              title: "Understanding Perspective and Purpose",
              type: "lesson",
              content: {
                introduction: "In 6th grade, focus shifts to understanding HOW the narrator's perspective shapes the story and WHY the author wrote the text. These are critical analytical skills.",
                explanation: "**POINT OF VIEW (POV) - Who Tells the Story?**\n\n**1. First Person POV**\n- Narrator is a CHARACTER in the story\n- Uses pronouns: I, me, my, we, us, our\n- Readers only know what the narrator knows\n- We see their thoughts and feelings directly\n- Example: \"I walked into the classroom and saw my best friend.\"\n\n**Strengths:** Personal, intimate, emotional connection\n**Limitations:** Can only know one person's thoughts\n\n**2. Third Person Limited POV**\n- Narrator is OUTSIDE the story\n- Uses pronouns: he, she, it, they, them\n- Knows the thoughts and feelings of ONLY ONE character\n- Like a camera following one person\n- Example: \"Sarah walked into the classroom. She felt nervous.\"\n\n**Strengths:** More objective than first person, focuses on one character\n**Limitations:** Can't see into other characters' minds\n\n**3. Third Person Omniscient POV**\n- Narrator is OUTSIDE the story\n- Uses pronouns: he, she, it, they, them\n- Knows EVERYONE'S thoughts and feelings\n- Like an all-knowing observer\n- Can move between characters' perspectives\n- Example: \"Sarah felt nervous as she entered. Across the room, Marcus hoped she would sit next to him.\"\n\n**Strengths:** Can show multiple perspectives, full picture\n**Limitations:** Less intimate, more distant\n\n**Why POV Matters:**\n- POV shapes what information readers receive\n- It affects how we understand characters and events\n- Authors choose POV strategically to control what readers know\n\n---\n\n**AUTHOR'S PURPOSE - Why Did They Write This?**\n\nRemember P.I.E.:\n\n**P = Persuade**\n- Goal: Convince you to believe or do something\n- Techniques: Strong opinions, emotional language, arguments, evidence\n- Common in: Advertisements, opinion articles, speeches, reviews\n- Example: \"You should recycle to save the planet!\"\n- Signal words: should, must, best, important, believe\n\n**I = Inform**\n- Goal: Teach you facts or explain something\n- Techniques: Facts, definitions, explanations, examples\n- Common in: Textbooks, news articles, instructions, encyclopedias\n- Example: \"Recycling reduces waste by reusing materials.\"\n- Signal words: facts, research shows, according to, studies indicate\n\n**E = Entertain**\n- Goal: Engage you, make you enjoy reading\n- Techniques: Humor, suspense, interesting characters, dialogue\n- Common in: Stories, novels, poems, comics\n- Example: A funny story about a dog who thinks he's a cat\n- Signal words: Descriptive language, dialogue, action\n\n**Note:** Some texts have MULTIPLE purposes!\n- A story might entertain AND teach a lesson\n- An article might inform AND persuade\n\n**How POV and Purpose Work Together:**\nAuthors choose POV based on their purpose:\n- First person creates emotional connection (good for persuading)\n- Third person omniscient provides complete information (good for informing)\n- First person makes stories feel personal (good for entertaining)",
                examples: [
                  {
                    text: "First Person: 'I couldn't believe what I was seeing. My heart raced as I opened the mysterious package.'\n\nvs.\n\nThird Person Omniscient: 'Sarah couldn't believe what she was seeing. Upstairs, her brother knew exactly what was in the package and waited nervously for her reaction.'",
                    explanation: "First person limits us to Sarah's perspective. Omniscient lets us know what both characters think."
                  },
                  {
                    text: "Persuade: 'Schools must ban junk food! Healthy students learn better, and it's our responsibility to make good choices for kids.'\n\nvs.\n\nInform: 'Studies show that students who eat nutritious lunches score 10% higher on afternoon tests than those who eat high-sugar foods.'",
                    explanation: "Persuasive text uses strong opinions and 'must.' Informative text presents facts and research objectively."
                  }
                ]
              }
            },
            {
              id: "reading-6-2",
              title: "Practice: POV and Author's Purpose",
              type: "exercise",
              content: {
                instructions: "Identify the point of view and author's purpose in each passage.",
                questions: [
                  {
                    id: "q1",
                    passage: "I grabbed my backpack and ran out the door. Mom was calling my name, but I was already late for the bus. I couldn't believe I'd overslept again!",
                    question: "What is the point of view?",
                    options: ["First Person", "Third Person Limited", "Third Person Omniscient", "Second Person"],
                    correctAnswer: 0,
                    explanation: "Uses 'I,' 'my,' and 'me' - the narrator is a character in the story. This is first person POV."
                  },
                  {
                    id: "q2",
                    passage: "Marcus looked at the test nervously. Across the room, his teacher smiled, confident that her students were well-prepared. Meanwhile, Sarah in the back row felt completely ready.",
                    question: "What is the point of view?",
                    options: ["First Person", "Third Person Limited", "Third Person Omniscient", "Second Person"],
                    correctAnswer: 2,
                    explanation: "The narrator knows the thoughts of multiple characters (Marcus, teacher, Sarah). This is third person omniscient."
                  },
                  {
                    id: "q3",
                    passage: "You absolutely must try this new restaurant! The food is incredible, the service is perfect, and the prices can't be beat. Don't miss out - make a reservation today!",
                    question: "What is the author's primary purpose?",
                    options: ["To Persuade", "To Inform", "To Entertain", "To Describe"],
                    correctAnswer: 0,
                    explanation: "Strong language like 'must,' 'incredible,' 'can't be beat,' and 'don't miss out' show the author is trying to persuade you to visit."
                  },
                  {
                    id: "q4",
                    passage: "Photosynthesis is the process by which plants convert sunlight into energy. During this process, plants take in carbon dioxide and water, and produce oxygen and glucose. This occurs primarily in the leaves.",
                    question: "What is the author's primary purpose?",
                    options: ["To Persuade", "To Inform", "To Entertain", "To Criticize"],
                    correctAnswer: 1,
                    explanation: "The passage presents factual information about photosynthesis in an objective way. The purpose is to inform/teach."
                  },
                  {
                    id: "q5",
                    passage: "Emma walked slowly through the haunted house. She felt her hands trembling. Every creak made her jump. She wondered if coming here was a mistake.",
                    question: "What is the point of view?",
                    options: ["First Person", "Third Person Limited", "Third Person Omniscient", "Second Person"],
                    correctAnswer: 1,
                    explanation: "Uses 'she' and 'her,' and we only know Emma's thoughts and feelings - no one else's. This is third person limited."
                  },
                  {
                    id: "q6",
                    passage: "Once upon a time, in a kingdom far away, there lived a dragon who was afraid of heights. This made flying quite difficult, and it led to many hilarious adventures!",
                    question: "What is the author's primary purpose?",
                    options: ["To Persuade", "To Inform", "To Entertain", "To Warn"],
                    correctAnswer: 2,
                    explanation: "A funny story about a dragon afraid of heights is meant to entertain readers with humor and an amusing premise."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "reading-7",
          title: "Chapter 7: Close Reading Strategy",
          lessons: [
            {
              id: "reading-7-1",
              title: "The Three-Pass Method for Difficult Texts",
              type: "lesson",
              content: {
                introduction: "To master Grade 6 reading standards, use the 'Close Reading' method with three passes through difficult texts. Each read has a different focus, building deeper understanding.",
                explanation: "**THE CLOSE READING METHOD: Three Passes**\n\nWhen facing a challenging text, don't try to understand everything at once. Read it THREE times, each with a different purpose:\n\n---\n\n**FIRST READ: What is the text saying?**\n\n**Goal:** Understand the basic plot or facts\n\n**Focus on:**\n- Who are the main people/characters?\n- What happens? (or What is this about?)\n- Where and when does it take place?\n- What is the basic sequence of events?\n\n**Strategy:**\n- Read at a normal pace\n- Don't stop for unknown words (yet)\n- Get the big picture first\n- Ask: \"What is this mostly about?\"\n\n**Mark:** Circle names, places, and unfamiliar words\n\n---\n\n**SECOND READ: How does the text work?**\n\n**Goal:** Analyze the author's craft and techniques\n\n**Focus on:**\n- Vocabulary: What do unfamiliar words mean? (Use context clues!)\n- Structure: How is it organized? (Plot stages or text structure)\n- Point of View: Who's telling the story? What perspective?\n- Author's choices: Why did they use this word? This order?\n\n**Strategy:**\n- Read more slowly\n- Look up or figure out unknown words\n- Notice how sentences connect\n- Identify text structure or plot stages\n- Ask: \"How did the author build this?\"\n\n**Mark:** Underline strong words, note structure, identify POV\n\n---\n\n**THIRD READ: What does the text mean?**\n\n**Goal:** Interpret deeper meaning and make connections\n\n**Focus on:**\n- Theme or Central Idea: What's the deeper message?\n- Author's Purpose: Why did they write this?\n- Connections: How does this relate to your life? Other texts? The world?\n- Inference: What is suggested but not directly stated?\n- Evidence: What quotes support your interpretation?\n\n**Strategy:**\n- Read thoughtfully, pausing to think\n- Ask \"why\" questions\n- Make connections beyond the text\n- Form opinions backed by evidence\n- Ask: \"What does this really mean?\"\n\n**Mark:** Highlight key passages, write connections in margins\n\n---\n\n**EXAMPLE: Three Passes in Action**\n\nPassage: \"The old lighthouse stood alone on the cliff, its light extinguished long ago. Emma climbed the crumbling stairs, each step echoing in the empty tower. At the top, she found her grandmother's journal, filled with stories of ships she'd guided safely to shore.\"\n\n**First Read:** Emma goes to an old lighthouse and finds her grandmother's journal.\n\n**Second Read:** \n- Vocabulary: 'extinguished' = put out; 'crumbling' = falling apart\n- Structure: Description → action → discovery\n- POV: Third person limited (Emma's perspective)\n- Word choice: 'alone,' 'empty,' 'old' create lonely atmosphere\n\n**Third Read:**\n- Theme: Connecting with the past through family history\n- Purpose: To evoke feeling of nostalgia and discovery\n- Connection: Like finding old family photos\n- Inference: Grandma was a lighthouse keeper; Emma is discovering her legacy\n- The lighthouse represents the past - once useful, now abandoned but still meaningful",
                examples: [
                  {
                    text: "First Read: Just understand WHO, WHAT, WHERE, WHEN\nSecond Read: Analyze HOW the author tells it\nThird Read: Interpret WHY it matters and what it means",
                    explanation: "Each read builds on the previous one, creating deeper understanding layer by layer."
                  },
                  {
                    text: "DON'T do this: Try to answer all questions after one quick read\nDO this: Read three times, each with a specific purpose, then answer questions with full understanding",
                    explanation: "Multiple focused reads lead to better comprehension than one rushed read."
                  }
                ]
              }
            },
            {
              id: "reading-7-2",
              title: "Practice: Close Reading",
              type: "exercise",
              content: {
                instructions: "Apply the three-pass method to answer questions about this passage at different levels.",
                passage: "The library was Maria's sanctuary. While other students rushed through the doors eager to escape, she lingered among the shelves, running her fingers along worn spines. Each book held a universe waiting to be discovered. Her friends couldn't understand why she'd rather read than scroll through social media. But Maria knew something they didn't: between these pages, she could be anyone, go anywhere, and learn anything. The library wasn't just a building—it was freedom.",
                questions: [
                  {
                    id: "q1",
                    question: "FIRST READ: What is this passage basically about?",
                    options: [
                      "A school building",
                      "Maria's love of reading and the library",
                      "Social media",
                      "Maria's friends"
                    ],
                    correctAnswer: 1,
                    explanation: "First read focuses on the basic plot/topic: Maria loves the library and reading. This is the 'what' of the text."
                  },
                  {
                    id: "q2",
                    question: "SECOND READ: What does 'sanctuary' mean in context? (Analyzing vocabulary)",
                    options: [
                      "A scary place",
                      "A church",
                      "A safe, peaceful refuge",
                      "A prison"
                    ],
                    correctAnswer: 2,
                    explanation: "Context clues: she 'lingered' there, found it peaceful while others 'rushed to escape.' A sanctuary is a safe haven."
                  },
                  {
                    id: "q3",
                    question: "SECOND READ: What is the author's word choice doing? (Analyzing craft)",
                    options: [
                      "Creating a negative mood",
                      "Making reading seem boring",
                      "Creating contrast between Maria and other students",
                      "Describing the library building"
                    ],
                    correctAnswer: 2,
                    explanation: "Words like 'rushed/escape' vs. 'lingered/sanctuary' create contrast between Maria's view and others' views."
                  },
                  {
                    id: "q4",
                    question: "THIRD READ: What is the theme of this passage? (Deep meaning)",
                    options: [
                      "Libraries have books.",
                      "Reading is boring.",
                      "Books and reading provide escape, knowledge, and freedom.",
                      "Maria doesn't have friends."
                    ],
                    correctAnswer: 2,
                    explanation: "The theme is the deeper message: reading offers freedom and possibilities ('be anyone, go anywhere, learn anything')."
                  },
                  {
                    id: "q5",
                    question: "THIRD READ: What can you INFER about Maria? (Making connections)",
                    options: [
                      "She has no friends.",
                      "She doesn't like school.",
                      "She values imagination and learning over superficial entertainment.",
                      "She wants to be a librarian."
                    ],
                    correctAnswer: 2,
                    explanation: "We can infer from her choices (books over social media, 'learn anything') that she values depth and imagination."
                  },
                  {
                    id: "q6",
                    question: "THIRD READ: The last sentence says 'it was freedom.' What does this metaphor mean?",
                    options: [
                      "The library has no rules.",
                      "Books allow Maria to escape limitations and explore unlimited possibilities.",
                      "Maria can leave whenever she wants.",
                      "The library is outside."
                    ],
                    correctAnswer: 1,
                    explanation: "The metaphor connects to earlier ideas: 'be anyone, go anywhere, learn anything' - books free her from limitations."
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
        },
        {
          id: "writing-3",
          title: "Chapter 3: Argumentative Writing",
          lessons: [
            {
              id: "writing-3-1",
              title: "Building Strong Arguments with Evidence",
              type: "lesson",
              content: {
                introduction: "Argumentative writing is different from a simple opinion. In 6th grade, you must support claims with clear reasons and relevant evidence while maintaining a formal tone. This is a key California Grade 6 writing standard.",
                explanation: "**What is Argumentative Writing?**\n\nArgumentative writing takes a position on an issue and supports it with evidence and reasoning.\n\n**Structure of an Argument:**\n\n**1. Claim (Your Position)**\n- A clear statement of your position\n- Debatable (people can disagree)\n- Specific and focused\n- Example: \"Schools should require students to wear uniforms.\"\n\n**2. Reasons (Why You Believe This)**\n- Logical explanations for your claim\n- Each reason should be distinct\n- Examples:\n  - Reason 1: Uniforms reduce bullying\n  - Reason 2: Uniforms save families money\n  - Reason 3: Uniforms improve focus on learning\n\n**3. Evidence (Proof)**\n- Facts, statistics, examples, expert quotes\n- Must come from credible sources\n- Examples:\n  - \"According to a 2020 study, schools with uniforms saw 25% less bullying.\"\n  - \"Dr. Smith, an education researcher, states that...\"\n\n**4. Counterclaim (The Other Side)**\n- Acknowledge opposing viewpoints\n- Show you've considered other perspectives\n- Then refute (argue against) them\n- Example: \"Some argue uniforms limit self-expression. However...\"\n\n**5. Conclusion**\n- Restate your claim\n- Summarize main reasons\n- End with a call to action or final thought\n\n---\n\n**Formal Tone Requirements:**\n\n✓ **DO:**\n- Use third person (they, students, people)\n- Use formal vocabulary (\"demonstrate\" not \"show\")\n- Cite sources properly\n- Use transition words (Furthermore, Additionally, In conclusion)\n\n✗ **DON'T:**\n- Use first person (I think, I believe, In my opinion)\n- Use informal language (stuff, things, really, very)\n- Make claims without evidence\n- Use emotional manipulation\n\n---\n\n**Argument Structure Template:**\n\n**Introduction:**\n- Hook (interesting fact or question)\n- Background information\n- Clear claim statement\n\n**Body Paragraph 1:** Reason + Evidence\n**Body Paragraph 2:** Reason + Evidence  \n**Body Paragraph 3:** Counterclaim + Refutation\n\n**Conclusion:**\n- Restate claim\n- Summarize reasons\n- Call to action",
                examples: [
                  {
                    text: "Weak Claim: 'I think homework is bad.'\n\nStrong Claim: 'Schools should limit homework to 30 minutes per night because excessive homework reduces family time, increases student stress, and does not improve academic performance.'",
                    explanation: "The strong claim is specific, debatable, and includes preview of reasons."
                  },
                  {
                    text: "Opinion (Not Argument): 'Recycling is good because it helps the environment.'\n\nArgument: 'Communities should implement mandatory recycling programs. According to the EPA, recycling reduces landfill waste by 30% and conserves natural resources. Furthermore, cities with mandatory recycling save an average of $50,000 annually in waste management costs.'",
                    explanation: "The argument version includes specific evidence (statistics, sources) and formal tone."
                  }
                ]
              }
            },
            {
              id: "writing-3-2",
              title: "Practice: Argumentative Writing",
              type: "exercise",
              content: {
                instructions: "Identify strong arguments, evidence, and formal tone in the following scenarios.",
                questions: [
                  {
                    id: "q1",
                    question: "Which is a strong, debatable CLAIM?",
                    options: [
                      "Dogs are animals.",
                      "I think dogs are cute.",
                      "Schools should allow therapy dogs to help students manage stress and anxiety.",
                      "Many people like dogs."
                    ],
                    correctAnswer: 2,
                    explanation: "This is specific, debatable, and takes a clear position. Options A and D are facts, and B is just an opinion without reasoning."
                  },
                  {
                    id: "q2",
                    question: "Which provides the BEST evidence for the claim 'Students should get more recess time'?",
                    options: [
                      "I feel like recess is fun.",
                      "Everyone knows recess is important.",
                      "Research from Stanford University shows that students who have 30-minute recess breaks score 10% higher on afternoon tests.",
                      "Recess is the best part of school."
                    ],
                    correctAnswer: 2,
                    explanation: "This cites a credible source (Stanford University) and provides specific data (10% higher scores). The others are opinions or vague statements."
                  },
                  {
                    id: "q3",
                    question: "Which sentence uses the MOST formal tone?",
                    options: [
                      "I really think this is super important stuff.",
                      "Implementing this policy would significantly benefit students.",
                      "This thing is gonna help kids a lot.",
                      "In my opinion, it's pretty obvious we should do this."
                    ],
                    correctAnswer: 1,
                    explanation: "Uses formal vocabulary ('implementing,' 'significantly benefit'), avoids 'I,' and maintains academic tone."
                  },
                  {
                    id: "q4",
                    question: "Identify the counterclaim: 'Schools should ban junk food. Some argue this limits student choice. However, student health is more important than snack preferences.'",
                    options: [
                      "Schools should ban junk food.",
                      "Some argue this limits student choice.",
                      "Student health is more important.",
                      "Snack preferences."
                    ],
                    correctAnswer: 1,
                    explanation: "The counterclaim acknowledges the opposing viewpoint (limiting choice) before refuting it."
                  },
                  {
                    id: "q5",
                    question: "Which is an appropriate way to present evidence?",
                    options: [
                      "According to Dr. Martinez, a nutrition expert, 'School lunch programs that include fresh vegetables see a 40% increase in student vegetable consumption.'",
                      "I heard somewhere that school lunches are healthier now.",
                      "Everyone knows that vegetables are good.",
                      "My mom says we should eat more vegetables."
                    ],
                    correctAnswer: 0,
                    explanation: "This properly cites a credible source, includes a direct quote, and provides specific data."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "writing-4",
          title: "Chapter 4: Informative/Explanatory Writing",
          lessons: [
            {
              id: "writing-4-1",
              title: "Examining Topics and Conveying Information Clearly",
              type: "lesson",
              content: {
                introduction: "Informative/explanatory writing examines a topic and conveys ideas or information clearly. Unlike argumentative writing, the goal is to inform, not persuade. This requires formatting, precise vocabulary, and clear organization.",
                explanation: "**What is Informative/Explanatory Writing?**\n\nThis writing explains or teaches about a topic without trying to convince the reader of anything.\n\n**Purpose:**\n- Explain how something works\n- Describe what something is\n- Analyze why something happens\n- Compare and contrast topics\n\n---\n\n**Structure of Informative Writing:**\n\n**1. Introduction**\n- Hook: Interesting fact, question, or statement\n- Background: Context about the topic\n- Thesis: Clear statement of what you'll explain\n- Example: \"This essay will examine three major causes of climate change.\"\n\n**2. Body Paragraphs** (Usually 3-5)\n\nEach paragraph should:\n- Start with a topic sentence\n- Include facts, definitions, details, quotations, or examples\n- Use precise vocabulary\n- Connect back to the main topic\n\n**Structure:**\n- Topic Sentence\n- Evidence/Example 1\n- Evidence/Example 2\n- Concluding/transition sentence\n\n**3. Conclusion**\n- Restate the thesis in new words\n- Summarize main points\n- End with a final insight or broader implication\n\n---\n\n**Formatting and Features:**\n\n**Headings and Subheadings:**\nUse these to organize information clearly\n- Example: \"Causes of Climate Change\"\n  - Subheading: \"Fossil Fuel Emissions\"\n  - Subheading: \"Deforestation\"\n\n**Definitions:**\nDefine technical or important terms\n- \"Photosynthesis is the process by which plants convert sunlight into energy.\"\n\n**Examples and Illustrations:**\n- \"For instance, polar bears rely on sea ice for hunting.\"\n- Can include diagrams, charts, or tables\n\n**Precise Vocabulary:**\n- ✓ \"evaporate\" (not \"go away\")\n- ✓ \"accelerate\" (not \"speed up\")\n- ✓ \"habitat\" (not \"place where animals live\")\n\n---\n\n**Informative vs. Argumentative:**\n\n**Informative:**\n- Purpose: Explain/teach\n- Tone: Neutral, objective\n- Evidence: Facts and information\n- Example: \"Climate change causes sea levels to rise.\"\n\n**Argumentative:**\n- Purpose: Persuade\n- Tone: Takes a position\n- Evidence: Used to support claim\n- Example: \"Governments must act immediately to address climate change.\"\n\n---\n\n**Key Features for Success:**\n\n1. **Clear Organization:** Use logical order (chronological, cause-effect, compare-contrast)\n2. **Transition Words:** Connect ideas (Furthermore, In addition, Similarly, In contrast)\n3. **Domain-Specific Vocabulary:** Use precise terms related to the topic\n4. **Objective Tone:** No opinions, just facts\n5. **Multiple Sources:** Include information from various credible sources",
                examples: [
                  {
                    text: "Topic Sentence: 'The water cycle consists of three main stages.'\n\nBody: 'First, evaporation occurs when the sun heats water, causing it to transform from liquid to gas. Next, condensation happens as water vapor cools and forms clouds. Finally, precipitation releases water back to Earth in the form of rain, snow, or hail.'",
                    explanation: "Uses precise vocabulary (evaporation, condensation, precipitation), clear organization (First, Next, Finally), and objective tone."
                  },
                  {
                    text: "Weak: 'Dolphins are really cool animals that do awesome things.'\n\nStrong: 'Dolphins are highly intelligent marine mammals. They demonstrate problem-solving abilities, use echolocation to navigate, and exhibit complex social behaviors within their pods.'",
                    explanation: "Strong version uses precise vocabulary (marine mammals, echolocation, pods) and provides specific information instead of vague descriptions."
                  }
                ]
              }
            },
            {
              id: "writing-4-2",
              title: "Practice: Informative Writing",
              type: "exercise",
              content: {
                instructions: "Identify effective informative writing techniques and distinguish from argumentative writing.",
                questions: [
                  {
                    id: "q1",
                    question: "Which is an appropriate thesis statement for informative writing?",
                    options: [
                      "Everyone should learn about renewable energy because it's important.",
                      "This essay will explain three types of renewable energy: solar, wind, and hydroelectric power.",
                      "I think renewable energy is better than fossil fuels.",
                      "You must support renewable energy initiatives."
                    ],
                    correctAnswer: 1,
                    explanation: "This clearly states what will be explained without taking a position or trying to persuade."
                  },
                  {
                    id: "q2",
                    question: "Which sentence uses the MOST precise vocabulary for informative writing?",
                    options: [
                      "The heart pumps blood around the body.",
                      "The heart does stuff with blood.",
                      "The heart moves blood to different places.",
                      "The heart is really important for your body."
                    ],
                    correctAnswer: 0,
                    explanation: "Uses precise terms (pumps, blood) and is clear and specific. The others are vague or informal."
                  },
                  {
                    id: "q3",
                    question: "Identify the INFORMATIVE passage (not argumentative):",
                    options: [
                      "Schools must extend lunch periods to improve student health.",
                      "Extended lunch periods would benefit everyone.",
                      "Lunch periods vary in length across U.S. schools, ranging from 20 to 45 minutes. Research indicates that longer periods allow students more time for socialization and eating.",
                      "I believe all schools should have 45-minute lunches."
                    ],
                    correctAnswer: 2,
                    explanation: "This informs about lunch period lengths and research findings without taking a position or trying to persuade."
                  },
                  {
                    id: "q4",
                    question: "Which transition word would BEST show cause and effect in informative writing?",
                    options: [
                      "However",
                      "Similarly",
                      "Consequently",
                      "First"
                    ],
                    correctAnswer: 2,
                    explanation: "'Consequently' shows cause and effect (this happened as a result). 'However' shows contrast, 'Similarly' shows comparison, 'First' shows sequence."
                  },
                  {
                    id: "q5",
                    question: "Which would be the BEST way to organize an essay about the life cycle of a butterfly?",
                    options: [
                      "Compare and contrast structure",
                      "Problem and solution structure",
                      "Chronological (time order) structure",
                      "Most important to least important"
                    ],
                    correctAnswer: 2,
                    explanation: "A life cycle happens in stages over time, so chronological order (egg → caterpillar → chrysalis → butterfly) makes sense."
                  },
                  {
                    id: "q6",
                    question: "Which sentence maintains an OBJECTIVE tone for informative writing?",
                    options: [
                      "I think photosynthesis is the coolest process ever!",
                      "Photosynthesis is obviously the most important biological process.",
                      "Photosynthesis is the process by which plants convert light energy into chemical energy.",
                      "Everyone should learn about photosynthesis because it's amazing."
                    ],
                    correctAnswer: 2,
                    explanation: "This presents factual information objectively without opinions, emotions, or attempts to persuade."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "writing-5",
          title: "Chapter 5: The Writing Process",
          lessons: [
            {
              id: "writing-5-1",
              title: "Planning, Drafting, Revising, and Editing",
              type: "lesson",
              content: {
                introduction: "In California Grade 6 standards, writing is treated as a process, not a one-time task. Students must demonstrate the ability to plan, draft, revise, and edit their work based on feedback.",
                explanation: "**THE WRITING PROCESS: 5 Stages**\n\n---\n\n**STAGE 1: PREWRITING (Planning)**\n\nBefore writing, organize your thoughts!\n\n**Strategies:**\n- **Brainstorming**: List all ideas (don't judge them yet)\n- **Graphic Organizers**:\n  - **Web/Cluster**: Main idea in center, details branching out\n  - **Venn Diagram**: For compare/contrast\n  - **Timeline**: For chronological/narrative\n  - **Outline**: Traditional format with Roman numerals\n  - **T-Chart**: Pros/cons, reasons/evidence\n\n**For Argument:** List claim, reasons, evidence, counterclaim\n**For Informative:** List main topic, subtopics, facts for each\n**For Narrative:** Map plot (exposition, rising action, climax, falling action, resolution)\n\n---\n\n**STAGE 2: DRAFTING**\n\nGet your ideas on paper - don't worry about perfection!\n\n**Goal:** Write a complete first draft following your plan\n\n**Tips:**\n- Focus on content, not perfection\n- Follow your outline/organizer\n- Don't stop to fix every error\n- Write in complete paragraphs\n- Leave space for revisions (skip lines or double-space)\n\n**Remember:** First drafts are supposed to be messy!\n\n---\n\n**STAGE 3: REVISING (Big Changes)**\n\nImprove the content and organization\n\n**Focus on:**\n- **Ideas**: Is my main point clear? Do I need more evidence?\n- **Organization**: Does the order make sense? Are paragraphs in logical order?\n- **Word Choice**: Can I use more precise or interesting words?\n- **Sentence Structure**: Can I combine choppy sentences? Break up long ones?\n- **Audience**: Will my reader understand this?\n\n**Revision Strategies:**\n- Add: More details, evidence, examples\n- Delete: Unnecessary information, repetition\n- Move: Rearrange sentences or paragraphs\n- Replace: Weak words with stronger ones\n\n**Peer Review:** Exchange papers and give feedback\n- What works well?\n- What's confusing?\n- What needs more explanation?\n\n---\n\n**STAGE 4: EDITING (Small Fixes)**\n\nCorrect grammar, spelling, and punctuation\n\n**Focus on CUPS:**\n- **C**apitalization (proper nouns, sentence starts)\n- **U**sage (word choice, subject-verb agreement)\n- **P**unctuation (commas, periods, quotation marks)\n- **S**pelling (especially commonly confused words)\n\n**Editing Checklist:**\n✓ Every sentence starts with capital and ends with punctuation\n✓ Proper nouns are capitalized\n✓ Pronouns are in correct case (I vs. me)\n✓ No run-on sentences or fragments\n✓ Spelling is correct\n✓ Commas used correctly\n\n**Tip:** Read your paper aloud - you'll catch errors you missed reading silently!\n\n---\n\n**STAGE 5: PUBLISHING**\n\nCreate a final, polished version\n\n**Technology Integration (Grade 6 Requirement):**\n- Type your final draft using word processing software (Google Docs, Microsoft Word)\n- **Typing Goal**: At least 3 pages in a single sitting\n- Use proper formatting (margins, spacing, font)\n- Include a title\n- Add your name, date, and class\n\n**Collaborative Tools:**\n- Share with teacher/peers for comments\n- Use track changes or suggestion mode\n- Respond to feedback digitally\n\n---\n\n**THE DIFFERENCE: Revising vs. Editing**\n\n**Revising = Big Picture**\n- Content and ideas\n- Organization\n- \"What I say and how I say it\"\n\n**Editing = Details**\n- Grammar and mechanics\n- Spelling\n- \"Correctness\"\n\n**Remember:** Always revise BEFORE editing! Don't waste time fixing grammar in a paragraph you might delete!",
                examples: [
                  {
                    text: "Revision Example:\nDraft: 'The dog ran. It was fast. It caught the ball.'\n\nRevised: 'The golden retriever sprinted across the field and caught the tennis ball mid-air.'",
                    explanation: "Revision combines choppy sentences, adds specific details (golden retriever, tennis ball), and uses more precise verb (sprinted)."
                  },
                  {
                    text: "Editing Example:\nDraft: 'me and my friend went to the store we bought candy and soda'\n\nEdited: 'My friend and I went to the store. We bought candy and soda.'",
                    explanation: "Editing fixes pronoun case (me → My friend and I), adds punctuation, and corrects capitalization."
                  }
                ]
              }
            },
            {
              id: "writing-5-2",
              title: "Practice: The Writing Process",
              type: "exercise",
              content: {
                instructions: "Identify the stages of the writing process and appropriate strategies for each.",
                questions: [
                  {
                    id: "q1",
                    question: "Which activity is part of the PREWRITING stage?",
                    options: [
                      "Typing the final draft",
                      "Creating a graphic organizer to plan ideas",
                      "Fixing spelling errors",
                      "Sharing the finished paper"
                    ],
                    correctAnswer: 1,
                    explanation: "Prewriting involves planning and organizing ideas before writing. Graphic organizers help with this."
                  },
                  {
                    id: "q2",
                    question: "You notice your paper has three very short, choppy sentences in a row. What stage should you address this in?",
                    options: [
                      "Prewriting",
                      "Drafting",
                      "Revising (combining sentences for better flow)",
                      "Editing (fixing grammar)"
                    ],
                    correctAnswer: 2,
                    explanation: "Sentence structure and flow are revised during the revising stage (big changes), not editing (small corrections)."
                  },
                  {
                    id: "q3",
                    question: "Which is the BEST order for the writing process?",
                    options: [
                      "Draft → Prewrite → Edit → Revise → Publish",
                      "Prewrite → Draft → Edit → Revise → Publish",
                      "Prewrite → Draft → Revise → Edit → Publish",
                      "Revise → Draft → Prewrite → Edit → Publish"
                    ],
                    correctAnswer: 2,
                    explanation: "Correct order: Plan first, write draft, make big changes (revise), fix errors (edit), then create final version (publish)."
                  },
                  {
                    id: "q4",
                    question: "Which is an EDITING task (not revising)?",
                    options: [
                      "Adding more evidence to support your claim",
                      "Moving a paragraph to a better location",
                      "Replacing 'good' with 'beneficial'",
                      "Correcting 'there' to 'their'"
                    ],
                    correctAnswer: 3,
                    explanation: "Fixing spelling/grammar (their vs. there) is editing. The others are revising (content and organization changes)."
                  },
                  {
                    id: "q5",
                    question: "A peer reviewer says: 'I don't understand your second reason. Can you explain it better?' This feedback should be addressed during:",
                    options: [
                      "Prewriting",
                      "Drafting",
                      "Revising (adding clarity)",
                      "Editing"
                    ],
                    correctAnswer: 2,
                    explanation: "Clarity and explanation are content issues addressed during revising. The peer is asking for better content, not grammar fixes."
                  },
                  {
                    id: "q6",
                    question: "Which graphic organizer would be BEST for planning a narrative story?",
                    options: [
                      "Venn diagram",
                      "Plot diagram (exposition, rising action, climax, falling action, resolution)",
                      "T-chart",
                      "Web/cluster map"
                    ],
                    correctAnswer: 1,
                    explanation: "A plot diagram specifically organizes the stages of a story, making it perfect for narrative planning."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "writing-6",
          title: "Chapter 6: Research Skills",
          lessons: [
            {
              id: "writing-6-1",
              title: "Conducting Research and Evaluating Sources",
              type: "lesson",
              content: {
                introduction: "Grade 6 research skills represent a major step up from 5th grade. Students must conduct short research projects, evaluate source credibility, avoid plagiarism, and provide basic bibliographies.",
                explanation: "**CONDUCTING SHORT RESEARCH PROJECTS**\n\n**Step 1: Start with a Research Question**\n- Specific and focused (not too broad)\n- ✓ Good: \"How do dolphins communicate?\"\n- ✗ Too broad: \"What are dolphins?\"\n\n**Step 2: Use Multiple Sources**\n- Minimum 3-5 sources\n- Variety of types: books, articles, websites, videos\n- Different perspectives on the topic\n\n**Step 3: Take Notes**\n- Record information in your own words\n- Include source information (author, title, date)\n- Keep track of which facts come from which sources\n\n---\n\n**EVALUATING SOURCE CREDIBILITY**\n\nNot all sources are equally reliable!\n\n**RELIABLE SOURCES:**\n✓ Educational websites (.edu, .gov)\n✓ Library databases (EBSCOhost, Gale)\n✓ Peer-reviewed articles\n✓ Published books from reputable publishers\n✓ Established news organizations\n✓ Expert authors (professors, researchers)\n✓ Recent information (especially for science/tech)\n\n**UNRELIABLE SOURCES:**\n✗ Random personal blogs\n✗ Wikipedia (can be edited by anyone - use it for background only)\n✗ Websites with obvious bias\n✗ Sources with no author listed\n✗ Very old information (for current topics)\n✗ Websites trying to sell something\n\n**The CRAAP Test for Sources:**\n\n**C**urrency: Is it recent? When was it published?\n**R**elevance: Does it answer my question?\n**A**uthority: Who wrote it? Are they an expert?\n**A**ccuracy: Can the facts be verified? Is there evidence?\n**P**urpose: Why was this written? To inform? To sell?\n\n---\n\n**SUMMARIZING VS. PARAPHRASING**\n\nBoth put information in your own words, but differently:\n\n**Summarizing:**\n- Condenses the main ideas\n- Shorter than the original\n- Focuses on key points only\n- Used for: Overall understanding of a text\n\n**Example:**\nOriginal (100 words) → Summary (20 words)\n\"The article discusses climate change...\"\n\n**Paraphrasing:**\n- Restates specific information\n- About the same length as original\n- Changes sentence structure AND words\n- Used for: Including specific information in your writing\n\n**Example:**\nOriginal: \"Dolphins use echolocation to navigate in dark or murky water.\"\nParaphrase: \"In unclear or dark waters, dolphins rely on sound waves to find their way around.\"\n\n**AVOIDING PLAGIARISM:**\n\n❌ Plagiarism = Using someone else's words or ideas without giving credit\n\n**How to Avoid:**\n1. Always cite your sources\n2. Put exact words in quotation marks\n3. Paraphrase in your own words (don't just change a few words!)\n4. Give credit even when paraphrasing\n\n---\n\n**PROVIDING BASIC BIBLIOGRAPHIES**\n\nList all sources at the end of your paper.\n\n**Basic Format (MLA Style for Grade 6):**\n\n**Book:**\nAuthor Last Name, First Name. *Title of Book*. Publisher, Year.\n- Example: Smith, John. *Dolphins of the Pacific*. Ocean Press, 2020.\n\n**Website:**\nAuthor (if available). \"Title of Article.\" *Website Name*, Date, URL.\n- Example: Martinez, Lisa. \"How Dolphins Communicate.\" *Marine Biology Today*, 15 Jan. 2021, www.marinebio.com/dolphins.\n\n**Article:**\nAuthor. \"Article Title.\" *Magazine/Newspaper Name*, Date, pages.\n\n**Tips:**\n- Alphabetical order by author's last name\n- If no author, start with title\n- Use hanging indent (first line regular, rest indented)\n- Double-space the list",
                examples: [
                  {
                    text: "Plagiarism Example:\nOriginal: 'Photosynthesis allows plants to convert sunlight into energy.'\n\n❌ Plagiarism: 'Photosynthesis lets plants turn sunlight into energy.'\n(Just changed a few words)\n\n✓ Proper Paraphrase: 'Through photosynthesis, plants transform light from the sun into usable chemical energy.'",
                    explanation: "The paraphrase completely restructures the sentence and uses different vocabulary while maintaining the meaning."
                  },
                  {
                    text: "Source Evaluation:\n\nSource A: Article from National Geographic by marine biologist Dr. Susan Chen, published 2022\n\nSource B: Blog post from 'JoesOpinions.com' by anonymous author, no date\n\nSource A is more reliable: established publication, expert author, recent date.",
                    explanation: "Source A has authority (expert author, reputable publication), currency (recent), and credibility."
                  }
                ]
              }
            },
            {
              id: "writing-6-2",
              title: "Practice: Research Skills",
              type: "exercise",
              content: {
                instructions: "Evaluate sources, identify plagiarism, and demonstrate research skills.",
                questions: [
                  {
                    id: "q1",
                    question: "Which source is MOST credible for a research paper on ancient Egypt?",
                    options: [
                      "A Wikipedia article with no author listed",
                      "A book by Dr. Sarah Ahmed, an Egyptologist at Harvard University, published in 2020",
                      "A personal blog about someone's vacation to Egypt",
                      "A social media post about pyramids"
                    ],
                    correctAnswer: 1,
                    explanation: "This has authority (expert author), currency (recent), accuracy (from a reputable institution), making it most credible."
                  },
                  {
                    id: "q2",
                    question: "Original: 'Bees play a crucial role in pollinating crops.' Which is proper paraphrasing?",
                    options: [
                      "Bees have a crucial role in pollinating crops.",
                      "Pollinating crops is a crucial role that bees play.",
                      "Bees are essential for crop pollination, transferring pollen between plants.",
                      "Bees play an important role in crop pollination."
                    ],
                    correctAnswer: 2,
                    explanation: "This completely restructures the sentence and uses different words (essential, transferring pollen) while keeping the meaning."
                  },
                  {
                    id: "q3",
                    question: "Which research question is appropriately focused for a short research project?",
                    options: [
                      "What is science?",
                      "Tell me about animals.",
                      "How do monarch butterflies navigate during migration?",
                      "What is everything about space?"
                    ],
                    correctAnswer: 2,
                    explanation: "This is specific and focused (one species, one behavior). The others are too broad for a short project."
                  },
                  {
                    id: "q4",
                    question: "You find a great article but there's no author name listed. According to the CRAAP test, this affects:",
                    options: [
                      "Currency",
                      "Relevance",
                      "Authority",
                      "Purpose"
                    ],
                    correctAnswer: 2,
                    explanation: "Authority relates to who wrote it and their credentials. No author = questionable authority."
                  },
                  {
                    id: "q5",
                    question: "Which is an example of plagiarism?",
                    options: [
                      "Putting a direct quote in quotation marks and citing the source",
                      "Paraphrasing an idea in your own words and citing the source",
                      "Copying sentences from a website and changing a few words without citing",
                      "Summarizing an article's main points in your own words with a citation"
                    ],
                    correctAnswer: 2,
                    explanation: "This is plagiarism - copying without proper citation and without truly paraphrasing (just changing a few words isn't enough)."
                  },
                  {
                    id: "q6",
                    question: "What is the difference between summarizing and paraphrasing?",
                    options: [
                      "There is no difference; they're the same thing.",
                      "Summarizing is shorter and covers main ideas; paraphrasing restates specific information in detail.",
                      "Summarizing requires citations; paraphrasing doesn't.",
                      "Paraphrasing is easier than summarizing."
                    ],
                    correctAnswer: 1,
                    explanation: "Summarizing condenses to main ideas (shorter). Paraphrasing restates specific info in own words (similar length). Both need citations!"
                  }
                ]
              }
            }
          ]
        },
        {
          id: "writing-7",
          title: "Chapter 7: Transition Words and Organization",
          lessons: [
            {
              id: "writing-7-1",
              title: "Making Writing Flow with Transitions",
              type: "lesson",
              content: {
                introduction: "To make writing flow smoothly, 6th graders must use transition words to connect ideas. Different transitions serve different purposes - showing contrast, cause/effect, sequence, and more.",
                explanation: "**WHAT ARE TRANSITION WORDS?**\n\nTransition words are bridges between ideas. They help readers follow your thinking and understand how ideas connect.\n\n**Without transitions:** Ideas feel choppy and disconnected\n**With transitions:** Writing flows smoothly and logically\n\n---\n\n**TYPES OF TRANSITIONS:**\n\n**1. TO SHOW SEQUENCE (Order/Time)**\nUse when showing steps, order, or time\n\n- First, Second, Third\n- Initially, Subsequently, Finally\n- Next, Then, After that\n- Before, During, After\n- Meanwhile, Eventually, Ultimately\n\n**Example:** \"**First**, preheat the oven. **Next**, mix the ingredients. **Finally**, bake for 30 minutes.\"\n\n---\n\n**2. TO SHOW ADDITION (Adding Ideas)**\nUse when adding more information\n\n- Additionally, Furthermore, Moreover\n- Also, In addition, Besides\n- As well as, Along with\n- Another, Similarly\n\n**Example:** \"Exercise improves physical health. **Additionally**, it reduces stress and improves mood.\"\n\n---\n\n**3. TO SHOW CONTRAST (Differences/Opposition)**\nUse when showing differences or opposite ideas\n\n- However, Nevertheless, Nonetheless\n- On the other hand, In contrast, Conversely\n- Although, Though, Even though\n- While, Whereas\n- Despite, In spite of\n- Yet, But, Still\n\n**Example:** \"Many students enjoy homework. **However**, research suggests excessive homework can increase stress.\"\n\n---\n\n**4. TO SHOW CAUSE AND EFFECT (Results)**\nUse when showing why something happened or what resulted\n\n- Therefore, Thus, Hence\n- Consequently, As a result, Accordingly\n- Because, Since, Due to\n- For this reason, As a consequence\n- This leads to, This results in\n\n**Example:** \"The temperature dropped below freezing. **Consequently**, the lake froze completely.\"\n\n---\n\n**5. TO SHOW EXAMPLES**\nUse when providing specific instances\n\n- For example, For instance, Such as\n- Including, Specifically, In particular\n- To illustrate, Namely\n\n**Example:** \"Many animals adapt to cold weather. **For instance**, polar bears have thick fur and layers of fat for insulation.\"\n\n---\n\n**6. TO SHOW COMPARISON (Similarities)**\nUse when showing how things are alike\n\n- Similarly, Likewise, In the same way\n- Just as, Equally, Comparable to\n\n**Example:** \"Dolphins are highly intelligent. **Similarly**, elephants demonstrate complex problem-solving abilities.\"\n\n---\n\n**7. TO EMPHASIZE**\nUse when highlighting importance\n\n- Indeed, In fact, Certainly\n- Undoubtedly, Clearly, Obviously\n- Most importantly, Above all, Especially\n\n**Example:** \"Regular practice improves skills. **In fact**, students who practice daily show 50% more improvement.\"\n\n---\n\n**8. TO CONCLUDE**\nUse when wrapping up\n\n- In conclusion, To sum up, In summary\n- Overall, Ultimately, In brief\n- As a result, Therefore, Thus\n\n**Example:** \"**In conclusion**, renewable energy sources offer significant environmental and economic benefits.\"\n\n---\n\n**PUNCTUATION WITH TRANSITIONS:**\n\n**At the beginning of a sentence:**\n\"**However**, the results were surprising.\" (comma after)\n\n**Between two sentences:**\n\"The experiment failed. **Nevertheless**, we learned valuable lessons.\" (period before, comma after)\n\n**Between two independent clauses:**\n\"The test was difficult**; however,** most students passed.\" (semicolon before, comma after)\n\n**In the middle:**\n\"The project, **in addition**, required extensive research.\" (commas before and after)",
                examples: [
                  {
                    text: "Without Transitions:\n'I woke up late. I missed the bus. I had to walk. I was late to school.'\n\nWith Transitions:\n'I woke up late. **Consequently**, I missed the bus. **As a result**, I had to walk to school. **Ultimately**, I arrived late.'",
                    explanation: "Transitions show cause and effect, making the connections between events clear and the writing flow better."
                  },
                  {
                    text: "Showing Contrast:\n'Some students prefer online learning. **However**, others find in-person classes more effective. **On the other hand**, hybrid models offer benefits of both approaches.'",
                    explanation: "Transitions (However, On the other hand) signal that different viewpoints are being presented."
                  }
                ]
              }
            },
            {
              id: "writing-7-2",
              title: "Practice: Transition Words",
              type: "exercise",
              content: {
                instructions: "Choose the best transition word for each sentence based on the relationship between ideas.",
                questions: [
                  {
                    id: "q1",
                    question: "The team practiced every day. _____, they won the championship.",
                    options: ["However", "Consequently", "On the other hand", "Similarly"],
                    correctAnswer: 1,
                    explanation: "'Consequently' shows cause and effect - they won BECAUSE they practiced. 'However' would show contrast, which doesn't fit."
                  },
                  {
                    id: "q2",
                    question: "Smartphones are convenient. _____, they can be distracting in class.",
                    options: ["Similarly", "Furthermore", "However", "Therefore"],
                    correctAnswer: 2,
                    explanation: "'However' shows contrast between the positive (convenient) and negative (distracting) aspects."
                  },
                  {
                    id: "q3",
                    question: "_____ preheating the oven, mix all the dry ingredients together.",
                    options: ["Therefore", "However", "Initially", "Despite"],
                    correctAnswer: 2,
                    explanation: "'Initially' shows sequence - this is the first step in the process. It indicates the beginning."
                  },
                  {
                    id: "q4",
                    question: "Dogs require daily exercise. _____, cats also need regular physical activity.",
                    options: ["However", "Similarly", "Consequently", "Nevertheless"],
                    correctAnswer: 1,
                    explanation: "'Similarly' shows comparison - both animals need exercise. This indicates a similarity between dogs and cats."
                  },
                  {
                    id: "q5",
                    question: "Many animals hibernate during winter. _____, bears sleep for months to conserve energy during food shortages.",
                    options: ["However", "On the other hand", "For example", "Consequently"],
                    correctAnswer: 2,
                    explanation: "'For example' introduces a specific instance (bears) of the general statement (animals hibernate)."
                  },
                  {
                    id: "q6",
                    question: "The experiment failed twice. _____, the scientists didn't give up and tried a new approach.",
                    options: ["Therefore", "Consequently", "Nevertheless", "Similarly"],
                    correctAnswer: 2,
                    explanation: "'Nevertheless' shows contrast - despite the failures (negative), they persisted (positive). It means 'in spite of that.'"
                  },
                  {
                    id: "q7",
                    question: "_____, renewable energy sources reduce pollution and decrease dependence on fossil fuels.",
                    options: ["However", "In conclusion", "For instance", "On the other hand"],
                    correctAnswer: 1,
                    explanation: "'In conclusion' signals the end of an argument or essay, summarizing the main benefits."
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


