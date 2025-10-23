import { useEffect } from "react";
import { TypeWriter } from "@/components/TypeWriter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Github, Linkedin, Mail, Download, ExternalLink, Award, FileText } from "lucide-react";

const projects = [
  {
    title: "Sales Analysis Dashboard",
    description: "Interactive dashboard analyzing sales trends and customer behavior patterns",
    tech: ["Python", "Pandas", "Tableau"],
    github: "#",
    demo: "#",
  },
  {
    title: "Customer Segmentation",
    description: "ML-based customer segmentation using clustering algorithms",
    tech: ["Python", "Scikit-learn", "SQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Predictive Analytics Model",
    description: "Time series forecasting for inventory management",
    tech: ["Python", "TensorFlow", "Pandas"],
    github: "#",
    demo: "#",
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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="container max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
            Kunwar Gupta
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground animate-slide-up">
            <TypeWriter
              texts={[
                "Aspiring Data Analyst",
                "Problem Solver",
                "Continuous Learner",
                "Data Enthusiast",
              ]}
            />
          </div>
          <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button className="gap-2 glow-effect hover:scale-110 transition-transform duration-300">
              <Github size={20} />
              GitHub
            </Button>
            <Button className="gap-2 glow-effect hover:scale-110 transition-transform duration-300">
              <Linkedin size={20} />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="container max-w-5xl mx-auto">
          <div className="scroll-reveal space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              About <span className="text-gradient">Me</span>
            </h2>
            <Card className="p-8 card-hover">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I'm a passionate data analyst with a keen interest in transforming raw data into
                  actionable insights. With a strong foundation in statistical analysis and machine
                  learning, I specialize in creating data-driven solutions that drive business growth.
                </p>
                <p className="text-lg leading-relaxed">
                  My journey in data analytics began with a curiosity about patterns and trends,
                  which has evolved into a comprehensive skill set spanning various tools and
                  technologies in the data ecosystem.
                </p>
                <Button className="gap-2 hover:scale-105 transition-transform duration-300">
                  <Download size={20} />
                  Download Resume
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="container max-w-6xl mx-auto">
          <div className="scroll-reveal space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="p-6 card-hover scroll-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="gap-2 hover:scale-105 transition-transform duration-300">
                        <Github size={16} />
                        Code
                      </Button>
                      <Button size="sm" className="gap-2 hover:scale-105 transition-transform duration-300">
                        <ExternalLink size={16} />
                        Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="container max-w-5xl mx-auto">
          <div className="scroll-reveal space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              Skills & <span className="text-gradient">Certifications</span>
            </h2>
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/30" />
              
              <div className="space-y-12">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } scroll-reveal`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                      <Card className="p-6 card-hover">
                        <div className="space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-xl font-semibold text-primary">
                                {skill.category}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {skill.date}
                              </p>
                            </div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="ghost" className="gap-2 glow-effect hover:scale-110 transition-transform duration-300">
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
                                    <Button className="w-full gap-2 hover:scale-105 transition-transform duration-300">
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
                              <Badge key={i} variant="secondary" className="text-primary border-primary/20">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </div>

                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="container max-w-5xl mx-auto">
          <div className="scroll-reveal space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              My <span className="text-gradient">Resume</span>
            </h2>
            <Card className="p-8 card-hover">
              <div className="space-y-6 text-center">
                <div className="bg-muted/30 rounded-lg p-12">
                  <FileText size={64} className="mx-auto text-primary mb-4" />
                  <p className="text-muted-foreground">
                    Resume preview will be displayed here
                  </p>
                </div>
                <Button className="gap-2 hover:scale-105 transition-transform duration-300">
                  <Download size={20} />
                  Download Resume
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="container max-w-2xl mx-auto">
          <div className="scroll-reveal space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <Card className="p-8 card-hover">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Your message..." rows={5} />
                </div>
                <Button type="submit" className="w-full hover:scale-105 transition-transform duration-300">
                  Send Message
                </Button>
              </form>
              <div className="flex justify-center gap-4 mt-8">
                <Button size="icon" variant="outline" className="glow-effect hover:scale-110 transition-transform duration-300">
                  <Github size={20} />
                </Button>
                <Button size="icon" variant="outline" className="glow-effect hover:scale-110 transition-transform duration-300">
                  <Linkedin size={20} />
                </Button>
                <Button size="icon" variant="outline" className="glow-effect hover:scale-110 transition-transform duration-300">
                  <Mail size={20} />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
