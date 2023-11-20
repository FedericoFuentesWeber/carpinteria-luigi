import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    amountOfItems: 0
});

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]); //Array of products
    const [amountOfItems, setAmountOfItems] = useState(0); //Amount of items bought
    const [total, setTotal] = useState(0); //Amount to pay
    

    const addItem = (item, amount) => {
        const existingProduct = cart.find(prod => prod.item.id === item.id);

        if(!existingProduct) {
            setCart(prev => [...prev, {item, amount}]);
            setAmountOfItems(prev => prev + amount);
            setTotal(prev => prev + (item.price * amount));
        } else {
            const updatedCart = cart.map( prod => {
                if(prod.item.id === item.id) {
                    return {...prod, amount: prod.amount + amount};
                } else {
                    return prod;
                }
            })
            setCart(updatedCart);
            setAmountOfItems(prev => prev + amount);
            setTotal(prev => prev + (item.price * amount));
        }
    }

    const removeItem = (id) => {
        const itemToRemove = cart.find(prod => prod.item.id === id);
        const updatedCart = cart.filter(prod => prod.item.id !== id);

        setCart(updatedCart);
        setAmountOfItems(prev => prev - itemToRemove.amount);
        setTotal(prev => prev - (itemToRemove.item.price * itemToRemove.amount));
    }

    const emptyCart = () => {
        setCart([]);
        setAmountOfItems(0);
        setTotal(0);
    }

  return (
    <CartContext.Provider value={{cart, amountOfItems, total, addItem, removeItem, emptyCart}}>
        {children}
    </CartContext.Provider>
  )
}
