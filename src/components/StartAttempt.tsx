import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numberAttempts, setAttemtps] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    function stopQuiz(): void {
        //switch whether quiz is in progress or not
        setProgress(!inProgress);
    }

    function startQuiz(): void {
        //switch whether quiz is in progress or not
        setAttemtps(numberAttempts - 1);
        setProgress(!inProgress);
    }

    return (
        <div>
            <div>
                <p>Start Attempt</p>
                Current number of attemtps: <span>{numberAttempts}</span>
                <Button
                    onClick={startQuiz}
                    disabled={inProgress || numberAttempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={stopQuiz} disabled={!inProgress}>
                    Stop Quiz
                </Button>
                <Button
                    onClick={() => setAttemtps(numberAttempts + 1)}
                    disabled={inProgress}
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
