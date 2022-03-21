interface IRouteItem {
    path: string;
    name: string;
}

export const routes = {
    homePage: {
        path: "/",
        name: "homePage",
    },
    callsPage: {
        path: "/calls",
        name: "callsPage",
    },
    chatsPage: {
        path: "/chats",
        name: "chatsPage",
    },
    emailsPage: {
        path: "/emails/",
        name: "emailsPage",
    },
};
