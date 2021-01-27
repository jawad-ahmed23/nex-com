import React from "react";
import { CardList } from "../../components";
import { Carousel } from "../../components";

function Home() {
  return (
    <div>
      <Carousel />
      <CardList title="Snacks" />
    </div>
  );
}

export default Home;
