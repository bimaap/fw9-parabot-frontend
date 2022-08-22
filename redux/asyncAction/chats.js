import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../helpers/http';
import qs from 'qs';

export const sending = createAsyncThunk('/chat/sending',async({chat_id,content,receiver_id,sender_id})=>{
    const result = {};
    console.log(chat_id,content,receiver_id,sender_id);
    try{
        const send = qs.stringify({chat_id,content,receiver_id,sender_id});
        const {data} = await axios.post('/chat/content',send);
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
        const {data} = await axios.get(`/chat/content/${id}`);
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

export const getAllChat = createAsyncThunk('/chats/allChat',async()=>{
    const result = {};
    try{
        const {data} = await axios.get('/chats');
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