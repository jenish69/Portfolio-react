import "./css/SkillCircle.css";

const SkillCircle = ({ label, icon }) => {
  return (
    <div className="skill">
      <div className="outer">
        <div className="inner">
          <img src={icon} alt={label} className="icon" />
        </div>
        <svg className="circle" width="100" height="100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#333"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#ff7a00"
            strokeWidth="8"
            fill="none"
            strokeDasharray="251.2"
            strokeDashoffset={ 0}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
        </svg>
      </div>
      <p>{label}</p>
    </div>
  );
};

export default SkillCircle;
