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
  techStack: string[];
  status: string;
  github?: string;
  demo?: string;
  image?: string;
  icon?: string;
};

export type ResearchItem = {
  title: string;
  summary: string;
  tags: string[];
  status: string;
  link?: string;
};

export type SkillCategory = {
  category: string;
  skills: string[];
  icon?: string;
  level?: string;
};

export type HonorItem = {
  title: string;
  issuer: string;
  date: string;
  category: string;
  description: string;
  rank?: string;
  certificate?: string;
  icon?: string;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  bullets: string[];
  skills: string[];
  link?: string;
  icon?: string;
};

export type TimelineItem = {
  title: string;
  date: string;
  description: string;
  category?: string;
  icon?: string;
};

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
    subtitle: string;
    image: string;
    ctas: CallToAction[];
  };
  sections: Record<
    | "about"
    | "projects"
    | "research"
    | "skills"
    | "honors"
    | "experience"
    | "timeline"
    | "contact",
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
  timeline: TimelineItem[];
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
    siteUrl: "https://your-domain.example",
    keywords: ["Your Name", "Portfolio", "Developer", "Researcher"],
    ogImage: "/images/temple-archive-hero.png"
  },

  // Top navigation links. The href values should match section ids in the page.
  navigation: [
    { label: "Archive", href: "#about" },
    { label: "Artifacts", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Honors", href: "#honors" },
    { label: "Contact", href: "#contact" }
  ],

  // First screen content and call-to-action buttons.
  hero: {
    name: "Your Name",
    eyebrow: "Sacred Archive Portfolio",
    headline: "Your headline here",
    subtitle: "Short description goes here. Introduce your focus, interests, or current path in one or two sentences.",
    image: "/images/temple-archive-hero.png",
    ctas: [
      { label: "View artifacts", href: "#projects", variant: "primary" },
      { label: "Send a message", href: "#contact", variant: "secondary" }
    ]
  },

  // Section headings and short descriptions.
  sections: {
    about: {
      eyebrow: "Inscription",
      title: "About",
      description: "Short description goes here."
    },
    projects: {
      eyebrow: "Relic Vault",
      title: "Projects",
      description: "Short description goes here."
    },
    research: {
      eyebrow: "Hidden Scrolls",
      title: "Research / Ideas",
      description: "Short description goes here."
    },
    skills: {
      eyebrow: "Constellation Map",
      title: "Skills",
      description: "Short description goes here."
    },
    honors: {
      eyebrow: "Shrine of Honors",
      title: "Honors & Awards",
      description: "Short description goes here."
    },
    experience: {
      eyebrow: "Expedition Log",
      title: "Experience",
      description: "Short description goes here."
    },
    timeline: {
      eyebrow: "Mountain Path",
      title: "Journey",
      description: "Short description goes here."
    },
    contact: {
      eyebrow: "Messenger Gate",
      title: "Contact",
      description: "Short description goes here."
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
      { label: "Focus", value: "Your focus area" },
      { label: "Location", value: "Your location" },
      { label: "Currently", value: "Your current role or status" }
    ]
  },

  // Projects appear as artifact cards. Leave links blank or remove them if not ready.
  projects: [
    {
      title: "Project title",
      shortDescription: "Project description",
      details: "Optional longer project details go here.",
      techStack: ["Tech stack", "Tool name", "Framework"],
      status: "Status label",
      github: "https://github.com/yourusername/project",
      demo: "https://your-demo-link.example",
      icon: "I"
    },
    {
      title: "Project title",
      shortDescription: "Project description",
      details: "Optional longer project details go here.",
      techStack: ["Tech stack", "Tool name", "Framework"],
      status: "Status label",
      github: "https://github.com/yourusername/project",
      demo: "https://your-demo-link.example",
      icon: "II"
    },
    {
      title: "Project title",
      shortDescription: "Project description",
      details: "Optional longer project details go here.",
      techStack: ["Tech stack", "Tool name", "Framework"],
      status: "Status label",
      github: "https://github.com/yourusername/project",
      demo: "https://your-demo-link.example",
      icon: "III"
    }
  ],

  // Research or idea entries. Use this for manuscripts, experiments, notes, or proposals.
  research: [
    {
      title: "Research / idea title",
      summary: "Short summary goes here.",
      tags: ["Topic", "Method", "Area"],
      status: "Status label",
      link: "https://your-link.example"
    },
    {
      title: "Research / idea title",
      summary: "Short summary goes here.",
      tags: ["Topic", "Method", "Area"],
      status: "Status label"
    }
  ],

  // Skill categories. Level is a plain editable label, not a fixed score.
  skills: [
    {
      category: "Skill category",
      skills: ["Skill name", "Skill name", "Skill name"],
      icon: "A",
      level: "Level label"
    },
    {
      category: "Skill category",
      skills: ["Skill name", "Skill name", "Skill name"],
      icon: "B",
      level: "Level label"
    },
    {
      category: "Skill category",
      skills: ["Skill name", "Skill name", "Skill name"],
      icon: "C",
      level: "Level label"
    }
  ],

  // Honors and awards. Use only real entries when you customize this.
  honors: [
    {
      title: "Honor / Award title",
      issuer: "Organization name",
      date: "Year",
      category: "Category / type",
      description: "Short description goes here.",
      rank: "Optional rank / level",
      certificate: "https://your-certificate-link.example",
      icon: "Seal"
    },
    {
      title: "Honor / Award title",
      issuer: "Organization name",
      date: "Year",
      category: "Category / type",
      description: "Short description goes here.",
      icon: "Medal"
    }
  ],

  // Experience entries. Bullets should stay short for easy scanning.
  experience: [
    {
      role: "Experience title",
      organization: "Organization name",
      location: "Location",
      startDate: "Start date",
      endDate: "Present",
      description: "Short description goes here.",
      bullets: [
        "Responsibility or contribution placeholder.",
        "Responsibility or contribution placeholder."
      ],
      skills: ["Skill / tool", "Skill / tool"],
      link: "https://your-link.example",
      icon: "Role"
    },
    {
      role: "Experience title",
      organization: "Organization name",
      location: "Location",
      startDate: "Start date",
      endDate: "End date",
      description: "Short description goes here.",
      bullets: [
        "Responsibility or contribution placeholder.",
        "Responsibility or contribution placeholder."
      ],
      skills: ["Skill / tool", "Skill / tool"],
      icon: "Log"
    }
  ],

  // Journey entries are more story-like than formal experience.
  timeline: [
    {
      title: "Timeline milestone",
      date: "Year",
      description: "Short description goes here.",
      category: "Category",
      icon: "Gate"
    },
    {
      title: "Timeline milestone",
      date: "Year",
      description: "Short description goes here.",
      category: "Category",
      icon: "Path"
    },
    {
      title: "Timeline milestone",
      date: "Year",
      description: "Short description goes here.",
      category: "Category",
      icon: "Peak"
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
