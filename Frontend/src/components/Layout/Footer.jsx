// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Ayush Singh.</div>
      <div>
        <Link to={"https://www.facebook.com/profile.php?id=100010572360791"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/@ayush_singh_23"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/ayush-singh23/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/im_ayushsingh/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;