import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Laptop, Code } from 'lucide-react';

const leadershipData = {
  title: "Leadership & Strategy",
  icon: <Zap className="h-6 w-6 text-yellow-500" />,
  subtopics: [
    {
      title: "Executive Leadership",
      bullets: [
        "Techonolgy Vision & Direction",
        "Cross Team/Department/BG Colaboration",
        "Stakeholder Management",
        "Global Team Management"
      ]
    },
    {
      title: "Team Building",
      bullets: [
        "Cross-functional and Remote Teams",
        "Ownership, Innovation, and Collaboration",
        "Mentorship"
      ]
    },
    {
      title: "Product Strategy",
      bullets: [
        "Digital Transformation",
        "Technology Vision",
        "Customer Focus"
      ]
    },
    {
      title: "Metrics, Ownership, and Enablement",
      bullets: [
        "Data-Driven Metrics",
        "Accountability and Ownership",
        "Team Enablement",
        "Continuous Improvement"
      ]
    }
  ]
};

const technologyData = {
  title: "Technology & Innovation",
  icon: <Laptop className="h-6 w-6 text-blue-500" />,
  subtopics: [
    {
      title: "Technical Architecture",
      bullets: [
        "Cloud Architecture",
        "Distributed Systems",
        "Microservices",
        "System Design",
        "Security Architecture"
      ]
    },
    {
      title: "Engineering Excellence",
      bullets: [
        "Continuous Improvement", 
        "Metrics",
        "DevOps, Agile, QA",
        "Performance Optimization",
        "Data Engineering",
        "Quality Assurance Automation"
      ]
    },
    {
      title: "Emerging Technologies",
      bullets: [
        "AI Development",
        "Machine Learning",
        "Cloud Computing",
        "Edge Computing"
      ]
    }
  ]
};

const technicalSkillsData = {
  title: "Technical Skills",
  icon: <Code className="h-6 w-6 text-purple-500" />,
  subtopics: [
    {
      title: "Programming Languages",
      bullets: [
        "JavaScript / TypeScript",
        "Python",
        "C# / .NET",
        "Java",
        "Rust",
        "SQL",
        "Bash/Shell"
      ]
    },
    {
      title: "Frameworks & Libraries",
      bullets: [
        "React / Tailwind / Shadcn / Next.js",
        "python / FastAPI / Flask",
        "Node.js / Express",
        "Cargo"
      ]
    },
    {
      title: "Cloud & DevOps",
      bullets: [
        "AWS / Azure / GCP",
        "Docker / Kubernetes",
        "CI/CD (GitHub Actions, Jenkins)",
        "Terraform / Infrastructure as Code"
      ]
    },
    {
      title: "Databases",
      bullets: [
        "PostgreSQL / MySQL",
        "MongoDB / NoSQL",
        "Redis / Caching"
      ]
    },
    {
      title: "Testing & Quality",
      bullets: [
        "Jest / Mocha",
        "Cypress / Playwright",
        "Linting / Code Quality Tools"
      ]
    }
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="section bg-background">
      <div className="container-tight">
        <div className="space-y-2 mb-16 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Technical Skills & Expertise
          </h2>
          <div className="text-base md:text-md font-semibold text-muted-foreground mb-2">
            A blend of leadership, strategy, and deep technical expertise across modern and emerging technologies.
          </div>
          <div className="w-20 h-1 bg-primary mt-2 mb-0"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Leadership Column */}
          <Card className="hover:shadow-lg transition-all bg-card text-card-foreground">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="mr-3 bg-muted p-2 rounded-full">
                  {leadershipData.icon}
                </div>
                <h3 className="text-xl font-bold text-primary">
                  {leadershipData.title}
                </h3>
              </div>
              <hr className="mb-6" />
              <div className="space-y-6">
                {leadershipData.subtopics.map((sub, i) => (
                  <div key={i}>
                    <div className="font-semibold text-lg mb-2 text-primary/90">{sub.title}</div>
                    <ul className="list-disc list-inside ml-4 text-card-foreground/90">
                      {sub.bullets.map((b, j) => (
                        <li key={j} className="mb-1">{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          {/* Technology Column */}
          <Card className="hover:shadow-lg transition-all bg-card text-card-foreground">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="mr-3 bg-muted p-2 rounded-full">
                  {technologyData.icon}
                </div>
                <h3 className="text-xl font-bold text-primary">
                  {technologyData.title}
                </h3>
              </div>
              <hr className="mb-6" />
              <div className="space-y-6">
                {technologyData.subtopics.map((sub, i) => (
                  <div key={i}>
                    <div className="font-semibold text-lg mb-2 text-primary/90">{sub.title}</div>
                    <ul className="list-disc list-inside ml-4 text-card-foreground/90">
                      {sub.bullets.map((b, j) => (
                        <li key={j} className="mb-1">{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          {/* Technical Skills Column */}
          <Card className="hover:shadow-lg transition-all bg-card text-card-foreground">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="mr-3 bg-muted p-2 rounded-full">
                  {technicalSkillsData.icon}
                </div>
                <h3 className="text-xl font-bold text-primary">
                  {technicalSkillsData.title}
                </h3>
              </div>
              <hr className="mb-6" />
              <div className="space-y-6">
                {technicalSkillsData.subtopics.map((sub, i) => (
                  <div key={i}>
                    <div className="font-semibold text-lg mb-2 text-primary/90">{sub.title}</div>
                    <ul className="list-disc list-inside ml-4 text-card-foreground/90">
                      {sub.bullets.map((b, j) => (
                        <li key={j} className="mb-1">{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-16">
          <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-r from-tech-blue to-tech-indigo">
            <CardContent className="p-8 text-white">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">AI Development Leadership</h3>
                  <p className="text-white/80 max-w-lg">
                    Pioneering the adoption of AI tools to transform software development practices 
                    and enhance engineering productivity across the organization.
                  </p>
                </div>
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-lg text-center">
                  <div className="text-4xl font-bold mb-1">25+</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
