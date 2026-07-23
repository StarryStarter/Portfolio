export const profile = {
  name: 'Sachin Kumar',
  role: 'Software Engineer · AI Engineer · Full-Stack Developer',
  tagline:
    'I build modern web applications and AI-powered products that solve real-world problems. Passionate about creating seamless user experiences, scalable systems, and turning ideas into impactful software.',
  location: 'Gaya, Bihar, India',
  email: 'sachinkumar91133019@google.com',
  resumeUrl: '/Sachin_Kumar_CV.pdf',
  socials: {
    github: 'https://github.com/StarryStarter',
    linkedin: 'https://www.linkedin.com/in/sachin-kumar-0b8590284/',
    // twitter: 'https://twitter.com/',
    // leetcode: 'https://leetcode.com/',
  },
}

export const roles = ['Software Engineer', 'AI Engineer', 'Full-Stack Developer']

export const about = {
  paragraphs: [
    "Curiosity has always driven me to learn and improve. I enjoy understanding how things work, solving challenging problems, and turning ideas into practical software. Building projects is where I learn the most, and I enjoy the process of taking an idea from concept to a working application.",
    'My primary interests are software engineering, AI, and full-stack development. I like working across the stack—from designing clean, responsive user interfaces to building reliable backends and experimenting with AI-powered applications. Every project gives me an opportunity to explore new technologies and strengthen my engineering skills.',
    "Outside of projects, I spend time solving coding problems, exploring new tools and frameworks, and continuously learning through hands-on practice. I'm always looking for opportunities to grow as an engineer, collaborate with others, and build software that solves real-world problems.",
  ],
  stats: [
    { label: 'DSA Problems Solved', value: 650, suffix: '+' },
    { label: 'Coding Contests', value: 45, suffix: '+' },
    { label: 'JEE Physics Percentile', value: 100, suffix: '' },
    { label: 'Years Building', value: 3, suffix: '+' },
  ],
}

export const education = [
  {
    id: 'ism',
    school: 'Indian Institute of Technology (ISM) Dhanbad',
    degree: 'B.Tech, Electrical Engineering',
    period: '2023 — 2027',
    detail:
      'Focused on software engineering, AI, and problem solving.',
  },
]

export const experience = [
  {
    id: 'tm',
    company: 'Tech Mahindra',
    role: 'AI Intern',
    period: 'May 2026 — July 2026',
    points: [
      'Engineered an AI-powered Payment Failure Intelligence System using RAG for automated transaction failure analysis.',
      'Built scalable data pipelines, synthetic data generation, and fine-tuned a domain-specific LLM with QLoRA.',
      'Containerized and deployed the full-stack application with Docker, Render, Vercel, and PostgreSQL.',
    ],
  },
]

export const skills = {
  Languages: ['C++', 'Python', 'JavaScript', 'C', 'SQL'],
  Frameworks: ['React', 'Node.js', 'Express.js', 'FastAPI', 'LangChain', 'LangGraph'],
  AI: ['PyTorch', 'Transformers', 'RAG', 'QLoRA', 'Generative AI', 'Agentic AI'],
  Databases: ['PostgreSQL', 'ChromaDB'],
  Tools: ['Git', 'GitHub', 'Docker', 'Linux', 'Hugging Face', 'Ollama'],
  Core: ['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks'],
}
export const projects = [
  {
    id: 'pfis',
    title: 'Payment Failure Intelligence System',
    description:
      'AI-powered payment failure analysis platform using RAG and a domain-specific knowledge base to automate diagnosis and provide resolution recommendations. Use Email : sachinkumar91133019@gmail.com and Password : 1234567 for testing',
    stack: [
      'FastAPI',
      'React',
      'LangChain',
      'QLoRA',
      'ChromaDB',
      'PostgreSQL',
    ],
    links: { live: 'https://pfis-diagnostic-app.vercel.app/', code: 'https://github.com/StarryStarter/pfis-diagnostic-app' },
    accent: '#00E599',
  },
  {
    id: 'blogsy',
    title: 'Blogsy – AI Blogging Platform',
    description:
      'Full-stack AI blogging platform with AI-assisted content generation, role-based access control, and a comprehensive admin dashboard.',
    stack: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Gemini API',
      'JWT',
    ],
    links: { live: 'https://blogsy-full-stack-blogging-platform-three.vercel.app/', code: 'https://github.com/StarryStarter/blogsy' },
    accent: '#7C9CFF',
  },
  {
    id: 'skillnova',
    title: 'Skillnova – Course Selling Platform',
    description:
      'MERN-based course platform featuring secure authentication, course enrollment, responsive dashboards, and scalable REST APIs.',
    stack: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Tailwind CSS',
    ],
    links: { live: 'https://skill-nova-course-selling-app.vercel.app/', code: 'https://github.com/StarryStarter/skillnova' },
    accent: '#FF8A00',
  },
  {
    id: 'gpa',
    title: 'Graphical User Authentication System',
    description:
      'A secure graphical password authentication system using click-point images as an alternative to traditional text-based passwords.',
    stack: [
      'Flask',
      'SQLite',
      'SQLAlchemy',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    links: { live: '#', code: 'https://github.com/StarryStarter/visual-auth-system' },
    accent: '#B56EFF',
  },
]

export const achievements = [
  {
    id: 'a1',
    metric: '650+',
    title: 'DSA Problems Solved',
    detail: 'Across LeetCode, Codeforces, and CodeChef.',
  },
  {
    id: 'a2',
    metric: '100%',
    title: 'JEE Physics Percentile',
    detail: 'Scored 100 percentile in Physics in JEE Main 2023.',
  },
  {
    id: 'a3',
    metric: '2026',
    title: 'AI/LLM Internship',
    detail: 'Completed AI/LLM internship at Tech Mahindra Maker’s Lab.',
  },
]

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]
