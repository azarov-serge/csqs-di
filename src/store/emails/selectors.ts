
import { createSelector } from "@reduxjs/toolkit";
import { State } from "../store";
import {State as EmailsState} from "./slice";


const selectSelf = (state: State) => state.emails;

export const selectEmailsStatus = createSelector(
    selectSelf,
    (state: EmailsState) => state.status
);

export const selectEmails = createSelector(
    selectSelf,
    (state: EmailsState) => state.emails
);


export const selectEmailsError = createSelector(
    selectSelf,
    (state: EmailsState) => state.error
);

