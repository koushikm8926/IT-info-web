export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  type: string;
  workMode: "Full-time" | "Contract" | "Part-time" | "Remote" | "Hybrid";
  skills: string[];
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  mode: string;
  icon: string;
  popular?: boolean;
  category: string;
}

export interface UpcomingBatch {
  id: string;
  courseTitle: string;
  startDate: string;
  mode: string;
  timing?: string;
}

export const SITE_DATA = {
  company: {
    name: "INNOVEXA SYSTEMS",
    tagline: "Your Requirements. Our Solutions.",
    phone: "+91 00000 00000",
    email: "info@innovexasystems.in",
    location: "Bengaluru, Karnataka, India",
    hours: "Mon – Fri, 9:00 AM – 6:00 PM (IST)",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "IT Services",
      href: "/services",
      submenu: [
        { label: "Custom Software Development", href: "/services#custom" },
        { label: "Web & Mobile Applications", href: "/services#web-mobile" },
        { label: "Cloud Services (AWS/Azure/GCP)", href: "/services#cloud" },
        { label: "DevOps & CI/CD", href: "/services#devops" },
        { label: "AI & Automation", href: "/services#ai" },
        { label: "Software Testing & QA", href: "/services#qa" },
      ],
    },
    {
      label: "IT Consulting",
      href: "/consulting",
      submenu: [
        { label: "Technology Strategy", href: "/consulting#strategy" },
        { label: "Solution Architecture", href: "/consulting#architecture" },
        { label: "Application Modernization", href: "/consulting#modernization" },
        { label: "Cloud Migration", href: "/consulting#cloud-migration" },
      ],
    },
    {
      label: "IT Staffing",
      href: "/staffing",
      submenu: [
        { label: "Permanent Recruitment", href: "/staffing#permanent" },
        { label: "Contract Staffing", href: "/staffing#contract" },
        { label: "Contract-to-Hire (C2H)", href: "/staffing#c2h" },
        { label: "Resource Augmentation", href: "/staffing#augmentation" },
      ],
    },
    {
      label: "Innovexa Edutech",
      href: "/edutech",
      submenu: [
        { label: "Software Development", href: "/edutech#dev" },
        { label: "Cloud & DevOps", href: "/edutech#cloud" },
        { label: "Data & AI", href: "/edutech#ai" },
        { label: "Testing & QA", href: "/edutech#qa" },
      ],
    },
    { label: "Careers", href: "/careers" },
  ],
  jobs: [
    {
      id: "job-1",
      title: "Java Full Stack Developer",
      department: "Engineering",
      location: "Bengaluru",
      experience: "3 – 6 Years",
      type: "Full-time",
      workMode: "Hybrid",
      skills: ["Java", "Spring Boot", "React", "Microservices"],
    },
    {
      id: "job-2",
      title: "Python Developer",
      department: "Engineering",
      location: "Bengaluru",
      experience: "2 – 5 Years",
      type: "Full-time",
      workMode: "Hybrid",
      skills: ["Python", "Django", "FastAPI", "REST APIs"],
    },
    {
      id: "job-3",
      title: "Cloud / DevOps Engineer",
      department: "Cloud & Infrastructure",
      location: "Remote",
      experience: "3 – 7 Years",
      type: "Full-time",
      workMode: "Remote",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
    },
    {
      id: "job-4",
      title: "QA Automation Engineer",
      department: "Quality Assurance",
      location: "Bengaluru",
      experience: "2 – 5 Years",
      type: "Full-time",
      workMode: "Hybrid",
      skills: ["Selenium", "Playwright", "API Testing", "CI/CD"],
    },
    {
      id: "job-5",
      title: "IT Recruiter & Talent Specialist",
      department: "Human Resources",
      location: "Bengaluru",
      experience: "1 – 3 Years",
      type: "Full-time",
      workMode: "Full-time",
      skills: ["Recruitment", "IT Hiring", "Sourcing", "Screening"],
    },
    {
      id: "job-6",
      title: "DevOps Engineer",
      department: "Cloud & Infrastructure",
      location: "Hyderabad",
      experience: "4+ Years",
      type: "Full-time",
      workMode: "Hybrid",
      skills: ["CI/CD", "Docker", "AWS", "Prometheus"],
    },
  ] as JobOpening[],
  courses: [
    {
      id: "course-1",
      title: "Java Full Stack Development",
      duration: "4-6 Months",
      mode: "Live / Online",
      icon: "coffee",
      category: "Software Development",
      popular: true,
    },
    {
      id: "course-2",
      title: "Python Full Stack Development",
      duration: "4-6 Months",
      mode: "Live / Online",
      icon: "code",
      category: "Software Development",
      popular: true,
    },
    {
      id: "course-3",
      title: "AWS Cloud Practitioner & Architect",
      duration: "1-2 Months",
      mode: "Live / Online",
      icon: "cloud",
      category: "Cloud & DevOps",
      popular: true,
    },
    {
      id: "course-4",
      title: "DevOps with Docker & Kubernetes",
      duration: "2-3 Months",
      mode: "Live / Online",
      icon: "infinity",
      category: "Cloud & DevOps",
      popular: true,
    },
    {
      id: "course-5",
      title: "Data Analytics & AI Engineering",
      duration: "4-5 Months",
      mode: "Live / Online",
      icon: "database",
      category: "Data & AI",
    },
    {
      id: "course-6",
      title: "Manual & Automated QA Testing",
      duration: "2-3 Months",
      mode: "Live / Online",
      icon: "shield-check",
      category: "Testing & QA",
    },
  ] as Course[],
  upcomingBatches: [
    {
      id: "batch-1",
      courseTitle: "Java Full Stack",
      startDate: "15 Dec 2026",
      mode: "Online / Live Interactive",
    },
    {
      id: "batch-2",
      courseTitle: "Python Full Stack",
      startDate: "18 Dec 2026",
      mode: "Online / Weekend & Weekday",
    },
    {
      id: "batch-3",
      courseTitle: "DevOps & Cloud Masterclass",
      startDate: "22 Dec 2026",
      mode: "Online / Evening Batch",
    },
  ] as UpcomingBatch[],
};
