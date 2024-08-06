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
                question={`In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?
`}
            >
                <ul>
                    <li>
                        -Absolute hyperlinks are complete addresses that contain
                        all the elements of a URL -only method that allows you
                        to link to files found on another domain (or subdomain)
                    </li>
                    <li>
                        relative to the current domain or location allows your
                        code to be more transferrable, more flexible only
                        putting the part of the path which is Relative to the
                        current path
                    </li>
                    <li>
                        subset of relative hyperlinks in which all the links are
                        assumed to start from the root folder (domain name) of
                        the site allows you to transfer your code to any domain
                        in the way that you could with Relative Paths, but
                        removes the confusion of finding the file when you have
                        complex directory structures
                    </li>
                </ul>
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
