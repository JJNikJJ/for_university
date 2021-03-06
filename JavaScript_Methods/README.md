# Практика. Методы массивов и строк.
## Упражнение 1.1 выполнено согласно требованиям:
### Задача: 
Напишите функцию closeToN, которая будет принимать в качестве параметра массив и возвращать массив из 2 чисел (индексы соседних с “n” элементов).
В функции запрещено использовать циклы и условные выражения. Важно, чтобы функция корректно работала с любым массивом такого типа.

## Упражнение 1.2 выполнено согласно требованиям:
### Задача:
Напишите функцию numbersAfterN, которая будет принимать в качестве параметра массив и возвращать массив из чисел, индекс которых больше, чем у “n”. 
В функции запрещено использовать циклы и условные выражения. Важно, чтобы функция корректно работала с любым массивом такого типа.

## Упражнение 1.3 выполнено согласно требованиям:
### Задача:
Напишите функцию mergerNumbersAfterN, которая будет принимать в качестве параметров два массива и возвращать массив из:
- чисел из первого массива, индекс которых больше, чем у “n”. 
- чисел из второго массива, индекс которых меньше, чем у “n”. 
	В функции запрещено использовать циклы и условные выражения. Важно, чтобы функция корректно работала с любыми массивами такого типа.

## Упражнение 2.2 выполнено согласно требованиям:
### Задача: 
Напишите процедуру reverseString, которая будет принимать в качестве параметра массив и выводить строку из элементов (в обратном порядке), разделенных между собой “-”. 
В функции запрещено использовать циклы и условные выражения. Важно, чтобы функция корректно работала с любыми массивами такого типа.

## Упражнение 3.1 выполнено согласно требованиям:
### Задача: Напишите функцию splitStr, которая будет принимать в качестве параметра строку и возвращать массив из слов. Учтите, что строка построена по правилу:” Первый элемент строки - разделитель”.
В функции запрещено создавать переменные, использовать циклы и условные выражения. Важно, чтобы функция корректно работала с любыми строками такого типа.

## Упражнение 4.1 выполнено согласно требованиям:
### Задача:
Напишите функцию toCase, которая будет принимать в качестве параметров число (index) и строку(str) и возвращать строку. Возвращаемая строка должна полностью перевестись в регистр символа, находящегося по индексу index. 
В функции запрещено создавать переменные, использовать циклы. Важно, чтобы функция корректно работала с любыми строками такого типа.

## Упражнение 4.2 выполнено согласно требованиям:
### Задача:
Напишите функцию startOrEnd, которая будет принимать в качестве параметров строку str и подстроку underStr. Функция должна возвращать true/false. Значение зависит от того, находится ли underStr на “краю” строки str (начинает или заканчивает). В этом случае – true, в противном – false.
В функции запрещено создавать переменные, использовать циклы. Важно, чтобы функция корректно работала с любыми строками такого типа.

## Задание 1 выполнено согласно требованиям:
### Задача:
Реализовать методы объекта:
- Set property – возвращает значение свойства command первого элемента в массиве объектов commands и меняет значение свойства id остальных элементов этого массива соответственно их положению.
- Set property – как параметр принимает значение свойства command для нового элемента. Результатом работы метода должен стать дополненный массив объектов commands.
- showQueue – выводит список элементов массива объектом commands в формате N. command.
### Например:
- go
- rotate
- push
- pop
- …
## Задание 2 выполнено согласно требованиям:
### Задача: 
Реализовать методы объекта:
- Get property – возвращает строку из значений свойства name всех элементов массива объектов hDays (разделителем будет “,”). Принцип работы будет заключаться в создании нового массива names и использовании метода для объединения элементов массива в строку.
- Set property – как параметр принимает объект с двумя свойствами name (имя) и day (месяц и день, разделенные “/”). Результатом работы метода должен стать дополненный массив объектов hDays.
- showDaysOnMonth(month) – выводит список имен людей, у которых день рождения в месяце с номером month.
- Учтите в своей программе:
Имена, вне зависимости от их первоначального написания, должны сохраняться в формате: Имя (только первая буква - заглавная).
Номер месяца и дня должны содержать две цифры, например Январь – 01. Но параметр может содержать и одну.
Проверку на логичность ввода месяца и дня.
