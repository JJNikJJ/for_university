//Реализовать методы объекта:
// 1.	Get property – возвращает строку из значений свойства name всех элементов массива объектов hDays (разделителем будет “,”). Принцип работы будет заключаться в создании нового массива names и использовании метода для объединения элементов массива в строку.
//
// 2.	Set property – как параметр принимает объект с двумя свойствами name (имя) и day (месяц и день, разделенные “/”). Результатом работы метода должен стать дополненный массив объектов hDays.
//
// 3.	showDaysOnMonth(month) – выводит список имен людей, у которых день рождения в месяце с номером month.
// 	Учтите в своей программе:
// •	Имена, вне зависимости от их первоначального написания, должны сохраняться в формате: Имя (только первая буква - заглавная).
// •	Номер месяца и дня должны содержать две цифры, например Январь – 01. Но параметр может содержать и одну.
// •	Проверку на логичность ввода месяца и дня.

Queue = {
    commands: [
        {id: "1-command", command: "go"},
        {id: "2-command", command: "rotate"},
        {id: "3-command", command: "push"},
        {id: "4-command", command: "pop"},
        {id: "5-command", command: "reverse"},
    ],
    get property() {
        var arr = this.commands[0].command;
        for (var i = 1; i < this.commands.length; i++) {
            var arr2 = this.commands[i].id.split("-");
            var newID = i + "-" + arr2[1];
            this.commands[i - 1].id = newID;
            this.commands[i - 1].command = this.commands[i].command;
        }
        this.commands = this.commands.slice(0, this.commands.length - 1)
        return arr;
    },
    set property(command) {
        var arr = this.commands[0].id.split("-");
        var newID = this.commands.length + 2 + "-" + arr[1];
        var newEl = {id: newID, command: command}
        this.commands = this.commands.concat(newEl);
    }
    ,
    showQueue: function () {
        for (var i = 0; i < this.commands.length; i++)
            console.log(i + 1 + ". " + this.commands[i].command);
    }
};
Queue.showQueue();
console.log(" ");
Queue.property = "push back";
console.log(" ");
Queue.showQueue();
console.log("");
console.log("Первый элемент объекта :")
console.log(Queue.property);
console.log("");
Queue.showQueue();
