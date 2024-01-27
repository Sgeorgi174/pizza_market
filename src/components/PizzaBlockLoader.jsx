import React from "react";
import ContentLoader from "react-content-loader";

export const PizzaBlockLoader = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="135" r="125" />
    <rect x="0" y="271" rx="15" ry="15" width="280" height="27" />
    <rect x="0" y="309" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="410" rx="10" ry="10" width="90" height="45" />
    <rect x="121" y="410" rx="25" ry="25" width="155" height="45" />
  </ContentLoader>
);
