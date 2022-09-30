import { combineReducers } from "redux";
import {reducer} from "./transactionReducer"
import { reducerIncome } from "./income";
import { reducerExpense } from "./expense";

const reducers = combineReducers({
    transaction: reducer,
    income: reducerIncome,
    expense: reducerExpense
})

export default reducers;