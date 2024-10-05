import { useEffect, useState } from "react";
import { addToLSCart, getStoredCart, removeFromLS } from "../../utilities/localstorage";
import Bottle from "../Bottle/Bottle";
import Cart from "../Cart/Cart";
import './Bottles.css';

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, []);


    // Load cart from local storage
    useEffect(() => {
        if(bottles.length) {
            const storedCart = getStoredCart();
            // console.log(storedCart);

            const saveCart = [];

            for(const id of storedCart) {
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle) {
                    saveCart.push(bottle);
                }
            }

            // console.log('saved cart: ', saveCart);
            setCart(saveCart);
        }
    }, [bottles])


    const handleAddToCart = (bottle) => {
        const updatedCart = [...cart, bottle];
        setCart(updatedCart);
        addToLSCart(bottle.id);
    } 


    const handleRemoveFromCart = (id) => {
        // Visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);

        // remove from LS
        removeFromLS(id);
    }

    return (
        <div>
            <h2>Bottles Here: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id} 
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>

        </div>
    );
};

export default Bottles;