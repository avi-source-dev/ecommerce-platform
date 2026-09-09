import { createContext } from "react";
import { useState } from "react";

const ShopContext = createContext();
export default ShopContext;

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
   
  // Increase Quantity in cart
  function increaseQuantity(itemId) {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === itemId
          ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
          : cartItem
      )
    );
  }

  // Decrease Quantity in cart
  function decreaseQuantity(itemId) {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === itemId
          ? {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          }
          : cartItem
      )
    );
  }


  // Add to card functionlity
  function addToCard(item) {

    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      // If Product is already Exist in Card
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
            : cartItem,
        );
      }
      // How new product push into card
      return [
        ...prevCart,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          emoji: item.emoji,
          quantity: 1,
        },
      ];
    });
  }


  return (
    <ShopContext.Provider value={{ addToCard, cart, increaseQuantity, decreaseQuantity }}>
      {children}
    </ShopContext.Provider>
  );
}
