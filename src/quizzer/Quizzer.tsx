import React, { useState } from "react";
import questioning from "./data/initalQuestions.json";
import { Quiz } from "./interfaces/quiz";
import { QuizList } from "./components/quizList";
import { Question } from "./interfaces/question";
import ApplicationSketch from "./assets/image.jpg";
import "../App.css";
//import { propTypes } from "react-bootstrap/esm/Image";

const QUIZZES = questioning.map((quiz): Quiz => ({ ...quiz }));

export function Quizzer(): JSX.Element {
    //quizzer info
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);
    const [viewing, setViewing] = useState<boolean>(false);
    //const [showAddModal, setShowAddModal] = useState(false);

    /*function viewQuiz(id: number, newQuiz: Quiz) {
        setQuizzes(
            quizzes.map((quiz: Quiz): Quiz => (quiz.id === id ? newQuiz : quiz))
        );
    }*/

    function deleteQuiz(id: number) {
        setQuizzes(quizzes.filter((quiz: Quiz): boolean => quiz.id !== id));
    }

    function deleteQuestion(id: number) {
        setQuizzes(
            quizzes.map(
                (newquiz: Quiz): Quiz => ({
                    ...newquiz,
                    questions: newquiz.questions.filter(
                        (question1: Question): boolean => question1.id !== id
                    )
                })
            )
        );
    }

    function editQuestion(id: number, newQuestion: Question) {
        setQuizzes(
            quizzes.map(
                (newQuiz: Quiz): Quiz => ({
                    ...newQuiz,
                    questions: newQuiz.questions.map(
                        (question1: Question): Question =>
                            question1.id === id ? newQuestion : question1
                    )
                })
            )
        );
    }

    function publishQuestion(id: number) {
        setQuizzes(
            quizzes.map(
                (newquiz: Quiz): Quiz => ({
                    ...newquiz,
                    questions: newquiz.questions.map(
                        (question1: Question): Question => ({
                            ...question1,
                            published:
                                question1.id === id
                                    ? publishHelper(question1)
                                    : question1.published
                        })
                    )
                })
            )
        );
    }

    function publishHelper(question1: Question): boolean {
        question1.published = !question1.published;
        return question1.published;
    }

    /*function addQuiz(newQuiz: Quiz) {
        const existing = quizzes.find(
            (quiz: Quiz): boolean => quiz.id === newQuiz.id
        );
        if (existing === undefined) {
            setQuizzes([...quizzes, newQuiz]);
        }
    }*/

    //const handleCloseAddModal = () => setShowAddModal(false);
    //const handleShowAddModal = () => setShowAddModal(true);
    return (
        <>
            <h3>Quizzer</h3>
            <>
                <p>Completed Features:</p>
                <ul>
                    <li>Application sketch</li>
                    <li>Quizzes are visible</li>
                    <li>Quizzes have questions</li>
                    <li>Short answer and multiple choice</li>
                    <li>Check correctness</li>
                    <li>Publish questions</li>
                    <li>Edit questions</li>
                    <li>Delete quiz</li>
                    <li>Publish/unpublish questions</li>
                    <li>Tests for all above features</li>
                </ul>
            </>
            <div>
                <QuizList
                    viewing={viewing}
                    setViewing={setViewing}
                    quizzes={quizzes}
                    deleteQuiz={deleteQuiz}
                    //viewQuiz={viewQuiz}
                    editQuestion={editQuestion}
                    deleteQuestion={deleteQuestion}
                    publishQuestion={publishQuestion}
                ></QuizList>

                <img src={ApplicationSketch}></img>
            </div>
        </>
    );
}
