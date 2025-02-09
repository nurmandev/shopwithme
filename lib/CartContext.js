import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  // Load cart from localStorage when component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCartProducts(JSON.parse(storedCart) || []);
      }
    }
  }, []);

  // Save cart to localStorage whenever cartProducts change
  useEffect(() => {
    if (typeof window !== "undefined" && cartProducts?.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  function addProduct(productId) {
    setCartProducts((prev) => [...prev, productId]);
  }

  function removeProduct(productId) {
    setCartProducts((prev) => prev.filter((id) => id !== productId));
  }

  function clearCart() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    setCartProducts([]);
  }

  return (
    <CartContext.Provider
      value={{ cartProducts, addProduct, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
