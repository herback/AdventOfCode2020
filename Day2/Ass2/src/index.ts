import * as fs from 'fs';

let input: Array<string> = fs.readFileSync('./data.txt').toString('utf-8').split('\n');
let validInputs: number = 0;

const isValid = (line: string): boolean => {
    let splittedLine: Array<string> = line.split(/\W+/);
    let indexOne: number = Number(splittedLine[0]) - 1;
    let indexTwo: number = Number(splittedLine[1]) - 1;
    let charToCheck: string = splittedLine[2];
    let password: string = splittedLine[3];

    let conditionOne: boolean = charToCheck === password.charAt(indexOne);
    let conditionTwo: boolean = charToCheck === password.charAt(indexTwo);

    return (conditionOne && !conditionTwo) || (!conditionOne && conditionTwo);
};

input.forEach((entry) => {
    if (isValid(entry)) {
        validInputs++;
    }
});

console.log('valid passwords: ' + validInputs);
