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

