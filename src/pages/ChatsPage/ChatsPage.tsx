import React, { FC } from "react";
import {Typography} from "antd";

const ChatsPage: FC = () => {
    return (
        <section>
            <Typography.Title level={2}>Chats</Typography.Title>
        </section>
    )
};

ChatsPage.displayName = "ChatsPage";

export default ChatsPage;
