const mainconatiner = document.querySelector("#root");

const relectElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit Google"
};

function customeRender(reactelement, container) {
    /*
        const domElement = document.createElement(reactelement.type);
        domElement.innerHTML = relectElement.children;
        domElement.setAttribute("href", relectElement.props.href);
        domElement.setAttribute("target", relectElement.props.target);
        container.appendChild(domElement);
    */

    const domElement = document.createElement(reactelement.type);
    domElement.innerHTML = relectElement.children;

    for (const prop in relectElement.props) {
        if (prop === "children") {
            continue;
        }

        domElement.setAttribute(prop, reactelement.props[prop]);
    }

    container.append(domElement);

}

customeRender(relectElement, mainconatiner);