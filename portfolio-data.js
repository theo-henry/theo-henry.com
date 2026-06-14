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
      "Apache Spark",
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
        "I’m Theo Henry, a consultant with expertise in cybersecurity, risk management, and technology strategy. My experience across digital transformation and client delivery allows me to bring a sharp, data-driven approach to complex business problems.",
        "Currently pursuing an MSc in Data Science & Business Analytics at IE University, I'm focused on applying data and AI to drive meaningful business outcomes, with a side interest in developing innovative and user-focused products for both web and mobile platforms, where I emphasize intuitive design and robust functionality.",
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
          title: "Master's in Data Science & Business Analytics",
          period: "Sep 25 - Jul 26",
          organization: "IE University",
          location: "Madrid, Spain",
          logo: "logos/ie_university_logo.jpeg",
          description:
            "Advanced AI Concentration. Consulting Director at 180Degrees Consulting Madrid and Special Projects Lead at IE Consulting Club.",
        },
        {
          title: "Bachelor of Commerce, International Business",
          period: "Sep 21 - Apr 25",
          organization: "Concordia University, John Molson School of Business",
          location: "Montreal, Canada",
          logo: "logos/concordia_logo.jpeg",
          description:
            "Beta Gamma Sigma Honor Society (top 5%) and Golden Key International Society (top 15%). Received the CASA & Molson Bursary for outstanding leadership and involvement.",
        },
      ],
    },
    {
      id: "certifications",
      title: "License & Certification",
      type: "list",
      items: [
        {
          title: "Bloomberg Market Concepts",
          meta: "Issued 2025",
          logo: "logos/bloomberg_certification.jpeg",
        },
        {
          title: "Celonis Data Engineer",
          meta: "Issued 2026",
          logo: "logos/celonis_certification.png",
        },
      ],
    },
    {
      id: "testimonials",
      title: "Testimonials",
      type: "testimonials",
      items: [
        {
          name: "Kayzeen Kepadia",
          role: "Manager at Accenture, managed Theo directly",
          rating: 5,
          headshot: "logos/kayzeen_kepadia.jpeg",
          companyLogo: "logos/accenture_logo.jpeg",
          quote:
            "Theo consistently demonstrated an exceptional level of sharpness and attention to detail throughout his time on our team. His ability to break down complex AI adoption challenges into precise, actionable deliverables made him a standout contributor to our engagement with a major client.",
        },
        {
          name: "Mathieu Gendron",
          role: "Manager at KPMG, managed Theo directly",
          rating: 5,
          headshot: "logos/mathieu_gendron.jpeg",
          companyLogo: "logos/KPMG_logo.jpeg",
          quote:
            "Working with Theo was a great experience. He's thorough, reliable, and brings a creative edge that elevated the quality of our project deliverables. His ability to turn raw data into compelling executive-level insights was extremely impressive for someone at his level.",
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
