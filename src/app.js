// JSX-js xml
let app = {
    title: "Todo decisions",
    subtitle: "things to focus on",
    Option: ["baseball", "soccer", "tennis", "golf",],
};

let template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>
            {app.Option.length> 0 ? "here are your options": "no options here"}
        </p>
        <p> I like Kenya</p>
        <ul>
            <li>Nairobi</li>
            <li>Malindi</li>
        </ul>
     </div>
);
let count = 0;

const addOne = () => {
    console.log("addone");
};
const minusOne = () => {
    console.log("minusone");
};
const reset = () => {
    console.log("reset");
};
let templateTwo = (
 
<div>
        <h1>count{count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={addOne}>reset</button>
    </div>
    );

    let appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);