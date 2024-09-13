const SingleSkill = ({ skillType, emoji, color }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skillType}</span>
      <span>{emoji}</span>
    </div>
  );
};
export default SingleSkill;
