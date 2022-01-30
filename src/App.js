import { useState } from "react";
import twitterIcon from "./assets/twitter1.png";
import TwitterCardClass from "./components/TwitterCard/TwitterCardClass";
import CardConteiner from "./components/TwitterCard/CardConteiner";

const data = {
  titlePhoto: `${twitterIcon}`,
  description:
    "Happy 3rd anniversary #TBT! See how 'Throwback Thursday' cemented its status as a weekly Twitter tradition",
  title: "History of #TBT on Twitter",
  subtitle: "History of #TBT on Twitter",
  url: {
    target: "https://blog.twitter.com",
    label: "blog.twitter.com",
  },
  dateCreated: "6:26PM - Apr 30,2015",
  commentUrl: "https://howtonow.com/how-to-read-comments-on-twitter/",
};

function App() {
  const [shouldDisplayFunctional, setShouldDisplayFunctional] = useState(false);
  const [shouldDisplayClass, setShouldDisplayClass] = useState(false);

  const myTwitterCard = <CardConteiner {...data} id={1} />;

  const TwitterCardWithCustomWidth = ({ style }) => (
    <div style={style}>
      <h4 style={{ textAlign: "center" }}>
        &#x02022;Twitter Card with Functional Component
      </h4>

      {myTwitterCard}
    </div>
  );

  return (
    <div>
      <button
        onClick={() => {
          setShouldDisplayFunctional(
            (shouldDisplayFunctional) => !shouldDisplayFunctional
          );
        }}
      >
        Toggle Functional
      </button>
      <button
        onClick={() => {
          setShouldDisplayClass(!shouldDisplayClass);
        }}
      >
        Toggle Class
      </button>
      {/* FunctionalComponent ex */}
      {shouldDisplayFunctional ? (
        <TwitterCardWithCustomWidth
          style={{ maxWidth: "700px", margin: "auto" }}
        />
      ) : null}
      <br /> <br />
      {/* ClassComponent ex */}
      {shouldDisplayClass ? (
        <div style={{ maxWidth: "700px", margin: "auto" }}>
          <h4 style={{ textAlign: "center" }}>
            &#x02022; Twitter Card with Class Component
          </h4>

          <TwitterCardClass {...data} id={0} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
