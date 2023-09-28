import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { RiTwitterLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="ml-20">
      Made with ❤️ by Chinmay
      <div>Socials:</div>
      <div className="flex">
        <br />
        <div className="socials">
          <a href="https://x.com">
            <RiTwitterLine size={40} />
          </a>
        </div>
        <div className="socials">
          <a href="https://instagram.com">
            <BsInstagram size={36} />
          </a>
        </div>
        <div className="socials">
          <a href="https://linkedin.com">
            <BsLinkedin size={36} />
          </a>
        </div>
      </div>
      <span>Or feel free to drop a mail</span>
    </div>
  );
}

export default About;
