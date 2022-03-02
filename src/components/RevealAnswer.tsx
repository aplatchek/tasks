import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { setConstantValue } from "typescript";

export function RevealAnswer(): JSX.Element {
    const [state, setState] = useState<boolean>(false);

    function flipVisibility(): void {
        //switch whether or not the 42 is visible
        setState(!state);
    }

    return (
        <div>
            <p>Reveal Answer</p>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {state && <div>42</div>}
        </div>
    );
}
