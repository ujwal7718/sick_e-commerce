import Image from 'next/image'
import React from 'react'

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCard = ({img , title, desc, rating , price}) => {
    const generateRating = (rating) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex text-yellow-500">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
        case 2:
        return (
          <div className="flex text-yellow-500">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex text-yellow-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex text-yellow-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex text-yellow-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        ); 
    }
};
  return (
    <div>
        <div>
            <Image src={img} width={200} height={300} alt='title'/>
        </div>

        <div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <div>{generateRating(rating)}</div>

            <div>
                ${price}
                <del>${parseInt(price) + 50}.00</del>
            </div>
        </div>
    </div>
  );
}

export default ProductCard