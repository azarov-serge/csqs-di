import {call, put, takeEvery} from "redux-saga/effects";
import {SagaIterator} from "@redux-saga/core";

import {EDataStatus} from "../../constants/loadData";
import container from "../../containers/global.containers";
import {CallsService} from "../../services/CallsService";
import {actions} from "./slice";
import {ICall} from "../../globalTypes";

export function* getCallsWorker(): SagaIterator {
    try {
        const callsService = container.get(CallsService);

        yield put(actions.setStatus(EDataStatus.LOADING));

        const response = yield call(callsService.getCalls);
        const result = response.map((item: ICall) => ({key: item.id, ...item}));

        yield put(actions.setCalls(result));
        yield put(actions.setStatus(EDataStatus.SUCCESSED));
    } catch (error) {
        const message = `Error load calls. ${String(error)}`;

        yield put(actions.setStatus(EDataStatus.FAILED));
        yield put(actions.setError(message));
    }
}

export function* watchCalls(): SagaIterator {
    yield takeEvery(actions.getCalls.type, getCallsWorker);
}
