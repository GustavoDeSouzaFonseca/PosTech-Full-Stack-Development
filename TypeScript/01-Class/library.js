var Book = /** @class */ (function () {
    function Book(title, publishedYear) {
        this.title = title;
        this.publishedYear = publishedYear;
    }
    Book.prototype.showDetails = function () {
        console.log("Book: ".concat(this.title, ", published in ").concat(this.publishedYear, "."));
    };
    return Book;
}());
var favoriteBook = new Book('O nome do vento', 2007);
favoriteBook.showDetails();
