import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

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

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-24">
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
  );
};

export default Projects;
