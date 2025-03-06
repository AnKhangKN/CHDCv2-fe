import React from "react";
import ProductCardList from "../../../components/user/ProductCardList/ProductCardList";
import SportCardList from "../../../components/user/SportCardList/SportCardList";
import { Link } from "react-router-dom";
import DiscoverCardList from "../../../components/user/DiscoverCardList/DiscoverCardList";

const HomePage = () => {
  return (
    <div style={{ padding: "0px 48px" }}>
      <ProductCardList />
      <SportCardList />
      <div className="sale">
        <div>Sale Up 40%</div>
        <div>
          <Link>See More</Link>
        </div>
      </div>
      <DiscoverCardList />
    </div>
  );
};

export default HomePage;
