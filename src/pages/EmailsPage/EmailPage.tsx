import React, { FC } from "react";
import {Typography} from "antd";
import EmailsGrid from "../../modules/EmailsGrid/EmailsGrid";

const EmailPage: FC = () => {
    return (
        <section>
            <Typography.Title level={2}>Emails</Typography.Title>
            <EmailsGrid/>
        </section>
    )
};

EmailPage.displayName = "EmailPage";

export default EmailPage;
