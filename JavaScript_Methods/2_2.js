//Реализовать методы объекта:
// 1.	Get property – возвращает значение свойства command первого элемента в массиве объектов commands и меняет значение свойства id остальных элементов этого массива соответственно их положению.
//
// 2.	Set property – как параметр принимает значение свойства command для нового элемента. Результатом работы метода должен стать дополненный массив объектов commands.
//
// 3.	showQueue – выводит список элементов массива объектом commands в формате N. command.
// Например:
// 1. go
// 2. rotate
// 3. push
// 4. pop
// …

var HappyBirthday = {
    hDays: [
        {name: "Dave", month: "09", day: "04"},
        {name: "Ann", month: "02", day: "27"},
        {name: "Nik", month: "08", day: "15"},
        {name: "Pul", month: "02", day: "18"},
        {name: "Steven", month: "07", day: "24"},
        {name: "Frank", month: "02", day: "13"},
    ],
    get property() {
        var names = [];
        for (var i = 0; i < this.hDays.length; i++) {
            names.push(this.hDays[i].name);
        }
        return names.join(',')

    },
    set property({name, day}) {
        for (var i = 0; i < this.hDays.length; i++) {
            if (this.hDays[i].day === day || this.hDays[i].name === name)
                var sec = this.hDays[i];
        }
        return sec
    },
    showDaysOnMonth: function (month) {
        var nam = [];
        for (var i = 0; i < this.hDays.length; i++) {
            if (this.hDays[i].month === month)
                nam.push(this.hDays[i].name);
        }
        return nam.join(',')
    },
};
console.log(HappyBirthday.property);
console.log("День Рождение в Августе(08)");
console.log(HappyBirthday.showDaysOnMonth('08'));
console.log(" ");