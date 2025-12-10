// Part 1
// Take an array of numbers and return the sum.


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

sum_numbers(numbers);

function sum_numbers() {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {

        sum = sum + numbers[i];

    }
    console.log('Part 1');
    console.log('Sum of the number is: ' + sum);
}

// Part 2
//Take an array of numbers and return the average.

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

avg_numbers(numbers2);

function avg_numbers() {
    let sum = 0;
    let avg = 0;
    for (i = 0; i < numbers.length; i++) {

        sum = sum + numbers[i];

    }
    avg = sum / numbers.length;
    console.log('Part 2');
    console.log('The average of the numbers is: ' + avg);
}