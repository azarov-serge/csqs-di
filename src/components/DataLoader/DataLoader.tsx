import React, {FC} from "react";
import {Alert, Spin} from "antd";

import {DataLoaderProps} from "./types";

const DataLoader: FC<DataLoaderProps> = (props) => {
    const {isFetching, isFetched, error = "", children} = props;

    if ((Array.isArray(error) && error.length) || (error && !Array.isArray(error))) {
        return (
            <>
                {Array.isArray(error) ?
                    error.map((item) => (
                        <Alert
                            key={item}
                            type="error"
                            message="Error load data"
                            description={error}
                        />
                    )) : (
                        <Alert
                            type="error"
                            message="Error load data"
                            description={error}
                        />
                    )}
            </>
        );
    }

    if (isFetching) {
        return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Spin size="large"/>
            </div>
        );
    }

    if (isFetched) {
        return <>{children}</>;
    }

    return <>{children}</>;
};

DataLoader.displayName = "DataLoader";

export default DataLoader;
