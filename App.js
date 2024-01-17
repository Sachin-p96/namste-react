 const heading = React.createElement("div",{id:"parent"},[React.createElement("div",{id: "child1"},[React.createElement("h1",{},"iam an h1 in child1"),React.createElement("h2",{},"iam an h2 in child 1")]),
 React.createElement("div",{id: "child2"},[React.createElement("h1",{},"iam an h1 in child 2"),React.createElement("h2",{},"iam an h2 in child2")])]);
 console.log(heading);
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(heading);
