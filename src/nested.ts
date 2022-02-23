//import { getValue } from "@testing-library/user-event/dist/utils";
//import { idText } from "typescript";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
//import { duplicateQuestion, publishQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const pub_questions = questions.filter(
        (value: Question): boolean => value.published === true
    );
    return pub_questions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const non_empty = questions.filter(
        (value: Question): boolean =>
            value.body !== "" ||
            value.expected !== "" ||
            value.options.length !== 0
    );
    return non_empty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const id_question = questions.filter(
        (value: Question): boolean => value.id === id
    );
    if (id_question.length === 0) {
        return null;
    } else {
        return id_question[0];
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const id_question = questions.filter(
        (value: Question): boolean => value.id !== id
    );
    return id_question;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map((value: Question): string => value.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const totalPoints = questions.reduce(
        (currentSum: number, value: Question) => currentSum + value.points,
        0
    );
    return totalPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const pub_questions = questions.filter(
        (value: Question): boolean => value.published === true
    );
    const totalPoints = pub_questions.reduce(
        (currentSum: number, value: Question) => currentSum + value.points,
        0
    );
    return totalPoints;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const initial = "id,name,options,points,published\n";
    const CSV =
        initial +
        questions.reduce(
            (currentCSV: string, current: Question) =>
                currentCSV +
                current.id +
                "," +
                current.name +
                "," +
                current.options.length +
                "," +
                current.points +
                "," +
                current.published +
                "\n",
            ""
        );
    const finalCSV = CSV.slice(0, -1);
    return finalCSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const newAnswers = questions.map(
        (value: Question): Answer => ({
            questionId: value.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return newAnswers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const allPublished = questions.map(
        (value: Question): Question => publishAllHelper(value)
    );
    return allPublished;
}

export function publishAllHelper(question: Question): Question {
    const newQuestion = { ...question, published: true };
    return newQuestion;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    let ofSameType = [];
    if (questions.length > 0) {
        const typeOne = questions[0].type;
        ofSameType = questions.filter(
            (value: Question): boolean => value.type === typeOne
        );
    }
    return questions.length === ofSameType.length;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestions = [...questions, makeBlankQuestion(id, name, type)];
    return newQuestions;
}

//For some reason it was not able to see function definition in other file
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType
): Question {
    return {
        id: id,
        name: name,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false,
        type: type
    };
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const targetIndex = questions.findIndex(
        (value: Question): boolean => value.id === targetId
    );
    const newQuestions = [...questions];
    const newQuestion: Question = {
        ...questions[targetIndex],
        name: newName
    };
    newQuestions[targetIndex] = newQuestion;
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const targetIndex = questions.findIndex(
        (value: Question): boolean => value.id === targetId
    );
    const newQuestions = [...questions];
    const newQuestion: Question = {
        ...questions[targetIndex],
        type: newQuestionType
    };
    if (newQuestion.type === "short_answer_question") {
        newQuestion.options = [];
    }
    newQuestions[targetIndex] = newQuestion;
    return newQuestions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
) {
    const targetIndex = questions.findIndex(
        (value: Question): boolean => value.id === targetId
    );
    const newQuestions = [...questions];
    let newQuestion: Question = questions[targetIndex];
    if (targetOptionIndex === -1) {
        newQuestion = {
            ...questions[targetIndex],
            options: [...questions[targetIndex].options, newOption]
        };
    } else {
        //call helper to add in new option in correct location
        newQuestion = editOptionHelper(
            targetOptionIndex,
            newQuestion,
            newOption
        );
    }
    if (newQuestion.type === "short_answer_question") {
        newQuestion.options = [];
    }
    newQuestions[targetIndex] = newQuestion;
    return newQuestions;
}

export function editOptionHelper(
    //called only when the desired index is not -1: addes option in to newQuestion
    targetOptionIndex: number,
    question: Question,
    newOption: string
): Question {
    const newOptions = [...question.options];
    newOptions[targetOptionIndex] = newOption;
    const newQuestion = { ...question, options: newOptions };
    return newQuestion;
}
/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const newQuestions = [...questions];
    const targetIndex = questions.findIndex(
        (value: Question): boolean => value.id === targetId
    );
    const newQuestions1 = newQuestions.slice(0, targetIndex + 1);
    const newQuestions2 = [
        ...newQuestions1,
        duplicateQuestion(newId, newQuestions[targetIndex])
    ];
    const newQuestions3 = newQuestions2.concat(
        newQuestions.slice(targetIndex + 1)
    );
    console.log("1: ", newQuestions1);
    console.log("2: ", newQuestions2);
    console.log("3: ", newQuestions3);
    return newQuestions3;
}
