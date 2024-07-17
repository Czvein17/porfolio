import PropTypes from "prop-types";

function Tooltip({ message, children }) {
  return (
    <div className="group relative flex justify-center items-center">
      {children}
      <span className="absolute top-10 scale-0 transition-all rounded bg-black  p-2 text-xs text-white group-hover:scale-100">
        {message}
      </span>
    </div>
  );
}

Tooltip.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Tooltip;
