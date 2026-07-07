export type LinkItem = {
  label: string;
  href: string;
};

export type CallToAction = LinkItem & {
  variant?: "primary" | "secondary";
};

export type ProjectItem = {
  title: string;
  shortDescription: string;
  details?: string;
  projectUrl?: LinkItem;
  techStack: string[];
  skillsUsed: string[];
  status: string;
  links: LinkItem[];
  image?: string;
  icon?: string;
};

export type ResearchItem = {
  title: string;
  researchArea: string;
  abstract: string;
  description: string;
  tags: string[];
  relatedSkills: string[];
  status: string;
  date: string;
  paperLink?: LinkItem;
  icon?: string;
};

export type SkillCategory = {
  category: string;
  skills: string[];
  icon?: string;
  level?: string;
  tools: string[];
  relatedProjects: string[];
  description: string;
};

export type HonorItem = {
  title: string;
  issuer: string;
  date: string;
  category: string;
  description: string;
  rank?: string;
  certificate?: LinkItem;
  relatedSkills: string[];
  media?: string;
  icon?: string;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  roleType: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  bullets: string[];
  skills: string[];
  links: LinkItem[];
  logo?: string;
  icon?: string;
};

export type SectionKey =
  | "about"
  | "projects"
  | "research"
  | "skills"
  | "honors"
  | "experience"
  | "contact";

export type PortfolioContent = {
  metadata: {
    title: string;
    description: string;
    siteUrl: string;
    keywords: string[];
    ogImage: string;
  };
  navigation: LinkItem[];
  hero: {
    name: string;
    eyebrow: string;
    headline: string;
    shortIntro: string;
    location: string;
    currentStatus: string;
    socialLinks: LinkItem[];
    image: string;
    ctas: CallToAction[];
  };
  theme: {
    // Small visible labels used by decorative UI elements and zone dividers.
    heroCoordinates: string[];
    aboutRecordLabel: string;
    contactChannelLabel: string;
    sectionDividers: Record<SectionKey, string>;
    sceneLabels: {
      navigation: string;
      heroGate: string;
      artifactHall: string;
      manuscriptVault: string;
      disciplineCore: string;
      honorShrine: string;
      expeditionMap: string;
      messageAltar: string;
    };
  };
  sections: Record<
    SectionKey,
    {
      title: string;
      eyebrow: string;
      description: string;
    }
  >;
  about: {
    title: string;
    paragraphs: string[];
    facts: {
      label: string;
      value: string;
    }[];
  };
  projects: ProjectItem[];
  research: ResearchItem[];
  skills: SkillCategory[];
  honors: HonorItem[];
  experience: ExperienceItem[];
  contact: {
    email: string;
    formTitle: string;
    formDescription: string;
    links: LinkItem[];
    socials: LinkItem[];
  };
};

export const portfolio: PortfolioContent = {
  // SEO and browser preview text. Replace siteUrl after you deploy.
  metadata: {
    title: "Your Name | Portfolio",
    description: "Your headline here. Short description goes here.",
    siteUrl: "https://kennethlie.vercel.app",
    keywords: ["Your Name", "Portfolio", "Developer", "Researcher"],
    ogImage: "/images/temple-archive-hero.png"
  },

  // Top navigation links. The href values should match section ids in the page.
  navigation: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Skills", href: "#skills" },
    { label: "Honors", href: "#honors" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ],

  // First screen content and call-to-action buttons.
  hero: {
    // Your display name.
    name: "Kenneth Lie",
    // Small label above the main headline.
    eyebrow: "李荣兴",
    // Main professional headline.
    headline: "Kenneth Lie",
    // One- or two-sentence intro for visitors, recruiters, and collaborators.
    shortIntro: "Competitive Programming & Machine Learning Enthusiast",
    // City/country, school location, or "Remote" placeholder.
    location: "Jakarta, Indonesia",
    // Current student status, role, or availability.
    currentStatus: "Student",
    // Social links shown in the hero. Add, remove, or rename freely.
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/kennethlie16/" },
      { label: "GitHub", href: "https://github.com/LRX16" }
    ],
    // Optional image path for future hero media.
    image: "/images/temple-archive-hero.png",
    // Primary hero buttons.
    ctas: [
      { label: "View artifacts", href: "#projects", variant: "primary" },
      { label: "Send a message", href: "#contact", variant: "secondary" }
    ]
  },

  // Thematic labels for the visual journey. These are decorative but still editable.
  theme: {
    heroCoordinates: ["Valley Gate", "Training Courtyard", "Summit Scrolls"],
    aboutRecordLabel: "Master Scroll Record",
    contactChannelLabel: "Lantern Courier Message",
    sectionDividers: {
      about: "Master Scroll",
      projects: "Training Arsenal",
      research: "Scroll Vault",
      skills: "Kung Fu Courtyard",
      honors: "Jade Trophy Shrine",
      experience: "Mountain Quest Map",
      contact: "Messenger Lantern"
    },
    sceneLabels: {
      navigation: "Valley Route",
      heroGate: "Bamboo Valley Temple Template",
      artifactHall: "Training Arsenal Hall",
      manuscriptVault: "Ancient Scroll Vault",
      disciplineCore: "Kung Fu Discipline Ring",
      honorShrine: "Jade Trophy Shrine",
      expeditionMap: "Mountain Quest Map",
      messageAltar: "Lantern Courier Altar"
    }
  },

  // Section headings and short descriptions.
  sections: {
    about: {
      eyebrow: "Master Scroll",
      title: "About",
      description: "Competitive Programming and Machine Learning Enthusiast"
    },
    projects: {
      eyebrow: "Training Hall",
      title: "Projects",
      description: "Projects I made"
    },
    research: {
      eyebrow: "Wisdom Library",
      title: "Researches",
      description: "Ideas I got"
    },
    skills: {
      eyebrow: "Kung Fu Courtyard",
      title: "Skills",
      description: "Skills I have"
    },
    honors: {
      eyebrow: "Jade Shrine",
      title: "Honors & Awards",
      description: "My Achievements"
    },
    experience: {
      eyebrow: "Mountain Route",
      title: "Experience",
      description: "Hehe."
    },
    contact: {
      eyebrow: "Lantern Signal",
      title: "Contact",
      description: "Message Me!"
    }
  },

  // About content. Keep these concise for best readability.
  about: {
    title: "Your archive record",
    paragraphs: [
      "Short description goes here. Replace this with a brief introduction about who you are, what you study, and what you like building.",
      "Short description goes here. Add your interests, learning direction, research themes, or portfolio goals."
    ],
    facts: [
      { label: "Focus", value: "Machine Learning and Deep Learning" },
      { label: "Location", value: "Jakarta, Indonesia" },
      { label: "Currently", value: "Student" }
    ]
  },

  // Projects appear in the artifact hall. Replace placeholders with real projects when ready.
  projects: [
    {
      // Project name.
      title: "Project title",
      // Short one-line value proposition.
      shortDescription: "Short project description goes here.",
      // Optional medium-length context, impact, or implementation note.
      details: "Optional project writeup summary, impact, or implementation details go here.",
      // Main button for the project website or best destination.
      projectUrl: { label: "Project website", href: "https://your-project-link.example" },
      // Technologies, frameworks, or languages.
      techStack: ["Tech stack", "Tool name", "Framework"],
      // Professional skills demonstrated by the project.
      skillsUsed: ["Skill used", "Skill used"],
      // Current state such as "In progress", "Published", or "Prototype".
      status: "Status label",
      // Supporting links. Use this for article/writeup, demo, GitHub, website, or Medium links.
      links: [
        { label: "Writeup", href: "https://your-article-link.example" },
        { label: "Demo", href: "https://your-demo-link.example" },
        { label: "GitHub", href: "https://github.com/yourusername/project" }
      ],
      // Optional image/media placeholder. Replace with an image path or remove if unused.
      image: "Image placeholder",
      // Short icon text displayed on the artifact object.
      icon: "I"
    },
    {
      title: "Project title",
      shortDescription: "Short project description goes here.",
      details: "Optional longer project details go here.",
      projectUrl: { label: "Project website", href: "https://your-project-link.example" },
      techStack: ["Tech stack", "Tool name", "Framework"],
      skillsUsed: ["Skill used", "Skill used"],
      status: "Status label",
      links: [
        { label: "Case study", href: "https://your-writeup-link.example" },
        { label: "GitHub", href: "https://github.com/yourusername/project" }
      ],
      image: "Image placeholder",
      icon: "II"
    },
    {
      title: "Project title",
      shortDescription: "Short project description goes here.",
      details: "Optional longer project details go here.",
      projectUrl: { label: "Project website", href: "https://your-project-link.example" },
      techStack: ["Tech stack", "Tool name", "Framework"],
      skillsUsed: ["Skill used", "Skill used"],
      status: "Status label",
      links: [
        { label: "Website", href: "https://your-project-link.example" },
        { label: "GitHub", href: "https://github.com/yourusername/project" }
      ],
      image: "Image placeholder",
      icon: "III"
    },
    {
      title: "Project title",
      shortDescription: "Short project description goes here.",
      details: "Optional longer project details go here.",
      projectUrl: { label: "Project website", href: "https://your-project-link.example" },
      techStack: ["Tech stack", "Tool name", "Framework"],
      skillsUsed: ["Skill used", "Skill used"],
      status: "Status label",
      links: [
        { label: "Website", href: "https://your-project-link.example" },
        { label: "GitHub", href: "https://github.com/yourusername/project" }
      ],
      image: "Image placeholder",
      icon: "IV"
    }
  ],

  // Research or idea entries. Use this for manuscripts, experiments, notes, or proposals.
  research: [
    {
      // Research or idea title.
      title: "Research / idea title",
      // Field or discipline, such as AI ethics, data visualization, or education.
      researchArea: "Research area",
      // Short abstract for quick scanning.
      abstract: "Short abstract goes here.",
      // Slightly longer description, motivation, or contribution.
      description: "Short description of the research question, method, or idea goes here.",
      // Topics shown as compact marks on the scroll.
      tags: ["Topic", "Method", "Area"],
      // Skills connected to the work.
      relatedSkills: ["Skill", "Skill"],
      // Status such as "Draft", "Published", "Exploring", or "Submitted".
      status: "Status label",
      // Date, year, or semester.
      date: "Year",
      // Optional paper, article, repository, or research site link.
      paperLink: { label: "Research site", href: "https://your-link.example" },
      icon: "R"
    },
    {
      title: "Research / idea title",
      researchArea: "Research area",
      abstract: "Short abstract goes here.",
      description: "Short description of the research question, method, or idea goes here.",
      tags: ["Topic", "Method", "Area"],
      relatedSkills: ["Skill", "Skill"],
      status: "Status label",
      date: "Year",
      paperLink: { label: "Paper / link", href: "https://your-link.example" },
      icon: "I"
    }
  ],

  // Skill categories. Level is a plain editable proficiency label, not a fixed score.
  skills: [
    {
      // Category name such as Frontend, Research, Data, Design, or Leadership.
      category: "Skill category",
      // Core skills in this category.
      skills: ["Skill name", "Skill name", "Skill name"],
      icon: "A",
      // Optional proficiency label such as Beginner, Intermediate, Advanced, or Currently learning.
      level: "Proficiency label",
      // Tools or platforms connected to this category.
      tools: ["Tool name", "Tool name"],
      // Project names connected to this category.
      relatedProjects: ["Project title"],
      // Short professional summary of how you use this category.
      description: "Short description of how you use these skills."
    },
    {
      category: "Skill category",
      skills: ["Skill name", "Skill name", "Skill name"],
      icon: "B",
      level: "Proficiency label",
      tools: ["Tool name", "Tool name"],
      relatedProjects: ["Project title"],
      description: "Short description of how you use these skills."
    },
    {
      category: "Skill category",
      skills: ["Skill name", "Skill name", "Skill name"],
      icon: "C",
      level: "Proficiency label",
      tools: ["Tool name", "Tool name"],
      relatedProjects: ["Project title"],
      description: "Short description of how you use these skills."
    }
  ],

  // Honors and awards. Use only real entries when you customize this.
  honors: [
    {
      // Honor, award, certification, scholarship, or recognition title.
      title: "California Informatics Competition - CALICO Fall 2025",
      // Issuing organization.
      issuer: "University of California, Berkeley",
      // Year, month/year, or date range.
      date: "2025",
      // Category such as Award, Certification, Competition, Scholarship, or Recognition.
      category: "Competitive Programming",
      // Short explanation of why it matters.
      description: "Awarded Silver Medal, ranking 43rd out of 1092 globally. Achieved Country Rank #1, placing first nationally.",
      // Optional placement, level, distinction, or rank.
      rank: "Silver Medal",
      // Optional credential, certificate, or proof link.
      certificate: { label: "Certificate", href: "https://your-certificate-link.example" },
      // Skills or themes connected to this recognition.
      relatedSkills: ["Skill", "Skill"],
      // Optional media/icon placeholder. Replace with an image path or remove if unused.
      media: "Media placeholder",
      icon: "Seal"
    },
    {
      title: "Honor / Award title",
      issuer: "Organization name",
      date: "Year",
      category: "Category / type",
      description: "Short description goes here.",
      rank: "Optional rank / level",
      certificate: { label: "Certificate", href: "https://your-certificate-link.example" },
      relatedSkills: ["Skill", "Skill"],
      media: "Media placeholder",
      icon: "Medal"
    }
  ],

  // Experience entries. Bullets should stay short for easy scanning.
  experience: [
    {
      // Role or title.
      role: "Experience title",
      // Company, school, club, lab, community, or organization.
      organization: "Organization name",
      // Employment or role type, such as Internship, Volunteer, Club role, Part-time, or Research.
      roleType: "Role type",
      // Location or Remote/Hybrid.
      location: "Location",
      // Start month/year or date.
      startDate: "Start date",
      // End date or Present.
      endDate: "Present",
      // Short overview of the role.
      summary: "Short summary of the role goes here.",
      // LinkedIn-style impact, responsibility, or contribution bullets.
      bullets: [
        "Responsibility or contribution placeholder.",
        "Responsibility or contribution placeholder."
      ],
      // Skills, technologies, or tools used in the role.
      skills: ["Skill / tool", "Skill / tool"],
      // Optional role links such as organization page, project, certificate, or article.
      links: [{ label: "Related link", href: "https://your-link.example" }],
      // Optional logo/icon placeholder. Replace with a logo path or remove if unused.
      logo: "Logo placeholder",
      icon: "Role"
    },
    {
      role: "Experience title",
      organization: "Organization name",
      roleType: "Role type",
      location: "Location",
      startDate: "Start date",
      endDate: "End date",
      summary: "Short summary of the role goes here.",
      bullets: [
        "Responsibility or contribution placeholder.",
        "Responsibility or contribution placeholder."
      ],
      skills: ["Skill / tool", "Skill / tool"],
      links: [{ label: "Related link", href: "https://your-link.example" }],
      logo: "Logo placeholder",
      icon: "Log"
    },
    {
      // Role or title.
      role: "Experience title",
      // Company, school, club, lab, community, or organization.
      organization: "Organization name",
      // Employment or role type, such as Internship, Volunteer, Club role, Part-time, or Research.
      roleType: "Role type",
      // Location or Remote/Hybrid.
      location: "Location",
      // Start month/year or date.
      startDate: "Start date",
      // End date or Present.
      endDate: "Present",
      // Short overview of the role.
      summary: "Short summary of the role goes here.",
      // LinkedIn-style impact, responsibility, or contribution bullets.
      bullets: [
        "Responsibility or contribution placeholder.",
        "Responsibility or contribution placeholder."
      ],
      // Skills, technologies, or tools used in the role.
      skills: ["Skill / tool", "Skill / tool"],
      // Optional role links such as organization page, project, certificate, or article.
      links: [{ label: "Related link", href: "https://your-link.example" }],
      // Optional logo/icon placeholder. Replace with a logo path or remove if unused.
      logo: "Logo placeholder",
      icon: "Role"
    }
  ],

  // Contact details and social links. The API uses CONTACT_TO_EMAIL from .env for delivery.
  contact: {
    email: "your.email@example.com",
    formTitle: "Send a message to the archive",
    formDescription: "Use this form for collaboration, research, project, or application-related messages.",
    links: [
      { label: "Email", href: "mailto:your.email@example.com" },
      { label: "GitHub", href: "https://github.com/yourusername" }
    ],
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
      { label: "GitHub", href: "https://github.com/yourusername" },
      { label: "Website", href: "https://your-domain.example" }
    ]
  }
};
