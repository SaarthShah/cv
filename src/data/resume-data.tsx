import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Saarth Shah",
  initials: "SS",
  location: "Berkeley, CA",
  locationLink: "https://maps.app.goo.gl/5gLWWGFiGTL45QBLA",
  about: "Entrepreneur, Data Scientist, and Full Stack Engineer",
  summary:
    "I am concurrently a student at the University of California, Berkeley, and a proficient Data Scientist as well as a skilled Full-Stack Developer. My passion lies in leveraging my technical expertise to tackle real-world problems and find innovative solutions.",
  avatarUrl: "./images/avatar.png",
  personalWebsiteUrl: "https://www.saarthshah.com",
  contact: {
    email: "saarth@berkeley.edu",
    // tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/SaarthShah",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saarthshah/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/saarth_",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of California, Berkeley",
      degree:
        "Bachelor's Degree in Data Science with specialization in Applied Mathematics & Modeling, I am a Transfer Student and a Cal Alumni Leadership Scholar. Somehow have a 4.0 GPA",
      start: "2023",
      end: "2025",
    },
    {
      school: "Halıcıoğlu Data Science Institute (UC San Diego)",
      degree:
        "Bachelor's Degree in Data Science with specialization in Artificial Intelligence and Machine Learning,  GPA: 4.0/4.0",
      start: "2021",
      end: "2023",
    },
    {
      school: "La Martinière College, Lucknow",
      degree:
        "I completed my high school education with a focus on Math and Computer Science. I achieved a score of 98.25% in the ISC and 95% in the ICSE exams. Attended a different school for XI & XII but I regret that decision to this day.",
      start: "2007",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Whatnot",
      link: "https://www.whatnot.com/",
      badges: ["Remote"],
      title: "Incoming Software Engineering Intern",
      logo: ParabolLogo,
      start: "May 2024",
      end: "Aug 2024",
      description: "> Summer 2024",
    },
    {
      company: "Dart",
      link: "https://dart.cx",
      badges: ["San Francisco, CA"],
      title: "Co-Founder & CEO",
      logo: ClevertechLogo,
      start: "Nov 2023",
      end: "Present",
      description:
        "> The future of conversational AI. No more hold music – Experience instant, effective responses over phone 24/7",
    },
    {
      company: "Stanford University Snyder Laboratory",
      link: "https://github.com/Stanford-Health/wearipedia",
      badges: ["Stanford, CA"],
      title: "Data Scientist",
      logo: ClevertechLogo,
      start: "Apr 2022",
      end: "Present",
      description: `> As of right now, research with wearable devices is limited to larger research labs with the skills to operate and extract data. Our research makes it easier for the public, students, and smaller research labs to conveniently get access to information on what the best wearables are, how to apply for using them for research, and how to get started using them for studies and statistical conclusions. Long-term we firmly believe that wearable biomedical sensors will revolutionize health care, and with our project we believe we can help accelerate that trajectory.\n > My contribution to this research was by building an open-source Python package that makes it easier for the public, students, and smaller labs to access health data for personal and clinical studies conveniently. Additionally, I wrote 5 Research Notebooks that teach the steps required to extract, visualize, and analyze data from popular APIs like Google Fit, Strava, Coros, Cronometer and Polar Flow. Formally, these notebooks will be submitted to Lancet Digital Health (Impact factor is 36) together with other information detailing wearable devices.`,
    },
    {
      company: "San Diego Supercomputer Center",
      link: "https://today.ucsd.edu/story/experts-gather-at-sdsc-to-discuss-using-data-and-ai-to-improve-responses-to-mass-casualty-events",
      badges: ["La Jolla, CA"],
      title: "Data Scientist",
      logo: ClevertechLogo,
      start: "Apr 2022",
      end: "Present",
      description: `> Built a geospatial model that alerts school authorities in real-time of events based on abnormal 911 call patterns, with 99.99% accuracy. Collaborated with 911 call processing companies to deploy the model at 17 schools.\n> Wrote 7 research notebooks on shootings in Dadeville, MSU, etc., using spatiotemporal clustering, hotspot evaluations, geo-fencing, temporal patterns, and spatial movements. Influenced government authorities’ understanding of the issue leading to a 27% increase in reporting of potential shootings.`,
    },
    {
      company: "Interalize (acquired)",
      link: "https://www.internalize.io",
      badges: ["San Francisco, CA"],
      title: "Co-Founder & CEO",
      logo: ClevertechLogo,
      start: "Feb 2023",
      end: "Sep 2023",
      description: `> Combining recommendation engines with LLMs to build consumer facing tools that helps companies drive revenue, cut engineering costs.\n> At Internalize, we spun off a team to create a Shopify chatbot plugin that combined recommendation engines with large language models. The chatbot, called dart.cx, could answer customer queries and recommend products. Dart was acquired in September 2023.`,
    },
    {
      company: "Deepgram, Inc",
      link: "https://deepgram.com",
      badges: ["Ann Arbor, MI"],
      title: "Software Engineering Intern",
      logo: ClevertechLogo,
      start: "Jun 2023",
      end: "Aug 2023",
      description: `> Engineered and deployed a full-stack live transcription tool for Deepgram’s strategic partnerships at tech events. Utilized NextJs, Supabase, slack api, flyio and websockets.\n
> Contributed to Deepgram Python SDK, supporting new features and improving reliability.\n
> Developed 3 starter apps in Java, C#, and PHP to help enterprise users get started with Deepgram’s transcription in different languages.\n
> Implemented a full-stack sentiment analysis tool to analyze YouTube videos using open-source transformer models and the Deepgram API.`,
    },
    {
      company: "Socale, Co",
      link: "https://socale.co",
      badges: ["La Jolla, CA"],
      title: "Co-Founer & CEO",
      logo: ClevertechLogo,
      start: "Mar 2021",
      end: "May 2023",
      description: `> Co-founded Berkeley Skydeck & Blackstone Launchpad backed networking platform that connects like-minded
students on college campuses.\n> Deployed flutter app that gained 1000+ downloads, 13000 messages, and 30000 sessions from UCSD students.\n> Developed a graph-based recommendation algorithm using Neo4j, AWS lambda functions & DynamoDB to foster
matching 900+ users on academic interests.\n> Raised $8000 in cash funds and $100,000 in AWS credits, top 10% of YCombinator W’23 Applicants\n> Created 3 Streamlit dashboards to monitor KPIs from Instagram, Mailchimp, AWS, and Google Analytics APIs.`,
    },
    {
      company: "San Diego Supercomputer Center",
      link: "https://ucsdnews.ucsd.edu/feature/uc-san-diego-data-science-undergrads-help-keep-k-12-students-covid-safe",
      badges: ["La Jolla, CA"],
      title: "Data Scientist",
      logo: ClevertechLogo,
      start: "Sep 2021",
      end: "May 2022",
      description: `> Assisted on Geospatial agent-based simulation system that analyzes COVID-19 transmission in schools.\n> Converted the original Python model to Julia in order to increase performance by 100%.\n> Utilized Agents.jl, Plots.jl and Shapefiles to simulate 10000+ daily classroom movements and assess infection risks due to aerosol and droplet transmission.`,
    },
  ],
  skills: [
    "Next.js",
    "Node.js",
    "Amazon Web Services",
    "Flask",
    "Websockets",
    "Data Analysis",
    "Data Science",
    "Language Models",
    "Prompt Engineering",
    "Langchain",
    "Guidance",
    "Data Structures & Algorithms",
    "Flutter",
    "JavaScript",
    "HTML/CSS",
    "Java",
    ".NET",
    "Python NLTK",
    "Pandas",
    "Sci-kit learn",
    "PHP",
    "Postgres",
    "React.js",
    "REST APIs",
    "SQL",
    "Python",
    "Unity",
    "Git",
    "Postman",
    "Firebase",
    "GraphQL",
    "Vercel",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
