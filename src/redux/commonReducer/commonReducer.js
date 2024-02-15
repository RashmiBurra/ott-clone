import {combineReducers} from "redux";
import { ottReducer } from "../../ott-reducer/ottReducer";


export const commonReducer=combineReducers({
    ott:ottReducer,
})