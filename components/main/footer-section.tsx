import Link from "next/link";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col pt-6">
      <div className="text-sm text-muted-foreground mb-3">Connect</div>
      <div className="flex gap-4">
        <Link href="https://www.linkedin.com/in/eesh-singh-49139310b/" className="text-muted-foreground hover:text-foreground transition-colors">
          <FaLinkedin className="w-5 h-5" />
        </Link>
        <Link href="https://github.com/eeshsingh123" className="text-muted-foreground hover:text-foreground transition-colors">
          <FaGithub className="w-5 h-5"/>
        </Link>
        <Link href="https://twitter.com/eeshsingh007" className="text-muted-foreground hover:text-foreground transition-colors">
          <FaXTwitter className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};
export default Footer;
