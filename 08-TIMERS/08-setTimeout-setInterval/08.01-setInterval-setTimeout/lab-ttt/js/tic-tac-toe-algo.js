const ttt1 = [ [10,2,3], [4,10,6], [7,8,10] ];
const ttt2 = [ [1,2,3], [4,10,6], [10,8,10] ];
const ttt3 = [ [1,2,3], [4,5,6], [10,10,10] ];

function checkForWinner(ttt) {
    for(let i = 0; i < ttt.length; i++) {
        let sum = 0;
        for(let j = 0; j < ttt[0].length; j++) {
            sum += ttt[i][j];
        }
        return sum == 30 ? sum + ' : winner' : sum + ' : no winner';
    }
}

console.log(checkForWinner(ttt1));
console.log(checkForWinner(ttt2));
console.log(checkForWinner(ttt3));