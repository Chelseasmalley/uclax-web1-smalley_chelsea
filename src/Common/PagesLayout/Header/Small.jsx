import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger.jsx";

/* Components ---------------------------*/
import SiteLogo from "../SiteLogo/SiteLogo.jsx";
import MainMenu from "./MainMenu.jsx";

const Small = () => {
    const [showMenu, showMenuUpdate] = useState(false);

    const toggle = () => {
        showMenuUpdate(!showMenu);
    };

    const hideMenu = () => {
        showMenuUpdate(false);
    };

    return (
        <SmallStyled>
            <Hamburger toggle={toggle} />
            <SiteLogo />
            {showMenu && <MainMenu onClick={hideMenu} />}
        </SmallStyled>
    );
};

export default Small;

const SmallStyled = styled.div`
    display: flex;
    justify-content: center;

    .SiteLogo {
        height: 300px;
        display: flex;
        align-items: center;
        padding: 20px;
        max-width: 330px;
    }

    nav {
        position: fixed;
        left: 0px;
        top: 300px;
        right: 0px;
        bottom: 0px;

        z-index: 100;

        background-color: #859bf5;

        a {
            display: block;

            padding: 10px;
            border-bottom: solid 1px #999999;

            color: white;
            text-decoration: none;

            &:hover,
            &:active,
            &:focus {
                background-color: #859bf5;
            }
        }
    }
`;
