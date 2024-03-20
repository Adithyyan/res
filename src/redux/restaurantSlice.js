import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//api call using Thunk
export const fetchResataurant = createAsyncThunk('restaurantList/fetchResataurant',()=>{  //To create Thunk
    const result = axios.get('/restaurant.json').then(response=>response.data.restaurants)
    console.log(result);
    return result
})

const restaurantSlice = createSlice({
   name:'restaurantList',
   initialState: {
    loading:false, //pending
    allResataurant:[],//resolve
    searchRestaurant : [],
    error:""//reject
   },
   extraReducers: (builder)=>{
          builder.addCase(fetchResataurant.pending,(state)=>{
            state.loading = true
          })
          builder.addCase(fetchResataurant.fulfilled,(state,action)=>{
            state.loading = false
            state.allResataurant = action.payload
            state.searchRestaurant = action.payload
            state.error = ""
          })
          builder.addCase(fetchResataurant.rejected,(state,action)=>{
            state.loading = false
            state.allResataurant = ""
            state.error = action.error.message
          })
   },

   reducers : {
    search : (state , action)=>{
    state.allResataurant =  state.searchRestaurant.filter(item =>item.neighborhood.toLowerCase().includes(action.payload))
    }
   }


})

export const {search} = restaurantSlice.actions

export default restaurantSlice.reducer



//thunk accept an action type string and a function that retrns a promise and genrates a thunk that despatches pending/fullfilled/rejected action type based on that promise

//thunk is not part of the slice its an seperate method in toolkit

//builder holds the value/response from the Thunk