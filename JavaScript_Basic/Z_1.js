// Задание 1. Создайте функцию, которая будет принимать один аргумент -
//                                    и
//                   выводить его тип на русском языке.
//Создаем строку
var string = "HelloMyFriend";
//Создаем неопределенный тип данных
var UnF;
//Создаем логический тип
var bool = true;
//Создаем число
var number = 17;

//Создаем функцию
function functi_on(num) {
};
// Создаем объект
var object = {"name": "Nikita", "surname": "Bushuev", "years": 20, "hobby": "sports"}

function onlyNum(n) {
    if (typeof (n) === "number") {
        type = "вы ввели число";
    } else if (typeof (n) === "string") {
        type = "вы ввели строку";
    } else if (typeof (n) === "boolean") {
        type = "вы введи логический тип данных";
    } else if (typeof (n) === "undefined") {
        type = "вы ввели неопределенный тип данных(отсутствие примитива)";
    } else if (typeof (n) === "function") {
        type = "вы ввели функцию";
    } else if (typeof (n) === "object") {
        type = "вы ввели объектный тип даных";
    }
    console.log(type)
}

onlyNum(UnF);
onlyNum(number);
onlyNum(string);
onlyNum(bool);
onlyNum(functi_on);
onlyNum(object);