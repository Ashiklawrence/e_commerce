import { createSlice } from "@reduxjs/toolkit";
const InitialState = {
    cartList :[]
}

const cart = createSlice(
    {
        name:'cart',
        initialState: InitialState,
        reducers : {
            addtocart :(state,action)=>{
                state.cartList.push(action.payload)
                console.log(JSON.stringify(state.cartList))

            },
            removefromcart :(state,action)=>{

            }
        }
    }
)
export const {addtocart,removefromcart} = cart.actions;
export default cart.reducer