import styled from "styled-components";
import sunimg from "./images/sun.png";
import moonimg from "./images/moon.png";
import { useState } from "react";

const SunAndMoon = () => {
    const [imgSrc, imgSrcupdate] = useState(moonimg);

    const changeToSun = () => {
        imgSrcupdate(sunimg);
    };
    const changeToMoon = () => {
        imgSrcupdate(moonimg);
    };

    // HTML Layer
    return (
        <SunAndMoonStyled>
            <h2>Sun And Moon</h2>
            <img
                src={imgSrc}
                onMouseEnter={changeToSun}
                onMouseLeave={changeToMoon}
            />
        </SunAndMoonStyled>
    );
};
export default SunAndMoon;

// CSS Layer

const SunAndMoonStyled = styled.div`
    text-align: center;

    h2 {
        font-size: 30px;
        color: teal;
    }

    img {
        display: block;
        margin: 30px auto;
        padding: 20px;
        border: solid 20px teal;
        background: #0b4444;
    }
`;
