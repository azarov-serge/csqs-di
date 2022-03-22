import React, {FC} from "react";
import {Alert, Spin} from "antd";

import {DataLoaderProps} from "./types";
import {EDataStatus} from "../../constants/loadData";

const DataLoader: FC<DataLoaderProps> = (props) => {
    const {status, error = "", children} = props;

    if (status === EDataStatus.FAILED) {
        return (
            <Alert
                type="error"
                message="Error load data"
                description={error}
            />
        );
    }

    if(status === EDataStatus.LOADING) {
        return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Spin size="large" />
            </div>
        );
    }

    return <>{children}</>;
};

DataLoader.displayName = "DataLoader";

export default DataLoader;
