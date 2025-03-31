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
  
  const emp = new Employee("Mike", 35, 5000);
  emp.profession = "Engineer";
  emp.department = "IT";
  
  console.log(emp.profession);
  console.log(emp.department);