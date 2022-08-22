import { createSlice } from '@reduxjs/toolkit';
import { allCategory, createProduct, getProductUser } from '../asyncAction/product';

const initialState = {
    resultCategories: {},
    errorMsg: null,
    successMsg: null,
    resultProduct: {}
};

export const product = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(allCategory.pending, (state)=> {
            state.errorMsg = null;
            state.successMsg = null;
        }),
        build.addCase(allCategory.fulfilled, (state, action)=>{
            state.resultCategories = action.payload.result;
            state.errorMsg = action.payload.errorMsg;
            state.successMsg = action.payload.message;
        }),
        build.addCase(createProduct.pending, (state)=> {
            state.errorMsg = null;
            state.successMsg = null;
        }),
        build.addCase(createProduct.fulfilled, (state, action)=> {
            state.resultProduct = action.payload.result;
            state.errorMsg = action.payload.errorMsg;
            state.successMsg = action.payload.successMsg;  
        }),
        build.addCase(getProductUser.pending, (state) => {
            state.errorMsg = null;
            state.successMsg = null;
        }),
        build.addCase(getProductUser.fulfilled, (state, action) => {
            state.resultProduct = action.payload.result;
            state.errorMsg = action.payload.errorMsg;
            state.successMsg = action.payload.message;
        });
    }
});

export {allCategory, createProduct, getProductUser};
export default product.reducer;