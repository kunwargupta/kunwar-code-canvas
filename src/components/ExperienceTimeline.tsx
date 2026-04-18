import { useEffect, useRef, useState } from "react";
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

const TimelineItem = ({ exp, index }: { exp: Experience; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative pl-20 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Dot on the line */}
      <div className="absolute left-[26px] top-6 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_16px_hsl(var(--primary)/0.8)] z-10" />

      <Card className="p-6 bg-card/80 backdrop-blur-md border-l-4 border-l-primary border-y border-r border-primary/20 hover:border-primary/50 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.4)] transition-all duration-300">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Briefcase size={20} className="text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-primary font-medium text-sm">{exp.company}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5 text-primary/80">
              <Calendar size={12} /> {exp.date}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} /> {exp.location}
            </span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{exp.shortDesc}</p>

          <div className="flex flex-wrap gap-1.5">
            {exp.skills.map((skill, i) => (
              <Badge
                key={i}
                className="text-xs bg-transparent text-primary border border-primary/40 rounded-full px-2.5 py-0.5 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_10px_hsl(var(--primary)/0.4)] transition-all"
              >
                {skill}
              </Badge>
            ))}
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1.5 text-primary hover:bg-primary/10 mt-2">
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
                    <Badge key={i} className="bg-primary/10 text-primary border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </Card>
    </div>
  );
};

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Professional journey in ascending order
          </p>
        </div>

        <div className="relative">
          {/* Glowing vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/60 to-primary/20 shadow-[0_0_12px_hsl(var(--primary)/0.6)] rounded-full" />

          <div className="space-y-10">
            {sortedExperiences.map((exp, index) => (
              <TimelineItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
