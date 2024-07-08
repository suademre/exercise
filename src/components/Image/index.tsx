import React from "react";
import { StyledImage } from "./styles";
import { IImage } from "./types";

const Image = ({ src, alt, radius, width, height, onClick }: IImage) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      radius={radius}
      onClick={onClick}
    ></StyledImage>
  );
};

export default Image;
