// ----Кнопки клавиатуры---//
const Button = {
  en: [
    {
      key: '`',
      keyCode: 192,
      keyCapsLk: '`',
      keyShift: '~',
    },
    {
      key: '1',
      keyCode: 49,
      keyCapsLk: '1',
      keyShift: '!',
    },
    {
      key: '2',
      keyCode: 50,
      keyCapsLk: '2',
      keyShift: '@',
    },
    {
      key: '3',
      keyCode: 51,
      keyCapsLk: '3',
      keyShift: '#',
    },
    {
      key: '4',
      keyCode: 52,
      keyCapsLk: '4',
      keyShift: '$',
    },
    {
      key: '5',
      keyCode: 53,
      keyCapsLk: '5',
      keyShift: '%',
    },
    {
      key: '6',
      keyCode: 54,
      keyCapsLk: '6',
      keyShift: '^',
    },
    {
      key: '7',
      keyCode: 55,
      keyCapsLk: '7',
      keyShift: '*',
    },
    {
      key: '8',
      keyCode: 56,
      keyCapsLk: '8',
      keyShift: '*',
    },
    {
      key: '9',
      keyCode: 57,
      keyCapsLk: '9',
      keyShift: '(',
    },
    {
      key: '0',
      keyCode: 48,
      keyCapsLk: '0',
      keyShift: ')',
    },
    {
      key: '-',
      keyCode: 189,
      keyCapsLk: '-',
      keyShift: '_',
    },
    {
      key: '=',
      keyCode: 187,
      keyCapsLk: '=',
      keyShift: '+',
    },
    {
      key: 'Backspace',
      keyCode: 8,
      keyCapsLk: 'Backspace',
      keyShift: 'Backspace',
    },
    {
      key: 'Tab',
      keyCode: 9,
      keyCapsLk: 'Tab',
      keyShift: 'Tab',
    },
    {
      key: 'q',
      keyCode: 81,
      keyCapsLk: 'Q',
      keyShift: 'Q',
    },
    {
      key: 'w',
      keyCode: 87,
      keyCapsLk: 'W',
      keyShift: 'W',
    },
    {
      key: 'e',
      keyCode: 69,
      keyCapsLk: 'E',
      keyShift: 'E',
    },
    {
      key: 'r',
      keyCode: 82,
      keyCapsLk: 'R',
      keyShift: 'R',
    },
    {
      key: 't',
      keyCode: 84,
      keyCapsLk: 'T',
      keyShift: 'T',
    },
    {
      key: 'y',
      keyCode: 89,
      keyCapsLk: 'Y',
      keyShift: 'Y',
    },
    {
      key: 'u',
      keyCode: 85,
      keyCapsLk: 'U',
      keyShift: 'U',
    },
    {
      key: 'i',
      keyCode: 73,
      keyCapsLk: 'I',
      keyShift: 'I',
    },
    {
      key: 'o',
      keyCode: 79,
      keyCapsLk: 'O',
      keyShift: 'O',
    },
    {
      key: 'p',
      keyCode: 80,
      keyCapsLk: 'P',
      keyShift: 'P',
    },
    {
      key: '[',
      keyCode: 219,
      keyCapsLk: '[',
      keyShift: '{',
    },
    {
      key: ']',
      keyCode: 221,
      keyCapsLk: ']',
      keyShift: '}',
    },
    {
      key: 'Enter',
      keyCode: 13,
      keyCapsLk: 'Enter',
      keyShift: 'Enter',
    },
    {
      key: 'CapsLk',
      keyCode: 20,
      keyCapsLk: 'CapsLk',
      keyShift: 'CapsLk',
    },
    {
      key: 'a',
      keyCode: 65,
      keyCapsLk: 'A',
      keyShift: 'A',
    },
    {
      key: 's',
      keyCode: 83,
      keyCapsLk: 'S',
      keyShift: 'S',
    },
    {
      key: 'd',
      keyCode: 68,
      keyCapsLk: 'D',
      keyShift: 'D',
    },
    {
      key: 'f',
      keyCode: 70,
      keyCapsLk: 'F',
      keyShift: 'F',
    },
    {
      key: 'g',
      keyCode: 71,
      keyCapsLk: 'G',
      keyShift: 'G',
    },
    {
      key: 'h',
      keyCode: 72,
      keyCapsLk: 'H',
      keyShift: 'H',
    },
    {
      key: 'j',
      keyCode: 74,
      keyCapsLk: 'J',
      keyShift: 'J',
    },
    {
      key: 'k',
      keyCode: 75,
      keyCapsLk: 'K',
      keyShift: 'K',
    },
    {
      key: 'l',
      keyCode: 76,
      keyCapsLk: 'L',
      keyShift: 'L',
    },
    {
      key: ';',
      keyCode: 186,
      keyCapsLk: ';',
      keyShift: ':',
    },
    {
      key: "'",
      keyCode: 222,
      keyCapsLk: "'",
      keyShift: '"',
    },
    {
      key: '▲',
      keyCode: 38,
      keyCapsLk: '▲',
      keyShift: '▲',
    },
    {
      key: '\\',
      keyCode: 220,
      keyCapsLk: '\\',
      keyShift: '|',
    },
    {
      key: 'Shift',
      keyCode: 16,
      keyCapsLk: 'Shift',
      keyShift: 'Shift',
    },
    {
      key: 'z',
      keyCode: 90,
      keyCapsLk: 'Z',
      keyShift: 'Z',
    },
    {
      key: 'x',
      keyCode: 88,
      keyCapsLk: 'X',
      keyShift: 'X',
    },
    {
      key: 'c',
      keyCode: 67,
      keyCapsLk: 'C',
      keyShift: 'C',
    },
    {
      key: 'v',
      keyCode: 86,
      keyCapsLk: 'V',
      keyShift: 'V',
    },
    {
      key: 'b',
      keyCode: 66,
      keyCapsLk: 'B',
      keyShift: 'B',
    },
    {
      key: 'n',
      keyCode: 78,
      keyCapsLk: 'N',
      keyShift: 'N',
    },
    {
      key: 'm',
      keyCode: 77,
      keyCapsLk: 'M',
      keyShift: 'M',
    },
    {
      key: ',',
      keyCode: 188,
      keyCapsLk: ',',
      keyShift: '<',
    },
    {
      key: '.',
      keyCode: 190,
      keyCapsLk: '.',
      keyShift: '>',
    },
    {
      key: '/',
      keyCode: 191,
      keyCapsLk: '/',
      keyShift: '?',
    },
    {
      key: '◀',
      keyCode: 37,
      keyCapsLk: '◀',
      keyShift: '◀',
    },
    {
      key: '▼',
      keyCode: 40,
      keyCapsLk: '▼',
      keyShift: '▼',
    },
    {
      key: '▶',
      keyCode: 39,
      keyCapsLk: '▶',
      keyShift: '▶',
    },
    {
      key: 'Ctrl',
      keyCode: 17,
      keyCapsLk: 'Ctrl',
      keyShift: 'Ctrl',
    },
    {
      key: 'Win',
      keyCode: 91,
      keyCapsLk: 'Win',
      keyShift: 'Win',
    },
    {
      key: 'Alt',
      keyCode: 18,
      keyCapsLk: 'Alt',
      keyShift: 'Alt',
    },
    {
      key: ' ',
      keyCode: 32,
      keyCapsLk: ' ',
      keyShift: ' ',
    },
  ],
  ru: [
    {
      key: 'ё',
      keyCode: 192,
      keyCapsLk: 'Ё',
      keyShift: 'Ё',
    },
    {
      key: '1',
      keyCode: 49,
      keyCapsLk: '1',
      keyShift: '!',
    },
    {
      key: '2',
      keyCode: 50,
      keyCapsLk: '2',
      keyShift: '"',
    },
    {
      key: '3',
      keyCode: 51,
      keyCapsLk: '3',
      keyShift: '№',
    },
    {
      key: '4',
      keyCode: 52,
      keyCapsLk: '4',
      keyShift: ';',
    },
    {
      key: '5',
      keyCode: 53,
      keyCapsLk: '5',
      keyShift: '%',
    },
    {
      key: '6',
      keyCode: 54,
      keyCapsLk: '6',
      keyShift: ':',
    },
    {
      key: '7',
      keyCode: 55,
      keyCapsLk: '7',
      keyShift: '?',
    },
    {
      key: '8',
      keyCode: 56,
      keyCapsLk: '8',
      keyShift: '*',
    },
    {
      key: '9',
      keyCode: 57,
      keyCapsLk: '9',
      keyShift: '(',
    },
    {
      key: '0',
      keyCode: 48,
      keyCapsLk: '0',
      keyShift: ')',
    },
    {
      key: '-',
      keyCode: 189,
      keyCapsLk: '-',
      keyShift: '_',
    },
    {
      key: '=',
      keyCode: 187,
      keyCapsLk: '=',
      keyShift: '+',
    },
    {
      key: 'Backspace',
      keyCode: 8,
      keyCapsLk: 'Backspace',
      keyShift: 'Backspace',
    },
    {
      key: 'Tab',
      keyCode: 9,
      keyCapsLk: 'Tab',
      keyShift: 'Tab',
    },
    {
      key: 'й',
      keyCode: 81,
      keyCapsLk: 'Й',
      keyShift: 'Й',
    },
    {
      key: 'ц',
      keyCode: 87,
      keyCapsLk: 'Ц',
      keyShift: 'Ц',
    },
    {
      key: 'у',
      keyCode: 69,
      keyCapsLk: 'У',
      keyShift: 'У',
    },
    {
      key: 'к',
      keyCode: 82,
      keyCapsLk: 'К',
      keyShift: 'К',
    },
    {
      key: 'е',
      keyCode: 84,
      keyCapsLk: 'Е',
      keyShift: 'Е',
    },
    {
      key: 'н',
      keyCode: 89,
      keyCapsLk: 'Н',
      keyShift: 'Н',
    },
    {
      key: 'г',
      keyCode: 85,
      keyCapsLk: 'Г',
      keyShift: 'Г',
    },
    {
      key: 'ш',
      keyCode: 73,
      keyCapsLk: 'Ш',
      keyShift: 'Ш',
    },
    {
      key: 'щ',
      keyCode: 79,
      keyCapsLk: 'Щ',
      keyShift: 'Щ',
    },
    {
      key: 'з',
      keyCode: 80,
      keyCapsLk: 'З',
      keyShift: 'З',
    },
    {
      key: 'х',
      keyCode: 219,
      keyCapsLk: 'Х',
      keyShift: 'Х',
    },
    {
      key: 'ъ',
      keyCode: 221,
      keyCapsLk: 'Ъ',
      keyShift: 'Ъ',
    },
    {
      key: 'Enter',
      keyCode: 13,
      keyCapsLk: 'Enter',
      keyShift: 'Enter',
    },
    {
      key: 'CapsLk',
      keyCode: 20,
      keyCapsLk: 'CapsLk',
      keyShift: 'CapsLk',
    },
    {
      key: 'ф',
      keyCode: 65,
      keyCapsLk: 'Ф',
      keyShift: 'Ф',
    },
    {
      key: 'ы',
      keyCode: 83,
      keyCapsLk: 'Ы',
      keyShift: 'Ы',
    },
    {
      key: 'в',
      keyCode: 68,
      keyCapsLk: 'В',
      keyShift: 'В',
    },
    {
      key: 'а',
      keyCode: 70,
      keyCapsLk: 'А',
      keyShift: 'А',
    },
    {
      key: 'п',
      keyCode: 71,
      keyCapsLk: 'П',
      keyShift: 'П',
    },
    {
      key: 'р',
      keyCode: 72,
      keyCapsLk: 'Р',
      keyShift: 'Р',
    },
    {
      key: 'о',
      keyCode: 74,
      keyCapsLk: 'О',
      keyShift: 'О',
    },
    {
      key: 'л',
      keyCode: 75,
      keyCapsLk: 'Л',
      keyShift: 'Л',
    },
    {
      key: 'д',
      keyCode: 76,
      keyCapsLk: 'Д',
      keyShift: 'Д',
    },
    {
      key: 'ж',
      keyCode: 186,
      keyCapsLk: 'Ж',
      keyShift: 'Ж',
    },
    {
      key: 'э',
      keyCode: 222,
      keyCapsLk: 'Э',
      keyShift: 'Э',
    },
    {
      key: '▲',
      keyCode: 38,
      keyCapsLk: '▲',
      keyShift: '▲',
    },
    {
      key: '\\',
      keyCode: 220,
      keyCapsLk: '\\',
      keyShift: '/',
    },
    {
      key: 'Shift',
      keyCode: 16,
      keyCapsLk: 'Shift',
      keyShift: 'Shift',
    },
    {
      key: 'я',
      keyCode: 90,
      keyCapsLk: 'Я',
      keyShift: 'Я',
    },
    {
      key: 'ч',
      keyCode: 88,
      keyCapsLk: 'Ч',
      keyShift: 'Ч',
    },
    {
      key: 'с',
      keyCode: 67,
      keyCapsLk: 'С',
      keyShift: 'С',
    },
    {
      key: 'м',
      keyCode: 86,
      keyCapsLk: 'М',
      keyShift: 'М',
    },
    {
      key: 'и',
      keyCode: 66,
      keyCapsLk: 'И',
      keyShift: 'И',
    },
    {
      key: 'т',
      keyCode: 78,
      keyCapsLk: 'Т',
      keyShift: 'Т',
    },
    {
      key: 'ь',
      keyCode: 77,
      keyCapsLk: 'Ь',
      keyShift: 'Ь',
    },
    {
      key: 'б',
      keyCode: 188,
      keyCapsLk: 'Б',
      keyShift: 'Б',
    },
    {
      key: 'ю',
      keyCode: 190,
      keyCapsLk: 'Ю',
      keyShift: 'Ю',
    },
    {
      key: '.',
      keyCode: 191,
      keyCapsLk: '.',
      keyShift: ',',
    },
    {
      key: '◀',
      keyCode: 37,
      keyCapsLk: '◀',
      keyShift: '◀',
    },
    {
      key: '▼',
      keyCode: 40,
      keyCapsLk: '▼',
      keyShift: '▼',
    },
    {
      key: '▶',
      keyCode: 39,
      keyCapsLk: '▶',
      keyShift: '▶',
    },
    {
      key: 'Ctrl',
      keyCode: 17,
      keyCapsLk: 'Ctrl',
      keyShift: 'Ctrl',
    },
    {
      key: 'Win',
      keyCode: 91,
      keyCapsLk: 'Win',
      keyShift: 'Win',
    },
    {
      key: 'Alt',
      keyCode: 18,
      keyCapsLk: 'Alt',
      keyShift: 'Alt',
    },
    {
      key: ' ',
      keyCode: 32,
      keyCapsLk: ' ',
      keyShift: ' ',
    },
  ],
};

/* -----Формирование массивов кнопок----*/
let ArrButton = Button.en;
const ArrOfficeButton = [8, 9, 13, 20, 16, 17, 18, 91];
const ArrButtonCode = ArrButton.map((index) => index.keyCode);

const body = document.querySelector('body');

/* ----Вставка заголовка---*/
function Text1() {
  const text = document.createElement('div');
  text.classList.add('text');
  body.append(text);
  text.textContent = 'RSS Виртуальная клавиатура';
}
Text1();

/* ----Вставка textarea---*/
const textarea = document.createElement('textarea');
function Textarea() {
  textarea.setAttribute('cols', '100');
  textarea.setAttribute('rows', '10');
  body.append(textarea);
}
Textarea();

/* ----Вставка клавиатуры---*/
function Keyboard() {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  body.append(keyboard);
}
Keyboard();

function addButton() {
  let AddBut = '';
  for (let i = 0; i < ArrButton.length; i += 1) {
    if (ArrOfficeButton.includes(ArrButton[i].keyCode)) {
      AddBut += `<button class="button-keyboard ${ArrButton[i].key}" data-code="${ArrButton[i].keyCode}">${ArrButton[i].key}</button>`;
    } else if (ArrButton[i].keyCode === 32) {
      AddBut += `<button class="button-keyboard Space" data-code="${ArrButton[i].keyCode}">${ArrButton[i].key}</button>`;
    } else if (ArrButton[i].keyCode === 37 || 38 || 39 || 40) {
      AddBut += `<button class="button-keyboard ${ArrButton[i].key}" data-code="${ArrButton[i].keyCode}">${ArrButton[i].key}</button>`;
    } else {
      AddBut += `<button class="button-keyboard" data-code="${ArrButton[i].keyCode}">${ArrButton[i].key}</button>`;
    }
  }
  document.querySelector('.keyboard').innerHTML = AddBut;
}
addButton();

/* ----Вставка OC Windows---*/
function Text2() {
  const text = document.createElement('div');
  text.classList.add('text');
  body.append(text);
  text.textContent = 'Клавиатура создана в операционной системе Windows';
}
Text2();

/* ----Вставка переключения языка---*/
function Text3() {
  const text = document.createElement('div');
  text.classList.add('text');
  body.append(text);
  text.textContent = 'Для переключения языка комбинация: левые Ctrl+Alt';
}
Text3();

/* ---------Добавление функциональности клавиатуры-------*/

/* --------- -подсветка -------*/
function offLight(index) {
  for (let i = 0; i < index.length; i += 1) {
    index[i].classList.remove('active');
  }
}

/* --------- +подсветка клавишами -------*/
function onLightButton(event) {
  const buttonKeyboard = document.querySelectorAll('.button-keyboard');
  if (ArrButtonCode.includes(event.keyCode)) {
    offLight(buttonKeyboard);
    setTimeout(() => offLight(buttonKeyboard), 350);
    const activeButton = document.querySelector(`[data-code="${event.keyCode}"]`);
    activeButton.classList.add('active');
  }
}

/* --------- +подсветка кликом мыши -------*/
function onLightClick(event) {
  const buttonKeyboard = document.querySelectorAll('.button-keyboard');
  const clickKey = Number(event.target.dataset.code);
  if (ArrButtonCode.includes(clickKey)) {
    offLight(buttonKeyboard);
    setTimeout(() => offLight(buttonKeyboard), 350);
    const activeButton = document.querySelector(`[data-code="${clickKey}"]`);
    activeButton.classList.add('active');
  }
}

/* --------- смена языка -------*/
function changeLng() {
  if (ArrButton === Button.ru) {
    ArrButton = Button.en;
  } else {
    ArrButton = Button.ru;
  }
  addButton();
}

/* --------- подсветка при смене языка -------*/
function onLightchangeLng(event) {
  const ctrlKey = document.querySelector(`[data-code="${17}"]`);
  const altKey = document.querySelector(`[data-code="${18}"]`);
  if (event.ctrlKey) {
    ctrlKey.classList.add('active-lng');
  } else if (event.altKey) {
    altKey.classList.add('active-lng');
  } else {
    ctrlKey.classList.remove('active-lng');
    altKey.classList.remove('active-lng');
  }
}

/* --------- +тестовка клавишами -------*/
function addTextButton(event) {
  if (ArrButtonCode.includes(event.keyCode) && !ArrOfficeButton.includes(event.keyCode)) {
    const addKey = document.querySelector(`[data-code="${event.keyCode}"]`);
    textarea.setRangeText(addKey.textContent, textarea.selectionStart, textarea.selectionEnd, 'end');
  }
  if (event.keyCode === 9) {
    textarea.value += '\t';
  }
  if (event.keyCode === 13) {
    textarea.value += '\n';
  }
  textarea.focus();
}

/* --------- +тестовка мышью -------*/
function addTextClick(event) {
  const clickKey = Number(event.target.dataset.code);
  if (ArrButtonCode.includes(clickKey) && !ArrOfficeButton.includes(clickKey)) {
    const addKey = document.querySelector(`[data-code="${clickKey}"]`);
    if (event.shiftKey) {
      for (let i = 0; i < ArrButton.length; i += 1) {
        if (ArrButton[i].keyCode === clickKey) {
          textarea.setRangeText(ArrButton[i].keyShift, textarea.selectionStart, textarea.selectionEnd, 'end');
        }
      }
    } else {
      textarea.setRangeText(addKey.textContent, textarea.selectionStart, textarea.selectionEnd, 'end');
    }
  }
  if (clickKey === 9) {
    textarea.value += '\t';
  }
  if (clickKey === 13) {
    textarea.value += '\n';
  }
}

/* --------- -тестовка -------*/
function delText() {
  if (textarea.selectionStart !== textarea.selectionEnd) {
    textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd, 'end');
  } else if (textarea.selectionStart > 0) {
    textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd, 'end');
  }
}

/* ------ +Shift ------*/
function onShift() {
  const buttonKeyboard = document.querySelectorAll('.button-keyboard'); // Все кнопочки клавиатуры
  const shift = document.querySelector(`[data-code="${16}"]`);
  shift.classList.add('active-lng');
  for (let i = 0; i < ArrButton.length; i += 1) {
    buttonKeyboard[i].textContent = ArrButton[i].keyShift;
  }
}

/* ------ -Shift ------*/
function offShift() {
  const buttonKeyboard = document.querySelectorAll('.button-keyboard'); // Все кнопочки клавиатуры
  const shift = document.querySelector(`[data-code="${16}"]`);
  shift.classList.remove('active-lng');
  const caps = document.querySelector('.CapsLk');
  if (caps.classList.contains('caps-active')) {
    for (let i = 0; i < ArrButton.length; i += 1) {
      buttonKeyboard[i].textContent = ArrButton[i].keyCapsLk;
    }
  } else {
    for (let i = 0; i < ArrButton.length; i += 1) {
      buttonKeyboard[i].textContent = ArrButton[i].key;
    }
  }
}

/* ------ +-CapsLk ------*/
function onOffCapsLk() {
  const buttonKeyboard = document.querySelectorAll('.button-keyboard'); // Все кнопочки клавиатуры
  const capsLk = document.querySelector('.CapsLk');
  capsLk.classList.toggle('caps-active');
  if (capsLk.classList.contains('caps-active')) {
    for (let i = 0; i < ArrButton.length; i += 1) {
      buttonKeyboard[i].textContent = ArrButton[i].keyCapsLk;
    }
  } else {
    for (let i = 0; i < ArrButton.length; i += 1) {
      buttonKeyboard[i].textContent = ArrButton[i].key;
    }
  }
}

/* ------ keydown ------*/
document.addEventListener('keydown', (event) => {
  event.preventDefault();
  onLightButton(event);
  addTextButton(event);
  if (event.keyCode === 8) {
    delText();
  }
  if (event.keyCode === 20) {
    onOffCapsLk();
  }
  onLightchangeLng(event);
  if (event.ctrlKey && event.altKey) {
    changeLng();
  }
  if (event.shiftKey) {
    onShift();
  }
});

/* ------ keyup ------*/
document.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (!event.shiftKey) {
    offShift();
  }
});

/* ------ click ------*/
document.addEventListener('click', (event) => {
  event.preventDefault();
  onLightClick(event);
  addTextClick(event);
  if (Number(event.target.dataset.code) === 8) {
    delText();
  }
  if (Number(event.target.dataset.code) === 20) {
    onOffCapsLk();
  }
});

/* ------ mousedown ------*/
document.addEventListener('mousedown', (event) => {
  if (Number(event.target.dataset.code) === 16) {
    onShift();
  }
});

/* ------ mouseup ------*/
document.addEventListener('mouseup', () => {
  offShift();
});
