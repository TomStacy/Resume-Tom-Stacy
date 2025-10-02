import { Card, CardContent } from "@/components/ui/card";
import { BarChart, TrendingUp, Rocket } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "VP of Engineering, Grid Services; Chief Engineer, Energy Technology",
      company: "Generac Power Systems - Denver, CO",
      period: "Jun 2021 - May 2025",
      description: "Led development of enterprise IoT platform connecting 10,000+ Distributed Energy Resources (DERs) in closed-loop environments, enabling energy providers to optimize distribution and generation for grid load balancing. ",
      bullets: [
        "Acted as CTO-level leader for strategic accounts, partnering with utility executives to define technical vision, align outcomes, and drive grid modernization strategies.",
        "Architected and delivered a scalable event-driven IoT platform connecting 10,000+ Distributed Energy Resources (DERs), processing millions of daily telemetry events for real-time grid load balancing.",
        "Transformed delivery from on-prem to cloud-first (AWS), cutting deployments from months to minutes while scaling org from 25 → 50+ engineers.",
        "Championed AI-powered developer experience, rolling out AI dev tools and building a RAG/Agent-based app on AWS Bedrock that reduced support queues by 80%.",
        "Led adoption of DevSecOps & Day-2 operational practices, achieving ISO 27001 certification, increasing automation 400%, and ensuring secure, high-quality releases (20x more frequent with 10x fewer defects).",
        "Mentored and developed engineering leaders and individual contributors, introduced innovation workshops, and established frameworks that reduced rework 80% and improved cross-team delivery efficiency.",
        "Optimized cloud spend, saving $350K annually through comprehensive tagging, scheduling, auditing, and infrastructure standardization.",
        "Owned full Day-2 operations for Generac Grid Services, including observability, incident response, security hardening, compliance, scaling, resilience, and cost optimization—embedding DevSecOps into production delivery."
      ],
      icon: <Rocket className="h-8 w-8 text-blue-500" />
    },
    {
      title: "VP of Engineering; VP of Technical Strategy & Architecture",
      company: "Alteryx - Broomfield, CO",
      period: "Mar 2018 - Apr 2021",
      description: "Led engineering for Alteryx's data analytics platform - a desktop application with server-based collaboration enabling business users to version, share, and schedule analytical workflows. Drove company-wide Agile, DevOps, and program management transformation while leading migration of an on-premises server solution to a multi-tenant cloud architecture.",
      bullets: [
        "Acted as executive engineering leader and trusted technical advisor, driving company-wide Agile, DevOps, and program management transformations across 30+ teams.",
        "Rescued a flagship next-gen product by restructuring 15 distributed teams, modernizing architecture, and ensuring on-time delivery of a mission-critical analytics platform.",
        "Defined and enforced architecture standards, embedding Event-Driven, SOA, and Microservices patterns into engineering domain language.",
        "Drove migration of monolithic on-prem platform to a multi-tenant cloud SaaS on AWS, introducing modular Git repos, CI/CD pipelines, and containerized deployments (build times down 50%, release efficiency up 10x).",
        "Partnered with CISO to implement DevSecOps and compliance frameworks (GDPR, OWASP, FedRAMP, SOC2, FIPS), ensuring security was embedded into engineering delivery.",
        "Served as executive sponsor for customer-facing workshops and technical diligence, presenting to enterprise clients and supporting sales with architectural credibility.",
        "Mentored engineering directors, managers and developers, creating leadership pathways and improving retention and morale across global teams."
      ],
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />
    },
    {
      title: "Co-Founder, CTO",
      company: "Trovey - Denver, CO",
      period: "Nov 2017 - Mar 2018",
      description: "Architected and built a scalable Azure-based SaaS platform that revolutionized document workflows for legal professionals, delivering seamless Office 365 integration and multi-platform accessibility while reducing document management time and enhancing collaboration.",
      bullets: [
        "Architected and delivered a SaaS platform for legal professionals on Azure, integrating Office 365 and multi-platform accessibility.",
        "Streamlined document workflows, reducing time spent on legal documentation while enhancing collaboration.",
        "Built the technical foundation for scale and secured initial customer traction."
      ],
      icon: <BarChart className="h-8 w-8 text-green-500" />
    },
    {
      title: "EVP of Engineering",
      company: "FrontSteps - Denver, CO",
      period: "Apr 2012 - Nov 2017",
      description: "Led architecture and development of Azure based enterprise SaaS solutions serving multiple real estate sectors. Managed 50+ applications across 7 acquisitions while directing 6 cross-functional teams. The platform provided services to millions of end users and routinely processed over 1,000,000 dynamic page hits per day.",
      bullets: [
        "Scaled engineering org from 6 → 44 engineers across multiple acquisitions, establishing culture of engineering excellence and standardized practices.",
        "Led architecture and delivery of Azure-based SaaS platform supporting millions of daily users across real estate, property management, and security markets.",
        "Unified 4 disparate products into a single enterprise platform, reducing technical debt and unlocking new revenue streams.",
        "Standardized mobile delivery with Xamarin, shipping native iOS and Android apps serving 2K+ daily active users.",
        "Consolidated 7 hosting providers into a single Azure solution, cutting $250K in annual spend while improving performance and reliability.",
        "Oversaw technical diligence for M&A and post-acquisition integrations, ensuring seamless platform scaling.",
        "Introduced DevOps, CI/CD, and Agile practices across 6 cross-functional teams, boosting productivity and delivery consistency."
      ],
      icon: <BarChart className="h-8 w-8 text-green-500" />
    },
    {
      title: "Co-Founder, CTO",
      company: "Group Software Technologies - Denver, CO",
      period: "Apr 1997 - Apr 2012",
      description: "Led multiple successful product launches with engineering excellence. Pioneered cloud migration strategy resulting in 40% cost reduction and improved system reliability.",
      bullets: [
        "Founded and grew a consulting and custom software firm from 2 → 12 employees, delivering solutions to startups through Fortune 500s.",
        "Led consulting engagements spanning database, web, mobile, and desktop applications, tailoring solutions to client strategy and scaling needs.",
        "Specialized in rescue projects and platform launches, earning a reputation for delivering under pressure.",
        "Acted as trusted advisor to client executives, aligning engineering execution with business outcomes."
      ],
      icon: <BarChart className="h-8 w-8 text-green-500" />
    }
  ];

  return (
    <section id="experience" className="section bg-background">
      <div className="container-tight">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-l-primary bg-card text-card-foreground">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* <div className="flex items-center justify-center bg-muted p-6 md:p-8">
                    <div className="bg-background p-4 rounded-full shadow-md">
                      {exp.icon}
                    </div>
                  </div> */}
                  
                  <div className="p-6 md:p-8 flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">
                          {exp.title}
                        </h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <p className="text-foreground">
                        <span className="block text-justify">{exp.description}</span>
                    </p>
                      {exp.bullets && (
                        <ul className="mt-4 ml-6 space-y-2 text-justify">
                          {exp.bullets.map((bullet, bidx) => (
                            <li key={bidx} className="list-disc ml-4 text-base text-muted-foreground">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            Note: This represents key positions from a 25+ year career in tech leadership
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
