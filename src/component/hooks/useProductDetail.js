import { useEffect, useState } from "react";

const useProductDetails = (_id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = ` https://grocery-shop2.herokuapp.com/products/${_id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [_id]);

  return [product, setProduct];
};

export default useProductDetails;
