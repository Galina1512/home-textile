import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const timeId = new Date().getTime();
            
            state.cartItems.push({
                id: timeId,
                prodId: action.payload.prod.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity*action.payload.prod.price
            })
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
            cartItem => cartItem.id !== action.payload.cartItemId
            )
        }, 
        removeAll: (state, action) =>{
            state.cartItems = []
        }
    }
})
export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems)=> {
        return cartItems.totalPrice + total
    }, 0)
}
    export const getCartItems = state => state.cart.cartItems;
    export const { addItemToCart, removeItemFromCart, removeAll } = cartSlice.actions;
    export default cartSlice.reducer;
