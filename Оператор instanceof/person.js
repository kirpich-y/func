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