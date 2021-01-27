import React from "react";
import MuiCarousel from "react-material-ui-carousel";
import useStyles from "./Carousel.styles";

const carouselImgUrls = [
  "images/carousel/1.png",
  "images/carousel/2.png",
  "images/carousel/3.jpg",
  "images/carousel/4.jpg",
];

export default function Carousel() {
  const classes = useStyles();
  return (
    <>
      <MuiCarousel
        className={classes.root}
        style={{ width: "100%" }}
        stopAutoPlayOnHover
        animation="slide"
      >
        {carouselImgUrls.map((url, index) => (
          <img key={index} src={url} alt="carouselImage" width="100%" />
        ))}
      </MuiCarousel>
    </>
  );
}
