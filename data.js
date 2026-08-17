/* EDUNOVA Demo Data */

const EDUNOVA_DATA = {
  student: {
    name: 'Aarav Mehta',
    email: 'aarav.mehta@email.com',
    phone: '+91 98765 43210',
    class: 'Class 12',
    goal: 'JEE Advanced 2027',
    avatar: 'AM',
    streak: 12,
    totalLessons: 148,
    completedLessons: 101,
    quizAvg: 87,
    certificates: 3
  },

  courses: [
    {
      id: 'jee-adv-2027',
      title: 'JEE Advanced 2027',
      category: 'JEE',
      faculty: 'Dr. Rahul Sharma',
      rating: 4.9,
      students: 12450,
      duration: '18 months',
      price: 24999,
      originalPrice: 39999,
      discount: 38,
      bestseller: true,
      level: 'Advanced',
      language: 'English + Hindi',
      image: '🔬',
      description: 'Complete preparation for JEE Advanced with expert faculty, live classes, and comprehensive study material.',
      progress: 68,
      enrolled: true,
      lastWatched: 'Optics — Ray Diagrams',
      lessons: 240,
      completedLessons: 163
    },
    {
      id: 'neet-complete',
      title: 'NEET Complete Preparation',
      category: 'NEET',
      faculty: 'Dr. Priya Nair',
      rating: 4.8,
      students: 18200,
      duration: '16 months',
      price: 22999,
      originalPrice: 34999,
      discount: 34,
      bestseller: true,
      level: 'Advanced',
      language: 'English + Hindi',
      image: '🧬',
      description: 'Comprehensive NEET preparation covering Physics, Chemistry and Biology with regular mock tests.',
      progress: 0,
      enrolled: false,
      lessons: 280
    },
    {
      id: 'upsc-foundation',
      title: 'UPSC Foundation',
      category: 'UPSC',
      faculty: 'Prof. Ananya Gupta',
      rating: 4.7,
      students: 8900,
      duration: '24 months',
      price: 29999,
      originalPrice: 44999,
      discount: 33,
      bestseller: false,
      level: 'Beginner to Advanced',
      language: 'English',
      image: '📜',
      description: 'Build a strong foundation for UPSC Civil Services with structured curriculum and mentorship.',
      progress: 0,
      enrolled: false,
      lessons: 320
    },
    {
      id: 'ssc-cgl',
      title: 'SSC CGL Master Batch',
      category: 'SSC',
      faculty: 'Vikram Singh',
      rating: 4.6,
      students: 15600,
      duration: '8 months',
      price: 9999,
      originalPrice: 14999,
      discount: 33,
      bestseller: true,
      level: 'Intermediate',
      language: 'Hindi + English',
      image: '📊',
      description: 'Targeted preparation for SSC CGL with quant, reasoning, English and general awareness.',
      progress: 45,
      enrolled: true,
      lastWatched: 'Quantitative Aptitude — Algebra',
      lessons: 160,
      completedLessons: 72
    },
    {
      id: 'class10-excellence',
      title: 'Class 10 Excellence Program',
      category: 'School',
      faculty: 'Meera Krishnan',
      rating: 4.9,
      students: 22100,
      duration: '10 months',
      price: 14999,
      originalPrice: 19999,
      discount: 25,
      bestseller: false,
      level: 'Board Level',
      language: 'English + Hindi',
      image: '📚',
      description: 'Board exam excellence program for Class 10 with NCERT mastery and sample papers.',
      progress: 0,
      enrolled: false,
      lessons: 180
    },
    {
      id: 'banking-po',
      title: 'Banking PO Complete',
      category: 'Banking',
      faculty: 'Suresh Patel',
      rating: 4.5,
      students: 9800,
      duration: '6 months',
      price: 8999,
      originalPrice: 12999,
      discount: 31,
      bestseller: false,
      level: 'Intermediate',
      language: 'English + Hindi',
      image: '🏦',
      description: 'Complete preparation for IBPS PO, SBI PO and other banking exams.',
      progress: 0,
      enrolled: false,
      lessons: 140
    }
  ],

  categories: [
    { id: 'jee', name: 'JEE', icon: '⚛️', desc: 'Engineering entrance', count: 12 },
    { id: 'neet', name: 'NEET', icon: '🩺', desc: 'Medical entrance', count: 8 },
    { id: 'upsc', name: 'UPSC', icon: '🏛️', desc: 'Civil services', count: 6 },
    { id: 'ssc', name: 'SSC', icon: '📋', desc: 'Government jobs', count: 10 },
    { id: 'banking', name: 'Banking', icon: '🏦', desc: 'Bank exams', count: 7 },
    { id: 'school', name: 'School Classes', icon: '🎒', desc: 'Class 6–12', count: 24 },
    { id: 'foundation', name: 'Foundation', icon: '🧱', desc: 'Early preparation', count: 9 },
    { id: 'skills', name: 'Skill Development', icon: '💡', desc: 'Career skills', count: 15 }
  ],

  faculty: [
    {
      id: 'rahul-sharma',
      name: 'Dr. Rahul Sharma',
      subject: 'Physics',
      experience: '15 years',
      qualifications: 'PhD Physics, IIT Delhi',
      rating: 4.9,
      students: 25000,
      about: 'Renowned Physics educator with expertise in JEE Advanced and Olympiad preparation. Former faculty at FIITJEE.',
      courses: ['JEE Advanced 2027', 'Physics Olympiad']
    },
    {
      id: 'priya-nair',
      name: 'Dr. Priya Nair',
      subject: 'Biology',
      experience: '12 years',
      qualifications: 'MD, AIIMS Delhi',
      rating: 4.8,
      students: 22000,
      about: 'Specializes in NEET Biology with innovative teaching methods and high selection rates.',
      courses: ['NEET Complete Preparation']
    },
    {
      id: 'ananya-gupta',
      name: 'Prof. Ananya Gupta',
      subject: 'History & Polity',
      experience: '18 years',
      qualifications: 'MA History, JNU',
      rating: 4.7,
      students: 15000,
      about: 'UPSC mentor known for structured approach to History, Polity and Current Affairs.',
      courses: ['UPSC Foundation']
    },
    {
      id: 'vikram-singh',
      name: 'Vikram Singh',
      subject: 'Quantitative Aptitude',
      experience: '10 years',
      qualifications: 'B.Tech, NIT Trichy',
      rating: 4.6,
      students: 18000,
      about: 'Expert in Quantitative Aptitude for SSC, Banking and other competitive exams.',
      courses: ['SSC CGL Master Batch', 'Banking PO Complete']
    },
    {
      id: 'meera-krishnan',
      name: 'Meera Krishnan',
      subject: 'Mathematics',
      experience: '14 years',
      qualifications: 'M.Sc Mathematics, DU',
      rating: 4.9,
      students: 20000,
      about: 'Board exam specialist helping students achieve 95+ in Class 10 and 12 Mathematics.',
      courses: ['Class 10 Excellence Program']
    },
    {
      id: 'suresh-patel',
      name: 'Suresh Patel',
      subject: 'Reasoning & English',
      experience: '11 years',
      qualifications: 'MBA, XLRI',
      rating: 4.5,
      students: 12000,
      about: 'Banking exam expert with proven track record in IBPS and SBI selections.',
      courses: ['Banking PO Complete']
    }
  ],

  toppers: [
    { name: 'Ananya Reddy', rank: 'AIR 12', score: '98.2%', exam: 'JEE Advanced', year: '2025', avatar: 'AR' },
    { name: 'Rohan Kapoor', rank: 'AIR 45', score: '96.8%', exam: 'NEET', year: '2025', avatar: 'RK' },
    { name: 'Sneha Iyer', rank: 'AIR 8', score: '99.1%', exam: 'UPSC CSE', year: '2024', avatar: 'SI' },
    { name: 'Aditya Verma', rank: 'AIR 23', score: '97.5%', exam: 'JEE Main', year: '2025', avatar: 'AV' },
    { name: 'Kavya Sharma', rank: 'AIR 67', score: '95.4%', exam: 'NEET', year: '2025', avatar: 'KS' },
    { name: 'Arjun Patel', rank: 'AIR 3', score: '99.4%', exam: 'SSC CGL', year: '2024', avatar: 'AP' },
    { name: 'Ishita Das', rank: 'AIR 19', score: '97.9%', exam: 'JEE Advanced', year: '2025', avatar: 'ID' },
    { name: 'Mohit Singh', rank: 'AIR 31', score: '96.2%', exam: 'Banking PO', year: '2025', avatar: 'MS' }
  ],

  testimonials: [
    {
      name: 'Ananya Reddy',
      exam: 'JEE Advanced AIR 12',
      rating: 5,
      text: 'Edunova transformed my preparation. The structured curriculum, live doubt sessions and mock tests were game-changers. Highly recommend to every JEE aspirant.',
      avatar: 'AR'
    },
    {
      name: 'Rohan Kapoor',
      exam: 'NEET AIR 45',
      rating: 5,
      text: 'The Biology classes by Dr. Priya Nair are exceptional. Concept clarity and regular testing helped me stay consistent throughout the year.',
      avatar: 'RK'
    },
    {
      name: 'Sneha Iyer',
      exam: 'UPSC CSE AIR 8',
      rating: 5,
      text: 'From foundation to mains, Edunova provided the right guidance. The mentorship program and answer writing practice were invaluable.',
      avatar: 'SI'
    },
    {
      name: 'Priya Malhotra',
      exam: 'Class 12 CBSE 97%',
      rating: 5,
      text: 'As a board student, I needed focused preparation. The Class 12 program covered every topic thoroughly with excellent sample papers.',
      avatar: 'PM'
    },
    {
      name: 'Karan Mehta',
      exam: 'SSC CGL Selected',
      rating: 4,
      text: 'Affordable and effective. The quant and reasoning modules helped me clear SSC CGL in my first attempt.',
      avatar: 'KM'
    }
  ],

  curriculum: [
    {
      id: 1,
      title: 'Introduction & Orientation',
      lessons: [
        { id: '1-1', title: 'Welcome to the Course', type: 'video', duration: '12 min', completed: true },
        { id: '1-2', title: 'How to Use the Platform', type: 'video', duration: '8 min', completed: true },
        { id: '1-3', title: 'Study Plan Overview', type: 'notes', duration: '15 min', completed: true },
        { id: '1-4', title: 'Diagnostic Quiz', type: 'quiz', duration: '20 min', completed: true }
      ]
    },
    {
      id: 2,
      title: 'Fundamentals',
      lessons: [
        { id: '2-1', title: 'Core Concepts — Part 1', type: 'video', duration: '35 min', completed: true },
        { id: '2-2', title: 'Core Concepts — Part 2', type: 'video', duration: '42 min', completed: true },
        { id: '2-3', title: 'Practice Problems Set A', type: 'notes', duration: '45 min', completed: true },
        { id: '2-4', title: 'Fundamentals Quiz', type: 'quiz', duration: '25 min', completed: false }
      ]
    },
    {
      id: 3,
      title: 'Advanced Concepts',
      lessons: [
        { id: '3-1', title: 'Optics — Ray Diagrams', type: 'video', duration: '38 min', completed: false, current: true },
        { id: '3-2', title: 'Wave Optics Basics', type: 'video', duration: '40 min', completed: false },
        { id: '3-3', title: 'Advanced Problem Solving', type: 'video', duration: '50 min', completed: false },
        { id: '3-4', title: 'Chapter Notes', type: 'notes', duration: '30 min', completed: false },
        { id: '3-5', title: 'Advanced Quiz', type: 'quiz', duration: '30 min', completed: false }
      ]
    },
    {
      id: 4,
      title: 'Practice & Application',
      lessons: [
        { id: '4-1', title: 'Previous Year Questions', type: 'video', duration: '45 min', completed: false, locked: true },
        { id: '4-2', title: 'Speed Solving Techniques', type: 'video', duration: '35 min', completed: false, locked: true },
        { id: '4-3', title: 'Practice Worksheet', type: 'notes', duration: '60 min', completed: false, locked: true }
      ]
    },
    {
      id: 5,
      title: 'Mock Tests',
      lessons: [
        { id: '5-1', title: 'Full Length Mock 1', type: 'test', duration: '3 hrs', completed: false, locked: true },
        { id: '5-2', title: 'Full Length Mock 2', type: 'test', duration: '3 hrs', completed: false, locked: true },
        { id: '5-3', title: 'Full Length Mock 3', type: 'test', duration: '3 hrs', completed: false, locked: true }
      ]
    },
    {
      id: 6,
      title: 'Final Revision',
      lessons: [
        { id: '6-1', title: 'Formula Sheet Review', type: 'notes', duration: '40 min', completed: false, locked: true },
        { id: '6-2', title: 'Quick Recap Videos', type: 'video', duration: '60 min', completed: false, locked: true },
        { id: '6-3', title: 'Final Assessment', type: 'test', duration: '2 hrs', completed: false, locked: true }
      ]
    }
  ],

  quizQuestions: [
    {
      id: 1,
      question: 'A ray of light incident on a plane mirror makes an angle of 30° with the mirror. What is the angle of reflection?',
      options: ['30°', '60°', '90°', '45°'],
      correct: 0
    },
    {
      id: 2,
      question: 'Which of the following is NOT a property of light?',
      options: ['Reflection', 'Refraction', 'Diffraction', 'Conduction'],
      correct: 3
    },
    {
      id: 3,
      question: 'The focal length of a concave mirror is 20 cm. What is its radius of curvature?',
      options: ['10 cm', '20 cm', '40 cm', '80 cm'],
      correct: 2
    },
    {
      id: 4,
      question: 'Snell\'s law relates to which optical phenomenon?',
      options: ['Reflection', 'Refraction', 'Dispersion', 'Interference'],
      correct: 1
    },
    {
      id: 5,
      question: 'In a convex lens, parallel rays of light after refraction:',
      options: ['Diverge', 'Converge at focus', 'Go undeviated', 'Reflect back'],
      correct: 1
    }
  ],

  notifications: [
    { id: 1, type: 'class', title: 'Live Class Starting', message: 'Physics — Current Electricity starts in 15 minutes', time: '10 min ago', read: false },
    { id: 2, type: 'assignment', title: 'New Assignment', message: 'Complete Practice Problems Set B by Friday', time: '2 hours ago', read: false },
    { id: 3, type: 'result', title: 'Quiz Result Available', message: 'You scored 92% in Fundamentals Quiz', time: '5 hours ago', read: true },
    { id: 4, type: 'course', title: 'New Course Available', message: 'JEE Crash Course 2026 is now open for enrollment', time: '1 day ago', read: true },
    { id: 5, type: 'offer', title: 'Scholarship Opportunity', message: 'Apply for merit scholarship — last date 30th Aug', time: '2 days ago', read: true },
    { id: 6, type: 'announcement', title: 'Platform Update', message: 'New study planner feature is now live!', time: '3 days ago', read: true }
  ],

  liveClasses: [
    { id: 1, title: 'Physics — Current Electricity', teacher: 'Dr. Rahul Sharma', time: '6:00 PM', status: 'live', duration: '90 min' },
    { id: 2, title: 'Chemistry — Organic Reactions', teacher: 'Dr. Priya Nair', time: '7:30 PM', status: 'upcoming', duration: '60 min' },
    { id: 3, title: 'Mathematics — Integration', teacher: 'Meera Krishnan', time: 'Tomorrow 5:00 PM', status: 'upcoming', duration: '75 min' },
    { id: 4, title: 'Biology — Human Physiology', teacher: 'Dr. Priya Nair', time: 'Yesterday', status: 'completed', duration: '90 min' }
  ],

  schedule: [
    { subject: 'Physics', faculty: 'Dr. Rahul Sharma', time: '6:00 PM', duration: '90 min', type: 'Live', day: 'today' },
    { subject: 'Chemistry', faculty: 'Dr. Priya Nair', time: '7:30 PM', duration: '60 min', type: 'Live', day: 'today' },
    { subject: 'Mathematics', faculty: 'Meera Krishnan', time: '5:00 PM', duration: '75 min', type: 'Live', day: 'tomorrow' },
    { subject: 'Mock Test — Physics', faculty: 'System', time: '10:00 AM', duration: '3 hrs', type: 'Test', day: 'tomorrow' },
    { subject: 'Biology', faculty: 'Dr. Priya Nair', time: '4:00 PM', duration: '60 min', type: 'Live', day: 'week' },
    { subject: 'Doubt Session', faculty: 'Multiple', time: '8:00 PM', duration: '45 min', type: 'Doubt', day: 'week' }
  ],

  resources: [
    { id: 1, title: 'Optics Complete Notes', subject: 'Physics', type: 'notes', size: '2.4 MB', icon: 'notes' },
    { id: 2, title: 'JEE Advanced 2024 Paper', subject: 'Physics', type: 'paper', size: '1.8 MB', icon: 'paper' },
    { id: 3, title: 'Organic Chemistry Reactions PDF', subject: 'Chemistry', type: 'pdf', size: '3.1 MB', icon: 'pdf' },
    { id: 4, title: 'Full Syllabus Mock Test 5', subject: 'All', type: 'mock', size: '—', icon: 'mock' },
    { id: 5, title: 'Formula Sheet — Mathematics', subject: 'Maths', type: 'notes', size: '1.2 MB', icon: 'notes' },
    { id: 6, title: 'NEET Biology PYQ Bank', subject: 'Biology', type: 'paper', size: '5.6 MB', icon: 'paper' },
    { id: 7, title: 'Current Affairs Aug 2026', subject: 'GK', type: 'pdf', size: '0.9 MB', icon: 'pdf' },
    { id: 8, title: 'Quantitative Aptitude Tricks', subject: 'Quant', type: 'notes', size: '1.5 MB', icon: 'notes' }
  ],

  leaderboard: [
    { rank: 1, name: 'Ananya Reddy', score: 2840, tests: 45, streak: 28, avatar: 'AR' },
    { rank: 2, name: 'Rohan Kapoor', score: 2720, tests: 42, streak: 21, avatar: 'RK' },
    { rank: 3, name: 'Aarav Mehta', score: 2650, tests: 38, streak: 12, avatar: 'AM' },
    { rank: 4, name: 'Sneha Iyer', score: 2580, tests: 40, streak: 15, avatar: 'SI' },
    { rank: 5, name: 'Aditya Verma', score: 2490, tests: 35, streak: 9, avatar: 'AV' },
    { rank: 6, name: 'Kavya Sharma', score: 2410, tests: 33, streak: 18, avatar: 'KS' },
    { rank: 7, name: 'Arjun Patel', score: 2350, tests: 30, streak: 7, avatar: 'AP' },
    { rank: 8, name: 'Ishita Das', score: 2280, tests: 28, streak: 14, avatar: 'ID' }
  ],

  achievements: [
    { id: 1, title: 'First Course Completed', icon: '🏆', unlocked: true, date: '15 Mar 2026' },
    { id: 2, title: '7 Day Streak', icon: '🔥', unlocked: true, date: '22 Mar 2026' },
    { id: 3, title: '100 Lessons', icon: '📚', unlocked: true, date: '10 Jun 2026' },
    { id: 4, title: '90% Quiz Accuracy', icon: '🎯', unlocked: true, date: '5 Jul 2026' },
    { id: 5, title: 'Mock Test Master', icon: '🏅', unlocked: false },
    { id: 6, title: '30 Day Streak', icon: '⚡', unlocked: false },
    { id: 7, title: 'Perfect Score', icon: '💯', unlocked: false },
    { id: 8, title: 'Community Helper', icon: '🤝', unlocked: false }
  ],

  certificates: [
    { id: 'CERT-2026-001', course: 'Physics Fundamentals', date: '15 Mar 2026', score: '94%' },
    { id: 'CERT-2026-002', course: 'Chemistry Basics', date: '28 Apr 2026', score: '91%' },
    { id: 'CERT-2026-003', course: 'Mathematics Core', date: '12 Jun 2026', score: '88%' }
  ],

  tasks: [
    { id: 1, title: 'Complete Optics lesson', time: '45 min', completed: true },
    { id: 2, title: 'Practice Problems Set B', time: '60 min', completed: true },
    { id: 3, title: 'Watch Current Electricity live class', time: '90 min', completed: false },
    { id: 4, title: 'Revise formula sheet', time: '30 min', completed: false },
    { id: 5, title: 'Take chapter quiz', time: '25 min', completed: false }
  ],

  faqs: [
    { q: 'How do online classes work?', a: 'Live classes are conducted via our platform at scheduled times. You can join with one click, interact with faculty, ask doubts in real-time, and access recordings within 24 hours.' },
    { q: 'Are recorded lectures available?', a: 'Yes! All live classes are recorded and available in your course library within 24 hours. You can watch them anytime, pause, rewind, and study at your own pace.' },
    { q: 'Can I attend live classes?', a: 'Absolutely. All enrolled students get access to live interactive classes. You can also set reminders and receive notifications before class starts.' },
    { q: 'Are study materials included?', a: 'Yes. Every course includes comprehensive notes, PDFs, formula sheets, previous year papers, and practice worksheets — all downloadable from the Digital Library.' },
    { q: 'How do mock tests work?', a: 'Mock tests simulate real exam conditions with timers, navigation palette, and detailed analytics. After submission, you get topic-wise analysis and comparison with top performers.' },
    { q: 'Is there a scholarship?', a: 'Yes, we offer merit-based scholarships up to 50% for students scoring above 90% in our scholarship test. Need-based scholarships are also available.' },
    { q: 'How can I contact faculty?', a: 'You can ask doubts during live classes, use the doubt forum, or book 1-on-1 mentorship sessions (available in Pro and Elite plans).' }
  ],

  pricing: [
    {
      name: 'Foundation',
      price: 9999,
      period: '/year',
      desc: 'Essential learning for focused preparation',
      features: ['Access to 2 courses', 'Recorded lectures', 'Basic notes & PDFs', 'Monthly mock tests', 'Community support']
    },
    {
      name: 'Pro',
      price: 19999,
      period: '/year',
      desc: 'Most popular for serious aspirants',
      features: ['Access to all courses', 'Live classes', 'Complete study material', 'Weekly mock tests', 'Doubt resolution', 'Performance analytics'],
      featured: true
    },
    {
      name: 'Elite',
      price: 34999,
      period: '/year',
      desc: 'Complete mentorship experience',
      features: ['Everything in Pro', '1-on-1 mentorship', 'Personalized study plan', 'Priority doubt support', 'Interview preparation', 'Career guidance']
    }
  ],

  // Assignments
  assignments: [
    { id: 1, title: 'Optics Practice Problems Set B', subject: 'Physics', course: 'JEE Advanced 2027', due: '18 Aug 2026', status: 'pending', marks: null, maxMarks: 50, feedback: null },
    { id: 2, title: 'Organic Chemistry Reactions Worksheet', subject: 'Chemistry', course: 'JEE Advanced 2027', due: '20 Aug 2026', status: 'pending', marks: null, maxMarks: 40, feedback: null },
    { id: 3, title: 'Integration Methods Assignment', subject: 'Mathematics', course: 'JEE Advanced 2027', due: '12 Aug 2026', status: 'submitted', marks: 38, maxMarks: 40, feedback: 'Excellent work. Minor error in Q4.' },
    { id: 4, title: 'Ray Optics Lab Report', subject: 'Physics', course: 'JEE Advanced 2027', due: '5 Aug 2026', status: 'graded', marks: 45, maxMarks: 50, feedback: 'Well structured. Improve diagram clarity.' },
    { id: 5, title: 'Previous Year JEE Analysis', subject: 'Physics', course: 'JEE Advanced 2027', due: '1 Aug 2026', status: 'graded', marks: 42, maxMarks: 50, feedback: 'Good analysis. Focus more on multi-correct questions.' }
  ],

  // Timetable / Today's schedule
  timetable: [
    { time: '10:00 AM', end: '11:30 AM', subject: 'Physics', topic: 'Current Electricity', faculty: 'Dr. Rahul Sharma', status: 'completed', type: 'Live' },
    { time: '12:00 PM', end: '1:00 PM', subject: 'Chemistry', topic: 'Organic Reactions', faculty: 'Dr. Priya Nair', status: 'upcoming', type: 'Live' },
    { time: '4:00 PM', end: '5:30 PM', subject: 'Mathematics', topic: 'Definite Integration', faculty: 'Meera Krishnan', status: 'upcoming', type: 'Live' },
    { time: '6:00 PM', end: '7:00 PM', subject: 'Physics', topic: 'Doubt Session', faculty: 'Dr. Rahul Sharma', status: 'upcoming', type: 'Doubt' },
    { time: '8:00 PM', end: '9:00 PM', subject: 'Self Study', topic: 'Mock Test Review', faculty: '—', status: 'upcoming', type: 'Self' }
  ],

  // Announcements
  announcements: [
    { id: 1, title: 'JEE Advanced Mock Series starts 20 Aug', body: 'Register for the full-length mock series. 10 tests with detailed analysis.', date: '16 Aug 2026', tag: 'Important' },
    { id: 2, title: 'Scholarship test on 25 Aug', body: 'Merit scholarship up to 50%. Open for all enrolled students.', date: '15 Aug 2026', tag: 'Scholarship' },
    { id: 3, title: 'Campus visit day — 30 Aug', body: 'Parents and students can visit our Noida center. Book your slot.', date: '14 Aug 2026', tag: 'Event' }
  ],

  // Attendance
  attendance: {
    present: 42,
    total: 48,
    percentage: 87.5,
    recent: [
      { date: '17 Aug', status: 'present' },
      { date: '16 Aug', status: 'present' },
      { date: '15 Aug', status: 'absent' },
      { date: '14 Aug', status: 'present' },
      { date: '13 Aug', status: 'present' },
      { date: '12 Aug', status: 'present' },
      { date: '11 Aug', status: 'present' }
    ]
  },

  // Performance analytics
  analytics: {
    overallScore: 87,
    rank: 3,
    totalStudents: 1240,
    percentile: 94.2,
    improvement: '+12%',
    subjectScores: [
      { subject: 'Physics', score: 92, prev: 85, color: '#6366f1' },
      { subject: 'Chemistry', score: 84, prev: 78, color: '#8b5cf6' },
      { subject: 'Mathematics', score: 85, prev: 80, color: '#06b6d4' }
    ],
    weeklyHours: [
      { day: 'Mon', hours: 4.5 },
      { day: 'Tue', hours: 3.2 },
      { day: 'Wed', hours: 5.0 },
      { day: 'Thu', hours: 2.8 },
      { day: 'Fri', hours: 4.0 },
      { day: 'Sat', hours: 6.5 },
      { day: 'Sun', hours: 3.5 }
    ],
    testAccuracy: [
      { test: 'Mock 1', accuracy: 72 },
      { test: 'Mock 2', accuracy: 78 },
      { test: 'Mock 3', accuracy: 81 },
      { test: 'Mock 4', accuracy: 85 },
      { test: 'Mock 5', accuracy: 87 },
      { test: 'Mock 6', accuracy: 92 }
    ],
    recentResults: [
      { name: 'Fundamentals Quiz', score: 92, date: '15 Aug', rank: 5 },
      { name: 'Chapter Test — Optics', score: 88, date: '12 Aug', rank: 12 },
      { name: 'Full Mock 6', score: 92, date: '8 Aug', rank: 8 },
      { name: 'Chemistry Weekly', score: 84, date: '5 Aug', rank: 18 }
    ]
  },

  // Why choose us
  whyUs: [
    { icon: '🎯', title: 'Result-Oriented', desc: '98% of our students clear their target exams with consistent improvement tracking.' },
    { icon: '👨‍🏫', title: 'Expert Faculty', desc: 'Teachers from IITs, AIIMS and top institutions with 10–18 years of experience.' },
    { icon: '📱', title: 'Smart Learning App', desc: 'Live classes, recorded lectures, tests, notes and analytics — all in one platform.' },
    { icon: '📊', title: 'Performance Analytics', desc: 'Subject-wise insights, rank tracking and personalized study recommendations.' },
    { icon: '🏆', title: 'Proven Track Record', desc: '450+ selections in 2025 including multiple AIR under 50 across exams.' },
    { icon: '🤝', title: 'Personal Mentorship', desc: '1-on-1 guidance, doubt resolution and study planning for every student.' }
  ],

  // Batches
  batches: [
    { name: 'JEE Morning Batch', time: '6:00 – 9:00 AM', seats: '12 left', start: '1 Sep 2026' },
    { name: 'JEE Evening Batch', time: '4:00 – 7:00 PM', seats: '8 left', start: '1 Sep 2026' },
    { name: 'NEET Weekend', time: 'Sat–Sun 9 AM – 2 PM', seats: '15 left', start: '6 Sep 2026' },
    { name: 'Foundation Class 9–10', time: '4:00 – 6:00 PM', seats: '20 left', start: '15 Sep 2026' }
  ],

  // Gallery / Campus
  gallery: [
    { title: 'Main Campus', emoji: '🏫' },
    { title: 'Smart Classrooms', emoji: '🖥️' },
    { title: 'Library', emoji: '📚' },
    { title: 'Lab Facility', emoji: '🔬' },
    { title: 'Seminar Hall', emoji: '🎤' },
    { title: 'Student Zone', emoji: '☕' }
  ]
};
