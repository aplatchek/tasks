import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { RecordControls } from "./RecordControls";
import { QuizEditor } from "./quizEditor";

export function QuizView({
    quiz,
    deleteQuiz,
    editQuiz
}: {
    quiz: Quiz;
    deleteQuiz: (id: string) => void;
    editQuiz: (id: string, newQuiz: Quiz) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }

    return editing ? (
        <QuizEditor
            changeEditing={changeEditing}
            quiz={quiz}
            editQuiz={editQuiz}
            deleteQuiz={deleteQuiz}
        ></QuizEditor>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>{quiz.title}</h3>
                    <RecordControls
                        changeEditing={changeEditing}
                    ></RecordControls>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{quiz.description}</p>
                </Col>
            </Row>
        </Container>
    );
}
