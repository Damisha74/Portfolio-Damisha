
import { contactImg } from "../assets";
import { FadeIn } from "./FadeIn";
import Title from "./Title";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-gray-700 flex justify-center items-center"
    >
      <FadeIn>
        <div className="w-full flex flex-col items-center text-center">
          <Title des="Contact Me" />
          <div className="w-full w-[100%] lgl:w-[100%] p-4"> 
            <div className="w-full h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center mx-auto">
              <img
                className="w-full h-64 object-cover rounded-lg mb-2"
                src={contactImg}
                alt="contactImg"
              />
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-white">Damisha Wickramaarachchi</h3>
                <p className="text-base text-gray-400 flex items-center gap-2">
                  Phone: <span className="text-lightText">+94 74 098 4723</span>
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                  Email:{" "}
                  <a
                    href="mailto:damishat99@gmail.com"
                    className="text-lightText"
                  >
                    damishat99@gmail.com
                  </a>
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                  Location: <span className="text-lightText">Kalutara, Sri Lanka</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;
