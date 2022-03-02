import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setleft] = useState<number>(2);
    const [rightDie, setright] = useState<number>(1);
    //<span data-testid="left-die">leftDie</span>;
    return (
        <div>
            <p>Two Dice</p>
            <span>
                <span data-testid="left-die">{leftDie}</span>;
                <Button onClick={() => setleft(d6)}>Roll Left</Button>
            </span>
            <span>
                <span data-testid="right-die">{rightDie}</span>;
                <Button onClick={() => setright(d6)}>Roll right</Button>
            </span>
            <span>
                {leftDie === rightDie && rightDie === 1 ? (
                    <span>Lose</span>
                ) : (
                    <span></span>
                )}
                {leftDie === rightDie && leftDie !== 1 ? (
                    <span>Win</span>
                ) : (
                    <span></span>
                )}
            </span>
        </div>
    );
}
