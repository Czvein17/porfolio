import { useRef, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

import Icon from "../Components/Icon";
import Tooltip from "../Components/Tooltip";

const socialIcons = [
  {
    icon: FaFacebook,
    link: "https://www.facebook.com/LeiDump1",
    color: "#000",
    message: "Facebook",
  },
  {
    icon: FaGithub,
    link: "https://github.com/czvein17",
    color: "#000",
    message: "Github",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/ccziiii/",
    color: "#000",
    message: "Instagram",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/czvein-lei-unarce-47645828b",
    color: "#000",
    message: "Linkedin",
  },
];

const Contact = () => {
  console.log("Rendered");
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;

    const name = form["name"].value;
    const email = form["email"].value;
    const message = form["message"].value;

    // console.log({ name, email, message });

    if (!name || !email || !message) {
      setError(true);
      setErrorMessage("Please fill in all fields");
      return;
    }

    setLoading(true);
    emailjs
      .sendForm(
        "service_skdl8ay",
        "template_ekyzah8",
        form,
        "aQB94nlTliNGmKso_"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setSuccess(true);
          setLoading(false);
        },
        (error) => {
          setError(true);
          setLoading(false);
          console.log("Failed to send email:", error.text);
        }
      );

    form.reset();
  };

  success && setTimeout(() => setSuccess(false), 3000);
  error && setTimeout(() => setError(false), 3000);
  errorMessage && console.log(errorMessage);

  return (
    <div className="h-auto w-full flex  justify-center items-center px-5">
      <div className="flex flex-col lg:flex-row gap-4 lg:justify-center w-full py-5">
        <div className="basis-1/3 flex flex-col  justify-center gap-10 p-5 lg:items-start items-center">
          <h1 className="text-5xl font-bold pb-7 drop-shadow-2xl shadow-black uppercase">
            Get in Touch
          </h1>
          <div className="flex flex-col gap-3 lg:w-[80%] lg:mb-8 justify-center lg:items-start ">
            <p className="text-xl">
              <strong>Email:</strong> czveinlei17@gmail.com
            </p>
            <p className="text-xl">
              <strong>Phone:</strong> 09912159668
            </p>
            <p className="text-xl lg:text-start text-center">
              If you have any questions, feel free to drop me a message. I look
              forward to connecting with you!
            </p>
          </div>

          <div className="flex gap-6 lg:justify-normal justify-center">
            {socialIcons.map((icon, index) => (
              <Tooltip key={index} message={icon.message}>
                <Icon
                  key={index}
                  icon={icon.icon}
                  link={icon.link}
                  size={icon.size}
                />
              </Tooltip>
            ))}
          </div>
        </div>

        <div className=" basis-1/2 flex justify-center items-center my-5">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-[90%]"
          >
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="flex-grow w-full p-5 bg-[#f5f5f5] shadow-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="flex-grow w-full p-5 bg-[#f5f5f5] shadow-md"
              />
            </div>

            <textarea
              className="p-5 resize-none bg-[#f5f5f5] shadow-md"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>

            {loading && (
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            )}

            {success && (
              <p className="text-center text-green-500">Message sent!</p>
            )}

            {error && (
              <p className="text-center text-red-500">{errorMessage}</p>
            )}

            {!loading && (
              <button
                type="submit"
                className="border-2 border-black px-4 py-2 w-[120px] h-[42px] transition-all rounded hover:bg-black hover:text-white shadow-lg"
              >
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
