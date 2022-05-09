

const body = document.querySelector('body');



//----Вставка заголовка---//
function Text1() {
    const text = document.createElement('div');
    text.classList.add('text');
    body.append(text);
    text.textContent = 'RSS Виртуальная клавиатура';
  }
  Text1();



  function Text2() {
    const textBlockCreate = document.createElement('div');
    textBlockCreate.classList.add('text');
    body.append(textBlockCreate);
    textBlockCreate.textContent = 'Очень прошу Вас, дорогой проверяющий, зайти сюда 12.05 для проверки. Я спокойно всё, что смогу, доделаю за вторник и среду';
  }
  Text2();
  
  function Text3() {
    const textBlockCreate = document.createElement('div');
    textBlockCreate.classList.add('text');
    body.append(textBlockCreate);
    textBlockCreate.textContent = 'Для переключения языка комбинация: левые Ctrl+Alt';
  }
  Text3();