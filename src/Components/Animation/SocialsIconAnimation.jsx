import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Tooltip from "../Tooltip";
import Icon from "../Icon";

const SocialsIconAnimation = ({ icon, link, color, message, itemVariants }) => {
  // Parent variant for controlling children animation
  return (
    <Tooltip message={message}>
      <motion.div variants={itemVariants}>
        <Icon icon={icon} link={link} color={color} />
      </motion.div>
    </Tooltip>
  );
};

SocialsIconAnimation.propTypes = {
  icon: PropTypes.elementType.isRequired,
  link: PropTypes.string,
  color: PropTypes.string,
  message: PropTypes.string,
  itemVariants: PropTypes.object,
};

export default SocialsIconAnimation;
