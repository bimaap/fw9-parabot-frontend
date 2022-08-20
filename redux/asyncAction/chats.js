import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../helpers/http';

export const sending = createAsyncThunk('/chat/sending',async({token,text})=>{
    const result = {};
    try{ 
        const {data} = await axios.post('/chat/content',{text});
        console.log(data);
        result.text = data.content;
        return result;
    }
    catch(e){
        console.log(e);
        result.error = e;
        return result;
    }
});

export const createChat = createAsyncThunk('chat/firstChat',async({receiver_id})=>{
    const result={};
    try{
        const {data} = await axios.post('/chats',{receiver_id});
        console.log(data);
    }
    catch(e){
        console.log(e);
    }
});

export const getChatting = createAsyncThunk('/chat/getChat',async({id})=>{
    const result = {};
    try{
        const {data} = await axios.get('/chat/content',{id});
        console.log(data);
        result.chat = data.result;
        return result;
    }
    catch(e){
        result.error=e;
        console.log(e);
        return result;
    }
});

export const getAllChat = createAsyncThunk('/chats/allChat',async({token})=>{
    const result = {};
    try{
        const {data} = await axios.get('/chat');
        console.log(data);
        result.allchat = data.result;
        return result;
    }
    catch(e){
        console.log(e);
        result.error=e;
        return result;
    }
});