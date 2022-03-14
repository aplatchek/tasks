import React, { useState } from "react";
import question from "./data/initalQuestions.json";
import { Quiz } from "./interfaces/quiz";
import { QuizList } from "./components/quizList";

const QUIZZES = question.map((quiz): Quiz => ({ ...quiz }));

export function Quizzer(): JSX.Element {
    //quizzer info
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);
    //const [showAddModal, setShowAddModal] = useState(false);

    function editQuiz(id: string, newQuiz: Quiz) {
        setQuizzes(
            quizzes.map((quiz: Quiz): Quiz => (quiz.id === id ? newQuiz : quiz))
        );
    }

    function deleteQuiz(id: string) {
        setQuizzes(quizzes.filter((quiz: Quiz): boolean => quiz.id !== id));
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
            <div>
                <QuizList
                    quizzes={quizzes}
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
                ></QuizList>
            </div>
        </>
    );
}
