class Book {
  title: string;
  publishedYear: number;

  constructor(title: string, publishedYear: number) {
    this.title = title;
    this.publishedYear = publishedYear;
  }

  showDetails() {
    console.log(`Book: ${this.title}, published in ${this.publishedYear}.`);
  }
}

const favoriteBook = new Book('O nome do vento', 2007);
favoriteBook.showDetails();