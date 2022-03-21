import React, { FC } from "react";
import { Collapse, Typography } from "antd"

const HomePage: FC = () => {
    return (
        <section>
            <Typography.Title level={2}>Home page</Typography.Title>
            <Collapse>
                <Collapse.Panel key="panel-calls" header="Calls">
                    <p>Calls</p>
                </Collapse.Panel>
                <Collapse.Panel key="panel-chats" header="Chats">
                    <p>Chats</p>
                </Collapse.Panel>
                <Collapse.Panel key="panel-emails" header="Emails">
                    <p>Emails</p>
                </Collapse.Panel>
            </Collapse>
        </section>
    )
};

HomePage.displayName = "HomePage";

export default HomePage;
