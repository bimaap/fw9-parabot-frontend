import { combineReducers } from "@reduxjs/toolkit";

import getCheckouts from "./getCheckouts"

const reducer = combineReducers({
    getCheckouts
});

export default reducer;