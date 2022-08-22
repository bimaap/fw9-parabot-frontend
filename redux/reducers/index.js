import { combineReducers } from '@reduxjs/toolkit';

import getCheckouts from './getCheckouts';
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
    getCheckouts,
    product
});

export default reducer;