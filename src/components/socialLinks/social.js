import React from "react";
import "./social.scss";

const Social = () => {
  return (
    <div className="links-wrapper">
      <ul className="social-icons">
        <li className="icon icon--twitter">
          <a href="/">
            <span className="icon__name">Twitter</span>
          </a>
        </li>
        <li className="icon icon--linkedin">
          <a href="https://www.linkedin.com/in/vladi-%E2%80%9Cdes%E2%80%9D-medvedi-3667901aa/">
            <span className="icon__name">LinkedIn</span>
          </a>
        </li>
        <li className="icon icon--instagram">
          <a href="https://www.instagram.com/desmo_papa/">
            <span className="icon__name">Instagram</span>
          </a>
        </li>
        <li className="icon icon--github">
          <a href="https://github.com/Med-vedi">
            <span className="icon__name">GitHub</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
