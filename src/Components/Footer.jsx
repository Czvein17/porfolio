import PropTypes from "prop-types";

const Footer = ({ className }) => {
  return (
    <footer
      className={`${className} bg-transparent h-10 flex justify-center items-center`}
    >
      <p>&copy; {new Date().getFullYear()} Czvein Lei All rights reserved.</p>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
