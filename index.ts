// 3-тя задача

const verticals: Array<{x: number, y: number}> = [
    { x: 1, y:1 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },
    { x: 2, y: 1 },
]

let acc = 0

for( let i = 1; i < verticals.length - 1 ;i++ ){
    acc += verticals[i-1].x*verticals[i].y
}
acc += verticals.reverse()[0].x*verticals.reverse()[1].y

for( let i = 1; i < verticals.length - 1 ;i++ ){
    acc -= verticals[i-1].y*verticals[i].x
}

acc += verticals.reverse()[0].y*verticals.reverse()[1].x

// Реалізація формули Гауса

console.log(acc);

// Задача 2

const nums = [1, 2, 5, 4, 3]

// nums.sort() - нечесно, але можна))

function bubbleSort(arr: number[]) {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {            
            if (arr[j] > arr[j + 1]) {
                const swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }    
    return arr;
}
console.log(bubbleSort(nums));
