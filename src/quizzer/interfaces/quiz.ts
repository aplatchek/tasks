import { Question } from "./question";

export interface Quiz {
    id: string;
    title: string;
    numberQuestions: number;
    description: string;
    questions: Question[];
}
