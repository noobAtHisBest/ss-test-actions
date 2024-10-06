import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
    id: string
    title: string,
    price: number,
    quantity: number
}

export type CartState = {
    items: CartItem[]
};

const initialState: CartState = {
    items: []
}

export const cartSLice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{
            id: string,
            title: string,
            price: number
        }>) => {
            const { items } = state;
            const { id, title, price } = action.payload;
            const ifItemPresent = items.findIndex(item => item.id === id)
            if(ifItemPresent >= 0) {
                const item = items[ifItemPresent];
                item.quantity++;
                items[ifItemPresent] = item;
            } else {
                state.items.push({
                    id,
                    title,
                    price,
                    quantity: 1
                })
            }
        },
        removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
            const { items } = state;
            const { id } = action.payload;
            const indexAt = items.findIndex(item => item.id === id);
            if(items[indexAt].quantity > 1) {
                const cartItem = items[indexAt];
                cartItem.quantity--;
                items[indexAt] = cartItem;
            } else {
                const filteredCart = items.filter(item => item.id !== id);
                state.items = filteredCart;
            }

        }
    }
})

export const { addToCart, removeFromCart } = cartSLice.actions;