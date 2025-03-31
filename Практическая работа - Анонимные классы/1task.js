const ProgramInfo = class {
    constructor(name, type, language) {
      this.name = name;
      this.type = type;
      this.language = language;
    }
  
    getInfo() {
      return `Название проекта: ${this.name}\nТип проекта: ${this.type}\nЯзык программирования: ${this.language}`;
    }
  };
  
  const myProgram = new ProgramInfo(
    "Мой проект",
    "Веб-приложение",
    "JavaScript"
  );
  
  console.log(myProgram.getInfo());