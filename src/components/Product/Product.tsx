import {type FC, useState} from "react";
import type {IProduct} from "../../models/IProduct.tsx";
import "../../styles/ProductStyle.css"
import {Review} from "../Review/Review.tsx";

type PropsProduct = {
  product: IProduct
}

export const Product:FC<PropsProduct> = (
    {product:{
    title,
    brand,
    description,
    price,
    discountPercentage,
    meta,
    thumbnail,
    tags,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    rating,
    reviews,
    images,
    dimensions
  }}) => {
  const [open, setOpen] = useState(false)
  return (
    <div className='product'>
      <h2>{title}</h2>
      <h3>Brand: {brand}</h3>
      <img src={thumbnail} alt={title}/>
      <p>Price: {price}$</p>
      <p>Discount: {discountPercentage}$</p>
      <p>⭐{rating}</p>
      <button
        type="button"
        onClick={() => setOpen(true)}
      >
        More info
      </button>
      <div className="tags">
        {
          tags.map((tag, index) => (
            <p key={index}>#{tag}</p>
          ))
        }
      </div>
      <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="modal">
          <svg height="200" viewBox="0 0 200 200" width="200" onClick={() => setOpen(false)}>
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <div className="images_list">
            {
              images.map((image, index) => (
                <img className="img_list" src={image} key={index}
                  alt={title}
                />
              ))
            }
          </div>
          <div className="info_list">
            <p>Code: {meta.barcode}</p>
            <img className="code_img" src={meta.qrCode} alt="qrCode"/>
            <p>Create: {meta.createdAt}</p>
            <p>Update: {meta.updatedAt}</p>
            <p>Description: {description}</p>
            <p>Warranty: {warrantyInformation}</p>
            <p>Shipping: {shippingInformation}</p>
            <p>Availability: {availabilityStatus}</p>
                <ul>
                  <li>Width: {dimensions.width}</li>
                  <li>Height: {dimensions.height}</li>
                  <li>Depth: {dimensions.depth}</li>
                </ul>
          </div>

          <div className="reviews_list">
            <hr/>
            {
              reviews.map((review, index) => <Review review={review} key={index}/>)
            }
          </div>
        </div>
      </div>

    </div>
  );
};