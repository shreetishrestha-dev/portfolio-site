export const portfolio = {
  name: "Shreeti Shrestha",
  title: "Full-Stack Engineer",
  location: "Kathmandu, Nepal",
  email: "shreetis13@gmail.com",
  phone: "+977-9860397793",
  tagline:
    "Building reliable products across healthcare, cloud security, analytics, and community platforms.",
  summary:
    "Computer Engineer with deep experience shipping frontend-heavy and full-stack products for healthcare, cloud security, and culture-focused platforms. Known for translating complex systems into elegant interfaces, scalable architecture, and measurable product outcomes.",
  socials: {
    github: "https://github.com/shreetishrestha-dev",
    linkedin: "https://www.linkedin.com/in/shreetishrestha/",
    website: "https://thetrops.com/",
    blog: "https://shreetishrestha-dev.github.io/shreeti-blog/",
  },
  stats: [
    { value: "7+", label: "Years building production software" },
    { value: "4", label: "Core domains: health, security, culture, analytics" },
    { value: "6+", label: "Enterprise-scale projects delivered across multiple teams" },
    { value: "E2E", label: "Product range from interface craft to backend architecture" },
  ],
  skills: [
    {
      title: "Frontend",
      items: ["React", "Vue", "Backbone", "Marionette", "Tailwind CSS", "D3.js", "Vanilla JS"],
    },
    {
      title: "Backend",
      items: ["TypeScript", "Node.js", "Express", "NestJS", "Python", "Django/DRF", "Serverless"],
    },
    {
      title: "Cloud & Data",
      items: ["AWS", "GCP", "Firebase", "PostgreSQL", "MySQL", "MongoDB", "Firestore"],
    },
    {
      title: "Mobile & Tooling",
      items: ["Flutter", "React Native", "Jupyter", "Pandas", "NumPy", "OpenStreetMap"],
    },
  ],
  experiences: [
    {
      company: "Leapfrog Technologies",
      role: "Senior Software Engineer",
      period: "May 2024 - Present",
      highlight:
        "Working across healthcare products as a full-stack and solutions engineer, with a strong focus on patient communication and insight-rich reporting.",
      bullets: [
        "Delivered aggregated metrics dashboards and reporting flows for Trayt Health to surface engagement behavior and clinical intelligence.",
        "Designed and launched custom communication solutions at Memora Health for more connected patient-provider journeys.",
        "Built complex workflow logic and observation hooks for patient surveys, tips, and feedback experiences.",
      ],
    },
    {
      company: "The Trops",
      role: "Lead Software Developer",
      period: "Apr 2021 - Present",
      highlight:
        "Leading product engineering for a cross-platform app that supports local arts and culture economies.",
      bullets: [
        "Published and maintained the app on both Google Play and the App Store.",
        "Helped shape early architecture, led NoSQL to SQL migration, and drove Express to NestJS refactors.",
        "Built a streamlined CMS that improved ecosystem productivity by more than 75%.",
      ],
    },
    {
      company: "Plerion",
      role: "Software Engineer",
      period: "Aug 2023 - Mar 2024",
      highlight:
        "Contributed to Cloud Security Posture Management capabilities across major cloud providers.",
      bullets: [
        "Investigated AWS, GCP, and Azure services to define new risk detections aligned with best practices.",
        "Built CSPM features with Lambda, Batch, ECS, Step Functions, IAM, API Gateway, and CloudFormation.",
        "Worked across a modern TypeScript and React stack to surface cloud security insights clearly.",
      ],
    },
    {
      company: "Cotiviti Nepal",
      role: "Senior Software Engineer",
      period: "Feb 2019 - Apr 2023",
      highlight:
        "Built advanced data-heavy healthcare experiences with strong performance and testing improvements.",
      bullets: [
        "Crafted interactive frontend visualizations for Network Intelligence research clients.",
        "Improved reporting performance by up to 30% through API and data-structure optimization.",
        "Led authentication migration from CAS to Okta and raised frontend unit coverage above 60% within three quarters.",
      ],
    },
  ],
  projects: [
    {
      title: "The Trops",
      description:
        "A cross-platform arts and culture platform connecting communities, creators, and local economies through a polished mobile experience and an operationally efficient CMS.",
      stack: ["Flutter", "NestJS", "PostgreSQL", "Firebase", "AWS", "GCP"],
      href: "https://thetrops.com/",
      secondaryHref: "https://apps.apple.com/us/app/the-trops/id1575084528",
      outcome: "Published cross-platform product with a supporting CMS that boosted productivity by 75%+.",
    },
    {
      title: "Trayt Health",
      description:
        "Clinical intelligence reporting and dashboard experiences designed to turn patient engagement behavior into actionable product and care insights.",
      stack: ["React", "TypeScript", "Healthcare Data Integration", "Clinical Reporting"],
      href: "https://trayt.health/",
      outcome: "Improved visibility into key metrics through accurate aggregation and thoughtful dashboard UX.",
    },
    {
      title: "Memora Health Programs",
      description:
        "Custom patient communication flows and programmable care journeys that simplify provider outreach while keeping experiences secure and human-centered.",
      stack: ["Workflow Design", "TypeScript", "Integrations", "Healthcare UX"],
      href: "https://www.memorahealth.com/",
      outcome: "Enabled tailored patient programs with custom workflows and observation hooks.",
    },
    {
      title: "Network Intelligence",
      description:
        "A data-rich healthcare web product for value-based care analysis, blending performant APIs with rich frontend visualization.",
      stack: ["React", "D3.js", "Data Visualization", "Healthcare Analytics"],
      href: "https://www.cotiviti.com/solutions/quality-and-performance/network-intelligence",
      outcome: "Raised performance, strengthened authentication, and improved reliability with better test coverage.",
    },
    {
      title: "CSPM Platform",
      description:
        "Cloud Security Posture Management capabilities for identifying risk across AWS, GCP, and Azure environments with detection logic aligned to security best practices.",
      stack: ["TypeScript", "AWS", "Cloud Security", "Risk Detection"],
      href: "https://www.plerion.com/platform/cloud-security-posture-management",
      outcome: "Expanded cloud risk coverage by contributing new provider detections and security-focused platform capabilities.",
    },
  ],
  githubProjects: [
    {
      title: "Varys",
      description:
        "A full-stack company intelligence application that scrapes company-review sources, preprocesses mentions, enriches them through agentic workflows, and builds a RAG-ready retrieval layer for sentiment and insight exploration.",
      stack: ["React", "FastAPI", "LangChain", "ChromaDB"],
      href: "https://github.com/shreetishrestha-dev/Varys",
      outcome: "Combined data collection, enrichment, vector retrieval, and dashboard UX into one end-to-end LLM product workflow.",
    },
    {
      title: "DocumentRetrievalUsingRAG",
      description:
        "A LangChain-based retrieval workflow for indexing PDF, Confluence, and Google Docs content, chunking it for search, embedding it with OpenAI, and storing it in ChromaDB for targeted question answering.",
      stack: ["Python", "LangChain", "OpenAI Embeddings", "ChromaDB"],
      href: "https://github.com/shreetishrestha-dev/DocumentRetrievalUsingRAG",
      outcome: "Demonstrated a practical multi-source RAG pipeline from document loading through chunking, embedding, and retrieval.",
    },
    {
      title: "Inkpandas",
      description:
        "A community writing platform for publishing and reading user-generated articles, backed by a React frontend and an Express API with AWS DynamoDB, Redis, Dockerized local setup, and ECS deployment.",
      stack: ["React", "Express", "DynamoDB", "Redis"],
      href: "https://github.com/shreetishrestha-dev/inkpandas",
      outcome: "Delivered a full-stack content platform with authentication, article workflows, and a production-oriented deployment setup.",
    },
    {
      title: "SanjivaniEcochain",
      description:
        "A decentralized electronic health record system that combines Ethereum smart-contract integration with web application workflows to support more transparent and tamper-resistant medical record handling.",
      stack: ["Node.js", "Ethereum", "Web3", "IPFS"],
      href: "https://github.com/shreetishrestha-dev/SanjivaniEcochain---Decentralized-EHR",
      outcome: "Explored blockchain-backed healthcare records through a working prototype spanning storage, application logic, and record access flows.",
    },
    {
      title: "Surprise Workshop",
      description:
        "A personalized memory-sharing web experience with protected admin flows for curating messages, places, poems, sketches, movies, and memories through a polished React interface.",
      stack: ["React", "Firebase", "Google Maps", "Rich Text"],
      outcome: "Brought together multiple content formats, location-based storytelling, and dashboard-style management into one cohesive interactive experience.",
    },
  ],
  mediaCoverage: [
    {
      source: "The Kathmandu Post",
      title: "The women who are changing the face of tech in Nepal",
      type: "Feature",
      href: "https://kathmandupost.com/science-technology/2021/01/03/the-women-who-are-changing-the-face-of-tech-in-nepa",
    },
    {
      source: "OnlineKhabar",
      title: "Setting an example to promote women in science and technology in Nepal",
      type: "Profile",
      href: "https://english.onlinekhabar.com/shreeti-shrestha-women-science-nepal.html",
    },
    {
      source: "Business 360",
      title: "Are There Gender Roadblocks For Women In Tech?",
      type: "Opinion",
      href: "https://www.b360nepal.com/detail/7320/are-there-gender-roadblocks-for-women-in-tech",
    },
    {
      source: "UN Women Nepal",
      title: "Advancing Digital Equality for Economic Empowerment of Women with Disabilities",
      type: "Panelist",
      href: "https://www.facebook.com/273244929793241/posts/1605720819878972/?sfnsn=mo&mibextid=RUbZ1f",
    },
    {
      source: "Nepali Women in Computing",
      title: "Community feature and representation in women-in-tech spaces",
      type: "Appearances",
      href: "https://medium.com/nepali-women-in-computing/what-is-life-a-journey-of-hope-e844af10a730",
    },
    {
      source: "Boju Bajai Podcast",
      title: "Podcast conversation on women, technology, and lived experience",
      type: "Appearances",
      href: "https://bojubajai.org/episodes/%E0%A4%85%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%B5%E0%A5%87%E0%A4%B6%E0%A5%80-%E0%A4%B8%E0%A4%AE%E0%A5%83%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A4%BF-ep-2-interrupting-spaces/",
    },
    {
      source: "Ncell Dreamers and Doers",
      title: "Featured platform appearance",
      type: "Appearances",
      href: "https://www.instagram.com/tv/CatVSwIjByk/",
    },
    {
      source: "Finland in Nepal",
      title: "Embassy platform feature",
      type: "Appearances",
      href: "https://twitter.com/finlandinnepal/status/1633336508278251521",
    },
    {
      source: "Plan International",
      title: "Featured conversation on women, leadership, and digital inclusion",
      type: "Appearances",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7030913596096212992/",
    },
  ],
  education: [
    {
      title: "Bachelor in Computer Engineering",
      institution: "Pulchowk Campus, IOE, Tribhuvan University",
      period: "2014 - 2018",
    },
    {
      title: "Intermediate Science (+2)",
      institution: "Nasa International College, Kathmandu",
      period: "2012 - 2014",
    },
  ],
  achievements: [
    "Ncell Excellence and Scholarship Award (2016, 2017, 2018)",
    "2nd NASO Women in Science Award (2018)",
    "Winner, AT Hackathon at Thapathali Campus (2018)",
    "Nominee, President's Circle of Excellence at Cotiviti (2020)",
    "Publication: Decentralized Electronic Health Record System using Blockchain (2020)",
  ],
  volunteering: [
    "Province Coordinator, World Space Week Nepal 2021",
    "Event Organizer, LOCUS, IOE Pulchowk (2015 - 2018)",
  ],
};
