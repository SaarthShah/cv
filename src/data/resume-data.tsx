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
        "Bachelor's Degree in Data Science with specialization in Applied Mathematics & Modeling, and a Cal Alumni Leadership Scholar, GPA: 3.96/4.0",
      start: "2023",
      end: "2025",
    },
    {
      school: "Halıcıoğlu Data Science Institute (UC San Diego)",
      degree:
        "Bachelor's Degree in Data Science with specialization in Artificial Intelligence and Machine Learning, GPA: 4.0/4.0",
      start: "2021",
      end: "2023",
    },
    {
      school: "La Martinière College, Lucknow",
      degree:
        "Focused on Math and Computer Science. Scored 98.25% in ISC and 95% in ICSE exams.",
      start: "2007",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Whatnot",
      link: "https://www.whatnot.com/",
      badges: ["San Francisco, CA"],
      title: "Software Engineering Intern (Search)",
      logo: ParabolLogo,
      start: "May 2024",
      end: "Aug 2024",
      description:
        "Building spelling correction within Whatnot Search, used by millions of users daily.",
      media: {
        videos: [],
        images: [],
        linkPreviews: [
          "https://apps.apple.com/us/app/whatnot-live-video-shopping/id1488269261",
          "https://techcrunch.com/2022/07/21/whatnot-valuation-livestream-shopping/",
        ],
      },
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
        "The future of conversational AI. No more hold music – Experience instant, effective responses over phone 24/7",
      media: {
        videos: [
          "https://www.youtube.com/embed/HSOmKuLyPHs?si=eWrDv3HXDzxRoXCT",
        ],
        images: [],
        linkPreviews: [],
      },
    },
    {
      company: "Stanford University Snyder Laboratory",
      link: "https://github.com/Stanford-Health/wearipedia",
      badges: ["Stanford, CA"],
      title: "Data Scientist",
      logo: ClevertechLogo,
      start: "Apr 2022",
      end: "Jan 2024",
      description: `• As of right now, research with wearable devices is limited to larger research labs with the skills to operate and extract data. Our research makes it easier for the public, students, and smaller research labs to conveniently get access to information on what the best wearables are, how to apply for using them for research, and how to get started using them for studies and statistical conclusions. Long-term we firmly believe that wearable biomedical sensors will revolutionize health care, and with our project we believe we can help accelerate that trajectory.\n • My contribution to this research was by building an open-source Python package that makes it easier for the public, students, and smaller labs to access health data for personal and clinical studies conveniently. Additionally, I wrote 5 Research Notebooks that teach the steps required to extract, visualize, and analyze data from popular APIs like Google Fit, Strava, Coros, Cronometer and Polar Flow. Formally, these notebooks will be submitted to Lancet Digital Health (Impact factor is 36) together with other information detailing wearable devices.`,
      media: {
        videos: [],
        images: [],
        linkPreviews: [
          "https://github.com/Stanford-Health/wearipedia",
          "https://github.com/Stanford-Health/wearable-notebooks",
        ],
      },
    },
    {
      company: "San Diego Supercomputer Center",
      link: "https://today.ucsd.edu/story/experts-gather-at-sdsc-to-discuss-using-data-and-ai-to-improve-responses-to-mass-casualty-events",
      badges: ["La Jolla, CA"],
      title: "Data Scientist",
      logo: ClevertechLogo,
      start: "Feb 2023",
      end: "Jan 2024",
      description: `• Built a geospatial model that alerts school authorities in real-time of events based on abnormal 911 call patterns, with 99.99% accuracy. Collaborated with 911 call processing companies to deploy the model at 17 schools.\n• Wrote 7 research notebooks on shootings in Dadeville, MSU, etc., using spatiotemporal clustering, hotspot evaluations, geo-fencing, temporal patterns, and spatial movements. Influenced government authorities’ understanding of the issue leading to a 27% increase in reporting of potential shootings.`,
      media: {
        videos: [],
        images: [],
        linkPreviews: [
          "https://github.com/SaarthShah/sdsc-conference-911/blob/main/msu-model1.ipynb",
        ],
      },
    },
    {
      company: "Interalize (acquired)",
      link: "https://www.internalize.io",
      badges: ["San Francisco, CA"],
      title: "Co-Founder & CEO",
      logo: ClevertechLogo,
      start: "Feb 2023",
      end: "Sep 2023",
      description: `• Combining recommendation engines with LLMs to build consumer facing tools that helps companies drive revenue, cut engineering costs.\n• At Internalize, we spun off a team to create a Shopify chatbot plugin that combined recommendation engines with large language models. The chatbot, called dart.cx, could answer customer queries and recommend products. Dart was acquired in September 2023.`,
      media: {
        videos: [
          "https://www.youtube.com/embed/ELOPpBoN0AM?si=mBkpEsc0xdfHQs_I",
        ],
        images: [],
        linkPreviews: [],
      },
    },
    {
      company: "Deepgram, Inc",
      link: "https://deepgram.com",
      badges: ["Ann Arbor, MI"],
      title: "Software Engineering Intern",
      logo: ClevertechLogo,
      start: "Jun 2023",
      end: "Aug 2023",
      description: `• Engineered and deployed a full-stack live transcription tool for Deepgram’s strategic partnerships at tech events. Utilized NextJs, Supabase, slack api, flyio and websockets.\n
• Contributed to Deepgram Python SDK, supporting new features and improving reliability.\n
• Developed 3 starter apps in Java, C#, and PHP to help enterprise users get started with Deepgram’s transcription in different languages.\n
• Implemented a full-stack sentiment analysis tool to analyze YouTube videos using open-source transformer models and the Deepgram API.`,
      media: {
        videos: [],
        images: [],
        linkPreviews: [
          "https://deepgram.com/learn/sentiment-analysis-with-hugging-face-and-deepgram",
          "https://github.com/deepgram/deepgram-python-sdk",
        ],
      },
    },
    {
      company: "Socale, Co",
      link: "https://socale.co",
      badges: ["La Jolla, CA"],
      title: "Co-Founer & CEO",
      logo: ClevertechLogo,
      start: "Mar 2021",
      end: "May 2023",
      description: `• Co-founded Berkeley Skydeck & Blackstone Launchpad backed networking platform that connects like-minded
students on college campuses.\n• Deployed flutter app that gained 1000+ downloads, 13000 messages, and 30000 sessions from UCSD students.\n• Developed a graph-based recommendation algorithm using Neo4j, AWS lambda functions & DynamoDB to foster
matching 900+ users on academic interests.\n• Raised $8000 in cash funds and $100,000 in AWS credits, top 10% of YCombinator W’23 Applicants\n• Created 3 Streamlit dashboards to monitor KPIs from Instagram, Mailchimp, AWS, and Google Analytics APIs.`,
      media: {
        videos: [
          "https://www.youtube.com/embed/_qfl7btaUGI?si=rsMn9E08xDay1gws",
        ],
        images: [
          "https://media.licdn.com/dms/image/C4D2DAQEcU2qofL2YAA/profile-treasury-image-shrink_800_800/0/1662198733831?e=1720926000&v=beta&t=krbeujpP8R-Q_97vGkl9X9YPPjCqctbHMHPxoNCzF_M",
        ],
        linkPreviews: ["https://www.socale.co"],
      },
    },
    {
      company: "San Diego Supercomputer Center",
      link: "https://ucsdnews.ucsd.edu/feature/uc-san-diego-data-science-undergrads-help-keep-k-12-students-covid-safe",
      badges: ["La Jolla, CA"],
      title: "Data Scientist",
      logo: ClevertechLogo,
      start: "Sep 2021",
      end: "May 2022",
      description: `• Assisted on Geospatial agent-based simulation system that analyzes COVID-19 transmission in schools.\n• Converted the original Python model to Julia in order to increase performance by 100%.\n• Utilized Agents.jl, Plots.jl and Shapefiles to simulate 10000+ daily classroom movements and assess infection risks due to aerosol and droplet transmission.`,
      media: {
        videos: [],
        images: [],
        linkPreviews: [
          "https://today.ucsd.edu/story/uc-san-diego-data-science-undergrads-help-keep-k-12-students-covid-safe",
        ],
      },
    },
    {
      company: "Project Recoil",
      relink:
        "https://www.youtube.com/watch?v=e92QsK5Eidc&embeds_referring_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title",
      badges: ["Remote"],
      title: "Game Developer",
      logo: ClevertechLogo,
      start: "Feb 2020",
      end: "Oct 2020",
      description: `Single-handedly developed a cross-platform multiplayer first-person shooter game using Unity and Photon.`,
      media: {
        videos: [
          "https://www.youtube.com/embed/e92QsK5Eidc?si=tyWxXYWFM7zgSKpo",
        ],
        images: [],
        linkPreviews: [],
      },
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
    "Large Language Models",
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
    "Neo4j",
  ],
} as const;
