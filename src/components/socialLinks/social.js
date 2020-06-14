import React from "react";
// import facebookLogo from "../../img/facebook.svg";
import "./social.scss";
// import githubLogo from "../../img/github.svg";
// import instagramLogo from "../../img/instagram.svg";
// import linkedInLogo from "../../img/linkedIn.svg";
// import twitterLogo from "../../img/twitter.svg";

const Social = () => {
  return (
    <div className="links-wrapper">
      <ul className="social-icons">
        <li className="icon icon--twitter">
          <a href="#">
            <span className="icon__name">Twitter</span>
          </a>
        </li>
        <li className="icon icon--linkedin">
          <a href="#">
            <span className="icon__name">LinkedIn</span>
          </a>
        </li>
        <li className="icon icon--instagram">
          <a href="#">
            <span className="icon__name">Instagram</span>
          </a>
        </li>
        <li className="icon icon--github">
          <a href="#">
            <span className="icon__name">GitHub</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
