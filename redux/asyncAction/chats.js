import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../helpers/http';

export const sending = createAsyncThunk('/chat/sending',async({token,text})=>{
    const result = {};
    try{ 
        const {data} = await axios.post('/chat/content',{text});
        result.text = data.content;
        return result;
    }
    catch(e){
        console.log(e);
        result.error = e;
        return result;
    }
});
