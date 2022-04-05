import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Table} from "antd";

import DataLoader from "../../../../components/DataLoader/DataLoader";

import {columns} from "./constants/columns";

import {actions as callsActions} from "../../../../store/calls/slice";
import {actions as chatsActions} from "../../../../store/chats/slice";
import {actions as emailsActions} from "../../../../store/emails/slice";

import {selectCallsStatus, selectCalls, selectCallsError} from "../../../../store/calls/selectors";
import {selectChatsStatus, selectChats, selectChatsError} from "../../../../store/chats/selectors";
import {selectEmailsStatus, selectEmails, selectEmailsError} from "../../../../store/emails/selectors";
import {EDataStatus} from "../../../../constants/loadData";

const AllData: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(callsActions.getCalls());
        dispatch(chatsActions.getChats());
        dispatch(emailsActions.getEmails());
    }, [dispatch]);

    const callsStatus = useSelector(selectCallsStatus);
    const callsError = useSelector(selectCallsError);
    const calls = useSelector(selectCalls);

    const chatsStatus = useSelector(selectChatsStatus);
    const chatsError = useSelector(selectChatsError);
    const chats = useSelector(selectChats);

    const emailsStatus = useSelector(selectEmailsStatus);
    const emailsError = useSelector(selectEmailsError);
    const emails = useSelector(selectEmails);

    const isFetching = callsStatus === EDataStatus.LOADING || chatsStatus === EDataStatus.LOADING || emailsStatus === EDataStatus.LOADING;
    const isFetched = callsStatus === EDataStatus.SUCCESSED && chatsStatus === EDataStatus.SUCCESSED && emailsStatus === EDataStatus.SUCCESSED;

    const errors = [];

    if (callsError) {
        errors.push(callsError);
    }

    if (chatsError) {
        errors.push(chatsError);
    }

    if (emailsError) {
        errors.push(emailsError);
    }

    return (
        <DataLoader
            isFetched={isFetched}
            isFetching={isFetching}
            error={errors}
        >
            <Table columns={columns} dataSource={[...calls, ...chats, ...emails]}/>
        </DataLoader>
    );
};

AllData.displayName = "CallsGrid";

export default AllData;

