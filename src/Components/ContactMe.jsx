import SectionHeader from "./SectionHeader";
import { ReactComponent as Linkedin } from "../images/linkedin.svg";
import { ReactComponent as Email } from "../images/email.svg";

const ContactMe = () => {
    return (
        <section
            id="contact-me"
            className="bg-dark py-12 text-white flex flex-col items-center">
            <SectionHeader>Contact Me</SectionHeader>
            <p className="text-xs mt-2">
                Feel free to contact and send me a message
            </p>
            <div className="flex mt-4">
                {/* <a
					href="https://www.linkedin.com/in/javin-rionardi-6a8a91204/"
					target="blank"
				>
					<Linkedin className=" scale-75 hover:cursor-pointer" />
				</a> */}
                <a href="mailto:javinrio112@gmail.com">
                    <Email className="scale-75 hover:cursor-pointer" />
                </a>
            </div>
        </section>
    );
};
export default ContactMe;
