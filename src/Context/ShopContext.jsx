import React, { useState } from "react";
import all_product from "../Components/Assets/all_product";
import { createContext } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
return cart;       {/* здесь возвращаем cart - объект, в котором значения всех ключей равны нулю:   0: 0, 1: 0, 2: 0, 3: 0 ... 36: 0}  */}
}

const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(getDefaultCart())    
       {/* т.к. getDefaultCart() возвращает cart, то cartItems принимает значение cart */} 

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1 }))
    }


    const getTotalCartAmount = () => {
        let totalAmount = 0;                 {/*это функция показывает общую сумма товаров в корзине */}
        for (const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=> product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }     
        } 
        return totalAmount; 
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems) {        {/*это функция показывает количество товаров на иконке cart сверху справа */}
            if(cartItems[item]>0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
} 


export default ShopContextProvider;