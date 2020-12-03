import * as fs from 'fs';

let input: Array<string> = fs.readFileSync('./data.txt').toString('utf-8').split('\n');

const howManyTrees = (list: Array<string>, rowTravel: number, colTravel: number): number => {
    let trees: number = 0;
    let currentPos: number = rowTravel;
    let inputWidth: number = list[0].length - 1;

    for (let col: number = colTravel; col < list.length; col += colTravel) {
        if ('#' === list[col].charAt(currentPos)) {
            trees++;
        }
        currentPos = (currentPos + rowTravel) % inputWidth;
    }
    return trees;
};

let sumOfAllTreesMultiplied: number = howManyTrees(input, 1, 1);
sumOfAllTreesMultiplied *= howManyTrees(input, 3, 1);
sumOfAllTreesMultiplied *= howManyTrees(input, 5, 1);
sumOfAllTreesMultiplied *= howManyTrees(input, 7, 1);
sumOfAllTreesMultiplied *= howManyTrees(input, 1, 2);

console.log('amount of trees: ' + sumOfAllTreesMultiplied);

// //debugger code
//         let replacer: string = list[col].substring(0, currentPos) + 'O' + list[col].substring(currentPos + 1);
//             console.log(replacer);
//         } else {
//             console.log(list[col]);
