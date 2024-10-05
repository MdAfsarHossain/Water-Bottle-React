const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');

    if(storedCartString) {
        return JSON.parse(storedCartString);
    }

    return [];
}


const saveCartToLS = (cart) => {
    const cartStringField = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringField);
}


const addToLSCart = (productId) => {
    const cart = getStoredCart();
    // const product = products.find((product) => product.id === productId);
    cart.push(productId);

    // Save to local storage
    saveCartToLS(cart);
}


const removeFromLS = (id) => {
    const cart = getStoredCart();
    // Remove every id
    const remaining = cart.filter(idx => idx != id);
    saveCartToLS(remaining);
}


export { addToLSCart, getStoredCart, removeFromLS };

