import mySkills from "../data";
import SingleSkill from "./SingleSkill";

const SkillsList = () => {
  return (
    <div className="skill-list">
      {mySkills.map((skill) => (
        <SingleSkill key={skill.id} {...skill} />
      ))}
    </div>
  );
};
export default SkillsList;
