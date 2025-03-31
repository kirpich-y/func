class User {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  }
  
  class Employee extends User {
    constructor(name, age, country, profession, department, salary) {
      super(name, age, country);
      this.profession = profession;
      this.department = department;
      this.salary = salary;
    }
  }
  
  const user = new User("Иван", 30, "Россия");
  const employee = new Employee("Мария", 28, "Беларусь", "Разработчик", "IT", 2500);
  
  console.log("Пользователь:", user);
  console.log("Сотрудник:", employee);