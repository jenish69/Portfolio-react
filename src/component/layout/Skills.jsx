import SkillCircle from "./SkillCircle";

const Skills = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px" , gap: "40px" }}>
      <SkillCircle label="React js" icon="react-icon.png" />
      <SkillCircle label="JavaScript" icon="js-icon.png" />
      <SkillCircle label="HTML" icon="html-icon.png" />
      <SkillCircle label="CSS" icon="css-icon.png" />
    </div>
  );
};

export default Skills;
