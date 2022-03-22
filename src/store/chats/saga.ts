import {call, put, takeEvery} from "redux-saga/effects";
import {SagaIterator} from "@redux-saga/core";

import {EDataStatus} from "../../constants/loadData";
import container from "../../containers/global.containers";
import {ChatsService} from "../../services/ChatsService";
import {actions} from "./slice";
import {IChat} from "../../globalTypes";

export function* getChatsWorker(): SagaIterator {
    try {
        const chatsService = container.get(ChatsService);

        yield put(actions.setStatus(EDataStatus.LOADING));

        const response = yield call(chatsService.getChats);
        const result = response.map((item: IChat) => ({key: item.id, ...item}));

        yield put(actions.setChats(result));
        yield put(actions.setStatus(EDataStatus.SUCCESSED));
    } catch (error) {
        const message = `Error load chats. ${String(error)}`

        yield put(actions.setStatus(EDataStatus.FAILED));
        yield put(actions.setError(message));
    }
}

export function* watchChats(): SagaIterator {
    yield takeEvery(actions.getChats.type, getChatsWorker);
}
