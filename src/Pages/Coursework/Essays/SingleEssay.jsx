import styled from "styled-components";
import PropTypes from "prop-types";

const SingleEssay = ({ question, children }) => {
    return (
        <SingleEssayStyled>
            <h3>{question}</h3>
            <div className="content">{children}</div>
        </SingleEssayStyled>
    );
};

export default SingleEssay;

//prop types
SingleEssay.propTypes = {
    question: PropTypes.string.isRequired,
    chidlren: PropTypes.any,
};

const SingleEssayStyled = styled.div`
    margin: 20px 0px;
    border: solid 2px #ca1f6c;

    h3 {
        background-color: #ca1f6c;
        color: white;
        font-size: 20px;
        padding: 10px 20px;
        margin: 0px;
    }

    .content {
        padding: 20px;
    }
`;
