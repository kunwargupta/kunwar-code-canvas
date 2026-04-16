import { useRef, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  sortDate: number;
  shortDesc: string;
  description: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Data Research Intern",
    company: "Convergence Inc.",
    location: "Remote",
    date: "April 2026 – Present",
    sortDate: 202604,
    shortDesc: "Working on data quality metrics and coverage reporting using Excel and Google Sheets.",
    description: [
      "Designed and maintained quality metric and validation checks using Excel and Google Sheets, flagging data errors and inconsistencies against predefined thresholds to ensure accuracy across research records.",
      "Built a dynamic coverage summary in Excel using Pivot Tables and conditional logic, giving the team a live view of data completeness across multiple research categories.",
      "Produced a clean data stats report consolidating key quality indicators – null counts, duplicate rates, and value distributions – providing a clear baseline of dataset health before analysis.",
    ],
    skills: ["Excel", "Google Sheets", "Data Validation", "Pivot Tables", "Data Quality"],
  },
];

const sortedExperiences = [...experiences].sort((a, b) => a.sortDate - b.sortDate);

export const ExperienceTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scale section height based on number of experiences
  const sectionHeightVh = Math.max(120 + (sortedExperiences.length - 1) * 80, 150);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      if (rect.top <= 0 && rect.bottom >= viewportHeight) {
        const totalScrollable = sectionHeight - viewportHeight;
        const scrolled = Math.abs(rect.top);
        setScrollProgress(Math.min(Math.max(scrolled / totalScrollable, 0), 1));
      } else if (rect.top > 0) {
        setScrollProgress(0);
      } else {
        setScrollProgress(1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative px-4"
      style={{ height: `${sectionHeightVh}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">
              My <span className="text-gradient">Experience</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Professional journey in ascending order
            </p>
          </div>

          {/* Timeline container */}
          <div className="relative">
            {/* Blue line - positioned to pass through dot centers */}
            <div className="absolute top-[10px] left-8 right-8 h-[3px] bg-border rounded-full z-0" />
            <div
              className="absolute top-[10px] left-8 h-[3px] bg-primary rounded-full z-[1] shadow-[0_0_12px_hsl(var(--primary)/0.6)] transition-all duration-150 ease-linear"
              style={{ width: `calc(${scrollProgress * 100}% - 64px)`, maxWidth: 'calc(100% - 64px)' }}
            />

            {/* Experience items laid out horizontally */}
            <div className="flex items-start gap-8 overflow-visible px-8">
              {sortedExperiences.map((exp, index) => {
                const itemProgress = sortedExperiences.length === 1
                  ? scrollProgress
                  : scrollProgress * sortedExperiences.length - index;
                const isRevealed = itemProgress > 0.15;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1 min-w-0"
                  >
                    {/* Dot - centered on the line */}
                    <div
                      className={`w-5 h-5 rounded-full border-4 z-10 transition-all duration-500 flex-shrink-0 ${
                        isRevealed
                          ? "bg-primary border-primary shadow-[0_0_16px_hsl(var(--primary)/0.7)] scale-125"
                          : "bg-card border-border"
                      }`}
                    />

                    {/* Date */}
                    <div
                      className={`mt-4 mb-4 text-sm font-medium flex items-center gap-1.5 transition-all duration-500 ${
                        isRevealed ? "text-primary opacity-100" : "text-muted-foreground opacity-40"
                      }`}
                    >
                      <Calendar size={14} />
                      {exp.date}
                    </div>

                    {/* Card - below the line, no overlap */}
                    <Card
                      className={`p-6 w-full max-w-md bg-card border-primary/20 hover:border-primary/40 transition-all duration-700 ${
                        isRevealed
                          ? "opacity-100 translate-y-0 shadow-lg shadow-primary/10"
                          : "opacity-20 translate-y-6"
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Briefcase size={20} className="text-primary" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-lg font-semibold">{exp.title}</h3>
                            <p className="text-primary font-medium text-sm">{exp.company}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin size={12} />
                          {exp.location}
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {exp.shortDesc}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {exp.skills.slice(0, 3).map((skill, i) => (
                            <Badge key={i} className="text-xs bg-primary/10 text-primary border-primary/20">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="gap-1.5 text-primary hover:bg-primary/10 w-full mt-2">
                              View Details <ChevronRight size={14} />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-lg">
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-3">
                                <Briefcase size={20} className="text-primary" />
                                {exp.title}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="flex items-center justify-between text-sm text-muted-foreground">
                                <span className="font-medium text-primary">{exp.company}</span>
                                <span className="flex items-center gap-1">
                                  <Calendar size={14} /> {exp.date}
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                <MapPin size={14} /> {exp.location}
                              </div>
                              <div className="space-y-3 pt-2">
                                {exp.description.map((point, i) => (
                                  <div key={i} className="flex gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                                  </div>
                                ))}
                              </div>
                              <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                                {exp.skills.map((skill, i) => (
                                  <Badge key={i} className="bg-primary/10 text-primary border-primary/20">{skill}</Badge>
                                ))}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
