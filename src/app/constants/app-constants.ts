export class AppConstants{
    static quizUrl = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple';

    static resultText = 'You got {correct}/{total}';
    static errorCodes = {
        NoData: 'unable to load data from the api'
    };
}
