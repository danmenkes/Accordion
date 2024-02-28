import { useEffect, useState } from "react";

import "./ScrollIndicator.css";

type ProductType = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

type DataType = {
  limit: number;
  products: ProductType[];
  skip: number;
  total: number;
};

type Props = {
  url: string;
};

const fetchData = async (url: string) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (e: any) {
    console.log(e.message);
  }
};

const ScrollIndicator = ({ url }: Props) => {
  const [data, setData] = useState<ProductType[] | []>([]);
  const [scrollPrecentage, setScrollPrecentage] = useState(0);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    const scrolled = document.body.scrollTop || scrollTop;

    const height = scrollHeight - clientHeight;
    setScrollPrecentage(Math.floor((scrolled / height) * 100));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetchData(url).then((data) => {
      setData(data.products);
    });
  }, [url]);

  return (
    <div>
      <div className="top-container">
        <h1>Custom scroll indicator</h1>
        <div className="scroll-progress">
          <div
            className="current-progress"
            style={{ width: `${scrollPrecentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data?.length
          ? data.map((item) => {
              const { title, id } = item;
              return <div key={id}>{title}</div>;
            })
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
