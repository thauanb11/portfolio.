import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiSpringboot,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { icon: SiReact, name: "React" },
  { icon: FaJava, name: "Java" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiSpringboot, name: "SpringBoot" },
];

export function Skills() {
  return (
    <div className="flex flex-wrap gap-4">
      {skills.map(({ icon: Icon, name }) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 rounded-full border-2 border-[#8a6d3b] bg-[#2a1f17] p-4 text-[#d4af6a]"
        >
          <Icon size={28} />
          <span className="text-xs uppercase tracking-wide">{name}</span>
        </div>
      ))}
    </div>
  );
}
