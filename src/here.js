import React from "react";
import ReactDOM from "react-dom/client";
import "./here.css";

const skillData = [
  { skill: "HTML + CSS", color: "#2662EA", emoji: "💪" },
  { skill: "JavaScript", color: "#F7DF1E", emoji: "💪" },
  { skill: "Web Design", color: "#C3E88D", emoji: "💪" },
  { skill: "Git and GitHub", color: "#E84F33", emoji: "👍" },
  { skill: "React", color: "#61DAFB", emoji: "💪" },
  { skill: "Svelte", color: "#FF3E00", emoji: "😎" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/pizzas/coder.jpg" alt="Jonas" />;
}

function Intro() {
  return (
    <div className="data">
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing courses, I enjoy board games, cooking and spending time at the
        beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skillData.map((skill) => (
        <Skill
          key={skill.skill}
          skill={skill.skill}
          color={skill.color}
          emoji={skill.emoji}
        />
      ))}
    </div>
  );
}

function Skill(props) {
  return (
    <span className="skill" style={{ backgroundColor: props.color }}>
      {props.skill} {props.emoji}
    </span>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
