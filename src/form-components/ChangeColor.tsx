import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "cyan",
    "magenta",
    "navy"
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): JSX.Element {
    const [favorite, setFavorite] = useState<string>(DEFAULT_COLOR);

    // This is the Control
    function updateFavorite(event: ChangeEvent) {
        setFavorite(event.target.value);
    }

    function chooseBackground(fav: string): string {
        console.log(favorite);
        return fav;
    }
    return (
        <div>
            <p>Change Color</p>
            <p>
                <Form.Group controlId="favoriteColors">
                    <Form.Label>Choose a color</Form.Label>
                    <label className="red-box">
                        <Form.Check
                            inline
                            type="radio"
                            name="colors"
                            label={COLORS[0]}
                            value={COLORS[0]}
                            onChange={updateFavorite}
                            checked={favorite === COLORS[0]}
                        ></Form.Check>
                    </label>
                    <label className="blue-box">
                        <Form.Check
                            inline
                            type="radio"
                            name="colors"
                            label={COLORS[1]}
                            value={COLORS[1]}
                            onChange={updateFavorite}
                            checked={favorite === COLORS[1]}
                        ></Form.Check>
                    </label>
                    <label className="green-box">
                        <Form.Check
                            inline
                            type="radio"
                            name="colors"
                            label={COLORS[2]}
                            value={COLORS[2]}
                            onChange={updateFavorite}
                            checked={favorite === COLORS[2]}
                        ></Form.Check>
                    </label>
                    <label className="orange-box">
                        <Form.Check
                            inline
                            type="radio"
                            name="colors"
                            label={COLORS[3]}
                            value={COLORS[3]}
                            onChange={updateFavorite}
                            checked={favorite === COLORS[3]}
                        ></Form.Check>
                    </label>
                    <label className="purple-box">
                        <Form.Check
                            inline
                            type="radio"
                            name="colors"
                            label={COLORS[4]}
                            value={COLORS[4]}
                            onChange={updateFavorite}
                            checked={favorite === COLORS[4]}
                        ></Form.Check>
                    </label>
                    <label className="yellow-box">
                        <Form.Check
                            inline
                            type="radio"
                            name="colors"
                            label={COLORS[5]}
                            value={COLORS[5]}
                            onChange={updateFavorite}
                            checked={favorite === COLORS[5]}
                        ></Form.Check>
                    </label>
                    <label className="cyan-box">
                        <Form.Check
                            inline
                            type="radio"
                            name="colors"
                            label={COLORS[6]}
                            value={COLORS[6]}
                            onChange={updateFavorite}
                            checked={favorite === COLORS[6]}
                        ></Form.Check>
                    </label>
                    <label className="magenta-box">
                        <Form.Check
                            inline
                            type="radio"
                            name="colors"
                            label={COLORS[7]}
                            value={COLORS[7]}
                            onChange={updateFavorite}
                            checked={favorite === COLORS[7]}
                        ></Form.Check>
                    </label>
                </Form.Group>
            </p>
            Your have chosen
            <label>
                <div
                    data-testid="colored-box"
                    style={{
                        backgroundColor: String(chooseBackground(favorite)),
                        width: "75px",
                        height: "30px"
                    }}
                >
                    {favorite}.
                </div>
            </label>
        </div>
    );
}
