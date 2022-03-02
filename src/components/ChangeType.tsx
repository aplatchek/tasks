import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [state, setState] = useState<QuestionType>("short_answer_question");

    function flipQuestion(): void {
        //switch whether or not the 42 is visible
        if (state === "short_answer_question") {
            setState("multiple_choice_question");
        } else {
            setState("short_answer_question");
        }
    }
    return (
        <div>
            <p>Change Type</p>
            <Button onClick={flipQuestion}>Change Type</Button>
            {state && (
                <div>
                    {" "}
                    {state === "multiple_choice_question" ? (
                        <span>Multiple Choice</span>
                    ) : (
                        <span>Short Answer</span>
                    )}
                </div>
            )}
        </div>
    );
}
