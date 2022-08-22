import axios from 'axios';
import Cookies from 'js-cookie';

export default http3 = () => {
    const headers = {};
    const token = Cookies.get('token');
    if(token) {
        headers.autorization = `Bearer ${token}`;
    }
    return axios.create({
        headers,
        baseURL: proccess.env.BACK_END_URL
    });
};