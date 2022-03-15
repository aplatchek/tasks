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
    editQuestion
}: {
    quiz: Quiz;
    deleteQuiz: (id: number) => void;
    viewQuiz: (id: number, newQuiz: Quiz) => void;
    editQuestion: (id: number, newQuestion: Question) => void;
}): JSX.Element {
    const [viewing, setViewing] = useState<boolean>(false);

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
