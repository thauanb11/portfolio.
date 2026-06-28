import "./Skills.css";
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
    <section id="skills">
      <h2 className="skillsHeading">Tecnologias</h2>

      <div className="skills">
        {skills.map(({ icon: Icon, name }) => (
          <div key={name} className="badge">
            <Icon size={28} />
            <span className="name">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
