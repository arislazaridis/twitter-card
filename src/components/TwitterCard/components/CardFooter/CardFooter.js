import React from "react";
import "./CardFooter.css";
import heartIcon from "./../../../../assets/heartIcon.png";
import infoIcon from "./../../../../assets/infoIcon.png";
import arrowRigth from "./../../../../assets/arrowRight.png";
import commentsIcon from "./../../../../assets/comments.png";

function CardFooter(props) {
  const { dateCreated, commentUrl, likes, comments } = props;
  return (
    <div>
      <div className="footer">
        <div className="likes-field">
          <img className="likes-img" src={heartIcon} alt="likes icon" />
          <div>{likes?.length}</div>
        </div>

        <div className="date-field">{dateCreated}</div>

        <img src={infoIcon} alt="info icon" />
      </div>
      <hr />

      <div className="comments">
        <div className="comments-field">
          <img src={commentsIcon} alt="comments icon" />

          <div>{comments?.length}</div>
        </div>

        <div className="comments-url">
          <a href={commentUrl}>people are talking about this</a>
        </div>

        <img
          className="comments-arrow-icon"
          src={arrowRigth}
          alt="right arrow icon"
        />
      </div>
    </div>
  );
}

export default CardFooter;
