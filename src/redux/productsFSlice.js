import { createSlice } from "@reduxjs/toolkit";

export const productsFSlice = createSlice ({
    name: 'product',
    initialState: {
        selectedCategory: ""
    },
    reducers: {
        filterCategory: (state, action) =>{
            state.selectedCategory = action.payload;
        }
    }
})
export const getSelectedCategory = state => state.product.selectedCategory;
export const { filterCategory } = productsFSlice.actions;
export default productsFSlice.reducer;