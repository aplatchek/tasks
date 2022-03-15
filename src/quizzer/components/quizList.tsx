import React from "react";
import { Quiz } from "../interfaces/quiz";
import { Stack } from "react-bootstrap";
import { QuizView } from "./quizView";
import { Question } from "../interfaces/question";
import { QuestionView } from "./questionView";

export function QuizList({
    quizzes,
    deleteQuiz,
    viewQuiz,
    editQuestion
}: {
    quizzes: Quiz[];
    deleteQuiz: (id: number) => void;
    viewQuiz: (id: number, newQuiz: Quiz) => void;
    editQuestion: (id: number, newQuestion: Question) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {quizzes.map((quiz: Quiz) => (
                <div key={quiz.id} className="bg-light border m-2 p-2">
                    <QuizView
                        quiz={quiz}
                        deleteQuiz={deleteQuiz}
                        viewQuiz={viewQuiz}
                        editQuestion={editQuestion}
                    ></QuizView>
                    {quiz.questions.map((question: Question) => (
                        <div key={question.id}>
                            <QuestionView
                                question={question}
                                deleteQuestion={deleteQuiz}
                                editQuestion={editQuestion}
                            ></QuestionView>
                        </div>
                    ))}
                </div>
            ))}
        </Stack>
    );
}
