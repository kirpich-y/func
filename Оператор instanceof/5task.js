class Person {
    constructor(name, age, profession, hobbies) {
      this.name = name;
      this.age = age;
      this.profession = profession;
      this.hobbies = hobbies;
    }
  
    #formatAge() {
      return `${this.age} years`;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.#formatAge()}`);
      console.log(`Profession: ${this.profession}`);
      console.log(`Hobbies: ${this.hobbies.join(', ')}`);
    }
  }
  
const person1 = new Person("John", 30, "Developer", ["reading", "hiking"]);
const person2 = new Person("Alice", 25, "Designer", ["painting", "traveling"]);
person1.displayInfo();
person2.displayInfo();
  
  class Employee {
    #name;
    #age;
    #salary;
    #profession;
    #department;
  
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
  
    get profession() {
      return this.#profession;
    }
  
    set profession(value) {
      this.#profession = value;
    }
  
    get department() {
      return this.#department;
    }
  
    set department(value) {
      this.#department = value;
    }
  }
  
  const employees = [
    new Employee("Sarah", 28, 4000),
    new Employee("David", 32, 4500),
    new Employee("Emma", 24, 3500)
  ];
  
  employees[0].profession = "Manager";
  employees[0].department = "Administration";
  employees[1].profession = "Developer";
  employees[1].department = "IT";
  employees[2].profession = "Designer";
  employees[2].department = "Marketing";
  
  employees.forEach(emp => {
    console.log(`${emp.name} works in ${emp.department} department`);
  });
  
  const emp1 = new Employee("Tom", 40, 6000);
  const emp2 = new Employee("Lisa", 29, 4200);
  const notEmp = { name: "Bob" };
  
  console.log(emp1 instanceof Employee);
  console.log(emp2 instanceof Employee);
  console.log(notEmp instanceof Employee);
  
  employees.forEach((emp, index) => {
    console.log(`Employee ${index + 1} is instance of Employee: ${emp instanceof Employee}`);
  });