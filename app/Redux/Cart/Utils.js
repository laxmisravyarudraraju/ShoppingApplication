export const addItemToCart = (cartItems, newItem) => {
  if (cartItems.find((item) => item.id === newItem.id)) {
    return cartItems.map((item) => {
      return item.id === newItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }
  return [...cartItems, { ...newItem, quantity: 1 }];
};
