import { createContext, useContext, useReducer } from "react";
import projectData from "../constants/ProjectData.js";
import { cartReducerFunc, productReducerFunc } from "./Reducers.js";
// console.log(pdata);
const cartContext = createContext();

const useCart = () => useContext(cartContext);

const CartProvider = ({children}) =>{
    const productsData = projectData.data ;
    const [cartState, cartDispatch] = useReducer(cartReducerFunc,{
        products : productsData,
        cart : [],
        wishlist :[]
    });
    const [productState, productDispatch] = useReducer(productReducerFunc,{
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery :""
    });
    return(
        <cartContext.Provider value={{cartState,cartDispatch, productState, productDispatch}} >
            {children}
        </cartContext.Provider>
    )
}
export { useCart,CartProvider} ;