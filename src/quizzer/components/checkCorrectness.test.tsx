import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Quizzer } from "../Quizzer";

describe("checkCorrectness Component tests", () => {
    beforeEach(() => render(<Quizzer />));
    //Short Answer tests
    test("There is an input box", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const inputBox = screen.getAllByRole("textbox");
        expect(inputBox[0]).toBeInTheDocument();
    });
    test("Entering the right answer makes it correct.", () => {
        //check number of Xs before and after selecting the correct answer
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const before = screen.queryAllByText(/✔️/i);
        //const inputBox1 = screen.getAllByRole("textbox");
        const inputBox1 = screen.getByTestId("4");
        userEvent.type(inputBox1, "4");
        const after = screen.queryAllByText(/✔️/i);
        expect(after.length).toEqual(before.length + 1); //there is 1 extra check
    });
    test("Entering the wrong answer makes it incorrect.", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const before = screen.queryAllByText(/✔️/i);
        const inputBox = screen.getByTestId("4");
        userEvent.type(inputBox, "43");
        const after = screen.queryAllByText(/✔️/i);
        expect(after.length).toEqual(before.length); //equal checks
    });
    test("Entering a right answer to a different question makes it correct.", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const before = screen.queryAllByText(/✔️/i);
        const inputBox = screen.getByTestId("5");
        userEvent.type(inputBox, "Z");
        const after = screen.queryAllByText(/✔️/i);
        expect(after.length).toEqual(before.length + 1); //there is 1 more check
    });
    test("Entering a different wrong answer still makes it incorrect.", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const before = screen.queryAllByText(/✔️/i);
        const inputBox = screen.getByTestId("5");
        userEvent.type(inputBox, "w");
        const after = screen.queryAllByText(/✔️/i);
        expect(after.length).toEqual(before.length); //equal checks
    });

    //Multiple choice tests
    test("There is a select box", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const comboBox = screen.getAllByRole("combobox");
        expect(comboBox[0]).toBeInTheDocument();
    });

    test("Can choose the correct answer", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const before = screen.getAllByText(/✔️/i);
        //const select = screen.getByTestId("7");
        //userEvent.selectOptions(select, "circle");
        userEvent.click(screen.getByRole("option", { name: /circle/ }));
        const after = screen.getAllByText(/✔️/i);
        expect(after.length).toEqual(before.length + 1); //1 extra check
    });

    test("Incorrect answer is marked incorrect", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const before = screen.getAllByText(/✔️/i);
        //const select = screen.getByTestId("7");
        //userEvent.selectOptions(select, "circle");
        userEvent.click(screen.getByRole("option", { name: /square/ }));
        const after = screen.getAllByText(/✔️/i);
        expect(after.length).toEqual(before.length); //1 extra check
    });
});
