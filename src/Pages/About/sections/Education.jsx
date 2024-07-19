import PropTypes from "prop-types";

import "./timeline.css";

const TimelineItem = ({ date, education, title, content }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-date">{date}</div>
      <div className="timeline-content shadow-md">
        <h3>{title}</h3>
        <h6>{education}</h6>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="w-full lg:h-[auto]   py-10 box-border flex flex-col justify-center items-center">
      <h1 className="text-3xl">Education</h1>
      <section className="timeline-section">
        <div className="timeline-items">
          <TimelineItem
            date="2023 - Current"
            title="PHINMA Saint Jude College"
            education="Tertiary Education"
            content="Pursuing a Bachelor of Science in Information Technology"
          />
          <TimelineItem
            date="2021 - 2023"
            title="San Francisco High School"
            education="Secondary Education"
            content="Specialized in TVL Information Communication Technology"
          />
          <TimelineItem
            date="2017 - 2021"
            title="San Francisco High School"
            education="Primary Education"
            content="Completed High School"
          />
        </div>
      </section>
    </div>
  );
};

TimelineItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Education;
