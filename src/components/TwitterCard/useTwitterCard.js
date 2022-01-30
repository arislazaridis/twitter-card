import { useState, useEffect, useCallback } from "react";

function useTwitterCard({ id }) {
  const [cardData, setCardData] = useState({});

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://fake-tweets-api.herokuapp.com/posts/${id}`
      );
      const data = await response.json();

      localStorage.setItem(`post_${id}`, JSON.stringify(data));

      setCardData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem(`post_${id}`));

    if (!dataFromLocalStorage) {
      fetchData();
    } else {
      setCardData(dataFromLocalStorage);
    }
  }, [fetchData, id]);

  return {
    cardData,
    loading,
    error,
    fetchData,
  };
}

export default useTwitterCard;
