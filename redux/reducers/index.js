import { combineReducers } from '@reduxjs/toolkit';

import checkout from './checkout';
import chats from './chats';
import auth from './auth';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import product from './product';
import notification from './notification';

const authPersistConfig = {
    key:'auth',
    storage
};

const persistedAuthReducer = persistReducer(authPersistConfig,auth);

const reducer = combineReducers({
    auth:persistedAuthReducer,
    chats,
    notification,
    checkout,
    product
});

export default reducer;