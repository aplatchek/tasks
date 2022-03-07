import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [numberAttempts, setAttemtps] = useState<number>(3);
    const [numberRequest, setRequest] = useState<string>("");

    function useAttempt(): void {
        //switch whether quiz is in progress or not
        setAttemtps(numberAttempts - 1);
    }

    function addAttempt(): void {
        //switch whether quiz is in progress or not
        if (parseInt(numberRequest)) {
            setAttemtps(parseInt(numberRequest) + numberAttempts);
        }
    }

    function updateRequest(event: ChangeEvent) {
        setRequest(event.target.value);
    }

    return (
        <div>
            <p>Give Attempts</p>
            Current number of attempts: <span>{numberAttempts}</span>
            <div>
                <p>
                    <Button
                        onClick={useAttempt}
                        disabled={numberAttempts === 0}
                    >
                        use
                    </Button>
                </p>
            </div>
            <p>
                <Button onClick={addAttempt}>gain</Button>
            </p>
            <p>
                <Form.Group controlId="giveAttempts">
                    <Form.Label>Answer:</Form.Label>
                    <Form.Control
                        value={numberRequest}
                        onChange={updateRequest}
                        role="spinbutton"
                    />
                </Form.Group>
            </p>
            <p></p>
        </div>
    );
}
