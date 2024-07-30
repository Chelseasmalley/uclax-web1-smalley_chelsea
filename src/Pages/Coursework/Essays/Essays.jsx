import styled from "styled-components";
import SingleEssay from "./SingleEssay";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Q1: What is the difference between HTML, CSS, and JS?`}
            >
                <ul>
                    <li>
                        {" "}
                        HTML creates basic structure, CSS adds style, and JS
                        adds interactiveness{" "}
                    </li>

                    <li>
                        {" "}
                        HTML: The Building blocks of the internet. HTML is a
                        “Mark-up” language. It uses tags to annotate types of
                        content so that you don't have to format every item
                        separately
                    </li>

                    <li>
                        {" "}
                        CSS is a way to shape and enhance the blocks -JSS is the
                        most complex. JS takes all the previous work and makes
                        it interactive and functionally complex{" "}
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q2: What is the difference between git and github?`}
            >
                <ul>
                    <li>
                        {" "}
                        They are both version control systems, and allow the
                        ability to track and manage changes to software code. If
                        someone makes a mistake in the code, it is easy to look
                        back at where the mistake was made and fix it quickly
                        without disrupting the the team.{" "}
                    </li>
                    <li>
                        Git is a Distributed Version Control System. Every
                        developer gets their own copy of the repository and the
                        full history of the changes. Git is open source and the
                        "Ultimate Un-Do button." Git is installed locally on
                        your system.
                    </li>
                    <li>
                        On the other hand, GitHub is a cloud-based Git
                        repository hosting service. It makes it a lot easier for
                        people to use Git for version control.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`What is the difference between jquery and react?`}
            >
                <ul>
                    <li>
                        JQuery is a Javascript library that makes it much easier
                        to use JavaScript on yout website by wrapping tasks into
                        smaller lines of code. Developers can save time while
                        using it. JQuery uses a Document Object Model.
                    </li>
                    <li>
                        React is a Javascript-based User Interface Library.
                        React uses a Virtual Document Object Model, It allows
                        users to reuse UI components
                    </li>
                    <li>
                        jQuery is excellent for straight-forward web pages,
                        while React is better for larger scale projects.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`What is the difference between front-end and back-end development?`}
            >
                <ul>
                    <li>
                        Front end developers employ the graphics that users
                        interact with, like buttons, checkboxes, etc. This is
                        the part of a website that users see and interact with.
                        Front end uses HTML, CSS, and JS
                    </li>
                    <li>
                        Back end is the data, infrastructure, and security that
                        make your application work; the "server side," that
                        retrieves data. Programs used by back-end developers are
                        NodeJS, Python, Django, and many more.
                    </li>
                </ul>
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
