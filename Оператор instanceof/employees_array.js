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
  
    get department() {
      return this.#department;
    }
  
    set profession(value) {
      this.#profession = value;
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