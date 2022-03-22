import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Table} from "antd";

import DataLoader from "../../components/DataLoader/DataLoader";
import {actions} from "../../store/chats/slice";
import {selectChatsError, selectChatsStatus, selectChats} from "../../store/chats/selectors";
import IocProvider from "../../ioc/IocProvider";
import container from "../../containers/global.containers";
import {store} from "../../store/store";
import {columns} from "./constants/columns";

const ChatsGrid: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getChats());
    }, []);

    const status = useSelector(selectChatsStatus);
    const error = useSelector(selectChatsError);
    const chats = useSelector(selectChats);

    return (
        <DataLoader status={status} error={error}>
            <Table columns={columns} dataSource={chats}/>
        </DataLoader>
    )
};

ChatsGrid.displayName = "ChatsGrid";

export default () => {
    return (
        <IocProvider container={container} store={store}>
            <ChatsGrid />
        </IocProvider>
    );
};
