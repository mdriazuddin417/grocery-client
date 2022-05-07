import { useEffect, useState } from "react";

const useProductDetails = (_id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/products/${_id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [_id]);

  return [product, setProduct];
};

export default useProductDetails;
