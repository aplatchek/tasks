import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "../Quizzer";

describe("multipleTypes Component tests", () => {
    beforeEach(() => render(<Quizzer />));
    //Short Answer tests
    test("There is an input box - showing short answer", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const inputBox = screen.getAllByRole("textbox");
        expect(inputBox[0]).toBeInTheDocument();
    });
    test("There is an second input box - showing another short answer", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const inputBox = screen.getAllByRole("textbox");
        expect(inputBox[1]).toBeInTheDocument();
    });
    test("There is a drop down- showing that there are multiple choice questions", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const dropDown = screen.getAllByRole("option");
        expect(dropDown[0]).toBeInTheDocument();
    });
    test("There is a second drop down- showing that there is another multiple choice questions", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const dropDown = screen.getAllByRole("option");
        expect(dropDown[1]).toBeInTheDocument();
    });
});
