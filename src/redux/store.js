import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import guestHomeSliceReducer from "./slices/guestHomeSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        guestHome: guestHomeSliceReducer
    }
});
export { store }