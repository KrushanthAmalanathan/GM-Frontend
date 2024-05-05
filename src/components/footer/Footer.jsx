// eslint-disable-next-line no-unused-vars
import React from "react";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterLinks from "./FooterLinks";
import FooterMap from "./FooterMap";
import FooterFeedback from "./FooterFeedback.jsx";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row mt-[5%] w-full bg-purple-400 min-h-[350px] bg-bgc">
        <FooterSocialLinks />
        <FooterLinks />
        <FooterMap />
        <FooterFeedback />
      </div>
      <center>
        <label>© 2022 Life Touch Fitness Ltd.</label>
      </center>
    </>
  );
};

export default Footer;
