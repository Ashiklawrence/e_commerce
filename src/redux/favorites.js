import { createSlice } from "@reduxjs/toolkit";
const InitialState  = {
    favoriteList : []
}

const favorites = createSlice(
    {
        name:'favorites',
        initialState: InitialState,
        reducers : {
            addtofav : (state,action)=>{
                state.favoriteList.push(action.payload)
                console.log(state.favoriteList)
            },
            removefromfav :(state,action)=>{
                console.log('removed')
                const newList = state.favoriteList.filter((obj)=>(obj.id!==action.payload))
                // state.favoriteList.splice(newList)
                // console.log(JSON.stringify(newList))
                state.favoriteList = newList
            }
        }

        
    }
)

export const {addtofav,removefromfav} = favorites.actions;
export default favorites.reducer