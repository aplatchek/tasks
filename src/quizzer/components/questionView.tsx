import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { Question } from "../interfaces/question";
import { RecordControlsQuestion } from "./RecordControls";
import { QuestionEditor } from "./questionEditor";
import { Button, Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function QuestionView({
    question,
    deleteQuestion,
    editQuestion
}: {
    question: Question;
    deleteQuestion: (id: number) => void;
    editQuestion: (id: number, newQuestion: Question) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [answer, setAnswer] = useState<string>("");

    function changeEditing() {
        setEditing(!editing);
    }

    function updateAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
    }

    return editing ? (
        <QuestionEditor
            changeEditing={changeEditing}
            question={question}
            editQuestion={editQuestion}
            deleteQuestion={deleteQuestion}
        ></QuestionEditor>
    ) : (
        <Container>
            <Row>
                <Col>
                    <p>
                        {question.name} {" - "} {question.points} {" points"}
                    </p>
                    <p>{question.body}</p>
                    <Col>
                        <RecordControlsQuestion
                            changeEditing={changeEditing}
                        ></RecordControlsQuestion>
                    </Col>
                    {question.type === "short_answer_question" ? (
                        <p>
                            <Form.Group controlId="giveAttempts">
                                <Form.Label>Answer:</Form.Label>
                                <Form.Control
                                    value={answer}
                                    onChange={updateAnswer}
                                />
                            </Form.Group>
                            <div>
                                {" "}
                                {answer === question.expected ? "✔️" : "❌"}.
                            </div>
                        </p>
                    ) : (
                        <p>
                            <Form.Group controlId="formAnswer">
                                <Form.Label>Choose your answer:</Form.Label>
                                <Form.Select
                                    value={answer}
                                    onChange={updateAnswer}
                                >
                                    {question.options.map((choice: string) => (
                                        <option key={choice} value={choice}>
                                            {choice}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            {answer === question.expected ? "✔️" : "❌"}
                        </p>
                    )}
                </Col>
            </Row>
            <Row></Row>
        </Container>
    );
}
