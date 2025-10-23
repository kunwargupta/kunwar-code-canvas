import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-24">
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
  );
};

export default Skills;
