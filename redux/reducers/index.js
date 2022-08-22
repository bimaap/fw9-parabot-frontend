import { combineReducers } from '@reduxjs/toolkit';

import getCheckouts from './getCheckouts';
import chats from './chats';
import auth from './auth';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import product from './product';

const authPersistConfig = {
    key:'auth',
    storage
};

const persistedAuthReducer = persistReducer(authPersistConfig,auth);

const reducer = combineReducers({
    auth:persistedAuthReducer,
    chats,
    getCheckouts,
    product
});

export default reducer;