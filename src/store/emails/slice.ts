import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import {EDataStatus} from "../../constants/loadData";
import {IEmail} from "../../globalTypes";


export interface State {
    emails: IEmail[];
    status: EDataStatus;
    error: string;
}

export const initialState: State = {
    emails: [],
    status: EDataStatus.INITIALED,
    error: "",
};

const getEmails = createAction("emails/getEmails");

export const emailsSlice = createSlice({
    name: "emails",
    initialState,
    reducers: {
        setEmails(state, { payload }: PayloadAction<IEmail[]>) {
            state.emails = payload;
            state.error = "";
        },
        setStatus(state, { payload }: PayloadAction<EDataStatus>) {
            state.status = payload;
        },
        setError(state, { payload }: PayloadAction<string>) {
            state.error = payload;
        },
        clear(state) {
            state = { ...initialState };
        },
    },
});

export const { reducer } = emailsSlice;

export const actions = {
    getEmails,
    ...emailsSlice.actions,
};
