import React, {FC} from "react";
import "./Header.css"


import HeaderMenu from "./components/HeaderMenu/HeaderMenu";

const Header: FC = () => {
    return (
        <header className="Header">
            <nav>
                <HeaderMenu />
            </nav>
        </header>
    )
}

Header.displayName = "Header";

export default Header;
