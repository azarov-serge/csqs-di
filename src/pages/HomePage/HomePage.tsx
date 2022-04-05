import React, {FC} from "react";
import {Typography, Tabs} from "antd";

import AllData from "./components/AllData/AllData";
import SeparateData from "./components/SeparateData/SeparateData";

const { TabPane } = Tabs;

const HomePage: FC = () => {
    return (
        <section>
            <Typography.Title level={2}>Home page</Typography.Title>
            <Tabs defaultActiveKey="1">
                <TabPane tab="All data" key="all-data">
                    <AllData />
                </TabPane>
                <TabPane tab="Separate data" key="separate-data">
                    <SeparateData />
                </TabPane>
            </Tabs>
        </section>
    )
};

HomePage.displayName = "HomePage";

export default HomePage;
