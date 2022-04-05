import React, {FC} from "react";
import {Collapse} from "antd";

import CallsGrid from "../../../../modules/CallsGrid/CallsGrid";
import ChatsGrid from "../../../../modules/ChatsGrid/ChatsGrid";
import EmailsGrid from "../../../../modules/EmailsGrid/EmailsGrid";

const SeparateData: FC = () => {
    return (
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
    )
};

SeparateData.displayName = "SeparateData";

export default SeparateData;
