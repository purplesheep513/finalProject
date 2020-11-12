import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import matching, { matchSaga } from "./matching";
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
}

export default rootReducer;
