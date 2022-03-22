import React, {FC} from "react";
import {Collapse, Typography} from "antd";

import CallsGrid from "../../modules/CallsGrid/CallsGrid";
import ChatsGrid from "../../modules/ChatsGrid/ChatsGrid";
import EmailsGrid from "../../modules/EmailsGrid/EmailsGrid";

const HomePage: FC = () => {
    return (
        <section>
            <Typography.Title level={2}>Home page</Typography.Title>
            <Collapse>
                <Collapse.Panel key="panel-calls" header="Calls">
                    <CallsGrid/>
                </Collapse.Panel>
                <Collapse.Panel key="panel-chats" header="Chats">
                    <ChatsGrid/>
                </Collapse.Panel>
                <Collapse.Panel key="panel-emails" header="E-mails">
                    <EmailsGrid/>
                </Collapse.Panel>
            </Collapse>
        </section>
    )
};

HomePage.displayName = "HomePage";

export default HomePage;
