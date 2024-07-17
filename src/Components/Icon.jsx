import PropTypes from "prop-types";

const Icon = ({ icon: IconComponent, link, size = 35, color }) => {
  return (
    <div className="relative inline-block">
      <a
        href={link}
        target="_blank"
        className="hover:bg-[red] w-[24px] h-[24px]"
      >
        <IconComponent size={size} color={color} />
      </a>
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  link: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;
