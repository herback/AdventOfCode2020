import * as fs from 'fs';

let input: Array<string> = fs.readFileSync('./data.txt').toString('utf-8').split('\n');
let validInputs: number = 0;

const isValid = (line: string): boolean => {
    let splittedLine: Array<string> = line.split(/\W+/);
    let minOccurences: number = Number(splittedLine[0]);
    let maxOccurences: number = Number(splittedLine[1]);
    let charToCheck: string = splittedLine[2];
    let password: string = splittedLine[3];
    let occurences: number = 0;

    for (let i: number = 0; i < password.length; i++) {
        if (charToCheck === password.charAt(i)) {
            occurences++;
        }
    }
    return minOccurences <= occurences && occurences <= maxOccurences;
};

input.forEach((entry) => {
    if (isValid(entry)) {
        validInputs++;
    }
});

console.log('valid passwords: ' + validInputs);
