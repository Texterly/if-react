/* eslint-disable */
import { createStore } from "redux";
import rootReducer from "./root Reducer";
import initialState from "./initialState";
import {persistStore, persistReducer} from "redux-persist";
import LocalStorage from 'redux-persist/lib/storage'

window.__REDUX_DEVTOOLS_EXTENSION__ = function () {
    return undefined;
}
const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__()

const persistConfig = {
    key: 'root',
    storage: LocalStorage,
    blacklist: [],
    whitelist: ['user'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(
    persistedReducer,
    initialState,
    devtoolsExtension)

export const persistor = persistStore(store)

export default store