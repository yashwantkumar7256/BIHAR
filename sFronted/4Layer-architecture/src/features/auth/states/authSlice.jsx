import { createSlice } from "@reduxjs/toolkit";

const authSlice= createSlice({
    name:"auth",
    initialState:{
     user:null,
     isAuthenticated:false,
     isLoding:true,
    },
    reducers:{
        addUser: (state,action)=>{
         state.user=action.payload;
         state.isAuthenticated=false;
        },
        removeUser:(state,action)=>{
           state.user=false;
           state.isAuthenticated=false;
            
        }
    }
     
})
export const {addUser,removeUser}=authSlice.actions;
export default authSlice.reducer;