import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Table} from "antd";

import DataLoader from "../../components/DataLoader/DataLoader";
import {actions} from "../../store/calls/slice";
import {selectCallsError, selectCallsStatus, selectCalls} from "../../store/calls/selectors";
import {columns} from "./constants/columns";
import IocProvider from "../../ioc/IocProvider";
import container from "../../containers/global.containers";
import {store} from "../../store/store";

const CallsGrid: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getCalls());
    }, [dispatch]);

    const status = useSelector(selectCallsStatus);
    const error = useSelector(selectCallsError);
    const calls = useSelector(selectCalls);

    return (
        <DataLoader status={status} error={error}>
            <Table columns={columns} dataSource={calls}/>
        </DataLoader>
    )
};

CallsGrid.displayName = "CallsGrid";

const CallsGridModule = () => {
    return (
        <IocProvider container={container} store={store}>
            <CallsGrid />
        </IocProvider>
    );
};

export default CallsGridModule;

