// Задание 3. Придумайте и создайте объект, который должен иметь:
// •	2 изменяемых свойства. (Number or string)
// •	3 неизменяемых свойства. (Boolean or string, и один массив)
// •	2 метода:
//           o  Первый должен изменять одно из свойств.
//           o  Второй выводить информацию со значениями свойств.
//           o	Третьим методом будет свойство-аксессор. Get или Set на выбор.

var library = {
    shelf: 100,
    books: 45,
    show_about: function (sh, bk) {
        console.log("В Библиотеке " + this.library_names + " находится " + sh + " полок по " + bk + " книг " + "и среди них есть " + this.special_library + ". " + "\nВсего книг в библиотеке - " + (sh * bk) + "." + "В Библиотеке имеется множество " + " писателей " + " такие как  " + this.shelf_names + ".")
    },
    replenishment: function (new_shelf) {
        this.shelf += new_shelf;
        console.log("Изменилось количество полок : " + library.shelf);
    },
    set property(count) {
        this.book = count;
    },
};
Object.defineProperty(library, 'shelf_names', {
    value: ["Лермонтов", "Булгаков", "Гоголь", "Пушкин", " и т.д"],
});
Object.defineProperty(library, 'library_names', {
    value: "имени А. С. Пушкина",
});
Object.defineProperty(library, 'special_library', {
    value: "редкие книги",
});
var shelff = library.shelf;
var booksf = library.books;
var new_shelf = 10;
library.show_about(shelff, booksf);
library.replenishment(new_shelf);
library.property = 50;
console.log("Кол-во книг на полках сейчас : " + library.books);