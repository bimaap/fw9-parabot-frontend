import { combineReducers } from '@reduxjs/toolkit';

import getCheckouts from './getCheckouts';
import chats from './chats';
import auth from './auth';
import storage from 'redux-persist/lib/storage';
import {persistReducer,persistStore} from 'redux-persist';

const authPersistConfig = {
    key:'auth',
    storage
};

const persistedAuthReducer = persistReducer(authPersistConfig,auth);

const reducer = combineReducers({
    auth:persistedAuthReducer,
    chats,
    getCheckouts
});

export default reducer;