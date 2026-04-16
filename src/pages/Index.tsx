import { TypeWriter } from "@/components/TypeWriter";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Github, Linkedin, Mail, Download, User, ExternalLink, Award, FileText, MapPin, Phone, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTilt } from "@/hooks/use-tilt";

const projects = [
  {
    title: "Pizza Sales Campaign & Business Analytics",
    description: "Queried 48,000+ transactional records using 15+ advanced SQL queries (JOINs, CTEs, window functions) to deliver business performance metrics – revenue, order volume, and peak demand by hour and category.",
    tech: ["SQL", "MySQL"],
    github: "https://github.com/kunwargupta/pizza_sales-mysql",
  },
  {
    title: "Real Estate Insight Tableau Dashboard",
    description: "Interactive Tableau dashboard for analyzing real estate market trends, property valuations, and geographic insights to support data-driven decision making in the housing market.",
    tech: ["Tableau", "Data Visualization", "Analytics"],
    github: "https://github.com/kunwargupta/Real_Estate_Insight_Tableau_Dashboard",
  },
  {
    title: "Student Social Media Addiction Analysis",
    description: "Power BI project analyzing student social media usage patterns, addiction indicators, and their impact on academic performance through interactive dashboards and visual analytics.",
    tech: ["Power BI", "Data Analysis", "Visualization"],
    github: "https://github.com/kunwargupta/Student-Social-Media-Addiction-PowerBI-Project",
  },
  {
    title: "US Customer Insights Analysis",
    description: "Comprehensive analysis of US customer data to uncover purchasing patterns, demographic trends, and behavioral insights for strategic business recommendations.",
    tech: ["Python", "Pandas", "Data Analysis"],
    github: "https://github.com/kunwargupta/US-Customer-Insights-Analysis",
  },
  {
    title: "Customer Churn Analysis",
    description: "Cleaned and standardized 7,043 customer records across 21 variables, identifying a 26.5% churn rate and 3 key behavioural drivers – contract type and tenure as primary risk indicators.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/kunwargupta/Customer-Churn-Analysis",
  },
];

const skills = [
  {
    category: "Languages & Querying",
    items: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL", "MySQL"],
    date: "2024 - Present",
    certificate: "Data Analyst Certification - Career247",
    certificateUrl: "#",
  },
  {
    category: "BI & Visualization",
    items: ["Power BI", "Tableau", "Excel", "Pivot Tables", "Power Query", "VLOOKUP", "Google Sheets"],
    date: "2024 - Present",
    certificate: "Advanced Excel - Simplilearn SkillUp",
    certificateUrl: "#",
  },
  {
    category: "Analytics",
    items: ["EDA", "Data Cleaning", "Data Validation", "KPI Reporting", "Customer Segmentation", "Statistical Analysis"],
    date: "2025 - Present",
    certificate: "SQL Intermediate Certificate - HackerRank",
    certificateUrl: "#",
  },
  {
    category: "Workflow & Tools",
    items: ["Git", "Data Quality Checks", "Documentation", "AI-Assisted Analytics", "Cross-Functional Collaboration"],
    date: "2025 - Present",
    certificate: "Data Analyst Certification - Career247",
    certificateUrl: "#",
  },
];

const certifications = [
  {
    title: "Data Analyst Certification",
    issuer: "Career247",
    date: "2026",
    description: "120+ hours of training in Excel, SQL, Python (Pandas, NumPy), Statistics, and Power BI Dashboarding.",
    skills: ["Excel", "SQL", "Python", "Statistics", "Power BI"],
  },
  {
    title: "Advanced Excel",
    issuer: "Simplilearn SkillUp",
    date: "2025",
    description: "Trained in 25+ Excel functions including Pivot Tables, VLOOKUP, and INDEX-MATCH for data analysis.",
    skills: ["Pivot Tables", "VLOOKUP", "INDEX-MATCH", "Data Analysis"],
  },
  {
    title: "SQL Intermediate Certificate",
    issuer: "HackerRank",
    date: "March 2025",
    description: "Demonstrated proficiency in Joins, Aggregations, and Subqueries through structured SQL challenges.",
    skills: ["SQL", "Joins", "Aggregations", "Subqueries"],
  },
];

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();
  const { ref: aboutCardRef, transform: aboutCardTransform, isHovered: aboutCardHovered } = useTilt();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="text-gradient">Kunwar Ji Gupta</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground h-8">
              <TypeWriter 
                texts={[
                  "Data Analyst",
                  "Problem Solver",
                  "Lifelong Learner",
                  "Creator"
                ]}
              />
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Data Analyst with hands-on experience in SQL, Python, Power BI, and Excel, focused on data validation, EDA, and KPI reporting.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gap-2 glow-effect"
              onClick={() => scrollToSection('projects')}
            >
              View My Work <ArrowRight size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a 
              href="https://github.com/kunwargupta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors glow-effect"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kunwarjigupta/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors glow-effect"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:Kunwargupta7@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors glow-effect"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                About <span className="text-gradient">Me</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Get to know me better
              </p>
            </div>

            <Card 
              ref={aboutCardRef}
              className="p-8 md:p-12 tilt-card bg-card border-primary/20"
              style={{ 
                transform: aboutCardTransform,
                boxShadow: aboutCardHovered 
                  ? '0 35px 70px -15px rgba(66, 153, 225, 0.5), 0 20px 40px -10px rgba(0, 0, 0, 0.3)'
                  : '0 10px 30px -5px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div className="grid md:grid-cols-[200px,1fr] gap-8 items-start">
                <div className="mx-auto md:mx-0">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <User size={80} className="text-primary" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Kunwar Ji Gupta</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Data Analyst with hands-on experience in SQL, Python, Power BI, and Excel, focused on 
                      data validation, exploratory data analysis (EDA), and KPI reporting across datasets of 
                      48,000+ records. Skilled in data cleaning, preparation, and customer segmentation, with 
                      experience building dashboards and reports that communicate findings clearly to non-technical 
                      stakeholders. Currently interning at Convergence Inc., working on data quality metrics 
                      and coverage reporting.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Committed to delivering accurate, analysis-ready data and actionable insights that 
                      support business decisions. B.Sc. graduate from S.M.D. Patel Mahavidyalaya, Lucknow, UP, India.
                    </p>
                  </div>

                  <div className="pt-4">
                    <a href="/Kunwar_Data_Analyst.pdf" download>
                      <Button className="gap-2 glow-effect">
                        <Download size={20} />
                        Download Resume
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Projects", value: "5+" },
                { label: "Skills", value: "20+" },
                { label: "Certificates", value: "3" },
              ].map((stat, index) => (
                <Card 
                  key={index} 
                  className="p-6 text-center card-hover bg-card border-primary/20 hover:border-primary/40 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceTimeline />

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold">
                My <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Real-world data analysis projects showcasing SQL, Python, Power BI, and Tableau
              </p>
            </div>

            <div className="relative space-y-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="p-8 flex flex-col animate-slide-up sticky top-24 backdrop-blur-sm bg-card border-primary/20 hover:border-primary/40 transition-colors"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    top: `${100 + index * 20}px`,
                    zIndex: index + 1
                  }}
                >
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="lg" className="w-full gap-2 hover:scale-105 transition-transform">
                        <Github size={16} />
                        View on GitHub
                      </Button>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold">
                Skills & <span className="text-gradient">Certifications</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                My technical expertise and continuous learning journey
              </p>
            </div>

            {/* Skills Timeline */}
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />
              
              <div className="space-y-12">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } animate-slide-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                      <Card className="p-6 water-fill group cursor-pointer bg-card border-primary/20 hover:border-primary/50 transition-all duration-300">
                        <div className="space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-xl font-semibold mb-1 text-primary">
                                {skill.category}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {skill.date}
                              </p>
                            </div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="ghost" className="gap-2 glow-effect hover:bg-primary/10">
                                  <Award size={16} className="text-primary" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>{skill.certificate}</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div className="bg-muted/50 rounded-lg p-8 text-center">
                                    <Award size={64} className="mx-auto text-primary mb-4" />
                                    <p className="text-sm text-muted-foreground">
                                      Certificate Preview
                                    </p>
                                  </div>
                                  <a 
                                    href={skill.certificateUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                  >
                                    <Button className="w-full gap-2">
                                      <ExternalLink size={16} />
                                      View Certificate
                                    </Button>
                                  </a>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {skill.items.map((item, i) => (
                              <Badge key={i} className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </div>

                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 animate-pulse" />
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Cards */}
            <div className="pt-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                My <span className="text-gradient">Certifications</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <Card 
                    key={index} 
                    className="p-6 card-hover animate-slide-up border-primary/10 hover:border-primary/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Award size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                My <span className="text-gradient">Resume</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                View or download my complete resume
              </p>
            </div>

            <Card className="p-8 card-hover">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText size={24} className="text-primary" />
                    <div>
                      <h3 className="font-semibold">Kunwar_Data_Analyst.pdf</h3>
                      <p className="text-sm text-muted-foreground">Last updated: April 2026</p>
                    </div>
                  </div>
                  <a href="/Kunwar_Data_Analyst.pdf" download>
                    <Button className="gap-2 glow-effect">
                      <Download size={20} />
                      Download
                    </Button>
                  </a>
                </div>

                <div className="border-2 border-border rounded-lg bg-muted/30 overflow-hidden">
                  <iframe 
                    src="/Kunwar_Data_Analyst.pdf" 
                    className="w-full h-[700px]"
                    title="Resume Preview"
                  />
                </div>

                <div className="text-center">
                  <a href="/Kunwar_Data_Analyst.pdf" download>
                    <Button variant="outline" className="gap-2">
                      <Download size={20} />
                      Download PDF
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                I'd love to hear from you. Let's connect!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 card-hover animate-slide-up">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full glow-effect">
                    Send Message
                  </Button>
                </form>
              </Card>

              <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <Card className="p-6 card-hover">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail size={20} className="text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a 
                          href="mailto:Kunwargupta7@gmail.com" 
                          className="hover:text-primary transition-colors"
                        >
                          Kunwargupta7@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone size={20} className="text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a 
                          href="tel:+919569292080" 
                          className="hover:text-primary transition-colors"
                        >
                          +91-9569292080
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin size={20} className="text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p>Lucknow, UP, India</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 card-hover">
                  <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                  <div className="space-y-3">
                    <a
                      href="https://github.com/kunwargupta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <Github size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <p className="font-medium">GitHub</p>
                        <p className="text-sm text-muted-foreground">@kunwargupta</p>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/kunwarjigupta/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <Linkedin size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">Kunwar Ji Gupta</p>
                      </div>
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
