import React, { useEffect, useState } from "react";
import "./loadMore.css";
import Loader from "./Loader";

type Item = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

type Products = {
  total: number;
  skip: number;
  limit: number;
  products: Array<Item>;
};

const fetchProducts = async (skip: number) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price,thumbnail`,
  );
  return await res.json();
};

export const LoadMore = () => {
  const [skip, setSkip] = useState(0);
  const [productData, setProductData] = useState<Array<Item>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchProducts(skip).then((data) => {
      setProductData(data.products);
      setLoading(false);
    });
  }, []);

  if (!productData?.length) return <div>Loading</div>;

  return (
    <>
      {loading && <Loader />}

      <div className="load-container">
        <div className="items-container">
          {productData?.map((item) => {
            return (
              <div className="load-item">
                <h3>{item.title}</h3>
                <div>{item.price} $</div>
                <img width={200} height={200} src={item.thumbnail} alt="" />
              </div>
            );
          })}
        </div>
        <button
          disabled={productData.length >= 100}
          onClick={() => {
            setLoading(true);
            fetchProducts(skip + 10).then((data: Products) => {
              setProductData([...productData, ...data.products]);
              setSkip(skip + 10);
              setLoading(false);
            });
          }}
        >
          Load 10 more
        </button>
        <div>Total {productData.length} products</div>
      </div>
    </>
  );
};
