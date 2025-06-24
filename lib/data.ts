// ===== FILE: lib/data.ts =====
export const personalInfo = {
    name: "Victor Su-Ortiz",
    title: "Software Engineer & AI Researcher",
    location: "Mountain View, CA",
    email: "vsuortiz1@gmail.com",
    phone: "917-291-8452",
    linkedin: "linkedin.com/in/victor-su-ortiz",
    github: "github.com/vsuortiz",
  }
  
  export const experiences = [
    {
      title: "Graduate AI Research Assistant",
      company: "Oak Ridge National Laboratory",
      location: "Oak Ridge, Tennessee",
      duration: "May 2024 – August 2024",
      description: [
        "Directed the training of graph convolutional neural networks and graph attention networks using PyTorch and hyperparameter optimization framework DeepHyper for predicting ion complex properties",
        "Led the analysis of the performance of models using metrics like R², and presented findings to the Department of Energy showing CNN results in lower test and val error"
      ],
      iconType: "experience" as const
    },
    {
      title: "Software Engineer",
      company: "Clario",
      location: "Princeton, NJ",
      duration: "October 2022 – May 2024",
      description: [
        "Developing, designing, and re-factoring software for clinical endpoints in oncology studies and deploying the production-ready software for clients such as MSK, Pfizer, Merck, and BMS",
        "Optimizing the user experience and run time of nine RECIST applications by meticulously designing the UI in XML, and controls in C# based on business requirement specifications",
        "Reducing the blocking time frame in production by 50% by effectively unit testing and troubleshooting production bugs on feature branches, along with impact analysis on JIRA and version control on Bitbucket"
      ],
      iconType: "experience" as const
    },
    {
      title: "Teaching Assistant for Biochemistry",
      company: "Cornell University",
      location: "Ithaca, NY",
      duration: "August 2021 – December 2021",
      description: [
        "Supported students through weekly office hours, explaining challenging concepts, conducting oral quizzes, and grading weekly quizzes receiving a stellar 4.8/5 evaluation from students"
      ],
      iconType: "education" as const
    },
    {
      title: "Research Assistant",
      company: "Weill Cornell",
      location: "New York, NY",
      duration: "June 2020 – August 2021",
      description: [
        "Developed a lesion network using the connectome database and dozens of scans, giving the postdoctoral associate insights into the perivascular space",
        "Spearheaded processing of 183 NIFTI files in open platform volumetry software by designing scripts in MatLab",
        "Co-authored a paper on the correlation between volume of cerebrospinal fluid and multiple sclerosis"
      ],
      iconType: "experience" as const
    }
  ]
  
  export const projects = [
    {
      title: "Tartan Valley Hacks",
      description: "Launched CMU-SV's flagship student-run AI hackathon, hosting 150+ top student hackers from across the Bay Area for a 2-day competition focused on AI agents & applied intelligence",
      tags: ["Leadership", "Event Management", "AI", "Sponsorships"],
      iconType: "project" as const,
      highlights: ["$15k+ sponsorships", "$3K+ prizes", "$20K+ AI credits"]
    },
    {
      title: "BobaSync",
      description: "Built a full-stack mobile app enabling AI agents to autonomously schedule meetings via Google Calendar, with secure OAuth 2.0, JWT auth, real-time WebSocket alerts",
      tags: ["MongoDB", "Gemini API", "React-Native", "Node.js"],
      iconType: "project" as const
    },
    {
      title: "RPC & Raft & Distributed KVStore",
      description: "Built a fault-tolerant distributed key-value store from scratch in Go using a custom implementation of the Raft consensus algorithm and custom remote procedure call",
      tags: ["Go", "Distributed Systems", "Raft", "Consensus"],
      iconType: "project" as const
    },
    {
      title: "Proactive Health",
      description: "Led the Design of a cloud hosted full-stack application using Modal for serverless AI compute and Retrieval-Augmented Generation to solve the issue on health data transparency",
      tags: ["MongoDB", "OpenAI API", "Next.js", "Python", "Modal", "Swift"],
      iconType: "project" as const
    }
  ]
  
  export const skills = {
    languages: ["C/C++", "C#", "Java", "Python", "SQL (Postgres)", "JavaScript", "TypeScript", "HTML/CSS", "OCaml", "XML", "Assembly (RISC-V)", "Go"],
    frameworks: ["React", "Next.js", "Node.js", "Express.js", "Material-UI", "React-Native", "Mongoose", "Axios", "Matplotlib", "Numpy", "PyTorch"],
    tools: ["Git", "VS Code", "Visual Studio", "CMake", "Eclipse", "JIRA", "Bitbucket", "Confluence", "Figma", "Docker", "AWS", "Vercel"],
  }
  
  export const education = [
    {
      school: "Carnegie Mellon University",
      degree: "Master of Science in Software Engineering",
      duration: "January 2025 – May 2026",
      location: "Mountain View, CA",
      highlights: ["Overall GPA: 4.0", "GEM Fellowship"],
      iconType: "education" as const
    },
    {
      school: "Cornell University",
      degree: "Bachelor of Science with Distinction in Computer Science, and in Bio-Engineering",
      duration: "August 2018 – May 2022",
      location: "Ithaca, NY",
      highlights: ["Magna Cum Laude", "Overall GPA: 3.79", "CS GPA: 3.83", "BE GPA: 3.93"],
      iconType: "education" as const
    }
  ]
  
  export const publications = [
    {
      title: "Accuracy and comparison of two rapid multiplex PCR tests for gastroenteritis pathogens: a systematic review and meta-analysis",
      authors: "Li-Jun Chang, Chun-Jen Hsiao, Bing Chen, et al.",
      journal: "BMJ Open Gastro",
      year: "2021",
      doi: "10.1136/bmjgast-2020-000553"
    },
    {
      title: "Increasing age is independently associated with higher free water in non-active MS brain - A multi-compartment analysis using FAST-T2",
      authors: "Liangdong Zhou, Yi Li, Xiuyuan Wang, et al.",
      journal: "bioRxiv",
      year: "2021",
      doi: "10.1101/2021.02.01.429067"
    }
  ]
  
  export const awards = [
    "Magna Cum Laude (May 2022)",
    "Dean's List (Spring 2019, Fall 2019, Fall 2020, Spring 2021, Fall 2021, Spring 2022)",
    "GEM Fellowship"
  ]
  