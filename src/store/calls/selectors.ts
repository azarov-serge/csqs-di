
import { createSelector } from "@reduxjs/toolkit";
import { State } from "../store";
import {State as CallsState} from "./slice";


const selectSelf = (state: State) => state.calls;

export const selectCallsStatus = createSelector(
    selectSelf,
    (state: CallsState) => state.status
);

export const selectCalls = createSelector(
    selectSelf,
    (state: CallsState) => state.calls
);


export const selectCallsError = createSelector(
    selectSelf,
    (state: CallsState) => state.error
);

