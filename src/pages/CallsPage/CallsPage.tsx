import React, { FC } from "react";
import {Typography} from "antd";

import CallsGrid from "../../modules/CallsGrid/CallsGrid";

const CallsPage: FC = () => {
    return (
        <section>
            <Typography.Title level={2}>Calls</Typography.Title>
            <CallsGrid/>
        </section>
    )
};

CallsPage.displayName = "CallsPage";

export default CallsPage;
