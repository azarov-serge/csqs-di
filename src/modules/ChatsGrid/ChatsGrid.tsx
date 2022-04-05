import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Table} from "antd";

import DataLoader from "../../components/DataLoader/DataLoader";
import {actions} from "../../store/chats/slice";
import {selectChatsError, selectChatsStatus, selectChats} from "../../store/chats/selectors";
import {columns} from "./constants/columns";
import {EDataStatus} from "../../constants/loadData";

const ChatsGrid: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getChats());
    }, [dispatch]);

    const status = useSelector(selectChatsStatus);
    const error = useSelector(selectChatsError);
    const chats = useSelector(selectChats);

    return (
        <DataLoader isFetching={status === EDataStatus.LOADING} isFetched={status === EDataStatus.SUCCESSED}error={error}>
            <Table columns={columns} dataSource={chats}/>
        </DataLoader>
    )
};

ChatsGrid.displayName = "ChatsGrid";

export default ChatsGrid;
