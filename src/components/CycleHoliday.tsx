import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const holidays: string[] = [
        "🎊", //New Years
        "💟", // Valentines Day
        "🎂", //My Birthday
        "🎃", //Halloween
        "🦃" //Thanksgiving
    ];
    const [holiday, setHoliday] = useState<string>(holidays[0]);

    function advanceByYear(): void {
        //switch whether quiz is in progress or not
        if (holiday === holidays[0]) {
            setHoliday(holidays[1]);
        } else if (holiday === holidays[1]) {
            setHoliday(holidays[2]);
        } else if (holiday === holidays[2]) {
            setHoliday(holidays[3]);
        } else if (holiday === holidays[3]) {
            setHoliday(holidays[4]);
        } else {
            setHoliday(holidays[0]);
        }
    }

    function advanceByAlphabet(): void {
        //switch whether quiz is in progress or not
        if (holiday === holidays[3]) {
            setHoliday(holidays[2]);
        } else if (holiday === holidays[2]) {
            setHoliday(holidays[0]);
        } else if (holiday === holidays[0]) {
            setHoliday(holidays[4]);
        } else if (holiday === holidays[4]) {
            setHoliday(holidays[1]);
        } else {
            setHoliday(holidays[3]);
        }
    }
    return (
        <div>
            <p>Cycle Holidays</p>
            <span>
                <span> Holiday: {holiday} </span>
                <p>
                    <Button onClick={() => advanceByAlphabet()}>
                        Advance by Alphabet
                    </Button>
                </p>
                <p>
                    <Button onClick={() => advanceByYear()}>
                        Advance by Year
                    </Button>
                </p>
            </span>
        </div>
    );
}
