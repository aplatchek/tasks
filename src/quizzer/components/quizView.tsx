import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { RecordControlsQuiz } from "./RecordControls";
import { QuizViewer } from "./quizViewer";
import { Question } from "../interfaces/question";

export function QuizView({
    quiz,
    deleteQuiz,
    viewQuiz,
    editQuestion,
    viewing,
    setViewing
}: {
    quiz: Quiz;
    deleteQuiz: (id: number) => void;
    viewQuiz: (id: number, newQuiz: Quiz) => void;
    editQuestion: (id: number, newQuestion: Question) => void;
    viewing: boolean;
    setViewing: (viewing: boolean) => void;
}): JSX.Element {
    function changeViewing() {
        setViewing(!viewing);
    }

    return viewing ? (
        <QuizViewer
            changeView={changeViewing}
            quiz={quiz}
            viewQuiz={viewQuiz}
            deleteQuiz={deleteQuiz}
            editQuestion={editQuestion}
            viewing={viewing}
        ></QuizViewer>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>
                        {quiz.title} {" - "} {quiz.numberQuestions}{" "}
                        {" questions"}
                    </h3>
                    <p>{quiz.description}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <RecordControlsQuiz
                        changeViewing={changeViewing}
                    ></RecordControlsQuiz>
                </Col>
            </Row>
        </Container>
    );
}
