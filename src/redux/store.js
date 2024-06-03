import { configureStore } from "@reduxjs/toolkit";

//reducerları import et
import counterReducer from "./slices/CounterSlice";
import crudReducer from "./slices/crudSlice";

export default configureStore({
  reducer: { counterReducer, crudReducer },
});
