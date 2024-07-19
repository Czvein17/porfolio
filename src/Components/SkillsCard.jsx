import PropTypes from "prop-types";

const SkillsCard = ({ src, name, className }) => {
  return (
    <div
      className={`${className} flex flex-col justify-center items-center p-3 gap-1`}
    >
      <div className="w-[50px] h-[50px] flex justify-center items-center ">
        <img className="w-full h-auto  " src={src} alt={name} />
      </div>
      <p className="text-lg">{name}</p>
    </div>
  );
};

SkillsCard.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SkillsCard;
