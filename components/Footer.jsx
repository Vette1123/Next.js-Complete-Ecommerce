import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";
import { SiDiscord, SiTwitch, SiFacebook } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Vette Productions!</p>
      <p className="icons">
        <Link href="https://www.twitch.tv/vetteotp">
          <a target="_blank" rel="noopener noreferrer">
            <SiTwitch style={{ cursor: "pointer" }} />
          </a>
        </Link>
        <Link href="https://www.instagram.com/gadohecotp/">
          <a target="_blank" rel="noopener noreferrer">
            <AiFillInstagram style={{ cursor: "pointer" }} />
          </a>
        </Link>
        <Link href="https://discord.gg/ZARrZvfFAg">
          <a target="_blank" rel="noopener noreferrer">
            <SiDiscord style={{ cursor: "pointer" }} />
          </a>
        </Link>
        <Link href="https://www.facebook.com/R0baaa/">
          <a target="_blank" rel="noopener noreferrer">
            <SiFacebook style={{ cursor: "pointer" }} />
          </a>
        </Link>
        <Link href="https://twitter.com/Sadge1996">
          <a target="_blank" rel="noopener noreferrer">
            <AiOutlineTwitter style={{ cursor: "pointer" }} />
          </a>
        </Link>
        <Link href="https://github.com/Vette1123">
          <a target="_blank" rel="noopener noreferrer">
            <AiFillGithub style={{ cursor: "pointer" }} />
          </a>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
