// Edit this file to change the site content.
//
// To add a new item to a section, add another object to that section's `items`.
// To add a new section, add another object to `sections`.
// Supported section types: "text", "cards", "timeline", "list", "testimonials", "contact".
window.portfolioData = {
  profile: {
    name: "Theo Henry",
    pronouns: "he/him",
    headline: "Madrid based data science student with 2+ years of experience in technology strategy & management consulting.",
    location: "Madrid, Spain",
    avatar:
      "https://framerusercontent.com/images/8s1KrAQbXlnomrND0bpTyPgdbfo.jpg?width=1024&height=1536",
    email: "theo.henry003@gmail.com",
    phone: "+34 641 982 114",
    website: "theo-henry.com",
    cv: "cv_theohenrypm.pdf",
    skills: [
      "Python",
      "SQL",
      "Power BI",
      "Tableau",
      "AWS",
      "Docker",
      "FastAPI",
      "MLflow",
      "Apache Spark"
      "Git",
      "Agile",
      "CI/CD",
      "Docker",
      "MongoDB",
      "Jira",
      "Confluence"
    ],
    languages: ["English", "Spanish", "French"],
    links: [
      {
        label: "Email",
        value: "theo.henry003@gmail.com",
        href: "mailto:theo.henry003@gmail.com",
      },
      {
        label: "Website",
        value: "theo-henry.com",
        href: "https://theo-henry.com",
      },
      {
        label: "Phone",
        value: "+34 641 982 114",
        href: "tel:+34641982114",
      },
    ],
  },

  sections: [
    {
      id: "intro",
      title: "Intro",
      type: "text",
      paragraphs: [
        "I'm Theo Henry, a data science student focused on technology strategy, analytics, and management consulting.",
        "I use technical and business context together: turning ambiguous problems into structured analysis, clear decisions, and practical product or operations improvements.",
      ],
    },
    {
      id: "projects",
      title: "Projects",
      type: "cards",
      items: [
        {
          title: "Interactive Data Dashboard",
          date: "Jan 24, 2024",
          role: "Frontend Lead",
          category: "Internal Tools",
          description:
            "Example project from the old Framer template. Replace this with one of your real portfolio projects.",
        },
        {
          title: "Personal Finance Tracker",
          date: "Mar 15, 2024",
          role: "Frontend Developer",
          category: "Fintech",
          description:
            "Example project from the old Framer template. Add the problem, your contribution, tools used, and measurable result.",
        },
        {
          title: "Collaborative Coding Environment",
          date: "Jan 12, 2024",
          role: "Frontend Developer",
          category: "Developer Tools",
          description:
            "Example project from the old Framer template. Duplicate this object to add another project.",
        },
      ],
    },
    {
      id: "experience",
      title: "Experience",
      type: "timeline",
      items: [
        {
          title: "Frontend Lead",
          period: "Jan 24 - Present",
          organization: "Alpha",
          location: "Cupertino, CA",
          description:
            "Placeholder from the old Framer template. Replace with your real role, company, responsibilities, and outcomes.",
        },
        {
          title: "Frontend Engineer",
          period: "Sep 22 - Dec 23",
          organization: "Sigma",
          location: "New York, NY",
          description:
            "Placeholder from the old Framer template. Enhanced user interfaces using React and Redux, achieving a 25% increase in user engagement.",
        },
        {
          title: "Junior Software Engineer",
          period: "Feb 20 - Dec 23",
          organization: "Omega",
          location: "Menlo Park, CA",
          description:
            "Placeholder from the old Framer template. Involved in feature development from conception to deployment, with responsive design and accessibility standards.",
        },
      ],
    },
    {
      id: "education",
      title: "Education",
      type: "timeline",
      items: [
        {
          title: "Master of Science in Computer Science",
          period: "Sep 18 - Jun 20",
          organization: "Astra University",
          location: "Stanford, CA",
          description:
            'Placeholder from the old Framer template. Specialized in Software Engineering and completed thesis on "Scalable Architectures for Real-Time Web Applications".',
        },
        {
          title: "Bachelor of Science in Software Engineering",
          period: "Sep 15 - Sep 18",
          organization: "Nova University",
          location: "Providence, RI",
          description:
            "Placeholder from the old Framer template. Relevant coursework included Advanced Algorithms, Web Development, and User Interface Design.",
        },
      ],
    },
    {
      id: "certifications",
      title: "License & Certification",
      type: "list",
      items: [
        {
          title: "Alpha Certified Developer Associate",
          meta: "Issued 2019",
        },
        {
          title: "Beta Certified Developer Associate",
          meta: "Issued 2023",
        },
      ],
    },
    {
      id: "testimonials",
      title: "Testimonials",
      type: "testimonials",
      items: [
        {
          name: "Evelyn Brooks",
          role: "Lead Engineer at Sigma, managed Henry directly",
          quote:
            "Having worked alongside Henry at Sigma, I've been consistently impressed by his exceptional skills as a frontend engineer. Henry's hands-on approach and dedication to building robust web and mobile applications have greatly contributed to our project's success.",
        },
        {
          name: "Raj Patel",
          role: "Junior Software Engineer at Omega, worked with Henry on the same team",
          quote:
            "Henry's expertise has been crucial in turning our ambitious project ideas into reality at Omega. His proficiency in both front-end and back-end development ensures a seamless integration of features, delivering a user experience that's both intuitive and high-performing.",
        },
      ],
    },
    {
      id: "contact",
      title: "Contact",
      type: "contact",
      items: [
        {
          label: "Email",
          value: "theo.henry003@gmail.com",
          href: "mailto:theo.henry003@gmail.com",
        },
        {
          label: "Phone",
          value: "+34 641 982 114",
          href: "tel:+34641982114",
        },
        {
          label: "Website",
          value: "theo-henry.com",
          href: "https://theo-henry.com",
        },
        {
          label: "CV",
          value: "cv_theohenrypm.pdf",
          href: "cv_theohenrypm.pdf",
        },
      ],
    },
  ],
};
