import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Table} from "antd";

import DataLoader from "../../components/DataLoader/DataLoader";
import {actions} from "../../store/emails/slice";
import {selectEmailsError, selectEmailsStatus, selectEmails} from "../../store/emails/selectors";
import IocProvider from "../../ioc/IocProvider";
import container from "../../containers/global.containers";
import {store} from "../../store/store";
import {columns} from "./constants/columns";

const EmailsGrid: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getEmails());
    }, []);

    const status = useSelector(selectEmailsStatus);
    const error = useSelector(selectEmailsError);
    const emails = useSelector(selectEmails);

    return (
        <DataLoader status={status} error={error}>
            <Table columns={columns} dataSource={emails}/>
        </DataLoader>
    )
};

EmailsGrid.displayName = "EmailsGrid";

export default () => {
    return (
        <IocProvider container={container} store={store}>
            <EmailsGrid />
        </IocProvider>
    );
};
