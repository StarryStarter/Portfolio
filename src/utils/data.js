export const profile = {
  name: 'Sachin Kumar',
  role: 'Software Engineer · AI Engineer',
  tagline:
    "I design and ship intelligent systems — from real-time failure detection to applied machine learning — with the same rigor I'd bring to a proof.",
  location: 'Dhanbad, Jharkhand, India',
  email: 'sachin.kumar@example.com',
  resumeUrl: '/Sachin_Kumar_Resume.pdf',
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    leetcode: 'https://leetcode.com/',
  },
}

export const roles = ['AI Engineer', 'Software Engineer', 'ML Practitioner', 'Systems Thinker']

export const about = {
  paragraphs: [
    "I'm an Electrical Engineering undergraduate at IIT (ISM) Dhanbad who ended up falling for the part of engineering that never shows up in the datasheet — the software and intelligence layered on top of it.",
    'My work sits at the intersection of reliable systems and applied AI: building pipelines that catch failures before they become incidents, and models that turn noisy signals into decisions worth trusting.',
    "Outside of coursework, I spend my time on competitive programming and security-minded interface design — two disciplines that, surprisingly, sharpen the same instinct: think in edge cases first.",
  ],
  stats: [
    { label: 'DSA Problems Solved', value: 500, suffix: '+' },
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
    period: '2022 — 2026',
    detail:
      'Coursework in control systems, signal processing, and computing — paired with self-driven depth in machine learning and distributed systems.',
  },
]

export const experience = [
  {
    id: 'tm',
    company: 'Tech Mahindra',
    role: 'AI Intern',
    period: 'May 2025 — Present',
    points: [
      'Built and evaluated ML pipelines for anomaly and failure detection across enterprise payment workflows.',
      'Designed a Payment Failure Intelligence System that flags at-risk transactions before they fail, cutting manual triage effort.',
      'Collaborated with platform engineers to productionize models behind low-latency inference APIs.',
    ],
  },
]

export const skills = {
  Languages: ['C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  Frameworks: ['React', 'Node.js', 'Express', 'Flask', 'Tailwind CSS'],
  AI: ['PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'LangChain'],
  Cloud: ['AWS', 'Docker', 'Vercel', 'CI/CD'],
  Tools: ['Git', 'Postman', 'Figma', 'Linux', 'VS Code'],
}

export const projects = [
  {
    id: 'pfis',
    title: 'Payment Failure Intelligence System',
    description:
      'An ML-driven monitoring layer that predicts and explains payment failures in real time, giving support teams a ranked, root-cause-aware triage queue instead of a flat alert feed.',
    stack: ['Python', 'PyTorch', 'FastAPI', 'React', 'PostgreSQL'],
    links: { live: '#', code: '#' },
    accent: '#00E599',
  },
  {
    id: 'gpa',
    title: 'Graphical Password Authentication',
    description:
      'A click-sequence-based authentication scheme designed as a usable, shoulder-surf-resistant alternative to text passwords, with tolerance-zone matching and session-based hashing.',
    stack: ['JavaScript', 'Node.js', 'MongoDB', 'Canvas API'],
    links: { live: '#', code: '#' },
    accent: '#7C9CFF',
  },
]

export const achievements = [
  {
    id: 'a1',
    metric: '500+',
    title: 'DSA Problems Solved',
    detail: 'Across LeetCode, Codeforces, and GFG — building pattern recognition under time pressure.',
  },
  {
    id: 'a2',
    metric: '45+',
    title: 'Coding Contests',
    detail: 'Competitive programming contests across major platforms, ranked and rated.',
  },
  {
    id: 'a3',
    metric: '100ᵖᶜ',
    title: 'JEE Physics Percentile',
    detail: 'Perfect percentile in Physics in the Joint Entrance Examination.',
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
