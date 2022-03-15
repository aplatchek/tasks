import { Quiz } from "./quiz";

export interface Question {
    id: number;
    name: string;
    body: string;
    type: string;
    options: string[];
    expected: string;
    points: number;
    published: boolean;
}
