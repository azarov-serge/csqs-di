import { all } from "redux-saga/effects";

import {watchCalls} from "./calls/saga";
import {watchChats} from "./chats/saga";
import {watchEmails} from "./emails/saga";

export default function* rootSaga() {
    yield all([
        watchCalls(),
        watchChats(),
        watchEmails(),
    ]);
}
