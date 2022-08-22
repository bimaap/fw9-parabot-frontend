import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from 'qs';
import {http3} from '../../helpers/http3';

export const postCheckoutAuth = createAsyncThunk('post/checkout', async (props) => {
    const result = {};
    const values = {
        name: props[1].name,
        phone_number: props[1].phone,
        address: props[1].address,
        payment_id: 1
    }

    console.log(values);
    try {
        const send = qs.stringify(values);
        const {data} = await http3().post('/checkouts/', send);
        console.log(data);
        result.successMsg = data.message;
        return data;
    } catch (error) {
        console.log(error);
        result.errorMsg = error.response.data.message;
        return result;
    }
});