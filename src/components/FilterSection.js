import React from 'react'
import { useCart } from '../context/Context';
import Rating from './Rating';

const Filters = () => {
  const { productState: { byStock, byFastDelivery, sort,  byRating, searchQuery }, productDispatch } = useCart();
  return (
    <div className="filters">
      <h6 className="title text-lg-size">Filter Products</h6>
      <span>
        <input type="radio" id="ascending" name="group-1" 
        onChange={()=>{
          productDispatch({
            type:"SORT_BY_PRICE",
            payload: "lowToHigh"
          })
        }}
        checked={sort === "lowToHigh" ? true : false}
        />
        <label for="ascending"> Price : Low to High</label>
      </span>
      <span>
        <input type="radio" id="descending" name="group-1" 
        onChange={()=>{
          productDispatch({
            type:"SORT_BY_PRICE",
            payload: "highToLow"
          })
        }}
        checked={sort === "highToLow" ? true : false}
        />
        <label for="descending"> Price High to Low</label>
      </span>
      <span>
        <input type="checkbox" id="out_of_stock" name="group-1" 
        checked={byStock}
        onChange={()=>{
          productDispatch({
            type: "FILTER_BY_STOCK"
          })
        }}
        />
        <label for="out_of_stock"> Include out of Stock</label>
      </span>
      <span>
        <input type="checkbox" id="fast_delivery" name="group-1" 
        checked={byFastDelivery}
        onChange={()=>{
          productDispatch({
            type: "FILTER_BY_DELIVERY"
          })
        }}
        />
        <label for="fast_delivery"> Fast Delivery</label>
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) => {
            productDispatch({
              type: "FILTER_BY_RATING",
              payload : i+1
            })
          }}
          style={{ cursor: "pointer" }}
        />
      </span>
      <input className="search-filter" placeholder="Search"
      value={searchQuery}
      onChange={(e)=>{
        productDispatch({
          type: "FILTER_BY_SEARCH",
          payload: e.target.value
        })
      }}
      />
      <button className="btn btn-primary-solid"
      onClick={()=>{
        productDispatch({
          type: "CLEAR_FILTERS"
        })
      }}
      >Clear Filters</button>
    </div>
  )
}

export default Filters