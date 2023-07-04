import { useEffect, useState } from "react";
import { fakeFetch } from "../fakeFetch";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fakeFetch("https://example.com/api/products");
        if (response.status === 200) {
          setProducts(response.data.products);
        } else {
          setError(response.message);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>LOADING...</div>;
  }
  if (error) {
    return <div> {error} </div>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>quanities: {product.quantity}</p>
          <p>Brand: {product.brand}</p>
        </div>
      ))}
    </div>
  );
};
