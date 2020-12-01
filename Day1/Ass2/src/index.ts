import * as fs from 'fs';

let input = fs.readFileSync('./data.txt').toString('utf-8').split('\n');

const convertStringListToNumberList = (list: Array<string>) => {
    let numberList = new Array<number>();
    list.forEach((entry) => {
        numberList.push(Number(entry));
    });
    return numberList;
};

const calculator = (list: Array<number>) => {
    let mySet: Set<number> = new Set();
    let calcValue: number;
    let sum: number = 0;
    for (let row: number = 0; row < list.length; row++) {
        for (let col: number = 1; col < list.length; col++) {
            calcValue = 2020 - list[row] - list[col];
            if (mySet.has(calcValue)) {
                sum = calcValue * list[row] * list[col];
                break;
            }
        }
        mySet.add(list[row]);
    }
    return sum;
};

let sumToPrint: number = calculator(convertStringListToNumberList(input));
console.log(sumToPrint);
