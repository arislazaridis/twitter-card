import { useState, useEffect, useRef } from "react";
import CardHeader from "./components/CardHeader/CardHeader";
import CardBody from "./components/CardBody/CardBody";
import CardFooter from "./components/CardFooter/CardFooter";
import "./CardConteiner.css";
import useTwitterCard from "./useTwitterCard.js";

function CardConteiner(props) {
  const { dateCreated, commentUrl, urlTarget, urlLabel, title, subtitle, id } =
    props;

  const { cardData, error, loading, fetchData } = useTwitterCard({ id });

  const [ color, setColor ] = useState('#fff');

  const containerRef = useRef();

  useEffect(() => {
    containerRef.current.style.backgroundColor = color;
  }, [color]);

  if (error) {
    return (
      <div>
        <h5>Something went wrong...</h5>
        <button onClick={fetchData}>Try again</button>
      </div>
    );
  }

  return (
    <>
      <input type="color" onChange={(e) => setColor(e.target.value)}/>
      <div className="container" ref={containerRef}>
        <CardHeader author={cardData?.author} />
        <CardBody
          urlTarget={urlTarget}
          urlLabel={urlLabel}
          title={title}
          subtitle={subtitle}
          message={cardData?.message}
          loading={loading}
          image={cardData?.image}
        />
        <CardFooter
          dateCreated={dateCreated}
          commentUrl={commentUrl}
          likes={cardData?.likes}
          comments={cardData?.comments}
        />
      </div>
    </>
  );
}

export default CardConteiner;
