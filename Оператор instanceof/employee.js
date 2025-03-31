class Employee {
    #name;
    #age;
    #salary;
  
    constructor(name, age, salary) {
      this.#name = name;
      this.#age = age;
      this.#salary = salary;
    }
  
    get name() {
      return this.#name;
    }
  
    get age() {
      return this.#age;
    }
  
    get salary() {
      return this.#salary;
    }
  }