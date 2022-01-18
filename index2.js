let correctAnswers = 0;
let incorrectAnswers = 0;

const answer1=4;

const rightAnswer = 'Ответ верный';
const incorrectAnswer = 'Ответ неверный';

const question1 = prompt('Сколько будет 2 + 2?');
let question1Number = Number(question1);
if (question1Number === answer1) {
    alert(rightAnswer);
    correctAnswers++;
} else {
    alert(incorrectAnswer);
    incorrectAnswers++;
}

const question2 = prompt('Сколько будет 2 * 2?');
let question2Number = Number(question2);
if (question2Number === 4) {
    alert(rightAnswer)
    correctAnswers++;
} else {
    alert(incorrectAnswer);
    incorrectAnswers++;
} 

const question3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?');
let question3Number = Number(question3);
if (question3Number === 1) {
    alert(rightAnswer)
    correctAnswers++;
} else {
    alert(incorrectAnswer);
    incorrectAnswers++;
}

const question4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?');
let question4Number = Number(question4);
if (question4Number === 12) {
    alert(rightAnswer)
    correctAnswers++;
} else {
    alert(incorrectAnswer);
    incorrectAnswers++;
}


const question5 = prompt('Сколько будет 2 + 2 * 2?');
let question5Number = Number(question5);
if (question5Number === 6) {
    alert(rightAnswer)
    correctAnswers++;
} else {
    alert(incorrectAnswer);
    incorrectAnswers++;
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}. Неправильные ответы - ${incorrectAnswers}.`)