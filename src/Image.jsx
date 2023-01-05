import React from "react";
import data from "./data.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./App.css";

export default function Image() {
  return (
    <div className="image-container">
      {data.map(
        (image) => (
            <LazyLoadImage
              key={Date.now() / 2 + (Math.random() + 2)}
              src={image.url}
              alt="lazy-loading-image"
              placeholderSrc={image.url.replace("w=3080", "w=250,bl-30,q-50")}
              effect="blur"
              // loading='lazy'
            />
        )
        // console.log(image.url)
      )}
    </div>
  );
}
