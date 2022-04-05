import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Table} from "antd";

import DataLoader from "../../components/DataLoader/DataLoader";
import {actions} from "../../store/emails/slice";
import {selectEmailsError, selectEmailsStatus, selectEmails} from "../../store/emails/selectors";
import {columns} from "./constants/columns";
import {EDataStatus} from "../../constants/loadData";

const EmailsGrid: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getEmails());
    }, [dispatch]);

    const status = useSelector(selectEmailsStatus);
    const error = useSelector(selectEmailsError);
    const emails = useSelector(selectEmails);

    return (
        <DataLoader isFetching={status === EDataStatus.LOADING} isFetched={status === EDataStatus.SUCCESSED} error={error}>
            <Table columns={columns} dataSource={emails}/>
        </DataLoader>
    )
};

EmailsGrid.displayName = "EmailsGrid";

export default EmailsGrid;
