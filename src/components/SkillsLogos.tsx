import { BarChart3, LineChart, type LucideIcon } from "lucide-react";
import excelIcon from "@/assets/skill-icons/excel.svg";
import powerbiIcon from "@/assets/skill-icons/powerbi.svg";
import tableauIcon from "@/assets/skill-icons/tableau.png";

type Skill = {
  name: string;
  slug?: string; // simple-icons slug
  src?: string;  // local asset (overrides slug)
  color: string; // brand hex (no #)
  Icon?: LucideIcon;
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
      { name: "Power BI", src: powerbiIcon, color: "F2C811" },
      { name: "Tableau", src: tableauIcon, color: "E97627" },
      { name: "Excel", src: excelIcon, color: "217346" },
      { name: "Google Sheets", slug: "googlesheets", color: "34A853" },
      { name: "Matplotlib", color: "11557C", Icon: LineChart },
      { name: "Seaborn", color: "4C72B0", Icon: BarChart3 },
    ],
  },
  {
    category: "Workflow & Tools",
    skills: [
      { name: "Git", slug: "git", color: "F05032" },
      { name: "GitHub", slug: "github", color: "8b949e" },
    ],
  },
];

export const SkillsLogos = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {groups.map((group, gi) => (
        <div key={group.category} className="space-y-6">
          {/* Plain text divider */}
          <div className="flex items-center gap-4">
            <h3 className="text-base md:text-lg font-semibold text-gradient whitespace-nowrap tracking-wide">
              {group.category}
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-6 gap-y-8">
            {group.skills.map((skill, i) => (
              <div key={skill.name} className="flex flex-col items-center gap-3 group">
                <div
                  className="skill-bob skill-spin-on-hover relative w-14 h-14 flex items-center justify-center"
                  style={{ animationDelay: `${(gi * 0.25 + i * 0.27).toFixed(2)}s` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = `drop-shadow(0 0 12px #${skill.color}aa) drop-shadow(0 0 4px #${skill.color}88)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "";
                  }}
                >
                  {skill.Icon ? (
                    <skill.Icon
                      className="w-14 h-14"
                      style={{ color: `#${skill.color}` }}
                    />
                  ) : skill.src ? (
                    <img
                      src={skill.src}
                      alt={skill.name}
                      loading="lazy"
                      className="w-14 h-14 object-contain"
                    />
                  ) : (
                    <img
                      src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
                      alt={skill.name}
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = `https://cdn.simpleicons.org/${skill.slug}`;
                      }}
                      className="w-14 h-14"
                    />
                  )}
                </div>
                <span
                  className="text-center whitespace-nowrap transition-colors"
                  style={{ fontSize: "13px", color: "#94a3b8" }}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <style>{`
        @keyframes skill-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes skill-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .skill-bob {
          animation: skill-bob 3s ease-in-out infinite;
          transition: filter 300ms ease;
        }
        .skill-spin-on-hover:hover {
          animation: skill-spin 400ms ease-in-out, skill-bob 3s ease-in-out infinite 400ms;
        }
      `}</style>
    </div>
  );
};
