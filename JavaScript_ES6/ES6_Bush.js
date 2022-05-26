'use strict'
//Задание 1 Даны 2 целых числа a и b.
// Реализуйте функцию, которая будет принимать как аргументы a и b,
// и производить арифметику по логике:

const ex_1 = (a, b) => {
    if (b !== 0) {
        if (a % 10 === 0) a /= 10;
        else --a;
        return ex_1(a, --b);
    }
    return a;
}
console.log('Заданиe 1 ');
console.log(ex_1(90000400001240, 24));

//6
//Реализуйте функцию, которая будет сортировать данный массив по закону
const Array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
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
console.log('Заданиe 6 ->');
console.log(sort(Array));


//7 Реализуйте функцию, которая будет как аргумент получать строку,
// а возвращать максимальное количество слов “Гроулит”,
// которое можно составить из этих букв.

let Array_string = "ГозулиагртГтГроаугитглтГроауГрулзиораороуизлтГроуулГиатзлилит";
const c_Rec = (str, str1, i, j) => {
    if (str.includes(str1, i) === false)
        return j;
    else
        return c_Rec(str, str1, str.indexOf(str1, i) + 1, j + 1);
}
const search = (str) => {
    let mass = [];
    mass[0] = c_Rec(str, "Г", 0, 0);
    mass[1] = c_Rec(str, "р", 0, 0);
    mass[2] = c_Rec(str, "о", 0, 0);
    mass[3] = c_Rec(str, "у", 0, 0);
    mass[4] = c_Rec(str, "л", 0, 0);
    mass[5] = c_Rec(str, "и", 0, 0);
    mass[6] = c_Rec(str, "т", 0, 0);
    return mass;
}
const result_string = (str) => {
    let n = search(str);
    return Math.min(n[0], n[1], n[2], n[3], n[4], n[5], n[6])
}
console.log('Заданиe 7');
console.log(result_string(Array_string));


//8 Вам дан массив неизвестной размерности,
// в котором каждый элемент обозначает одно действие в чате:
// В подсчет трафика входит только размер текста (в символах) отправленных сообщений,
// умноженных на количество пользователей, которым было отправлено сообщение.

const Array1 = [
    ["+Миша"],
    ["+Олег"],
    ["+Антон"],
    ["+Таня"],
    ["-Миша"],
    ["Таня:Как дела?"],
    ["Олег:Все хорошо!"],
    ["-Таня"],
    ["+Толя"],
    ["Толя:Я что-то пропустил?"],
];


const trafic = (arr) => {
    let k = 0;
    let sum = 0;
    arr.forEach(function (item, index) {
        if (arr[index][0].includes(':', 0) === true) {
            let a = arr[index][0].split(":");
            sum = sum + a[1].length * (k - 1);
        }
        if (arr[index][0].includes('+', 0) === true)
            k = k + 1;
        if (arr[index][0].includes('-', 0) === true)
            k = k - 1;
    })
    return sum;

};
console.log('Заданиe 8');
console.log(trafic(Array1));
