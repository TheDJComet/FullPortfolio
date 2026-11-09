// 
//
// To add a project screenshot:
//   1. Put the image in public/projects/ (16:10 looks best, e.g. 1600x1000).
//   2. Set the project's `image` to its path, e.g. image: '/projects/ecommerce.png'.
//
// To add a deployment or code link, paste the URL into `live` or `code`.
// Links left empty stay hidden on the published site.
//
// To change the three projects on the home page, move `featured: true`.

export const profile = {
  name: 'D’Andre Johnson',
  initials: 'DJ',
  photo: '/headshot.png',
  eyebrow: 'CS + Cybersecurity · Class of 2026',
  roles: ['Full-stack .NET developer', 'Frontend developer', 'Cybersecurity graduate'],
  summary:
    'I build secure, end-to-end applications, from C# backends and relational databases to iOS and web interfaces, with authentication and access control designed in from the start.',
  email: 'johnsondandrebusiness@gmail.com',
  github: 'https://github.com/TheDJComet',
  linkedin: 'https://www.linkedin.com/in/johnsondandre',
}


export const resumes = [
  { label: 'Full-stack resume', file: '/resumes/JohnsonDandre Fullstack Resume.pdf' },
  { label: 'Frontend resume', file: '/resumes/JohnsonDandre Frontend Resume.pdf' },
  { label: 'Cybersecurity resume', file: '/resumes/JohnsonDandre Cybersecurity Resume.pdf' },
]

export const projects = [
  {
    slug: 'morning-brew',
    title: 'The Morning Brew Coffee Shop',
    category: 'software',
    featured: true,
    summary:
      'A concept website I designed and built for a coffee shop in East Stroudsburg, PA, bringing together its story, menu, coffee flights, customer reviews, hours and map directions.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Motion'],
    image: '/projects/morning-brew.webp',
    live: 'https://morning-brew-web.vercel.app',
    code: '',
  },
  {
    slug: 'ecommerce',
    title: 'Full-Stack E-Commerce Platform',
    category: 'software',
    featured: true,
    summary:
      'A marketplace with buyer, seller and admin roles. I led the frontend and built the .NET and SQLite backend, including authentication, role-based access, cart, checkout, orders and admin moderation.',
    tags: ['.NET', 'SQLite', 'RBAC', 'UML'],
    image: '/projects/ecommerce.jpg',
    live: '',
    code: '',
  },
  {
    slug: 'volunteer-board',
    title: 'Volunteer Opportunity Board',
    category: 'software',
    featured: true,
    summary:
      'An iOS app built during my Neofortunity internship. I created its views and models in MVVM, designed separate flows for each user role, and connected the UI to Firebase.',
    tags: ['Swift', 'SwiftUI', 'MVVM', 'Firebase'],
    image: '',
    live: '',
    code: '',
  },
  {
    slug: 'job-agent',
    title: 'AI Job Application Agent',
    category: 'software',
    summary:
      'Automates job applications with the Claude API and RapidAPI, generating cover letters scored against each job description. API keys stay in environment variables, out of version control.',
    tags: ['Claude API', 'RapidAPI', 'Automation'],
    image: '',
    live: '',
    code: '',
  },
  {
    slug: 'mechanic-shop',
    title: 'Mechanic Shop Database System',
    category: 'software',
    summary:
      'A C# .NET employee portal backed by MSSQL Server in Docker, with appointment scheduling across customers, cars, mechanics and services, plus analytics powered by SQL functions.',
    tags: ['C#', '.NET', 'MSSQL', 'Docker'],
    image: '',
    live: '',
    code: '',
  },
  {
    slug: 'cherry-valley',
    title: 'Cherry Valley Wildlife Refuge Pages',
    category: 'software',
    summary:
      'A service-learning project for Cherry Valley National Wildlife Refuge: a landing page to guide visitors and a conceptual page for posting events to a calendar.',
    tags: ['HTML', 'CSS'],
    image: '',
    live: '',
    code: '',
  },
  {
    slug: 'first-portfolio',
    title: 'Multi-Page Portfolio Site',
    category: 'software',
    summary:
      'An earlier personal portfolio I designed and built by hand, version-controlled on GitHub.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '',
    live: '',
    code: '',
  },
  {
    slug: 'cipher-toolkit',
    title: 'Cipher & Cryptanalysis Toolkit',
    category: 'security',
    summary:
      'Software to encrypt, decrypt and attack Caesar, Vigenère, Hill, MDES, Triple DES and S-AES, using frequency analysis, brute-force and known-plaintext attacks, with a paper on the tested results.',
    tags: ['Cryptography', 'Cryptanalysis'],
    image: '',
    live: '',
    code: '',
  },
  {
    slug: 'aes-cbc',
    title: 'AES-CBC Implementation',
    category: 'security',
    summary:
      'AES-128 in CBC mode for multi-block messages, with an analysis of how ciphertext corruption propagates through decryption.',
    tags: ['AES-128', 'CBC'],
    image: '',
    live: '',
    code: '',
  },
  {
    slug: 'rsa-keygen',
    title: 'RSA Key Generation',
    category: 'security',
    summary:
      'RSA key generation in C++ using a prime sieve, the extended Euclidean algorithm and fast modular exponentiation.',
    tags: ['C++', 'RSA'],
    image: '',
    live: '',
    code: '',
  },
  {
    slug: 'iomt-paper',
    title: 'IoMT Security Research Paper',
    category: 'security',
    summary:
      'Research into the risks facing medical device networks and defenses such as segmentation and encryption.',
    tags: ['Research', 'Network Security'],
    image: '',
    live: '',
    code: '',
  },
]

export const projectGroups = [
  { id: 'software', title: 'Software' },
  { id: 'security', title: 'Security' },
]

export const skillGroups = [
  {
    id: 'security',
    title: 'Security',
    skills: [
      'Active Directory',
      'Cryptography (AES, DES, RSA)',
      'Cryptanalysis',
      'Risk Assessment',
      'Network Segmentation',
      'Authentication',
      'RBAC',
      'Secure Credential Storage',
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    skills: ['C#', 'C++', 'C', 'Python', 'JavaScript', 'SQL', 'Swift', 'Java', 'HTML', 'CSS', 'Assembly'],
  },
  {
    id: 'stack',
    title: 'Stack',
    skills: [
      '.NET',
      '.NET MAUI',
      'React',
      'SwiftUI',
      'MVVM',
      'REST APIs',
      'GraphQL',
      'Firebase / Firestore',
      'SQLite',
      'MSSQL',
      'Responsive UI',
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: ['Nmap', 'Linux (Ubuntu)', 'Bash', 'Docker', 'Git', 'Visual Studio', 'VS Code', 'Xcode', 'macOS', 'PlantUML'],
  },
]

export const education = {
  school: 'East Stroudsburg University',
  degrees: ['B.S. Computer Science', 'B.S. Cyber Security'],
  detail: 'Graduated May 2026 · Dean’s List',
}

export const training = {
  title: 'EC-Council Labs',
  summary: 'Completed 20 hands-on cybersecurity labs.',
  // Add the other lab topics here and they will appear on the site.
  topics: ['Active Directory'],
}

export const experience = [
  {
    role: 'Frontend Developer Intern',
    organization: 'Neofortunity',
    dates: 'Jan 2026 – Aug 2026',
    points: [
      'Built the frontend of a volunteer-opportunity iOS app in Swift and SwiftUI using MVVM.',
      'Designed the navigation, including separate flows for each user role.',
      'Worked with the backend developer to connect the UI to Firebase/Firestore.',
    ],
  },
  {
    role: 'Cryptography Intern (CPSC 487)',
    organization: 'East Stroudsburg University',
    dates: 'Jan 2026 – May 2026',
    points: [
      'Developed software to encrypt, decrypt and cryptanalyze classical and modern ciphers.',
      'Demonstrated weaknesses in historical ciphers and authored a paper on the tested results.',
    ],
  },
  {
    role: 'Frontend, Direct Service-Learning',
    organization: 'Cherry Valley National Wildlife Refuge',
    dates: 'Fall 2024',
    points: ['Built landing and conceptual events pages in HTML and CSS.'],
  },
  {
    role: 'Aviation Operations Specialist (15P)',
    organization: 'Army National Guard',
    dates: '2019 – 2023',
    points: [
      'Monitored flights and responded to emergencies in high-pressure environments.',
      'Completed the Basic Leadership Course.',
    ],
  },
]
