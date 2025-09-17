import {type FC, useState} from "react";
import type {IProduct} from "../../models/IProduct.tsx";
import "./ProductStyle.css"
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
    rating
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
      <p>#{tags[0]}, #{tags[1]}</p>
      <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="modal">
          <svg height="200" viewBox="0 0 200 200" width="200" onClick={() => setOpen(false)}>
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <p>Description: {description}</p>
          <p>Create: {meta.createdAt}</p>
          <p>Update: {meta.updatedAt}</p>
          <p>Code: {meta.barcode}</p>
          <img src={meta.qrCode} alt="qrCode"/>
          <p>Warranty: {warrantyInformation}</p>
          <p>Shipping: {shippingInformation}</p>
          <p>Availability: {availabilityStatus}</p>
        </div>
      </div>

    </div>
  );
};