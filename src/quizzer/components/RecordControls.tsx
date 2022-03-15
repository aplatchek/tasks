import React from "react";
import { Button } from "react-bootstrap";

export function RecordControlsQuiz({
    changeViewing
}: {
    changeViewing: () => void;
}): JSX.Element {
    return (
        <div>
            <Button className="float-right" size="sm" onClick={changeViewing}>
                View
            </Button>
        </div>
    );
}

export function RecordControlsQuestion({
    changeEditing
}: {
    changeEditing: () => void;
}): JSX.Element {
    return (
        <div>
            <Button className="float-right" size="sm" onClick={changeEditing}>
                Edit
            </Button>
        </div>
    );
}
