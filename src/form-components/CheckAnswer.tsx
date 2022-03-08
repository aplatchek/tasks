import React, { useState } from "react";
import { Form } from "react-bootstrap";
//import { setTokenSourceMapRange } from "typescript";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateName(event: ChangeEvent) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <p>Check Answer</p>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateName} />
            </Form.Group>
            <div> {answer === expectedAnswer ? "✔️" : "❌"}.</div>
        </div>
    );
}
