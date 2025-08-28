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
        <div className="space-y-8">
          {[leadershipData, technologyData, technicalSkillsData].map((data, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-l-primary bg-card text-card-foreground">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Icon removed for cleaner layout */}
                  <div className="p-6 md:p-8 flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">
                          {data.title}
                        </h3>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {data.subtopics.map((sub, i) => (
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
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
