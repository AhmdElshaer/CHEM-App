import { configureStore, createSlice } from '@reduxjs/toolkit';

const intialProducts = { AllProducts: []};

const ProductSlice = createSlice({
  name: 'products',
  initialState: intialProducts,
  reducers: {
    setProducts(state, action){
      state.AllProducts = action.payload;
    }
  }
})

const store = configureStore({
  reducer: { products: ProductSlice.reducer }
});

export const productActions = ProductSlice.actions;
export default store;