import { useEffect } from "react";
import { useState } from "react";

export default function useApiRequest(apiFunction, ...args) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    apiFunction(...args)
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [...args]);

  return { data, setData, isLoading, error };
}
