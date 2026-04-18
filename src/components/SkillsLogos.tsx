import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type Skill = {
  name: string;
  slug: string; // simple-icons slug
  color: string; // brand hex (no #)
};

const groups: { category: string; skills: Skill[] }[] = [
  {
    category: "Languages & Querying",
    skills: [
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "MySQL", slug: "mysql", color: "4479A1" },
      { name: "SQL", slug: "postgresql", color: "4169E1" },
      { name: "Pandas", slug: "pandas", color: "150458" },
      { name: "NumPy", slug: "numpy", color: "013243" },
    ],
  },
  {
    category: "BI & Visualization",
    skills: [
      { name: "Power BI", slug: "powerbi", color: "F2C811" },
      { name: "Tableau", slug: "tableau", color: "E97627" },
      { name: "Excel", slug: "microsoftexcel", color: "217346" },
      { name: "Google Sheets", slug: "googlesheets", color: "34A853" },
      { name: "Matplotlib", slug: "python", color: "11557C" },
      { name: "Seaborn", slug: "python", color: "4C72B0" },
    ],
  },
  {
    category: "Workflow & Tools",
    skills: [
      { name: "Git", slug: "git", color: "F05032" },
      { name: "GitHub", slug: "github", color: "ffffff" },
    ],
  },
];

export const SkillsLogos = () => {
  return (
    <TooltipProvider delayDuration={150}>
      <div className="space-y-12">
        {groups.map((group, gi) => (
          <div key={group.category} className="space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-lg md:text-xl font-semibold text-gradient whitespace-nowrap">
                {group.category}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {group.skills.map((skill, i) => (
                <Tooltip key={skill.name}>
                  <TooltipTrigger asChild>
                    <div
                      className="group relative aspect-square rounded-xl bg-card border border-primary/20 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-primary/60 hover:scale-110"
                      style={{
                        animation: `bob 3s ease-in-out ${(gi * 0.2 + i * 0.15).toFixed(2)}s infinite`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 30px #${skill.color}66, 0 0 10px #${skill.color}44`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "";
                      }}
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
                        alt={skill.name}
                        loading="lazy"
                        className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-medium">{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </TooltipProvider>
  );
};
