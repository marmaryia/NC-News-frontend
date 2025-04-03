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
      .catch((error) => {
        if (error.response.status === 404)
          setError({
            code: 404,
            msg: "We could not find what you are looking for",
          });
      })
      .finally(() => setIsLoading(false));
  }, [...args]);

  return { data, setData, isLoading, error };
}
