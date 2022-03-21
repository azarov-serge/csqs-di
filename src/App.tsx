import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom";
import {Layout} from "antd";

import HomePage from "./pages/HomePage/HomePage";
import CallsPage from "./pages/CallsPage/CallsPage";
import ChatsPage from "./pages/ChatsPage/ChatsPage";
import EmailPage from "./pages/EmailsPage/EmailPage";
import Header from "./components/Header/Header"
import {routes} from "./routes/routes";
// TODO: For test. Will remove
import dataBase from "./mock/dataBase";

const App: FC = () => {
    console.log(dataBase)

    return (
        <Layout>
            <Header />
            <Layout.Content style={{minHeight: "650px", padding: "15px 25px"}}>
                <Routes>
                    <Route path={routes.homePage.path} element={<HomePage />} />
                    <Route path={routes.callsPage.path} element={<CallsPage />} />
                    <Route path={routes.chatsPage.path} element={<ChatsPage />} />
                    <Route path={routes.emailsPage.path} element={<EmailPage />} />
                </Routes>
            </Layout.Content>
        </Layout>
    );
}

App.displayName = "App";

export default App;
