export const templates = [
  {
    id: "code-review",
    icon: "🔍",
    title: "Code Review Request",
    description: "Get a thorough code review with specific improvement suggestions",
    category: "coding",
    prompt: "Review my code for bugs, performance issues, and best practices. Provide specific line-by-line feedback."
  },
  {
    id: "debug-help",
    icon: "🐛",
    title: "Debug Assistant",
    description: "Systematically troubleshoot and fix code issues",
    category: "coding",
    prompt: "Help me debug this issue. Walk through the problem step by step, identify potential causes, and suggest fixes."
  },
  {
    id: "essay-writer",
    icon: "✍️",
    title: "Structured Essay",
    description: "Write a well-organized essay with clear arguments",
    category: "writing",
    prompt: "Write a structured essay with a clear thesis, supporting arguments, and conclusion on the following topic."
  },
  {
    id: "data-analysis",
    icon: "📊",
    title: "Data Analysis",
    description: "Analyze data with insights, patterns, and recommendations",
    category: "analysis",
    prompt: "Analyze the following data. Identify key patterns, trends, anomalies, and provide actionable recommendations."
  },
  {
    id: "brainstorm",
    icon: "💡",
    title: "Idea Generator",
    description: "Generate creative ideas with pros and cons for each",
    category: "brainstorming",
    prompt: "Generate creative ideas for the following challenge. For each idea, include pros, cons, and implementation steps."
  },
  {
    id: "research-summary",
    icon: "📚",
    title: "Research Summary",
    description: "Summarize research with key findings and citations",
    category: "research",
    prompt: "Research and summarize the following topic. Include key findings, different perspectives, and reliable sources."
  },
  {
    id: "step-by-step",
    icon: "📋",
    title: "Step-by-Step Guide",
    description: "Create a detailed tutorial with numbered steps",
    category: "general",
    prompt: "Create a detailed step-by-step guide for the following task. Include prerequisites, numbered steps, and common pitfalls."
  },
  {
    id: "comparison",
    icon: "⚖️",
    title: "Compare & Contrast",
    description: "Compare options with a structured pros/cons analysis",
    category: "analysis",
    prompt: "Compare the following options. Create a structured comparison including features, pros, cons, and a final recommendation."
  },
];

export const tips = [
  {
    title: "Be Specific About Format",
    description: "Tell the AI exactly how you want the response structured — bullet points, numbered lists, tables, or paragraphs.",
    example: "\"List the top 5 strategies as numbered items, each with a one-line summary and a detailed explanation.\""
  },
  {
    title: "Define the Role",
    description: "Ask the AI to act as a specific expert. This focuses the response on relevant domain knowledge.",
    example: "\"Act as a senior software architect reviewing this system design for scalability issues.\""
  },
  {
    title: "Provide Context",
    description: "Give background information so the AI understands your situation. More context = more relevant answers.",
    example: "\"I'm a beginner learning Python for data science. Explain pandas DataFrames with simple examples.\""
  },
  {
    title: "Set Constraints",
    description: "Define boundaries like word count, complexity level, or specific areas to focus on.",
    example: "\"Explain quantum computing in under 200 words, suitable for a 10-year-old.\""
  },
  {
    title: "Ask for Reasoning",
    description: "Request the AI to show its thinking process. This leads to more accurate and transparent responses.",
    example: "\"Solve this problem step-by-step, explaining your reasoning at each stage before giving the final answer.\""
  },
  {
    title: "Use Examples",
    description: "Show the AI what good output looks like by providing an example of the format or style you want.",
    example: "\"Format each item like this — Name: [name] | Category: [cat] | Rating: [1-5]\""
  },
  {
    title: "Break Down Complex Tasks",
    description: "Split large requests into smaller, focused prompts. You'll get better results for each part.",
    example: "Instead of \"write me a business plan\", ask for the executive summary first, then market analysis, then financials."
  },
  {
    title: "Specify What to Avoid",
    description: "Tell the AI what you don't want. This prevents common issues like filler text or generic advice.",
    example: "\"Don't include generic motivational quotes. Focus only on actionable, data-backed strategies.\""
  },
];