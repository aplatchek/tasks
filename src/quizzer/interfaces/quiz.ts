import { Question } from "./question";

export interface Quiz {
    id: number;
    title: string;
    numberQuestions: number;
    description: string;
    questions: Question[];
}
