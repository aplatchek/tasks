import React, { useState } from "react";
import questioning from "./data/initalQuestions.json";
import { Quiz } from "./interfaces/quiz";
import { QuizList } from "./components/quizList";
import { Question } from "./interfaces/question";
import { propTypes } from "react-bootstrap/esm/Image";

const QUIZZES = questioning.map((quiz): Quiz => ({ ...quiz }));

export function Quizzer(): JSX.Element {
    //quizzer info
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);
    const [questions, setQuestions] = useState<Question[]>(
        QUIZZES[0].questions
    );
    const [viewing, setViewing] = useState<boolean>(false);
    //const [showAddModal, setShowAddModal] = useState(false);

    function editQuestion(id: number, newQuestion: Question) {
        setQuestions(
            questions.map(
                (question: Question): Question =>
                    question.id === id ? newQuestion : question
            )
        );
    }

    function viewQuiz(id: number, newQuiz: Quiz) {
        setQuizzes(
            quizzes.map((quiz: Quiz): Quiz => (quiz.id === id ? newQuiz : quiz))
        );
    }

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

    function addQuiz(newQuiz: Quiz) {
        const existing = quizzes.find(
            (quiz: Quiz): boolean => quiz.id === newQuiz.id
        );
        if (existing === undefined) {
            setQuizzes([...quizzes, newQuiz]);
        }
    }

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
                    <li>Delete quizzes</li>
                </ul>
            </>
            <div>
                <QuizList
                    viewing={viewing}
                    setViewing={setViewing}
                    quizzes={quizzes}
                    deleteQuiz={deleteQuiz}
                    viewQuiz={viewQuiz}
                    editQuestion={editQuestion}
                    deleteQuestion={deleteQuestion}
                ></QuizList>
            </div>
        </>
    );
}
