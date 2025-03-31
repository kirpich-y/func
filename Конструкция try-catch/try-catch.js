function parseAndDisplayJson(jsonString) {
    try {
        const data = JSON.parse(jsonString);
      
    if (!Array.isArray(data)) {
        throw new Error("Данные не являются массивом");
}
      
        const ul = document.createElement('ul');
        data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
});
      
        document.body.appendChild(ul);
}
    catch (error) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `На странице случилась ошибка: ${error.message}`;
        errorMessage.style.color = 'red';
        document.body.appendChild(errorMessage);
}
}
  
const validJson = '["Элемент 1", "Элемент 2", "Элемент 3"]';
const invalidJson = '{"not": "an array"}';
  
parseAndDisplayJson(validJson);
parseAndDisplayJson(invalidJson);