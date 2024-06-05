import { createSlice } from "@reduxjs/toolkit";
const InitialState = {
    cartList :[],
    grandtotal : 0
}

const cart = createSlice(
    {
        name:'cart',
        initialState: InitialState,
        reducers : {
            addtocart :(state,action)=>{
                state.cartList.push({
                    ...action.payload,
                    count : 1,
                    totalprice : action.payload.price
                }
                )
                state.totalprice=action.payload.price
                state.grandtotal = 0
                state.cartList.forEach((obj)=>{
                    state.grandtotal+=parseFloat (obj.totalprice)
                })
                // console.log(action.payload.id,"=id")
                // console.log(action.payload.count,"=count")
                console.log(JSON.stringify(state.cartList))

            },
            incrementQuantity :(state,action)=>{
                const productId = action.payload
                state.cartList.forEach((item)=>{
                    if (item.id === productId)
                    {
                        item.count++;
                        const x = item.price * item.count;
                        item.totalprice = x.toFixed(2)
                        
                    }
                    
                })
                state.grandtotal = 0
                state.cartList.forEach((obj)=>{
                    state.grandtotal+=parseFloat (obj.totalprice)
                })

            },
            decrementQuantity :(state,action)=>{
                const productId = action.payload
                state.cartList.forEach((item)=>{
                    if (item.id === productId && item.count > 1)
                    {
                        item.count--
                        const x =  item.totalprice-item.price
                        item.totalprice= x.toFixed(2)
                    }
                })
                state.grandtotal = 0
                state.cartList.forEach((obj)=>{
                    state.grandtotal+=parseFloat (obj.totalprice)
                })

            },
            removefromcart :(state,action)=>{
                const productId = action.payload
                state.cartList.forEach((item)=>{
                    if (item.id === productId){
                        const newList = state.cartList.filter((obj)=>(
                            obj.id !== productId
                           
                        )
                        )
                        state.cartList = newList
                    }
                })
                state.grandtotal = 0
                state.cartList.forEach((obj)=>{
                    
                    state.grandtotal+=parseFloat(obj.totalprice)
                })

            },
            clearCart :(state,action)=>{
                console.log('Clearcart')
                state.cartList.splice(0,state.cartList.length)
            }
        }
    }
)
export const {addtocart,removefromcart,incrementQuantity,decrementQuantity,clearCart} = cart.actions;
export default cart.reducer