import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state));
        },
        deleteFromCart(state, action) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(state));
            }
        },
        incrementQuantity(state, action) {
            const index = state.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state[index].quantity++;
                localStorage.setItem('cart', JSON.stringify(state));
            }
        },
        decrementQuantity(state, action) {
            const index = state.findIndex(item => item.id === action.payload);
            if (index !== -1 && state[index].quantity > 1) {
                state[index].quantity--;
                localStorage.setItem('cart', JSON.stringify(state));
            }
        },
        clearCart(state) {
            state = [];
            localStorage.removeItem('cart');
            return state;
        },
    },
});

export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

