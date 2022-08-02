"use strict";

// JSX-js xml
var app = {
    title: "Todo decisions",
    subtitle: "things to focus on",
    Option: ["baseball", "soccer", "tennis", "golf"]
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.Option.length > 0 ? "here are your options" : "no options here"
    ),
    React.createElement(
        "p",
        null,
        " I like Kenya"
    ),
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            "Nairobi"
        ),
        React.createElement(
            "li",
            null,
            "Malindi"
        )
    )
);
var count = 0;

var addOne = function addOne() {
    console.log("addone");
};
var minusOne = function minusOne() {
    console.log("minusone");
};
var reset = function reset() {
    console.log("reset");
};
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "count",
        count
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: minusOne },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "reset"
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
