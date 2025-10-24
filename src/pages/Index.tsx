import { TypeWriter } from "@/components/TypeWriter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Github, Linkedin, Mail, Download, User, ExternalLink, Award, FileText, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTilt } from "@/hooks/use-tilt";

const projects = [
  {
    title: "Sales Dashboard Analytics",
    description: "Interactive dashboard for analyzing sales trends, customer behavior, and revenue metrics using Python and Tableau.",
    tech: ["Python", "Pandas", "Tableau", "SQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Customer Segmentation Model",
    description: "Machine learning project to segment customers based on purchasing patterns and demographics.",
    tech: ["Python", "Scikit-learn", "Jupyter", "Matplotlib"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "E-commerce Data Pipeline",
    description: "Automated ETL pipeline for processing e-commerce data from multiple sources into a centralized database.",
    tech: ["Python", "PostgreSQL", "Apache Airflow", "Docker"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Sentiment Analysis Tool",
    description: "NLP-based tool to analyze customer reviews and extract sentiment insights for product improvement.",
    tech: ["Python", "NLTK", "Streamlit", "AWS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Financial Portfolio Tracker",
    description: "Real-time portfolio tracking application with performance analytics and risk assessment features.",
    tech: ["React", "TypeScript", "D3.js", "Firebase"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Healthcare Data Visualization",
    description: "Comprehensive visualization suite for healthcare metrics, patient outcomes, and operational efficiency.",
    tech: ["R", "Shiny", "ggplot2", "MySQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "R", "SQL", "JavaScript", "TypeScript"],
    date: "2022 - Present",
    certificate: "Python for Data Science - Coursera",
    certificateUrl: "#",
  },
  {
    category: "Data Analysis",
    items: ["Pandas", "NumPy", "Excel", "Statistical Analysis"],
    date: "2022 - Present",
    certificate: "Data Analysis with Python - freeCodeCamp",
    certificateUrl: "#",
  },
  {
    category: "Data Visualization",
    items: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "D3.js"],
    date: "2023 - Present",
    certificate: "Tableau Desktop Specialist",
    certificateUrl: "#",
  },
  {
    category: "Database Management",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    date: "2022 - Present",
    certificate: "SQL for Data Science - Coursera",
    certificateUrl: "#",
  },
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "TensorFlow", "Keras", "Feature Engineering"],
    date: "2023 - Present",
    certificate: "Machine Learning Specialization - Andrew Ng",
    certificateUrl: "#",
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "Docker", "Jupyter", "VS Code", "AWS"],
    date: "2022 - Present",
    certificate: "AWS Cloud Practitioner",
    certificateUrl: "#",
  },
];

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();
  const { ref: aboutCardRef, transform: aboutCardTransform } = useTilt();

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
              Hi, I'm <span className="text-gradient">Kunwar Gupta</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground h-8">
              <TypeWriter 
                texts={[
                  "Aspiring Data Analyst",
                  "Problem Solver",
                  "Lifelong Learner",
                  "Creator"
                ]}
              />
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about turning data into insights and building solutions that make a difference.
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
              href="https://linkedin.com/in/kunwargupta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors glow-effect"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:kunwar@example.com"
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
              className="p-8 md:p-12 card-hover transition-transform duration-200 ease-out"
              style={{ transform: aboutCardTransform }}
            >
              <div className="grid md:grid-cols-[200px,1fr] gap-8 items-start">
                <div className="mx-auto md:mx-0">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <User size={80} className="text-primary" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Kunwar Gupta</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm an aspiring data analyst with a passion for uncovering insights from data 
                      and creating meaningful visualizations. My journey in tech began with a curiosity 
                      about how data shapes decisions, and it has evolved into a dedication to mastering 
                      tools like Python, SQL, and various data visualization platforms.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      When I'm not analyzing datasets or building dashboards, you can find me learning 
                      new technologies, working on personal projects, or exploring ways to apply data 
                      science to real-world problems. I believe in continuous learning and always strive 
                      to improve my skills.
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button className="gap-2 glow-effect">
                      <Download size={20} />
                      Download Resume
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Projects", value: "10+" },
                { label: "Skills", value: "15+" },
                { label: "Certificates", value: "5+" },
              ].map((stat, index) => (
                <Card 
                  key={index} 
                  className="p-6 text-center card-hover"
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

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold">
                My <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A collection of projects showcasing my skills in data analysis, visualization, and software development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="p-6 card-hover flex flex-col animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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
                  
                  <div className="flex gap-3 mt-6 pt-4 border-t border-border">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full gap-2">
                        <Github size={16} />
                        Code
                      </Button>
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" className="w-full gap-2 glow-effect">
                          <ExternalLink size={16} />
                          Demo
                        </Button>
                      </a>
                    )}
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
                      <Card className="p-6 card-hover">
                        <div className="space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-xl font-semibold mb-1">
                                {skill.category}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {skill.date}
                              </p>
                            </div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="ghost" className="gap-2 glow-effect">
                                  <Award size={16} />
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
                              <Badge key={i} variant="secondary">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </div>

                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  </div>
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
                      <h3 className="font-semibold">Kunwar_Gupta_Resume.pdf</h3>
                      <p className="text-sm text-muted-foreground">Last updated: January 2025</p>
                    </div>
                  </div>
                  <Button className="gap-2 glow-effect">
                    <Download size={20} />
                    Download
                  </Button>
                </div>

                <div className="border-2 border-border rounded-lg bg-muted/30 h-[600px] flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <FileText size={64} className="mx-auto text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground mb-2">PDF Preview</p>
                      <p className="text-sm text-muted-foreground">
                        Your resume will be displayed here
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button variant="outline" className="gap-2">
                    <Download size={20} />
                    Download PDF
                  </Button>
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
                          href="mailto:kunwar@example.com" 
                          className="hover:text-primary transition-colors"
                        >
                          kunwar@example.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone size={20} className="text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a 
                          href="tel:+1234567890" 
                          className="hover:text-primary transition-colors"
                        >
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin size={20} className="text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p>India</p>
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
                      href="https://linkedin.com/in/kunwargupta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <Linkedin size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">Kunwar Gupta</p>
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
