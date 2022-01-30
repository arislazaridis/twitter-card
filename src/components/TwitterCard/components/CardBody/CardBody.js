import React from "react";
import "./CardBody.css";

function CardBody(props) {
  const { urlTarget, urlLabel, title, subtitle, message, loading, image } =
    props;
  return (
    <div className="body">
      <p>{message}</p>

      <div className="photo-container">
        <div className="photo-description">
          {loading ? (
            <h1 style={{ textAlign: "center" }}>Loading....</h1>
          ) : (
            <img src={image} alt="twitter wallpaper" />
          )}
          <a href={urlTarget}>{urlLabel}</a>
          <h4> {title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default CardBody;
