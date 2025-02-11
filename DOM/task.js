document.getElementById('button1').onclick = () => alert(1);
document.getElementById('button2').onclick = () => alert(2);
document.getElementById('button3').onclick = () => alert(3);

document.getElementById('doubleClickBtn').ondblclick = () =>
    alert('Сообщение при двойном клике');
document.getElementById('changeBtn').onclick = () =>
    document.getElementById('myParagraph').textContent = 'Новый текст';
document.getElementById('hrefBtn').onclick = () =>
    document.getElementById('hrefDisplay').textContent =
        document.getElementById('myLink').href;
document.getElementById('incrementBtn').onclick = function() {
  this.value = parseInt(this.value) + 1;
};
document.getElementById('textInput').onblur = function() {
  document.getElementById('resultText').textContent += this.value;
  this.value = '';
}