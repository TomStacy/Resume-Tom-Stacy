import { Card, CardContent } from "@/components/ui/card";
import { BarChart, TrendingUp, Rocket, ChevronDown, ChevronUp, Building2, Calendar } from 'lucide-react';
import { useState } from 'react';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experiences = [
    {
      title: "VP of Engineering, Grid Services; Chief Engineer, Energy Technology",
      company: "Generac Power Systems",
      location: "Denver, CO",
      period: "Jun 2021 - May 2025",
      duration: "4 years",
      description: "Led development of enterprise IoT platform connecting 10,000+ Distributed Energy Resources (DERs) in closed-loop environments, enabling energy providers to optimize distribution and generation for grid load balancing.",
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
      icon: <Rocket className="h-6 w-6" />,
      color: "blue"
    },
    {
      title: "VP of Engineering; VP of Technical Strategy & Architecture",
      company: "Alteryx",
      location: "Broomfield, CO",
      period: "Mar 2018 - Apr 2021",
      duration: "3 years",
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
      icon: <TrendingUp className="h-6 w-6" />,
      color: "purple"
    },
    {
      title: "Co-Founder, CTO",
      company: "Trovey",
      location: "Denver, CO",
      period: "Nov 2017 - Mar 2018",
      duration: "5 months",
      description: "Architected and built a scalable Azure-based SaaS platform that revolutionized document workflows for legal professionals, delivering seamless Office 365 integration and multi-platform accessibility while reducing document management time and enhancing collaboration.",
      bullets: [
        "Architected and delivered a SaaS platform for legal professionals on Azure, integrating Office 365 and multi-platform accessibility.",
        "Streamlined document workflows, reducing time spent on legal documentation while enhancing collaboration.",
        "Built the technical foundation for scale and secured initial customer traction."
      ],
      icon: <BarChart className="h-6 w-6" />,
      color: "emerald"
    },
    {
      title: "EVP of Engineering",
      company: "FrontSteps",
      location: "Denver, CO",
      period: "Apr 2012 - Nov 2017",
      duration: "5.5 years",
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
      icon: <Building2 className="h-6 w-6" />,
      color: "amber"
    },
    {
      title: "Co-Founder, CTO",
      company: "Group Software Technologies",
      location: "Denver, CO",
      period: "Apr 1997 - Apr 2012",
      duration: "15 years",
      description: "Led multiple successful product launches with engineering excellence. Pioneered cloud migration strategy resulting in 40% cost reduction and improved system reliability.",
      bullets: [
        "Founded and grew a consulting and custom software firm from 2 → 12 employees, delivering solutions to startups through Fortune 500s.",
        "Led consulting engagements spanning database, web, mobile, and desktop applications, tailoring solutions to client strategy and scaling needs.",
        "Specialized in rescue projects and platform launches, earning a reputation for delivering under pressure.",
        "Acted as trusted advisor to client executives, aligning engineering execution with business outcomes."
      ],
      icon: <BarChart className="h-6 w-6" />,
      color: "rose"
    }
  ];

  const colorClasses = {
    blue: {
      icon: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-200 dark:border-blue-800",
      hover: "hover:border-blue-400 dark:hover:border-blue-600",
      dot: "bg-blue-500",
      gradient: "from-blue-500/10 to-transparent"
    },
    purple: {
      icon: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-950/30",
      border: "border-purple-200 dark:border-purple-800",
      hover: "hover:border-purple-400 dark:hover:border-purple-600",
      dot: "bg-purple-500",
      gradient: "from-purple-500/10 to-transparent"
    },
    emerald: {
      icon: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-950/30",
      border: "border-emerald-200 dark:border-emerald-800",
      hover: "hover:border-emerald-400 dark:hover:border-emerald-600",
      dot: "bg-emerald-500",
      gradient: "from-emerald-500/10 to-transparent"
    },
    amber: {
      icon: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-950/30",
      border: "border-amber-200 dark:border-amber-800",
      hover: "hover:border-amber-400 dark:hover:border-amber-600",
      dot: "bg-amber-500",
      gradient: "from-amber-500/10 to-transparent"
    },
    rose: {
      icon: "text-rose-600 dark:text-rose-400",
      bg: "bg-rose-50 dark:bg-rose-950/30",
      border: "border-rose-200 dark:border-rose-800",
      hover: "hover:border-rose-400 dark:hover:border-rose-600",
      dot: "bg-rose-500",
      gradient: "from-rose-500/10 to-transparent"
    }
  };

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="section bg-background">
      <div className="container-tight">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            25+ years of technical leadership driving innovation, scaling teams, and delivering enterprise solutions
          </p>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedIndex === index;
              const colors = colorClasses[exp.color as keyof typeof colorClasses];
              
              return (
                <div key={index} className="relative">
                  <Card 
                    className="group overflow-hidden border-2 transition-all duration-300 border-border hover:border-primary/50 bg-gradient-to-b from-muted/30 to-background backdrop-blur-sm cursor-pointer"
                    onClick={() => toggleExpanded(index)}
                  >
                    <CardContent className="p-0">
                      <div className="p-6 md:p-8">
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-2">
                              <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight pr-4">
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground flex-shrink-0">
                                <Calendar className="h-4 w-4" />
                                <span className="font-medium">{exp.duration}</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-1.5">
                                <Building2 className="h-4 w-4" />
                                <span className="font-medium">{exp.company}</span>
                              </div>
                              <span className="text-muted-foreground/50">•</span>
                              <span>{exp.location}</span>
                              <span className="text-muted-foreground/50">•</span>
                              <span className="text-xs">{exp.period}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-foreground/90 leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Expand/Collapse indicator */}
                        <div className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
                          <span>{isExpanded ? 'Hide' : 'Show'} key achievements</span>
                          {isExpanded ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </div>

                        {/* Expandable bullets */}
                        <div 
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          {exp.bullets && exp.bullets.length > 0 && (
                            <div className="pt-4 border-t border-border">
                              <ul className="space-y-3 pl-1">
                                {exp.bullets.map((bullet, bidx) => (
                                  <li 
                                    key={bidx} 
                                    className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                                    style={{ animationDelay: `${bidx * 50}ms` }}
                                  >
                                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-foreground/70 mt-1.5 ring-1 ring-foreground/20"></span>
                                    <span className="flex-1">{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-muted/50 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <p className="text-sm text-muted-foreground italic">
              25+ years of technical leadership • 5 companies • Countless innovations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
