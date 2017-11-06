'use strict';

let score;

const seasons = ['fall', 'winter', 'spring', 'summer'];
askForFavorite (seasons, 'What is your favorite season?', 'That is not a season. What is your favorite season of the year?')

const timeOfDay = ['morning', 'afternoon', 'evening'];
askForFavorite (timeOfDay, 'What is your favorite time of day?', 'Try morning, afternoon, or evening.');

function askForFavorite (possibleAnswer, question, secondQuestion) {
    let answer = prompt(question);

    while (!possibleAnswer.includes(answer)) {
        answer = prompt(secondQuestion);
    }

    score = possibleAnswer.indexOf(answer);
}

if (score === 0) {
    alert('you are happy');
} else if (score < 3) {
    alert('you are worried');
} else if (score >= 3) {
    alert('you are sad');
}