import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Information:</h1>
            <div>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <nav>Allie Platchek</nav>
                <nav>Hello World!</nav>
                <div>
                    <Button onClick={() => console.log("Hello World!")}>
                        Log Hello World
                    </Button>
                </div>
                <img
                    src="https://preview.redd.it/c59oy4qtgp851.jpg?auto=webp&s=95d3791ea5086fe95febe35e258dfa83c98a2c1a"
                    alt="A picture of three highland cows in a field of grass"
                />
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    List of some things:
                                    <ol>
                                        <li>First thing</li>
                                        <li>Second thing</li>
                                        <li>Another thing</li>
                                        <div className="App-rectangle"></div>
                                    </ol>
                                </div>
                            </Col>
                            <Col>
                                <nav>This is a second column</nav>
                                <nav>Here is some more text</nav>
                                <nav>And a little bit more text</nav>
                                <nav>Below is a red rectangle</nav>
                                <div className="App-rectangle"></div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default App;
