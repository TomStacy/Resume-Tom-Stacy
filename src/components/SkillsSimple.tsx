import React from "react";

// Skill data as constants
const skillsData = [
  {
    title: "Engineering Leadership",
    skills: [
      "Architecture Strategy",
      "DevSecOps",
      "Day-2 Ops",
      "Agile",
      "Program Management",
      "Engineering Excellence",
      "Technical Diligence",
      "Account Technical Vision",
      "Customer CTO Engagement",
    ],
  },
  {
    title: "Architecture & Platforms",
    skills: [
      "Event Driven",
      "SOA",
      "Microservices",
      "MVC",
      "Layered",
      "Monolithic",
      "Broker Patterns",
      "IoT Platforms",
      "SaaS",
      "PaaS",
      "Cloud-Native",
    ],
  },
  {
    title: "AI & Data",
    skills: [
      "AI Agents",
      "RAG",
      "Prompt Engineering",
      "ML Integration",
      "Analytics",
      "Developer Experience with AI",
      "Data Platforms",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "Kubernetes",
      "Infrastructure as Code",
      "CI/CD",
      "High Availability",
      "Cost Optimization",
    ],
  },
  {
    title: "Applications",
    skills: [
      "Native Mobile (iOS, Android, Xamarin)",
      "Flutter",
      "React",
      "Angular",
      "Vue",
      "Enterprise Front-End Delivery",
    ],
  },
  {
    title: "Languages",
    skills: [
        "Python",
        "C#",
        "TypeScript",
        "JavaScript",
        "Rust",
        "Java",
    ],
  },
  {
    title: "Leadership & People",
    skills: [
      "Mentorship",
      "Talent Development",
      "Innovation Workshops",
      "Scaling Teams",
      "Cross-Functional Alignment",
    ],
  },
];


const SkillsSimple: React.FC = () => {
  return (
    <section id="skills" className="section bg-background">
      <div className="container-tight">
        <div className="space-y-2 mb-8 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Technical Skills & Expertise
          </h2>
          <div className="text-base md:text-md font-semibold text-muted-foreground mb-2">
            A blend of leadership, strategy, and deep technical expertise across modern and emerging technologies.
          </div>
          <div className="w-20 h-1 bg-primary mt-2 mb-0"></div>
        </div>
        <div className="w-full p-6 bg-white rounded-lg shadow-md border-l-4 border-l-primary">
          {skillsData.map((group) => (
            <div key={group.title} className="mb-4">
              <span className="font-bold">{group.title}:</span> {group.skills.join(", ")}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSimple;
