import { Component } from "react";
import "./TwitterCard.css";
import heartIcon from "./../../assets/heartIcon.png";
import infoIcon from "./../../assets/infoIcon.png";
import arrowRigth from "./../../assets/arrowRight.png";
import comments from "./../../assets/comments.png";
import twitterSmall from "./../../assets/twitterSmall.png";
import VerifiedIcon from "./../../assets/VerifiedIcon.png";
import withDataFetching from "./withDataFetching.js";

export class TwitterCardClass extends Component {
  render() {
    return (
      <div className="container">
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
              {this.props.cardData?.author}
            </div>
          </div>

          <img
            className="header-small-icon"
            src={twitterSmall}
            alt="twitter icon"
          />
        </div>

        <div className="body">
          <p>{this.props.cardData?.message}</p>
          <div className="photo-container">
            {this.props.loading ? (
              <h1 style={{ textAlign: "center" }}>Loading...</h1>
            ) : (
              <img src={this.props.cardData?.image} alt="twitter wallpaper" />
            )}

            <div className="photo-description">
              <h4> {this.props.title}</h4>
              <p>{this.props.subtitle}</p>
              <a href={this.props.urlTarget}>{this.props.urlLabel}</a>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="likes-field">
            <img className="likes-img" src={heartIcon} alt="likes icon" />

            <div>{this.props.cardData?.likes?.length}</div>
          </div>

          <div className="date-field">{this.props.dateCreated}</div>

          <img src={infoIcon} alt="info icon" />
        </div>

        <hr />

        <div className="comments">
          <div className="comments-field">
            <img src={comments} alt="comments icon" />

            <div>{this.props.cardData?.comments?.length}</div>
          </div>

          <div className="comments-url">
            <a href={this.props.commentUrl}>people are talking about this</a>
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
}

export default withDataFetching()(TwitterCardClass);
