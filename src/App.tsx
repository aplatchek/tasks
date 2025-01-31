import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

//Quizzer imports
import { Quizzer } from "./quizzer/Quizzer";
import { Button, Col, Row, Container } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript
                </header>
                <Quizzer></Quizzer>
                <p></p>
                <h3>Old Material: </h3>
                <hr></hr>
                <CheckAnswer expectedAnswer="42"></CheckAnswer>
                <hr></hr>
                <GiveAttempts></GiveAttempts>
                <hr></hr>
                <EditMode></EditMode>
                <hr></hr>
                <ChangeColor></ChangeColor>
                <hr></hr>
                <MultipleChoiceQuestion
                    options={["a", "b", "c"]}
                    expectedAnswer="b"
                ></MultipleChoiceQuestion>
                <hr></hr>
                <DoubleHalf></DoubleHalf>
                <hr></hr>
                <ChooseTeam></ChooseTeam>
                <hr></hr>
                <ColoredBox></ColoredBox>
                <hr></hr>
                <ShoveBox></ShoveBox>
                <hr></hr>
                <Counter></Counter>
                <hr />
                <RevealAnswer></RevealAnswer>
                <hr />
                <StartAttempt></StartAttempt>
                <hr />
                <TwoDice></TwoDice>
                <hr />
                <ChangeType></ChangeType>
                <hr />
                <CycleHoliday></CycleHoliday>
            </div>
            <h3>Old Elements:</h3>
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
        </>
    );
}

export default App;
