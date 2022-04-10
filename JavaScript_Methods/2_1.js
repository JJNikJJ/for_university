// Каждое задание прописано и выведено через console.log и выполняться будут сразу все задания.
// К сожалению не получились задания 3.2 и 2.1.
// В обоих заданиях я примерно понимаю что нужно сделать. Но это не точно.

var firstArray = [1, 2, 3, "n", 5, 6, 7, 8, 9, 10];
var secondArray = [1, 2, 3, 4, 5, 6, 7, "n", 9, 10];
//Задание 1.1. Проверка пройденного материала.
// Напишите функцию closeToN, которая будет принимать в качестве параметра массив и
// возвращать массив из 2 чисел (индексы соседних с “n” элементов).
// В функции запрещено использовать циклы и условные выражения.
// Важно, чтобы функция корректно работала с любым массивом такого типа.
function closeToN(Mas) {
    return [Mas.indexOf("n", 0) - 1, Mas.indexOf("n", 0) + 1];
}

console.log();
console.log("Задание 1.1");
console.log(closeToN(firstArray));
console.log(closeToN(secondArray));

//Задание 1.2. Проверка пройденного материала.
////Напишите функцию numbersAfterN, которая будет принимать в качестве параметра массив и
// возвращать массив из чисел, индекс которых больше, чем у “n”. В функции заещено использовать циклы и условные выражения.
// Важно, чтобы функция корректно работала с любым массивом такого типа.
function numbersAfterN(Mas) {
    return (Mas.slice(Mas.indexOf("n", 0) + 1, Mas.length));
}

console.log();
console.log("Задание 1.2");
console.log(numbersAfterN(firstArray));
console.log(numbersAfterN(secondArray));

//Задание 1.3. Проверка пройденного материала.
//Напишите функцию mergerNumbersAfterN, которая будет принимать в качестве параметров два массива и возвращать массив из:
// 1.	чисел из первого массива, индекс которых больше, чем у “n”.
// 2.	чисел из второго массива, индекс которых меньше, чем у “n”.
// 	В функции запрещено использовать циклы и условные выражения.
// 	Важно, чтобы функция корректно работала с любыми массивами такого типа.
function mergerNumbersAfterN(Mas1, Mas2) {
    return (Mas1.slice(Mas1.indexOf("n", 0) + 1, Mas1.length).concat("p", Mas2.slice(0, Mas2.indexOf("n", 0) - 1)));
}

console.log();
console.log("Задание 1.3");
//Вывод в два массива
console.log(mergerNumbersAfterN(firstArray, secondArray).slice(0, mergerNumbersAfterN(firstArray, secondArray).indexOf("p", 0) - 1));
console.log(mergerNumbersAfterN(firstArray, secondArray).slice(mergerNumbersAfterN(firstArray, secondArray).indexOf("p", 0) + 1, mergerNumbersAfterN(firstArray, secondArray).length));
//Вывод в один массив
console.log(mergerNumbersAfterN(firstArray, secondArray).slice(mergerNumbersAfterN(firstArray, secondArray).indexOf("p", 0) + 1, mergerNumbersAfterN(firstArray, secondArray).length).concat(mergerNumbersAfterN(firstArray, secondArray).slice(0, mergerNumbersAfterN(firstArray, secondArray).indexOf("p", 0) - 1)));

var Mas1 = [1, 2, 3, 4, 5];

//Задание 2.1 Проверка пройденного материала.
//Напишите функцию factorial, которая будет принимать в качестве параметра массив
// и возвращать факториал элементов массива.
// В функции запрещено создавать переменные, использовать циклы и условные выражения.
// Важно, чтобы функция корректно работала с любыми массивами такого типа.
/*function factorial(Mas) {
    //Не могу понять как без проверки что длина массива не равна 0 сделать функцию( а это уже условное выражение)
    if (Mas.length == 0)
        return 1
    if (Mas.length != 0)
        return (factorial(Mas).length * (Mas.length - 1))
}*/
console.log();
console.log("Задание 2.1 не получилось");
//console.log(factorial(Mas1));

//Задание 2.2 Проверка пройденного материала.
//Напишите процедуру reverseString, которая будет принимать в качестве параметра массив и
// выводить строку из элементов (в обратном порядке), разделенных между собой “-”.
// В функции запрещено использовать циклы и условные выражения.
// Важно, чтобы функция корректно работала с любыми массивами такого типа.
function reverseString(Mas) {
    return Mas.join('-', Mas.reverse());
}

console.log();
console.log("Задание 2.2");
console.log(reverseString(Mas1));

var str = "?Я?предпочитаю?вести?здоровый?образ?жизни";

//Задание 3.1 Проверка пройденного материала.
//Напишите функцию splitStr, которая будет принимать в качестве параметра строку и
// возвращать массив из слов. Учтите, что строка построена по правилу:”
// Первый элемент строки - разделитель”. В функции запрещено создавать переменные, использовать циклы и условные выражения.
// Важно, чтобы функция корректно работала с любыми строками такого типа.
function splitStr(str) {
    return (str.split("?").slice(1));
}

console.log();
console.log("Задание 3.1");
console.log(splitStr(str));

//Задание 3.2 Проверка пройденного материала.
//Напишите функцию toEnd, которая будет принимать в качестве параметров строку (str)
// и подстроку (underStr) и возвращать строку из символов, начиная с underStr,
// если она присутствует, и до конца str, в противном случае пустую строку “”.
// Например:
// toEnd(str,” здоровый”) – > “здоровый?образ?жизни”.
// toEnd(str,” нездоровый”) – > “”.
// 	В функции запрещено создавать переменные и использовать циклы.
// 	Важно, чтобы функция корректно работала с любыми строками такого типа.
function toEnd(str, underStr) {
    return (str.split("?").slice(str.indexOf(underStr, 0), str.length));
}

console.log();
console.log("Задание 3.2 не получилось");
//console.log(toEnd(str, "здоровый"));
//console.log(toEnd(str, "нездоровый"));

var str2 = "JavaScript";

//Задание 4.1 Проверка пройденного материала. (Надеюсь я правильно понял задание)
// Напишите функцию toCase, которая будет принимать в качестве параметров число (index)
// и строку(str) и возвращать строку. Возвращаемая строка должна полностью перевестись
// в регистр символа, находящегося по индексу index. В функции запрещено создавать переменные,
// использовать циклы.
// Важно, чтобы функция корректно работала с любыми строками такого типа.
function toCase1(index, str) {
    return (str.slice(0, index) + str[index].toUpperCase() + str.slice(index + 1, str.length));
}

console.log();
console.log("Задание 4.1.1 без if");
console.log(toCase1(3, str2));

function toCase2(index, str) {
    if (index == 0) {
        return (str[index].toLowerCase() + str.slice(index + 1, str.length));
    } else if (index == 4) {
        return (str.slice(0, index) + str[index].toLowerCase() + str.slice(index + 1, str.length));
    } else {
        return (str.slice(0, index) + str[index].toUpperCase() + str.slice(index + 1, str.length));
    }
}

console.log();
console.log("Задание 4.1.2 c if");
console.log(toCase2(0, str2));
console.log(toCase2(3, str2));
console.log(toCase2(4, str2));

//Задание 4.2 Проверка пройденного материала.
//Напишите функцию startOrEnd, которая будет принимать в качестве параметров строку str и подстроку underStr.
// Функция должна возвращать true/false.
// Значение зависит от того, находится ли underStr на “краю” строки str (начинает или заканчивает).
// В этом случае – true, в противном – false. В функции запрещено создавать переменные, использовать циклы.
// Важно, чтобы функция корректно работала с любыми строками такого типа.
var underStr2 = "J";

function startOrEnd(str, underStr) {
    return str.startsWith(underStr) || str.endsWith(underStr);
}

console.log();
console.log("Задание 4.2")
console.log(startOrEnd(str2, underStr2));
