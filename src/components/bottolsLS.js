const storedCartlist = () => {
  const storedCart = localStorage.getItem("cart");
  let cart = [];
  if (storedCart) {
    cart = JSON.parse(storedCart);
    return cart;
  }
  return cart;
};

const setLS = (id) => {
  const storedCart = storedCartlist();
  storedCart.push(id)
  localStorage.setItem('cart', JSON.stringify(storedCart))
};

export {setLS, storedCartlist}