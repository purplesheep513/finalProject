import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import matching, { matchSaga } from "./matching";
<<<<<<< HEAD
import user, { userSaga } from "./user";
import auth, {authSaga} from "./auth";
const rootReducer = combineReducers({ 
    matching,
    loading,
    user,
    auth
});

export function* rootSaga() {
    yield all([matchSaga(),authSaga(),userSaga()]);
=======
import badList, { badListSagaPostsSaga } from './badList';

const rootReducer = combineReducers({ 
    matching,
    loading,
    badList
});

export function* rootSaga() {
    yield all([matchSaga(), badListSagaPostsSaga()]);
>>>>>>> 86620a90621484fa700c072b39bdb9e394f4d138
}

export default rootReducer;
