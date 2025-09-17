import {useEffect, useState} from "react";
import type {IProduct} from "../../models/IProduct.tsx";
import {loadProducts} from "../../services/api.service.ts";
import {Product} from "../Product/Product.tsx";
import "./ProductsStyle.css"


export const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  useEffect(() => {
    async function fetchProducts() {
      const allProducts = await loadProducts()
      setProducts(allProducts)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <h1>Products</h1>
      <div className='main'>

        {
          currentProducts.map(product => <Product product={product} key={product.id}/>)
        }

        <div className="pagination">
          <button onClick={handlePrev} disabled={currentPage === 1}>← Prev</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNext} disabled={currentPage === totalPages}>Next →</button>
        </div>
      </div>
    </div>
  );
};