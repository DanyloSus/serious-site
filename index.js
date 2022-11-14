'use strict';

const body = document.getElementById("body");

function Header() {
    return (
        <header id="header">
            <h1>Very serious site <img src="img/serious.png" /></h1>
        </header>
    );
}

function Main1() {
    return (
        <section>
            <h2>Lorem ipsum</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </section>
    );
}
function Main2() {
    return (
        <section>
            <h2>Lorem ipsum</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua.
            </p>
        </section>
    );
}
function Main3() {
    return (
        <section>
            <h2>Lorem ipsum</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua.
            </p>
        </section>
    );
}

function Body() {
    return (
        <div>
            <Header></Header>
            <div id="main">
                <Main1></Main1>
                <Main2></Main2>
                <Main3></Main3>
            </div>
        </div>
    );
}

ReactDOM.render(<Body />, body);