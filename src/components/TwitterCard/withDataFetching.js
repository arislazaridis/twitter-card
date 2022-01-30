import { useEffect, useState, useCallback } from "react";

const withDataFetching = () => (WrappedComponent) => {
  return (props) => {
    const [cardData, setCardData] = useState({});

    const [loading, setLoading] = useState(0);

    const [error, setError] = useState(false);

    const fetchData = useCallback(async () => {
      setLoading((loading) => loading + 1);
      try {
        const response = await fetch(
          `https://fake-tweets-api.herokuapp.com/posts/${props.id}`
        );
        const data = await response.json();
        localStorage.setItem(`post_${props.id}`, JSON.stringify(data));

        setCardData(data);
        setLoading((loading) => loading - 1);
      } catch (error) {
        setError(true);
        setLoading((loading) => loading - 1);
      }
    }, [props.id]);

    useEffect(() => {
      const dataFromLocalStorage = JSON.parse(
        localStorage.getItem(`post_${props.id}`)
      );
      if (!dataFromLocalStorage) {
        fetchData();
      } else {
        setCardData(dataFromLocalStorage);
        return;
      }
    }, [fetchData, props.id]);
    return (
      <WrappedComponent
        {...props}
        cardData={cardData}
        loading={!!loading}
        error={error}
        fetchData={fetchData}
      />
    );
  };
};

export default withDataFetching;
