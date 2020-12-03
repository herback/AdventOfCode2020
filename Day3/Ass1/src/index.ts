import * as fs from 'fs';

let input: Array<string> = fs.readFileSync('./data.txt').toString('utf-8').split('\n');

const howManyTrees = (list: Array<string>): number => {
    let trees: number = 0;
    let currentPos: number = 3;
    let inputWidth: number = list[0].length - 1;

    for (let row: number = 1; row < list.length; row++) {
        if ('#' === list[row].charAt(currentPos)) {
            trees++;
        }
        currentPos = (currentPos + 3) % inputWidth;
    }
    return trees;
};

console.log('amount of trees: ' + howManyTrees(input));
