import {createSlice} from '@reduxjs/toolkit';
import { getAllChat,sending,createChat,getChatting } from '../asyncAction/chats';

const initialState = {
    wrapper:'',
    conversation:'',
    selected:'',
    errormsg:'',
    succesmsg:''
};

export const chats = createSlice({
    name:'chats',
    initialState,
    reducers:{
        resetmsg:(state)=>{
            state.errormsg='';
            state.succesmsg='';
        },
        costumeSelected:(state,action)=>{
            state.selected=action.payload;
        }
    },
    extraReducers:(build)=>{
        build.addCase(getAllChat.pending,(state)=>{
            state.succesmsg=null;
            state.errormsg=null;
        });
        build.addCase(getAllChat.fulfilled,(state,action)=>{
            state.wrapper=action.payload?.allchat;
        });
        build.addCase(getChatting.pending,(state)=>{
            state.succesmsg=null;
            state.errormsg=null;
        });
        build.addCase(getChatting.fulfilled,(state,action)=>{
            state.conversation=action.payload?.chat;
        });
    }
});

export {getAllChat,getChatting,sending,createChat};
export const {resetmsg,costumeSelected} = chats.actions;
export default chats.reducer;