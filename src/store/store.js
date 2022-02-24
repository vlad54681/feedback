import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
	// applyMiddleware,
	combineReducers, createStore
} from "redux";
import appReducer from './app-reducer';
//import thunkMiddleware from "redux-thunk";

const persistConfig = {
	key: 'root',
	storage,
}

let rootReducer = combineReducers({
	appPage: appReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer)


export const persistor = persistStore(store)

//, applyMiddleware(thunkMiddleware)
window.store = store;

export default store;