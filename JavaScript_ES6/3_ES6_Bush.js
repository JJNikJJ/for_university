'use strict'
//Это не много но это честная работа
//Задание 1 Даны 2 целых числа a и b.
// Реализуйте функцию, которая будет принимать как аргументы a и b,
// и производить арифметику по логике:

const sub = (a, b) => {
    if (b !== 0) {
        if (a % 10 === 0) a /= 10;
        else --a;
        return sub(a, --b);
    }
    return a;
}
console.log('Заданиe 1 ');
console.log(sub(90000400001240, 24));


//Задание 6 Реализуйте функцию, которая будет сортировать данный массив по закону
// [нечетное, четное, нечетное, четное…]. Величина числа никак не влияет на сортировку.
// Функция должна возвращать отсортированный массив или пустой массив, если сортировка невозможна.

const OddEven = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
const fEven = (arr, arr1) => {
    arr.forEach(function (item, index) {
        if (arr[index] % 2 === 0)
            arr1[index] = arr[index];
    })
    return arr1;
}
const fOdd = (arr, arr1) => {
    arr.forEach(function (item, index) {
        if (arr[index] % 2 !== 0) {
            arr1[index] = arr[index];
        }
    });
    return arr1;
};
const sort = (arr) => {
    let arr1 = [];
    let arr2 = [];
    let aEven = fEven(arr, arr1);
    let aOdd = fOdd(arr, arr2);
    let j = arr2.length;
    let n = arr2.length - 1;
    let arr3 = [];
    arr.forEach(function (item, index) {
        if (index % 2 !== 0) {
            arr3[index] = aEven[j];
            j = j + 1;
        } else {
            arr3[index] = aOdd[n];
            n = n - 1;
        }
    });
    return arr3;
}
console.log('Заданиe 6');
console.log(sort(OddEven));

