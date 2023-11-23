import { useEffect, useState } from "react";

export const useAxios = ({ requestFunc }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleData() {
    try {
      setLoading(true);
      let respons = await requestFunc();
      setData(respons);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleData();
  }, []);

  return { data, error, loading };

};
