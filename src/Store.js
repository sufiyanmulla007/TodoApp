import { createStore } from "redux";
import rootreducers from "./Redux/reducer/Main";
const store=createStore(
    rootreducers
);
export default store;