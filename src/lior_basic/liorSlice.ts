import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Animal } from "./Animal";
import { fetchData } from "./liorAPI";
import { RootState } from "../app/store";


export interface liorState {
    animals : Animal[]
}

const initialState: liorState = {
    animals : []
}

export const getDataAsync = createAsyncThunk(
    'animal/fetchData',
    async () =>  {
        const response = await fetchData();
        return response.data;
    }
);


export const animalSlice = createSlice({
    name: 'animal',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
            builder
              .addCase(getDataAsync.fulfilled, (state, action) => {
                state.animals = action.payload
                console.log(action.payload);
            })

          }

    });

    export default animalSlice.reducer;
  

