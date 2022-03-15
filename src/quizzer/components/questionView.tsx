import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { Question } from "../interfaces/question";
import { RecordControlsQuestion } from "./RecordControls";
import { QuestionEditor } from "./questionEditor";

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

    function changeEditing() {
        setEditing(!editing);
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
                </Col>
            </Row>
            <Row>
                <Col>
                    <RecordControlsQuestion
                        changeEditing={changeEditing}
                    ></RecordControlsQuestion>
                </Col>
            </Row>
        </Container>
    );
}
