/*
<div id="parent">
<div id="child">
<h1>Child</h1>
<h2>second Child</h2>
</div>
div id="child 2">
<h1>Child</h1>
<h2>second Child</h2>
</div>

</div>
*/
const parent=React.createElement(
    "div",
{id:"parent"},
[React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I am a child first"),
    React.createElement("h2",{},"I am a child second")
    ]),
    React.createElement("div",{id:"child 2"},[
        React.createElement("h1",{},"I am a child first"),
        React.createElement("h2",{},"I am a child second")
        ])
    ])
    console.log(parent)
;//JSX
ReactDOM.render(parent, document.getElementById('root')  );;


const root=ReactDOM.createRoot(document.getElementById('header'))
root.render(heading)