import {create} from "zustand";

export const useCartStore = create((set) => ({
  cart: [],  
  cartLength: 0,  

  
  addToCart: (product) => set((state) => {
    const updatedCart = [...state.cart, product];  
    return {
      cart: updatedCart,
      cartLength: updatedCart.length, 
    };
  }),

  removeFromCart: (product) => set((state) => {
    const updatedCart = state.cart.filter((item) => item.productID !== product.productID);
    return {
      cart: updatedCart,
      cartLength: updatedCart.length,
    };
  }),

  
  loadCart: () => set((state) => ({
    cartLength: state.cart.length,  
  }))
}));
