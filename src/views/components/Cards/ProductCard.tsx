import React from "react";
import "./ProductCard.css";
import ButtonUI from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

interface ProductCardData {
  id: number;
  productName: string;
  price: number;
  review: number;
  location: string;
  image: any;
}

type ProductCardProps = {
  data?: ProductCardData;
  className?: string;
};

class ProductCard extends React.Component<ProductCardProps> {
  render() {
    return (
      <div className={`product-card d-inline-block ${this.props.className}`}>
        <img
          src={this.props.data?.image}
          alt=""
          style={{ width: "224px" }}
        />
        <div>
          <p className="mt-3">{this.props.data?.productName}</p>
          <h5 style={{ fontWeight: "bolder" }}>{this.props.data?.price}</h5>
          <p className="small">{this.props.data?.location}</p>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between mt-2">
          <div>
            <div className="d-flex flex-row align-items-center justify-content-between">
              {/* Render stars dynamically */}
              <FontAwesomeIcon style={{ fontSize: "10px" }} icon={faStar} />
              <FontAwesomeIcon style={{ fontSize: "10px" }} icon={faStar} />
              <FontAwesomeIcon style={{ fontSize: "10px" }} icon={faStar} />
              <FontAwesomeIcon style={{ fontSize: "10px" }} icon={faStar} />
              <FontAwesomeIcon style={{ fontSize: "10px" }} icon={faStar} />
              <small className="ml-2">4.5</small>
            </div>
          </div>
          <ButtonUI
            type="outlined"
            style={{ fontSize: "12px", padding: "4px 8px" }}
          >
            {" "}
            <FontAwesomeIcon icon={faHeart} /> Add to wishlist
          </ButtonUI>
        </div>
      </div>
    );
  }
}

export default ProductCard;
