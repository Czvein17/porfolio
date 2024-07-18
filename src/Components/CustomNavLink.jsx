import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function CustomNavLink({ to, children, active, inActive }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? active : inActive)}
    >
      {children}
    </NavLink>
  );
}

CustomNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  active: PropTypes.string.isRequired,
  inActive: PropTypes.string.isRequired,
};

export default CustomNavLink;
