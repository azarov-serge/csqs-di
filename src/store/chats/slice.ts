import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import {EDataStatus} from "../../constants/loadData";
import {IChat} from "../../globalTypes";


export interface State {
    chats: IChat[];
    status: EDataStatus;
    error: string;
}

export const initialState: State = {
    chats: [],
    status: EDataStatus.INITIALED,
    error: "",
};

const getChats = createAction("chats/getChats");

export const chatsSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {
        setChats(state, { payload }: PayloadAction<IChat[]>) {
            state.chats = payload;
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

export const { reducer } = chatsSlice;

export const actions = {
    getChats,
    ...chatsSlice.actions,
};
