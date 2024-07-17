const Icon = ({ icon: IconComponent, link, size = 30, color }) => {
  return (
    <div className="relative inline-block">
      <a href={link} target="_blank">
        <IconComponent size={size} color={color} />
      </a>
    </div>
  );
};

export default Icon;
