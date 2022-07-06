import React from "react";
import Proptypes from "prop-types";

const Category = ({ image, name }) => {
  return (
    <div className="carr">
      <img src={image} alt="picture_carousel" />
      <div className="carr__name">
        <p>{name}</p>
      </div>
    </div>
  );
};
Category.propTypes = {
  image: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
};

export default Category;
