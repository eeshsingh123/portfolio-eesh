import Link from "next/link";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-4">
      <div className="font-semibold text-2xl">My Socials</div>
      <div className="flex gap-6 p-4">
        <Link href="https://www.linkedin.com/in/eesh-singh-49139310b/">
          <div>
            <FaLinkedin className="w-8 h-8 cursor-pointer" />
          </div>
        </Link>

        <Link href="https://github.com/eeshsingh123">
          <div>
            <FaGithub className="w-8 h-8 cursor-pointer"/>
          </div>
        </Link>
        <Link href="https://twitter.com/eeshsingh007">
          <div>
            <FaXTwitter className="w-8 h-8 cursor-pointer" />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Footer;
