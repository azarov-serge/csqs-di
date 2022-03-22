import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import {EDataStatus} from "../../constants/loadData";
import {ICall} from "../../globalTypes";


export interface State {
    calls: ICall[];
    status: EDataStatus;
    error: string;
}

export const initialState: State = {
    calls: [],
    status: EDataStatus.INITIALED,
    error: "",
};

const getCalls = createAction("calls/getCalls");

export const callsSlice = createSlice({
    name: "calls",
    initialState,
    reducers: {
        setCalls(state, { payload }: PayloadAction<ICall[]>) {
            state.calls = payload;
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

export const { reducer } = callsSlice;

export const actions = {
    getCalls,
    ...callsSlice.actions,
};
