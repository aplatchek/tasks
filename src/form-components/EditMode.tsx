import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditMode(): JSX.Element {
    const [editMode, setMode] = useState<boolean>(false);
    const [isStudent, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    //Control for edit mode
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>): void {
        const event1 = event.target.checked;
        setMode(event1);
    }

    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function checkEdit(): JSX.Element {
        if (editMode) {
            return (
                <div>
                    <Form.Check
                        type="switch"
                        id="is-student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                    <Form.Group controlId="formAnswer">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                </div>
            );
        } else {
            return (
                <div>
                    {name} is {isStudent ? "a student" : "not a student"}.
                </div>
            );
        }
    }
    return (
        <div>
            <p>Edit Mode</p>
            <Form.Check
                type="switch"
                id="is-edit-mode-check"
                label="Edit mode?"
                checked={editMode}
                onChange={updateEditMode}
            />
            {checkEdit()}
        </div>
    );
}
