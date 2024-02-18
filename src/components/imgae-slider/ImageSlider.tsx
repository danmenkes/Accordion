import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./styles.css";

type ImageType = {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
};

type Props = {
  url: string;
  limit: number;
};

const fetchImages = async (url: string, limit: number) => {
  const res = await fetch(`${url}?page=1&limit=${limit}`);
  return await res.json();
};

export const ImageSlider = ({ url, limit }: Props) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    fetchImages(url, limit)
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((e) => {
        setMessage(e.message);
        setLoading(false);
      });
  }, [url, limit]);

  if (loading) return <div>Loading</div>;

  if (message) return <div>{message}</div>;

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={() => {
          setCurrentSlide(
            currentSlide === 0 ? images.length - 1 : currentSlide - 1,
          );
        }}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((image: ImageType, index) => {
            return (
              <img
                key={image.id}
                src={image.download_url}
                alt=""
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
                width="100"
              />
            );
          })
        : null}
      <BsArrowRightCircleFill
        onClick={() => {
          setCurrentSlide(
            currentSlide === images.length - 1 ? 0 : currentSlide + 1,
          );
        }}
        className="arrow arrow-right"
      />

      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index: number) => {
              return (
                <button
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator inactive-current-indicator"
                  }
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                  }}
                />
              );
            })
          : null}
      </span>
    </div>
  );
};
