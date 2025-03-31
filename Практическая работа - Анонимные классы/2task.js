class Book {
    #title;
    #author;
    #year;
  
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    get title() {
      return this.#title;
    }
  
    set title(value) {
      if (typeof value === 'string' && value.length > 0) {
        this.#title = value;
      } else {
        console.error('Название должно быть непустой строкой');
      }
    }
  
    get author() {
      return this.#author;
    }
  
    set author(value) {
      if (typeof value === 'string' && value.length > 0) {
        this.#author = value;
      } else {
        console.error('Автор должен быть непустой строкой');
      }
    }
  
    get year() {
      return this.#year;
    }
  
    set year(value) {
      const currentYear = new Date().getFullYear();
      if (Number.isInteger(value) && value > 0 && value <= currentYear) {
        this.#year = value;
      } else {
        console.error(`Год должен быть числом между 1 и ${currentYear}`);
      }
    }
  
    displayInfo() {
      console.log(`Книга: ${this.title}`);
      console.log(`Автор: ${this.author}`);
      console.log(`Год издания: ${this.year}`);
    }
  }
  
  const myBook = new Book("1984", "Джордж Оруэлл", 1949);
  myBook.displayInfo();
  
  myBook.title = "Скотный двор";
  myBook.year = 1945;
  console.log(`Новое название: ${myBook.title}`);