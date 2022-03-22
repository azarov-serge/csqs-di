
import { createSelector } from "@reduxjs/toolkit";
import { State } from "../store";
import {State as ChatsState} from "./slice";


const selectSelf = (state: State) => state.chats;

export const selectChatsStatus = createSelector(
    selectSelf,
    (state: ChatsState) => state.status
);

export const selectChats = createSelector(
    selectSelf,
    (state: ChatsState) => state.chats
);


export const selectChatsError = createSelector(
    selectSelf,
    (state: ChatsState) => state.error
);

