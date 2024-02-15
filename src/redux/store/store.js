import {createStore} from "redux";
import { commonReducer } from "../commonReducer/commonReducer";


export const ottStore=createStore(commonReducer,{});
