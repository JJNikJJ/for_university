//Задание 2. Создайте массив, элементы которого составляют осмысленную фразу.
//           С помощью цикла for…of выведите элементы массива в одну строку.

var array = ["Надо", "было", "вкладываться", "в", "биткоин", "в", "2008", "году", "((((("];

function printf(arr) {
    var stroka = " "
    for (var i = 0; i < array.length; i++)
        stroka = stroka + " " + arr[i];
    console.log(stroka);
}

printf(array)