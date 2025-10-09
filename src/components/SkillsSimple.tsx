import React from "react";
import { Card, CardContent } from "@/components/ui/card";

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
        <Card className="overflow-hidden border-2 transition-all duration-300 border-border hover:border-primary/50 bg-gradient-to-b from-muted/30 to-background backdrop-blur-sm">
          <CardContent className="p-6">
            {skillsData.map((group) => (
              <div key={group.title} className="mb-4">
                <span className="font-bold text-primary">{group.title}:</span> <span className="text-muted-foreground">{group.skills.join(", ")}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSimple;
