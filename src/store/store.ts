import {combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";

import {reducer as callsReducer} from "./calls/slice";
import {reducer as chatsReducer} from "./chats/slice";
import {reducer as emailsReducer} from "./emails/slice";
import rootSaga from "./rootSaga";

const reducer = combineReducers({
    calls: callsReducer,
    chats: chatsReducer,
    emails: emailsReducer,
});

const sagaMiddleware = createSagaMiddleware();

export type State = ReturnType<typeof reducer>;

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
