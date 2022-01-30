import React from "react";
import VerifiedIcon from "./../../../../assets/VerifiedIcon.png";
import twitterSmall from "./../../../../assets/twitterSmall.png";
import "./CardHeader.css";

function CardHeader({ author }) {
  return (
    <div className="header">
      <div className="header-content">
        <img
          src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139735.png/image"
          alt="twitter icon"
        />

        <div>
          <b>Twitter</b>

          <img
            className="verified-icon"
            src={VerifiedIcon}
            alt="verified icon"
          />

          <br />

          {author}
        </div>
      </div>

      <img
        className="header-small-icon"
        src={twitterSmall}
        alt="twitter icon"
      />
    </div>
  );
}

export default CardHeader;
