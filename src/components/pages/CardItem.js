import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({path,label,src,text}) => {
  return (
    <div>
      <li className="cart__item" >
        <Link className="cart__item__link" to={path}>
          <figure className="cart__item__pic-wrap" data-category={label}>
            <img src={src} alt="" className="cart__item__img" />
          </figure>
          <div className="cart__item__info">
            <h5 className="cart__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </div>
  );
};

export default CardItem;
