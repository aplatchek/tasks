import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { RecordControlsQuiz } from "./RecordControls";
import { Question } from "../interfaces/question";
import { QuestionView } from "./questionView";

export function QuizViewer({
    changeView,
    quiz,
    viewQuiz,
    deleteQuiz,
    editQuestion
}: {
    changeView: () => void;
    quiz: Quiz;
    viewQuiz: (id: number, newQuiz: Quiz) => void;
    deleteQuiz: (id: number) => void;
    editQuestion: (id: number, newQuestion: Question) => void;
}): JSX.Element {
    const [questions, setQuestions] = useState<Question[]>(quiz.questions);

    return (
        <>
            <Col>
                <h3>
                    {quiz.title} {" - "} {quiz.numberQuestions} {" questions"}
                </h3>
                <p>{quiz.description}</p>
            </Col>
            <p>In view mode</p>
            <div>
                <QuestionView
                    question={questions[0]}
                    deleteQuestion={deleteQuiz}
                    editQuestion={editQuestion}
                ></QuestionView>
            </div>
            <RecordControlsQuiz changeViewing={changeView}></RecordControlsQuiz>
        </>
    );
}
