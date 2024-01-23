import React from 'react'
import FilterSection from '../components/FilterSection';
import { SingleProduct } from '../components/SingleProduct';
import { useCart } from '../context/Context'

const ProductListing = () => {
  const {
    cartState: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery }
  } = useCart();
  const transformedProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) => {
        return sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      })
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.rating >= byRating
      );
    }

    if(searchQuery) {
      sortedProducts = sortedProducts.filter((prod)=>
      prod.name.toLowerCase().includes(searchQuery));
    }

    return sortedProducts
  }
  return (
    <div className="product-listing-component">
      <FilterSection />
      <div className="product-container">
        {
          transformedProducts().map((prod) => {
            return (
              <SingleProduct product={prod} key={prod.id} />
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductListing