import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "../Quizzer";

describe("publishQuestion Component tests", () => {
    beforeEach(() => render(<Quizzer />));
    //Short Answer tests
    test("There is a publish button", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const editButton = screen.getAllByRole("button", { name: /Edit/i });
        editButton[0].click();
        const publishButton = screen.queryByRole("button", {
            name: /Publish/i
        });
        expect(publishButton).toBeInTheDocument();
    });
    test("Publish button is NOT on screen if edit button is not pressed", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const publishButton = screen.queryByRole("button", {
            name: /Publish/i
        });
        expect(publishButton).not.toBeInTheDocument();
    });
    test("Initially the question is unpublished", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const editButton = screen.getAllByRole("button", { name: /Edit/i });
        editButton[0].click();
        expect(screen.getByText(/not published/i)).toBeInTheDocument();
    });
    test("Question is published after button is pressed", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const editButton = screen.getAllByRole("button", { name: /Edit/i });
        editButton[0].click();
        const publishButton = screen.getByRole("button", { name: /Publish/i });
        publishButton.click();
        expect(screen.getByText(/published/i)).toBeInTheDocument();
    });
    test("Pushing button 3 times makes the question unpublished", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const editButton = screen.getAllByRole("button", { name: /Edit/i });
        editButton[0].click();
        const publishButton = screen.getByRole("button", { name: /Publish/i });
        publishButton.click();
        publishButton.click();
        publishButton.click();
        expect(screen.getByText(/not published/i)).toBeInTheDocument();
    });
});
