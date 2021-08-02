// I am not sure if I should use a type or interface here.
// but since I wont implement it in any class I would use type
export type QuizQuestions = {
    category: string;
    type: Type;
    difficulty: Difficulty;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
};

export enum Difficulty {
    Easy = 'easy',
}

export enum Type {
    Multiple = 'multiple',
}
