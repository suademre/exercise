import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (endpoints: string) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3005/${endpoints}`);
      setData(res.data);
    };
    fetchData();
  }, [endpoints]);
  return { data };
};

export default useFetchData;
