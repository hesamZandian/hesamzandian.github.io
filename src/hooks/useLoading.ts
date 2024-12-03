import { useEffect, useState } from 'react';

const useHome = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return { loading };
};
export default useHome;
