import React, { FC } from "react";
import {Typography} from "antd";

import ChatsGrid from "../../modules/ChatsGrid/ChatsGrid";

const ChatsPage: FC = () => {
    return (
        <section>
            <Typography.Title level={2}>Chats</Typography.Title>
            <ChatsGrid/>
        </section>
    )
};

ChatsPage.displayName = "ChatsPage";

export default ChatsPage;
