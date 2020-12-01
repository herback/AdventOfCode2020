import * as fs from 'fs';

let list = fs.readFileSync('./expenseReport.txt').toString('utf-8').split('\n');

const listConverter = (list: Array<string>) => {
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
    for (let i: number = 0; i < list.length; i++) {
        calcValue = 2020 - list[i];
        if (mySet.has(list[i])) {
            sum = calcValue * list[i];
        }
        mySet.add(list[i]);
    }
    return sum;
};

let sumToPrint: number = calculator(listConverter(list));
console.log(sumToPrint);
