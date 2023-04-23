import React from "react";

function Links() {
    return (
        <div id="Links">
            <h3>Links</h3>
            <GithubLink text="https://github.com/liza" />
            <LinkedinLink text="https://linkedin.com/in/liza/" />
        </div>
    )
}

function GithubLink(props) {
    console.log(props);
    return <a href={props.text}>{props.text}</a>;
}

function LinkedinLink(props) {
    console.log(props);
    return <a href={props.text}>{props.text}</a>;
}



export default Links;