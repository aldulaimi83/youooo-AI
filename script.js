const lessons = [
  {
    id: 1,
    level: "Beginner",
    title: "What Is Artificial Intelligence?",
    summary: "Understand what AI is and what it is not.",
    objectives: ["Define AI", "Understand pattern recognition", "Know real-world uses"],
    content: `
      <p>Artificial Intelligence is the broad idea of machines performing tasks that usually require human-like intelligence, such as recognizing patterns, making predictions, generating text, or understanding language.</p>
      <ul>
        <li><strong>AI</strong> is the big field</li>
        <li><strong>Machine Learning</strong> is one part of AI</li>
        <li><strong>Generative AI</strong> creates new content like text, images, or code</li>
      </ul>
      <p>AI is already used in search, recommendations, chatbots, fraud detection, and automation.</p>
    `,
    diagram: `Artificial Intelligence
├── Machine Learning
├── Deep Learning
└── Generative AI`,
    example: `Examples of AI:
- Chatbots
- Recommendation systems
- Image generation
- Speech recognition`,
    whyMatters: `AI is now one of the most important technology skills. Understanding the basics helps you use tools better, speak confidently in interviews, and build useful products.`,
    quiz: [
      {
        question: "What is AI?",
        options: [
          "Only robots with arms",
          "Machines performing tasks that need human-like intelligence",
          "Only computer storage",
          "A type of internet cable"
        ],
        answer: 1,
        explanation: "AI includes systems that recognize patterns, generate content, or make decisions."
      },
      {
        question: "Which is part of AI?",
        options: ["Machine Learning", "Only printers", "USB cables", "Static HTML only"],
        answer: 0,
        explanation: "Machine Learning is a major part of AI."
      },
      {
        question: "What does generative AI do?",
        options: [
          "Only delete files",
          "Create new content like text or images",
          "Turn off networks",
          "Only host servers"
        ],
        answer: 1,
        explanation: "Generative AI creates new outputs such as text, code, or images."
      }
    ]
  },
  {
    id: 2,
    level: "Beginner",
    title: "AI vs Machine Learning vs Generative AI",
    summary: "Learn the difference between these common AI terms.",
    objectives: ["Understand AI hierarchy", "Know ML basics", "Understand GenAI"],
    content: `
      <p>People often mix these terms together, but they are not identical.</p>
      <ul>
        <li><strong>AI</strong> is the broad field</li>
        <li><strong>Machine Learning</strong> teaches systems from data</li>
        <li><strong>Generative AI</strong> creates new outputs like text, code, or images</li>
      </ul>
      <p>Knowing the difference helps you explain your skills clearly.</p>
    `,
    diagram: `AI
└── Machine Learning
    └── Deep Learning
        └── Generative AI`,
    example: `Example:
AI = big umbrella
ML = learns from data
GenAI = creates new content`,
    whyMatters: `These terms come up constantly in job descriptions, interviews, and product discussions. Clear understanding makes you sound much stronger professionally.`,
    quiz: [
      {
        question: "Which is the broadest term?",
        options: ["Generative AI", "Machine Learning", "AI", "Prompting"],
        answer: 2,
        explanation: "AI is the broad umbrella."
      },
      {
        question: "What does machine learning mainly do?",
        options: ["Teach systems from data", "Only create PDFs", "Only manage hardware", "Only store files"],
        answer: 0,
        explanation: "Machine learning uses data to find patterns and make predictions."
      },
      {
        question: "Which is focused on creating new outputs?",
        options: ["VPN", "Generative AI", "Firewall", "Database only"],
        answer: 1,
        explanation: "Generative AI focuses on producing new content."
      }
    ]
  },
  {
    id: 3,
    level: "Beginner",
    title: "What Is Prompt Engineering?",
    summary: "Learn how to ask AI better questions and get better results.",
    objectives: ["Understand prompting", "Write clearer prompts", "Improve AI output quality"],
    content: `
      <p>Prompt engineering means writing instructions in a way that helps an AI system give better answers.</p>
      <ul>
        <li>Be clear</li>
        <li>Give context</li>
        <li>State the goal</li>
        <li>Specify the format you want</li>
      </ul>
      <p>Better prompts usually lead to better outputs.</p>
    `,
    diagram: `Good Prompt
= Role + Context + Task + Format`,
    example: `Weak prompt:
"Write something about cloud."

Better prompt:
"You are a cloud tutor. Explain AWS IAM to a beginner in simple English with 3 examples."`,
    whyMatters: `Prompting is one of the fastest and most valuable AI skills today. It helps with writing, coding, research, automation, and productivity.`,
    quiz: [
      {
        question: "What is prompt engineering?",
        options: [
          "Building physical robots",
          "Writing better instructions for AI systems",
          "Only fixing servers",
          "Deleting prompts"
        ],
        answer: 1,
        explanation: "Prompt engineering is about structuring instructions for better AI results."
      },
      {
        question: "Which usually improves AI results?",
        options: ["More vagueness", "Less context", "Clearer instructions", "No task given"],
        answer: 2,
        explanation: "Clear instructions usually improve output."
      },
      {
        question: "A strong prompt often includes:",
        options: ["Role, context, task, and format", "Only one random word", "Only punctuation", "No goal"],
        answer: 0,
        explanation: "A good prompt often includes role, context, task, and format."
      }
    ]
  },
  {
    id: 4,
    level: "Beginner",
    title: "Prompt Patterns That Work",
    summary: "Use practical prompt structures for better outputs.",
    objectives: ["Learn useful prompt templates", "Use role-based prompting", "Improve consistency"],
    content: `
      <p>There are patterns that repeatedly improve prompt quality.</p>
      <ul>
        <li><strong>Role prompt:</strong> “You are a tutor...”</li>
        <li><strong>Step-by-step prompt:</strong> “Explain in steps...”</li>
        <li><strong>Format prompt:</strong> “Answer in bullet points/table...”</li>
        <li><strong>Constraint prompt:</strong> “Keep it under 150 words...”</li>
      </ul>
    `,
    diagram: `Prompt Pattern
├── Role
├── Goal
├── Constraints
└── Output Format`,
    example: `You are an interview coach.
Help me answer this cloud interview question.
Keep the answer under 120 words.
Use simple English.`,
    whyMatters: `These prompt patterns are useful for content creation, coding help, interview prep, and automating repeated tasks.`,
    quiz: [
      {
        question: "What is a role prompt?",
        options: [
          "Giving the AI a role like tutor or recruiter",
          "Turning off AI",
          "Only asking for a password",
          "Removing context"
        ],
        answer: 0,
        explanation: "A role prompt tells the AI what perspective to use."
      },
      {
        question: "Why specify output format?",
        options: ["To reduce clarity", "To control the shape of the answer", "To break the AI", "To avoid structure"],
        answer: 1,
        explanation: "Format instructions help shape the result."
      },
      {
        question: "What is a useful constraint?",
        options: ["No goal", "Keep answer under 100 words", "Answer randomly", "Remove all detail"],
        answer: 1,
        explanation: "Constraints like length can improve practical results."
      }
    ]
  },
  {
    id: 5,
    level: "Intermediate",
    title: "How Large Language Models Work",
    summary: "Understand the basic idea behind modern text-generating AI.",
    objectives: ["Know what LLMs do", "Understand token prediction", "Know limits"],
    content: `
      <p>Large Language Models work by learning patterns from huge amounts of text and predicting likely next tokens.</p>
      <p>They do not “think” exactly like humans. They generate outputs based on learned statistical patterns.</p>
      <ul>
        <li>Great at language tasks</li>
        <li>Can summarize, explain, draft, and code</li>
        <li>Can still be wrong or hallucinate</li>
      </ul>
    `,
    diagram: `Input Prompt
   |
Language Model
   |
Token-by-token Prediction
   |
Generated Response`,
    example: `Prompt → model predicts next words → response grows step by step`,
    whyMatters: `If you understand how LLMs work at a basic level, you become a better AI user because you know both their strengths and their weaknesses.`,
    quiz: [
      {
        question: "What do large language models mainly do?",
        options: ["Predict likely next tokens", "Only store images", "Only manage routers", "Only encrypt files"],
        answer: 0,
        explanation: "LLMs generate language by predicting likely next tokens."
      },
      {
        question: "Can LLMs be wrong?",
        options: ["Never", "Yes", "Only in games", "Only offline"],
        answer: 1,
        explanation: "Yes, they can produce errors or hallucinations."
      },
      {
        question: "What are LLMs especially strong at?",
        options: ["Language tasks", "Building roads", "Only hardware design", "Water cooling"],
        answer: 0,
        explanation: "LLMs are especially strong in language-related tasks."
      }
    ]
  },
  {
    id: 6,
    level: "Intermediate",
    title: "Hallucinations and AI Limitations",
    summary: "Learn what AI gets wrong and how to work safely with it.",
    objectives: ["Understand hallucinations", "Know verification habits", "Use AI more safely"],
    content: `
      <p>An AI hallucination is when a model produces something false, misleading, or invented but sounds confident.</p>
      <ul>
        <li>Always verify important outputs</li>
        <li>Do not trust high-stakes answers blindly</li>
        <li>Use AI as a helper, not automatic truth</li>
      </ul>
      <p>This is especially important in technical, legal, medical, and financial areas.</p>
    `,
    diagram: `Prompt
  |
AI Response
  |
Check / Verify / Validate
  |
Use Safely`,
    example: `Good practice:
Ask AI for draft ideas
Then verify facts before using them`,
    whyMatters: `Knowing AI limitations protects you from bad decisions and makes you look more mature and responsible when using AI professionally.`,
    quiz: [
      {
        question: "What is an AI hallucination?",
        options: [
          "A perfectly verified answer",
          "A false or invented answer that sounds confident",
          "A physical machine failure",
          "A database backup"
        ],
        answer: 1,
        explanation: "Hallucinations are confident but false or unsupported outputs."
      },
      {
        question: "What should you do with important AI output?",
        options: ["Trust it blindly", "Verify it", "Ignore it always", "Delete your notes"],
        answer: 1,
        explanation: "Important outputs should be verified."
      },
      {
        question: "Where is extra caution needed?",
        options: ["Only memes", "High-stakes topics like legal or medical", "Only games", "Color themes"],
        answer: 1,
        explanation: "High-stakes areas require extra caution."
      }
    ]
  },
  {
    id: 7,
    level: "Intermediate",
    title: "AI Tools and Real Use Cases",
    summary: "See how AI tools are used in real work and daily tasks.",
    objectives: ["Know major AI use cases", "Connect AI to productivity", "Understand practical value"],
    content: `
      <p>AI is useful for writing, coding, summarization, brainstorming, automation, analysis, and support workflows.</p>
      <ul>
        <li>Writing and editing</li>
        <li>Research and summarization</li>
        <li>Code explanation and drafting</li>
        <li>Meeting notes and organization</li>
      </ul>
      <p>The real value is not just “using AI.” It is using it to save time and improve quality.</p>
    `,
    diagram: `AI Tool
├── Writing
├── Coding
├── Research
├── Summarization
└── Productivity`,
    example: `Useful AI tasks:
- rewrite an email
- summarize meeting notes
- draft Python code
- explain a cloud concept`,
    whyMatters: `Real users care about useful outcomes, not buzzwords. This lesson helps you think in practical value and use-case language.`,
    quiz: [
      {
        question: "Which is a common AI use case?",
        options: ["Meeting summarization", "Replacing electricity", "Building roads only", "Only making sounds"],
        answer: 0,
        explanation: "Summarization is a very common AI use case."
      },
      {
        question: "What is the real value of AI tools?",
        options: ["Looking impressive only", "Saving time and improving output quality", "Removing all judgment", "Replacing every job immediately"],
        answer: 1,
        explanation: "AI tools are valuable when they improve practical work."
      },
      {
        question: "AI can help with:",
        options: ["Writing and coding", "Only washing cars", "Only replacing batteries", "Only gaming hardware"],
        answer: 0,
        explanation: "AI commonly helps with writing, coding, and research."
      }
    ]
  },
  {
    id: 8,
    level: "Intermediate",
    title: "Python + AI Basics",
    summary: "Understand how Python fits into AI workflows.",
    objectives: ["Connect Python and AI", "Know common libraries", "See project possibilities"],
    content: `
      <p>Python is one of the most important languages in AI because it is simple, popular, and has strong libraries.</p>
      <ul>
        <li>Used in data analysis</li>
        <li>Used in ML workflows</li>
        <li>Used for automation and AI apps</li>
      </ul>
      <p>Even if you do not train models yourself, Python helps you build AI-enabled products and workflows.</p>
    `,
    diagram: `Python
├── Data
├── Automation
├── APIs
└── AI Apps`,
    example: `Simple Python + AI idea:
Python app → send prompt to AI API → receive response → display result`,
    whyMatters: `Python is a bridge skill. It connects your coding ability to practical AI projects and app building.`,
    quiz: [
      {
        question: "Why is Python important in AI?",
        options: ["It has no libraries", "It is widely used and practical", "It only works offline", "It cannot automate anything"],
        answer: 1,
        explanation: "Python is widely used in AI because it is practical and well-supported."
      },
      {
        question: "Python can help with AI by:",
        options: ["Building apps and workflows", "Removing networking", "Only changing colors", "Only deleting logs"],
        answer: 0,
        explanation: "Python is often used to build AI tools and workflows."
      },
      {
        question: "Python + AI is useful for:",
        options: ["Automation", "App building", "Data work", "All of these"],
        answer: 3,
        explanation: "Python supports all of these areas."
      }
    ]
  },
  {
    id: 9,
    level: "Advanced",
    title: "Building AI Apps",
    summary: "Learn the high-level workflow for simple AI-powered applications.",
    objectives: ["Understand AI app flow", "Think in product workflows", "Know user → prompt → result"],
    content: `
      <p>Many AI apps follow a simple pattern:</p>
      <ol>
        <li>User gives input</li>
        <li>System builds a prompt or request</li>
        <li>AI generates output</li>
        <li>App displays, stores, or transforms the result</li>
      </ol>
      <p>The product value comes from making that flow useful, reliable, and clear.</p>
    `,
    diagram: `User Input
   |
App Logic
   |
Prompt / API Request
   |
AI Model
   |
Output to User`,
    example: `Example app:
User asks for interview answer
→ app sends structured prompt
→ AI returns draft
→ app formats answer`,
    whyMatters: `This lesson helps you think like a builder, not only a user. AI app thinking is what turns knowledge into products.`,
    quiz: [
      {
        question: "What is a common AI app flow?",
        options: [
          "User input → app logic → AI output",
          "Cable → battery → printer",
          "Bucket → subnet → keyboard",
          "Firewall → router → coffee"
        ],
        answer: 0,
        explanation: "Many AI apps follow a user input to AI output flow."
      },
      {
        question: "What adds product value to AI apps?",
        options: ["Random prompts only", "Useful and reliable workflow design", "No user input", "No formatting"],
        answer: 1,
        explanation: "Value comes from usefulness and reliable workflow."
      },
      {
        question: "An AI app often starts with:",
        options: ["User input", "Only a database backup", "Only system shutdown", "Only cloud billing"],
        answer: 0,
        explanation: "User input is commonly the start of the flow."
      }
    ]
  },
  {
    id: 10,
    level: "Advanced",
    title: "AI Product Thinking",
    summary: "Learn how to think about AI as a product, not just a tool.",
    objectives: ["Think in user value", "Understand workflows", "Focus on outcomes"],
    content: `
      <p>A useful AI product solves a real problem for a real person.</p>
      <ul>
        <li>Who is the user?</li>
        <li>What pain point exists?</li>
        <li>How does AI improve the workflow?</li>
        <li>What still needs human review?</li>
      </ul>
      <p>Strong AI products combine model capability with clear UX and useful outputs.</p>
    `,
    diagram: `User Problem
   |
Workflow
   |
AI Capability
   |
Useful Product Outcome`,
    example: `Bad idea:
"AI because it sounds cool"

Better idea:
"AI that helps job seekers write stronger interview answers faster"`,
    whyMatters: `This is what separates random AI demos from useful products. It helps you build things people actually want.`,
    quiz: [
      {
        question: "A strong AI product starts with:",
        options: ["A real user problem", "A random color theme", "No user need", "Only a logo"],
        answer: 0,
        explanation: "Strong products start with a real problem."
      },
      {
        question: "What should AI improve?",
        options: ["The workflow or outcome", "Only button color", "Only keyboard layout", "Nothing measurable"],
        answer: 0,
        explanation: "AI should improve a meaningful workflow or outcome."
      },
      {
        question: "What helps turn AI into a product?",
        options: ["Clear UX and useful outputs", "Only hype words", "No structure", "No user focus"],
        answer: 0,
        explanation: "Good AI products combine capability with UX and usefulness."
      }
    ]
  }
];

const roadmapData = [
  {
    stage: "Stage 1: Foundations",
    items: [
      "What AI is",
      "AI vs ML vs GenAI",
      "Basic terminology",
      "Practical use cases"
    ]
  },
  {
    stage: "Stage 2: Prompting",
    items: [
      "Prompt engineering basics",
      "Prompt patterns",
      "Better instructions",
      "Output formatting"
    ]
  },
  {
    stage: "Stage 3: Safe and Smart Use",
    items: [
      "Hallucinations",
      "Verification habits",
      "Strengths and limits",
      "Responsible usage"
    ]
  },
  {
    stage: "Stage 4: Building with AI",
    items: [
      "Python + AI",
      "AI app workflows",
      "AI product thinking",
      "Project building"
    ]
  }
];

const projects = [
  {
    title: "Project 1: AI Resume Helper",
    level: "Beginner",
    duration: "1–2 hours",
    skills: ["Prompting", "editing", "job search"],
    description: "Create a prompt-based workflow that helps improve resume bullets and summaries.",
    steps: [
      "Define user input",
      "Create prompt template",
      "Generate improved resume output",
      "Review and refine manually"
    ]
  },
  {
    title: "Project 2: Interview Answer Assistant",
    level: "Beginner",
    duration: "1–2 hours",
    skills: ["Prompt engineering", "career prep"],
    description: "Build a simple system that drafts interview answers from user questions.",
    steps: [
      "Write role-based prompt",
      "Set answer style",
      "Generate response",
      "Refine for real-world use"
    ]
  },
  {
    title: "Project 3: Meeting Notes Summarizer",
    level: "Intermediate",
    duration: "2 hours",
    skills: ["Summarization", "workflow design"],
    description: "Turn long notes into short action-focused summaries.",
    steps: [
      "Collect raw notes",
      "Define summary format",
      "Generate summary",
      "Extract action items"
    ]
  },
  {
    title: "Project 4: Python + AI Prompt App",
    level: "Intermediate",
    duration: "2–3 hours",
    skills: ["Python", "AI APIs", "basic app flow"],
    description: "Build a simple Python app that sends a prompt and shows an AI response.",
    steps: [
      "Create input field or CLI input",
      "Send structured prompt",
      "Receive output",
      "Display clean result"
    ]
  },
  {
    title: "Project 5: AI Study Assistant",
    level: "Advanced",
    duration: "3 hours",
    skills: ["Prompt chains", "learning UX", "content design"],
    description: "Create an AI workflow that explains a topic, quizzes the learner, and suggests next steps.",
    steps: [
      "Explain topic",
      "Generate quiz",
      "Check understanding",
      "Recommend next lesson"
    ]
  },
  {
    title: "Project 6: AI Product Idea Validator",
    level: "Advanced",
    duration: "2–4 hours",
    skills: ["product thinking", "market framing", "AI workflows"],
    description: "Build a workflow that helps turn rough ideas into clearer product concepts.",
    steps: [
      "Capture idea",
      "Ask problem-focused questions",
      "Generate feature framing",
      "Produce clearer product summary"
    ]
  }
];

const finalExamQuestions = [
  {
    id: 1,
    question: "What is AI?",
    options: [
      "Only physical robots",
      "Machines performing tasks requiring human-like intelligence",
      "Only internet cables",
      "Only cloud storage"
    ],
    answer: 1
  },
  {
    id: 2,
    question: "Which term is the broadest?",
    options: ["Generative AI", "Machine Learning", "AI", "Prompting"],
    answer: 2
  },
  {
    id: 3,
    question: "What is prompt engineering?",
    options: [
      "Building chips",
      "Writing better instructions for AI systems",
      "Only server management",
      "Deleting prompts"
    ],
    answer: 1
  },
  {
    id: 4,
    question: "What is a hallucination in AI?",
    options: [
      "A guaranteed truth",
      "A false but confident AI answer",
      "A type of database",
      "A cloud subnet"
    ],
    answer: 1
  },
  {
    id: 5,
    question: "What are LLMs strong at?",
    options: ["Language tasks", "Only hardware repair", "Only physical construction", "Only antivirus updates"],
    answer: 0
  },
  {
    id: 6,
    question: "Why is Python useful in AI?",
    options: [
      "It cannot build workflows",
      "It is widely used and practical",
      "It only changes colors",
      "It removes the need for prompts"
    ],
    answer: 1
  },
  {
    id: 7,
    question: "A strong AI product starts with:",
    options: ["A real user problem", "Only a logo", "No workflow", "No output need"],
    answer: 0
  },
  {
    id: 8,
    question: "What usually improves AI output?",
    options: ["Vague prompts", "No context", "Clearer instructions", "Random words"],
    answer: 2
  }
];

let selectedLessonId = 1;
let currentFilter = "All";

const lessonList = document.getElementById("lessonList");
const lessonSearch = document.getElementById("lessonSearch");
const lessonTitle = document.getElementById("lessonTitle");
const lessonSummary = document.getElementById("lessonSummary");
const lessonLevelBadge = document.getElementById("lessonLevelBadge");
const lessonObjectives = document.getElementById("lessonObjectives");
const lessonContent = document.getElementById("lessonContent");
const lessonDiagram = document.getElementById("lessonDiagram");
const lessonCodeBlock = document.getElementById("lessonCodeBlock");
const lessonWhyMatters = document.getElementById("lessonWhyMatters");
const quizContainer = document.getElementById("quizContainer");
const quizScoreBox = document.getElementById("quizScoreBox");

const roadmapGrid = document.getElementById("roadmapGrid");
const projectGrid = document.getElementById("projectGrid");
const examContainer = document.getElementById("examContainer");
const examResultBox = document.getElementById("examResultBox");

const statLessons = document.getElementById("statLessons");
const statCompleted = document.getElementById("statCompleted");
const statProjects = document.getElementById("statProjects");
const statExamScore = document.getElementById("statExamScore");
const statProgress = document.getElementById("statProgress");
const bestExamScore = document.getElementById("bestExamScore");

const markCompleteBtn = document.getElementById("markCompleteBtn");
const resetProgressBtn = document.getElementById("resetProgressBtn");
const themeToggle = document.getElementById("themeToggle");
const submitExamBtn = document.getElementById("submitExamBtn");
const resetExamBtn = document.getElementById("resetExamBtn");
const startPathBtn = document.getElementById("startPathBtn");

const studentNameInput = document.getElementById("studentNameInput");
const certificateTrackSelect = document.getElementById("certificateTrackSelect");
const generateCertificateBtn = document.getElementById("generateCertificateBtn");
const printCertificateBtn = document.getElementById("printCertificateBtn");
const certificateNamePreview = document.getElementById("certificateNamePreview");
const certificateTrackPreview = document.getElementById("certificateTrackPreview");
const certificateLessonsPreview = document.getElementById("certificateLessonsPreview");
const certificateExamPreview = document.getElementById("certificateExamPreview");
const certificateDatePreview = document.getElementById("certificateDatePreview");
const certificateLessonsDone = document.getElementById("certificateLessonsDone");
const certificateExamDone = document.getElementById("certificateExamDone");
const certificateStatusText = document.getElementById("certificateStatusText");
const certificateProjectsDone = document.getElementById("certificateProjectsDone");
const certificateIdPreview = document.getElementById("certificateIdPreview");

function getLessonProgress() {
  return JSON.parse(localStorage.getItem("youooo-ai-progress") || "{}");
}
function saveLessonProgress(progress) {
  localStorage.setItem("youooo-ai-progress", JSON.stringify(progress));
}
function getExamBestScore() {
  return Number(localStorage.getItem("youooo-ai-exam-best") || 0);
}
function saveExamBestScore(score) {
  localStorage.setItem("youooo-ai-exam-best", String(score));
}
function isLessonComplete(id) {
  return !!getLessonProgress()[id];
}

function generateCertificateId(name) {
  const safe = (name || "USER").replace(/\s+/g, "").slice(0, 3).toUpperCase() || "USR";
  const exam = String(getExamBestScore()).padStart(2, "0");
  const lessonsDone = String(Object.keys(getLessonProgress()).filter((id) => getLessonProgress()[id]).length).padStart(2, "0");
  return `YAI-${safe}-${lessonsDone}${exam}`;
}

function updateStats() {
  const lessonProgress = getLessonProgress();
  const completedLessons = Object.keys(lessonProgress).filter((id) => lessonProgress[id]).length;
  const examScore = getExamBestScore();

  const totalLessons = lessons.length;
  const examPortion = examScore >= 70 ? 1 : 0;
  const overallTotal = totalLessons + 1;
  const overallDone = completedLessons + examPortion;
  const percent = Math.round((overallDone / overallTotal) * 100);

  statLessons.textContent = totalLessons;
  statCompleted.textContent = completedLessons;
  statProjects.textContent = projects.length;
  statExamScore.textContent = `${examScore}%`;
  statProgress.textContent = `${percent}%`;
  bestExamScore.textContent = `${examScore}%`;

  certificateLessonsDone.textContent = completedLessons;
  certificateExamDone.textContent = `${examScore}%`;
  certificateProjectsDone.textContent = projects.length;

  certificateLessonsPreview.textContent = completedLessons;
  certificateExamPreview.textContent = `${examScore}%`;

  const completedStatus =
    completedLessons >= Math.ceil(lessons.length * 0.7) &&
    examScore >= 70;

  certificateStatusText.textContent = completedStatus ? "Ready" : "In Progress";
  certificateIdPreview.textContent = generateCertificateId(studentNameInput.value.trim());
}

function renderLessons() {
  const search = lessonSearch.value.toLowerCase().trim();

  const filtered = lessons.filter((lesson) => {
    const matchesLevel = currentFilter === "All" || lesson.level === currentFilter;
    const matchesSearch =
      lesson.title.toLowerCase().includes(search) ||
      lesson.summary.toLowerCase().includes(search) ||
      lesson.level.toLowerCase().includes(search);

    return matchesLevel && matchesSearch;
  });

  lessonList.innerHTML = "";

  filtered.forEach((lesson) => {
    const item = document.createElement("div");
    item.className = `lesson-item ${lesson.id === selectedLessonId ? "active" : ""}`;
    item.innerHTML = `
      <h4>${lesson.title}</h4>
      <div class="lesson-meta">
        <span>${lesson.level}</span>
        <span class="${isLessonComplete(lesson.id) ? "lesson-complete" : ""}">
          ${isLessonComplete(lesson.id) ? "Completed" : "Not done"}
        </span>
      </div>
      <p class="muted" style="margin: 10px 0 0;">${lesson.summary}</p>
    `;
    item.addEventListener("click", () => {
      selectedLessonId = lesson.id;
      renderLessons();
      renderSelectedLesson();
    });
    lessonList.appendChild(item);
  });

  if (!filtered.length) {
    lessonList.innerHTML = `<p class="muted">No lessons found.</p>`;
  }
}

function renderQuiz(lesson) {
  quizContainer.innerHTML = "";
  quizScoreBox.textContent = "Answer the lesson quiz to see your score.";

  lesson.quiz.forEach((q, qIndex) => {
    const card = document.createElement("div");
    card.className = "quiz-question-card";

    const optionsHtml = q.options
      .map((option, optionIndex) => `
        <button class="quiz-option" data-q-index="${qIndex}" data-option-index="${optionIndex}">
          ${option}
        </button>
      `)
      .join("");

    card.innerHTML = `
      <h4>Question ${qIndex + 1}: ${q.question}</h4>
      <div class="quiz-options">${optionsHtml}</div>
      <div class="quiz-feedback" id="quiz-feedback-${qIndex}" style="display:none;"></div>
    `;

    quizContainer.appendChild(card);
  });

  const userAnswers = new Array(lesson.quiz.length).fill(null);

  quizContainer.querySelectorAll(".quiz-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const qIndex = Number(btn.dataset.qIndex);
      const optionIndex = Number(btn.dataset.optionIndex);
      const q = lesson.quiz[qIndex];

      userAnswers[qIndex] = optionIndex;

      const questionButtons = quizContainer.querySelectorAll(`.quiz-option[data-q-index="${qIndex}"]`);
      questionButtons.forEach((b) => {
        b.disabled = true;
        const idx = Number(b.dataset.optionIndex);
        if (idx === q.answer) b.classList.add("correct");
        else if (idx === optionIndex && optionIndex !== q.answer) b.classList.add("wrong");
      });

      const feedback = document.getElementById(`quiz-feedback-${qIndex}`);
      feedback.style.display = "block";
      feedback.innerHTML =
        optionIndex === q.answer
          ? `<strong>Correct.</strong> ${q.explanation}`
          : `<strong>Not correct.</strong> ${q.explanation}`;

      const answeredCount = userAnswers.filter((v) => v !== null).length;
      if (answeredCount === lesson.quiz.length) {
        const correctCount = userAnswers.filter((ans, idx) => ans === lesson.quiz[idx].answer).length;
        const percent = Math.round((correctCount / lesson.quiz.length) * 100);
        quizScoreBox.textContent = `Lesson quiz score: ${correctCount}/${lesson.quiz.length} (${percent}%)`;
      }
    });
  });
}

function renderSelectedLesson() {
  const lesson = lessons.find((l) => l.id === selectedLessonId);
  if (!lesson) return;

  lessonTitle.textContent = lesson.title;
  lessonSummary.textContent = lesson.summary;
  lessonLevelBadge.textContent = lesson.level;
  lessonContent.innerHTML = lesson.content;
  lessonDiagram.textContent = lesson.diagram;
  lessonCodeBlock.textContent = lesson.example;
  lessonWhyMatters.textContent = lesson.whyMatters;

  lessonObjectives.innerHTML = lesson.objectives
    .map((objective) => `<span class="objective-chip">${objective}</span>`)
    .join("");

  renderQuiz(lesson);
}

function renderRoadmap() {
  roadmapGrid.innerHTML = "";
  roadmapData.forEach((stage) => {
    const card = document.createElement("div");
    card.className = "roadmap-card";
    card.innerHTML = `
      <h3>${stage.stage}</h3>
      <ul>
        ${stage.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;
    roadmapGrid.appendChild(card);
  });
}

function renderProjects() {
  projectGrid.innerHTML = "";

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <div class="project-meta">
        <span class="project-tag">${project.level}</span>
        <span class="project-tag">${project.duration}</span>
      </div>
      <p class="muted">${project.description}</p>
      <div class="project-meta">
        ${project.skills.map((skill) => `<span class="project-tag">${skill}</span>`).join("")}
      </div>
      <h4>Build Steps</h4>
      <ul class="project-list">
        ${project.steps.map((step) => `<li>${step}</li>`).join("")}
      </ul>
    `;
    projectGrid.appendChild(card);
  });
}

function renderExam() {
  examContainer.innerHTML = "";

  finalExamQuestions.forEach((q, index) => {
    const card = document.createElement("div");
    card.className = "exam-question-card";

    const optionsHtml = q.options
      .map(
        (option, optionIndex) => `
          <label class="exam-option">
            <input type="radio" name="exam-q-${q.id}" value="${optionIndex}" />
            ${option}
          </label>
        `
      )
      .join("");

    card.innerHTML = `
      <h4>Question ${index + 1}: ${q.question}</h4>
      <div class="exam-options">${optionsHtml}</div>
    `;

    examContainer.appendChild(card);
  });
}

function calculateExamScore() {
  let correct = 0;

  finalExamQuestions.forEach((q) => {
    const selected = document.querySelector(`input[name="exam-q-${q.id}"]:checked`);
    if (selected && Number(selected.value) === q.answer) {
      correct += 1;
    }
  });

  return Math.round((correct / finalExamQuestions.length) * 100);
}

function resetExamSelections() {
  document.querySelectorAll('#examContainer input[type="radio"]').forEach((input) => {
    input.checked = false;
  });
  examResultBox.textContent = "Your exam result will appear here.";
  examResultBox.className = "exam-result-box muted";
}

function updateCertificatePreview() {
  const name = studentNameInput.value.trim() || "Your Name Here";
  const track = certificateTrackSelect.value;
  const today = new Date().toLocaleDateString();

  certificateNamePreview.textContent = name;
  certificateTrackPreview.textContent = track;
  certificateDatePreview.textContent = today;
  certificateIdPreview.textContent = generateCertificateId(name);
}

function loadTheme() {
  const saved = localStorage.getItem("youooo-ai-theme");
  if (saved === "light") {
    document.body.classList.add("light");
  }
}

function saveTheme() {
  localStorage.setItem(
    "youooo-ai-theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
}

function setupTabs() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"));

      btn.classList.add("active");
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add("active");
    });
  });
}

markCompleteBtn.addEventListener("click", () => {
  const progress = getLessonProgress();
  progress[selectedLessonId] = true;
  saveLessonProgress(progress);
  updateStats();
  renderLessons();
  updateCertificatePreview();
});

resetProgressBtn.addEventListener("click", () => {
  const confirmed = confirm("Reset all lesson and exam progress?");
  if (!confirmed) return;

  localStorage.removeItem("youooo-ai-progress");
  localStorage.removeItem("youooo-ai-exam-best");

  updateStats();
  renderLessons();
  resetExamSelections();
  updateCertificatePreview();
});

lessonSearch.addEventListener("input", renderLessons);

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.level;
    renderLessons();
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  saveTheme();
});

submitExamBtn.addEventListener("click", () => {
  const score = calculateExamScore();
  const previousBest = getExamBestScore();

  if (score > previousBest) {
    saveExamBestScore(score);
  }

  updateStats();
  updateCertificatePreview();

  let message = `Your score: ${score}%`;
  if (score >= 85) {
    message += " • Excellent work.";
    examResultBox.className = "exam-result-box";
  } else if (score >= 70) {
    message += " • You passed.";
    examResultBox.className = "exam-result-box";
  } else {
    message += " • Keep studying and try again.";
    examResultBox.className = "exam-result-box";
  }

  examResultBox.textContent = message;
});

resetExamBtn.addEventListener("click", () => {
  resetExamSelections();
});

generateCertificateBtn.addEventListener("click", () => {
  updateStats();
  updateCertificatePreview();
});

printCertificateBtn.addEventListener("click", () => {
  updateStats();
  updateCertificatePreview();
  window.print();
});

studentNameInput.addEventListener("input", () => {
  updateCertificatePreview();
  updateStats();
});
certificateTrackSelect.addEventListener("change", updateCertificatePreview);

startPathBtn.addEventListener("click", () => {
  selectedLessonId = 1;
  document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"));
  document.querySelector('.tab-btn[data-tab="academyTab"]').classList.add("active");
  document.getElementById("academyTab").classList.add("active");
  renderLessons();
  renderSelectedLesson();
  document.querySelector(".lesson-panel").scrollIntoView({ behavior: "smooth", block: "start" });
});

function init() {
  loadTheme();
  setupTabs();
  updateStats();
  renderLessons();
  renderSelectedLesson();
  renderRoadmap();
  renderProjects();
  renderExam();
  updateCertificatePreview();
}

init();
