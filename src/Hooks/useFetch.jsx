import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(null);
  const [error, seterror] = useState(null);

  const productData = async () => {
    setloading(true);
    try {   
      const res = await axios.get(url);
      setdata(res.data);
      seterror(null);
    } catch (error) {
      seterror(error.message);
      setdata(null);
    }
    setloading(false);
  };
  useEffect(() => {
    productData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
