import * as fs from 'fs';

let input: Array<string> = fs.readFileSync('./data.txt').toString('utf-8').split('\n');

const convertStringListToNumberList = (list: Array<string>): Array<number> => {
    let numberList = new Array<number>();
    list.forEach((entry) => {
        numberList.push(Number(entry));
    });
    return numberList;
};

const calculator = (list: Array<number>): number => {
    let mySet: Set<number> = new Set();
    let calcValue: number;
    let sum: number = 0;
    for (let i: number = 0; i < list.length; i++) {
        calcValue = 2020 - list[i];
        if (mySet.has(calcValue)) {
            sum = calcValue * list[i];
            break;
        }
        mySet.add(list[i]);
    }
    return sum;
};

let sumToPrint: number = calculator(convertStringListToNumberList(input));
console.log(sumToPrint);
