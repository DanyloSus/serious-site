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
            <h2 align="center">Lorem ipsum</h2>
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
            <h2 align="center">Lorem ipsum</h2>
            <p>
                Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Tincidunt tortor 
                aliquam nulla facilisi cras. Volutpat blandit aliquam etiam erat velit scelerisque in dictum 
                non. Aliquam malesuada bibendum arcu vitae. Massa ultricies mi quis hendrerit dolor magna. In 
                ante metus dictum at tempor commodo ullamcorper a lacus. Tristique senectus et netus et 
                malesuada fames ac turpis. Varius duis at consectetur lorem donec massa. Neque ornare aenean 
                euismod elementum nisi quis eleifend quam adipiscing. Porttitor rhoncus dolor purus non enim 
                praesent elementum.
            </p>
        </section>
    );
}
function Main3() {
    return (
        <section>
            <h2 align="center">Lorem ipsum</h2>
            <p>
                Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Scelerisque fermentum dui 
                faucibus in ornare quam viverra orci. Quam pellentesque nec nam aliquam sem et tortor. 
                Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Nisl nunc mi ipsum faucibus 
                vitae. Pellentesque elit ullamcorper dignissim cras. Nibh sit amet commodo nulla. Ante metus 
                dictum at tempor commodo. Pulvinar elementum integer enim neque volutpat ac tincidunt. 
                Maecenas sed enim ut sem viverra aliquet eget sit.
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