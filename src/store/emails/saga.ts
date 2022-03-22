import {call, put, takeEvery} from "redux-saga/effects";
import {SagaIterator} from "@redux-saga/core";

import {EDataStatus} from "../../constants/loadData";
import container from "../../containers/global.containers";
import {EmailsService} from "../../services/EmailsService";
import {actions} from "./slice";
import {IEmail} from "../../globalTypes";

export function* getEmailsWorker(): SagaIterator {
    try {
        const emailsService = container.get(EmailsService);

        yield put(actions.setStatus(EDataStatus.LOADING));

        const response = yield call(emailsService.getEmails);
        const result = response.map((item: IEmail) => ({key: item.id, ...item}));

        yield put(actions.setEmails(result));
        yield put(actions.setStatus(EDataStatus.SUCCESSED));
    } catch (error) {
        const message = `Error load emails. ${String(error)}`

        yield put(actions.setStatus(EDataStatus.FAILED));
        yield put(actions.setError(message));
    }
}

export function* watchEmails(): SagaIterator {
    yield takeEvery(actions.getEmails.type, getEmailsWorker);
}
