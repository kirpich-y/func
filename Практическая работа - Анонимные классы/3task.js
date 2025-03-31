class Text {
    constructor(content) {
      this.content = content;
    }
  
    getCharCount() {
      return this.content.length;
    }
  
    getLetterCount() {
      return this.content.replace(/[^a-zA-Zа-яА-Я]/g, '').length;
    }
  
    getSpaceCount() {
      return this.content.split(' ').length - 1;
    }
  
    getWords() {
      return this.content.split(/\s+/).filter(word => word.length > 0);
    }
  }
  
  const myText = new Text("JavaScript - это язык программирования для веб-разработки.");
  
  console.log(`Текст: "${myText.content}"`);
  console.log(`Количество символов: ${myText.getCharCount()}`);
  console.log(`Количество букв: ${myText.getLetterCount()}`);
  console.log(`Количество пробелов: ${myText.getSpaceCount()}`);
  console.log(`Массив слов:`, myText.getWords());