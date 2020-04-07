/* eslint-disable quotes */
/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable default-case */
/* eslint-disable no-plusplus */

/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-sequences */
/* eslint-disable no-unexpected-multiline */

const ArrKey = [
    [
        {
            code: 'Backquote', en: '`', EN: '~', ru: 'ё', RU: 'Ё', letterEn: 0, letterRu: 1, activeKey: 0,
        },
        {
            code: 'Digit1', en: '1', EN: '!', ru: '1', RU: '!', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
            code: 'Digit2', en: '2', EN: '@', ru: '2', RU: '"', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
            code: 'Digit3', en: '3', EN: '#', ru: '3', RU: '№', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
            code: 'Digit4', en: '4', EN: '$', ru: '4', RU: ';', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
            code: 'Digit5', en: '5', EN: '%', ru: '5', RU: '%', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
            code: 'Digit6', en: '6', EN: '^', ru: '6', RU: ':', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
            code: 'Digit7', en: '7', EN: '&', ru: '7', RU: '?', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
            code: 'Digit8', en: '8', EN: '*', ru: '8', RU: '*', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
            code: 'Digit9', en: '9', EN: '(', ru: '9', RU: '(', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
            code: 'Digit0', en: '0', EN: ')', ru: '0', RU: ')', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
            code: 'Minus', en: '-', EN: '_', ru: '-', RU: '_', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
            code: 'Equal', en: '=', EN: '+', ru: '=', RU: '+', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
            code: 'Backspace', en: 'Backspace', EN: 'Backspace', ru: 'Backspace', RU: 'Backspace', letterEn: 0, letterRu: 0, activeKey: 1,
        },
    ],
    [
        {
            code: 'Tab', en: 'Tab', EN: 'Tab', ru: 'Tab', RU: 'Tab', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
            code: 'KeyQ', en: 'q', EN: 'Q', ru: 'й', RU: 'Й', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyW', en: 'w', EN: 'W', ru: 'ц', RU: 'Ц', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyE', en: 'e', EN: 'E', ru: 'у', RU: 'У', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyR', en: 'r', EN: 'R', ru: 'к', RU: 'К', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyT', en: 't', EN: 'T', ru: 'е', RU: 'Е', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyY', en: 'y', EN: 'Y', ru: 'н', RU: 'Н', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyU', en: 'u', EN: 'U', ru: 'г', RU: 'Г', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyI', en: 'i', EN: 'I', ru: 'ш', RU: 'Ш', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyO', en: 'o', EN: 'O', ru: 'щ', RU: 'Щ', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyP', en: 'p', EN: 'P', ru: 'з', RU: 'З', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'BracketLeft', en: '[', EN: '{', ru: 'х', RU: 'Х', letterEn: 0, letterRu: 1, activeKey: 0,
        },
        {
            code: 'BracketRight', en: ']', EN: '}', ru: 'ъ', RU: 'Ъ', letterEn: 0, letterRu: 1, activeKey: 0,
        },
        {
            code: 'Delete', en: 'Del', EN: 'Del', ru: 'Del', RU: 'Del', letterEn: 0, letterRu: 0, activeKey: 1,
        },
    ],
    [
        {
            code: 'CapsLock', en: 'CapsLock', EN: 'CapsLock', RU: 'CapsLock', ru: 'CapsLock', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
            code: 'KeyA', en: 'a', EN: 'A', RU: 'Ф', ru: 'ф', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyS', en: 's', EN: 'S', RU: 'Ы', ru: 'ы', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyD', en: 'd', EN: 'D', RU: 'В', ru: 'в', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyF', en: 'f', EN: 'F', RU: 'А', ru: 'а', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyG', en: 'g', EN: 'G', RU: 'П', ru: 'п', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyH', en: 'h', EN: 'H', RU: 'Р', ru: 'р', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyJ', en: 'j', EN: 'J', RU: 'О', ru: 'о', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyK', en: 'k', EN: 'K', RU: 'Л', ru: 'л', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyL', en: 'l', EN: 'L', RU: 'Д', ru: 'д', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'Semicolon', en: ';', EN: ':', RU: 'Ж', ru: 'ж', letterEn: 0, letterRu: 1, activeKey: 0,
        },
        {
            code: 'Quote', en: "'", EN: '"', RU: 'Э', ru: 'э', letterEn: 0, letterRu: 1, activeKey: 0,
        },
        {
            code: 'Enter', en: 'Enter', EN: 'Enter', RU: 'Enter', ru: 'Enter', letterEn: 0, letterRu: 0, activeKey: 1,
        },
    ],
    [
        {
            code: 'ShiftLeft', en: 'Shift', EN: 'Shift', RU: 'Shift', ru: 'Shift', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
            code: 'Backslash', en: '\\', EN: '|', ru: '\\', RU: '/', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
            code: 'KeyZ', en: 'z', EN: 'Z', RU: 'Я', ru: 'я', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyX', en: 'x', EN: 'X', RU: 'Ч', ru: 'ч', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyC', en: 'c', EN: 'C', RU: 'С', ru: 'с', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyB', en: 'b', EN: 'B', RU: 'И', ru: 'и', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyN', en: 'n', EN: 'N', RU: 'Т', ru: 'т', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'KeyM', en: 'm', EN: 'M', RU: 'Ь', ru: 'ь', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
            code: 'Comma', en: ',', EN: '<', RU: 'Б', ru: 'б', letterEn: 0, letterRu: 1, activeKey: 0,
        },
        {
            code: 'Period', en: '.', EN: '>', RU: 'Ю', ru: 'ю', letterEn: 0, letterRu: 1, activeKey: 0,
        },
        {
            code: 'Slash', en: '/', EN: '?', RU: '.', ru: ',', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
            code: 'ArrowUp', en: '^', EN: '^', RU: '^', ru: '^', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
            code: 'ShiftRight', en: 'Shift', EN: 'Shift', RU: 'Shift', ru: 'Shift', letterEn: 0, letterRu: 0, activeKey: 1,
        },
    ],
    [
        {
            code: 'ControlLeft', en: 'Ctrl', EN: 'Ctrl', RU: 'Ctrl', ru: 'Ctrl', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
            code: 'MetaLeft', en: 'Win', EN: 'Win', RU: 'Win', ru: 'Win', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
            code: 'AltLeft', en: 'Alt', EN: 'Alt', RU: 'Alt', ru: 'Alt', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
            code: 'Space', en: ' ', EN: ' ', RU: ' ', ru: ' ', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
            code: 'AltRight', en: 'alt', EN: 'alt', RU: 'alt', ru: 'alt', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
            code: 'ControlRight', en: 'Ctrl', EN: 'Ctrl', RU: 'Ctrl', ru: 'Ctrl', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
            code: 'ArrowLeft', en: '<', EN: '<', RU: '<', ru: '<', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
            code: 'ArrowDown', en: 'v', EN: 'v', RU: 'v', ru: 'v', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
            code: 'ArrowRight', en: '>', EN: '>', RU: '>', ru: '>', letterEn: 0, letterRu: 0, activeKey: 1,
        },
    ],
];
let shiftFlag = 0;
let languageFlag = (localStorage.getItem('languageFlag')) ? localStorage.getItem('languageFlag') : 'RU';
localStorage.setItem('languageFlag', languageFlag);

function PrintContent() {
    // добавление textarea
    const textarea = document.createElement('textarea');
    textarea.setAttribute('autofocus', 'autofocus');
    textarea.classList.add('textarea');
    document.body.appendChild(textarea);

    // захват textarea
    textarea.addEventListener('blur', () => {
        textarea.focus();
    });

    // добавление div
    const divParent = document.createElement('div');
    divParent.classList.add('keyboard');
    document.body.appendChild(divParent);


    // добавление дивов строк
    for (let i = 0; i < 5; i++) {
        const div = document.createElement('div');
        div.classList.add('keyboard__row');
        divParent.appendChild(div);
    }

    // добавление подписи переключения языка
    const divCaption = document.createElement('div');
    divCaption.classList.add('caption');
    document.body.appendChild(divCaption);
    divCaption.textContent = 'Для переключения языка на физической клавиатуре нажмите: alt+shift, на виртуальной: Win';

    // отмена
    document.addEventListener('keydown', (evt) => {
        if (evt.code === 'AltRight' || evt.code === 'AltLeft') {
            evt.preventDefault();
        }
    });
}

function PrintKeyboard(key, shift) {
    if (shift) {
        if (key === 'ru') {
            const rows = document.querySelectorAll('.keyboard__row');
            rows.forEach((el, i) => {
                let out = '';
                for (let j = 0; j < ArrKey[i].length; j++) {
                    out += `<div class ="k-key ${ArrKey[i][j].code}">${ArrKey[i][j].RU}</div>`;
                }
                el.innerHTML = out;
            });
        }
        if (key === 'RU') {
            const rows = document.querySelectorAll('.keyboard__row');
            rows.forEach((el, i) => {
                let out = '';
                for (let j = 0; j < ArrKey[i].length; j++) {
                    if (ArrKey[i][j].letterRu === 1) {
                        out += `<div class ="k-key ${ArrKey[i][j].code}">${ArrKey[i][j].ru}</div>`;
                    } else {
                        out += `<div class ="k-key ${ArrKey[i][j].code}">${ArrKey[i][j].RU}</div>`;
                    }
                }
                el.innerHTML = out;
            });
        }
        if (key === 'EN') {
            const rows = document.querySelectorAll('.keyboard__row');
            rows.forEach((el, i) => {
                let out = '';
                for (let j = 0; j < ArrKey[i].length; j++) {
                    if (ArrKey[i][j].letterRu === 1) {
                        out += `<div class ="k-key ${ArrKey[i][j].code}">${ArrKey[i][j].en}</div>`;
                    } else {
                        out += `<div class ="k-key ${ArrKey[i][j].code}">${ArrKey[i][j].EN}</div>`;
                    }
                }
                el.innerHTML = out;
            });
        }
        if (key === 'en') {
            const rows = document.querySelectorAll('.keyboard__row');
            rows.forEach((el, i) => {
                let out = '';
                for (let j = 0; j < ArrKey[i].length; j++) {
                    out += `<div class ="k-key ${ArrKey[i][j].code}">${ArrKey[i][j].EN}</div>`;
                }
                el.innerHTML = out;
            });
        }
    } else {
        if (key === 'ru') {
            const rows = document.querySelectorAll('.keyboard__row');
            rows.forEach((el, i) => {
                let out = '';
                for (let j = 0; j < ArrKey[i].length; j++) {
                    out += `<div class ="k-key ${ArrKey[i][j].code}">${ArrKey[i][j].ru}</div>`;
                }
                el.innerHTML = out;
            });
        }
        if (key === 'RU') {
            const rows = document.querySelectorAll('.keyboard__row');
            rows.forEach((el, i) => {
                let out = '';
                for (let j = 0; j < ArrKey[i].length; j++) {
                    if (ArrKey[i][j].letterRu === 1) {
                        out += `<div class ="k-key ${ArrKey[i][j].code}">${ArrKey[i][j].RU}</div>`;
                    } else {
                        out += `<div class ="k-key ${ArrKey[i][j].code}">${ArrKey[i][j].ru}</div>`;
                    }
                }
                el.innerHTML = out;
            });
        }
        if (key === 'EN') {
            const rows = document.querySelectorAll('.keyboard__row');
            rows.forEach((el, i) => {
                let out = '';
                for (let j = 0; j < ArrKey[i].length; j++) {
                    if (ArrKey[i][j].letterEn === 1) {
                        out += `<div class ="k-key ${ArrKey[i][j].code}">${ArrKey[i][j].EN}</div>`;
                    } else {
                        out += `<div class ="k-key ${ArrKey[i][j].code}">${ArrKey[i][j].en}</div>`;
                    }
                }
                el.innerHTML = out;
            });
        }
        if (key === 'en') {
            const rows = document.querySelectorAll('.keyboard__row');
            rows.forEach((el, i) => {
                let out = '';
                for (let j = 0; j < ArrKey[i].length; j++) {
                    out += `<div class ="k-key ${ArrKey[i][j].code}">${ArrKey[i][j].en}</div>`;
                }
                el.innerHTML = out;
            });
        }
    }
}

    PrintContent();
    PrintKeyboard(languageFlag, 0);

    // переключение языков и капса


document.addEventListener('keydown', (evt) => {
    if (evt.shiftKey && evt.altKey) {
        switch (languageFlag) {
            case 'en':
                languageFlag = 'ru';
                break;
            case 'EN':
                languageFlag = 'RU';
                break;
            case 'RU':
                languageFlag = 'EN';
                break;
            case 'ru':
                languageFlag = 'en';
                break;
        }
        PrintKeyboard(languageFlag, false);
    } else if (evt.code === 'CapsLock') {
        switch (languageFlag) {
            case 'en':
                languageFlag = 'EN';
                break;
            case 'EN':
                languageFlag = 'en';
                break;
            case 'RU':
                languageFlag = 'ru';
                break;
            case 'ru':
                languageFlag = 'RU';
                break;
        }
        PrintKeyboard(languageFlag, false);
    } else if (evt.shiftKey) {
        PrintKeyboard(languageFlag, true);
        shiftFlag = 1;
    }
    localStorage.setItem('languageFlag', languageFlag);
});

    // подсвечивание кнопок при нажатии и печать
const textareaSelector = document.querySelector('.textarea');
document.addEventListener('keydown', (evt) => {
    for (let i = 0; i < ArrKey.length; i++) {
        for (let j = 0; j < ArrKey[i].length; j++) {
            if (evt.code === ArrKey[i][j].code) {
                const pressButton = document.querySelector(`.${evt.code}`);
                pressButton.classList.add('press');
                if (shiftFlag) {
                    switch (languageFlag) {
                        case 'en':
                            if (ArrKey[i][j].activeKey === 0) {
                                evt.preventDefault();
                                const start = textareaSelector.selectionStart;
                                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ArrKey[i][j].EN + textareaSelector.value.substring(textareaSelector.selectionEnd);
                                textareaSelector.selectionEnd = start + 1;
                            }
                            break;
                        case 'EN':
                            if (ArrKey[i][j].activeKey === 0) {
                                evt.preventDefault();
                                const start = textareaSelector.selectionStart;
                                if (ArrKey[i][j].letterEn === 1) {
                                    textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ArrKey[i][j].en + textareaSelector.value.substring(textareaSelector.selectionEnd);
                                } else {
                                    textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ArrKey[i][j].EN + textareaSelector.value.substring(textareaSelector.selectionEnd);
                                }
                                textareaSelector.selectionEnd = start + 1;
                            }
                            break;
                        case 'RU':
                            if (ArrKey[i][j].activeKey === 0) {
                                evt.preventDefault();
                                const start = textareaSelector.selectionStart;
                                if (ArrKey[i][j].letterRu === 1) {
                                    textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ArrKey[i][j].ru + textareaSelector.value.substring(textareaSelector.selectionEnd);
                                } else {
                                    textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ArrKey[i][j].RU + textareaSelector.value.substring(textareaSelector.selectionEnd);
                                }
                                textareaSelector.selectionEnd = start + 1;
                            }
                            break;
                        case 'ru':
                            if (ArrKey[i][j].activeKey === 0) {
                                evt.preventDefault();
                                const start = textareaSelector.selectionStart;
                                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ArrKey[i][j].RU + textareaSelector.value.substring(textareaSelector.selectionEnd);
                                textareaSelector.selectionEnd = start + 1;
                            }
                            break;
                    }
                } else {
                    switch (languageFlag) {
                        case 'en':
                            if (ArrKey[i][j].activeKey === 0) {
                                evt.preventDefault();
                                const start = textareaSelector.selectionStart;
                                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ArrKey[i][j].en + textareaSelector.value.substring(textareaSelector.selectionEnd);
                                textareaSelector.selectionEnd = start + 1;
                            }
                            break;
                        case 'EN':
                            if (ArrKey[i][j].activeKey === 0) {
                                evt.preventDefault();
                                const start = textareaSelector.selectionStart;
                                if (ArrKey[i][j].letterEn === 1) {
                                    textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ArrKey[i][j].EN + textareaSelector.value.substring(textareaSelector.selectionEnd);
                                } else {
                                    textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ArrKey[i][j].en + textareaSelector.value.substring(textareaSelector.selectionEnd);
                                }
                                textareaSelector.selectionEnd = start + 1;
                            }
                            break;
                        case 'RU':
                            if (ArrKey[i][j].activeKey === 0) {
                                evt.preventDefault();
                                const start = textareaSelector.selectionStart;
                                if (ArrKey[i][j].letterRu === 1) {
                                    textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ArrKey[i][j].RU + textareaSelector.value.substring(textareaSelector.selectionEnd);
                                } else {
                                    textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ArrKey[i][j].ru + textareaSelector.value.substring(textareaSelector.selectionEnd);
                                }
                                textareaSelector.selectionEnd = start + 1;
                            }
                            break;
                        case 'ru':
                            if (ArrKey[i][j].activeKey === 0) {
                                evt.preventDefault();
                                const start = textareaSelector.selectionStart;
                                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ArrKey[i][j].ru + textareaSelector.value.substring(textareaSelector.selectionEnd);
                                textareaSelector.selectionEnd = start + 1;
                            }
                            break;
                    }
                }
            }
        }
    }
});


// действие на tab
textareaSelector.addEventListener('keydown', (evt) => {
    if (evt.code === 'Tab') {
        evt.preventDefault();
        const start = textareaSelector.selectionStart;
        textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + "\t" + textareaSelector.value.substring(textareaSelector.selectionEnd);
        textareaSelector.selectionEnd = start + 1;
    }
});

// удвление подсветки при отжатии
document.addEventListener('keyup', (evt) => {
for (let i = 0; i < ArrKey.length; i++) {
    for (let j = 0; j < ArrKey[i].length; j++) {
        if (evt.code === ArrKey[i][j].code) {
            const pressButton = document.querySelector(`.${evt.code}`);
            pressButton.classList.remove('press');
        }
    }
}
});
// когда отжимаешь капс
document.addEventListener('keyup', () => {
    PrintKeyboard(languageFlag, false);
    shiftFlag = 0;
});

document.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('MetaLeft')) {
        switch (languageFlag) {
            case 'en':
                languageFlag = 'ru';
                break;
            case 'EN':
                languageFlag = 'RU';
                break;
            case 'RU':
                languageFlag = 'EN';
                break;
            case 'ru':
                languageFlag = 'en';
                break;
        }
        PrintKeyboard(languageFlag, false);
    } else if (event.target.classList.contains('CapsLock')) {
        switch (languageFlag) {
            case 'en':
                languageFlag = 'EN';
                break;
            case 'EN':
                languageFlag = 'en';
                break;
            case 'RU':
                languageFlag = 'ru';
                break;
            case 'ru':
                languageFlag = 'RU';
                break;
        }
        PrintKeyboard(languageFlag, false);
    } else if (event.target.classList.contains('ShiftLeft') || event.target.classList.contains('ShiftRight')) {
        shiftFlag = true;
        PrintKeyboard(languageFlag, shiftFlag);
    } else if (event.target.classList.contains('Tab')) {
        const start = textareaSelector.selectionStart;
        textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + '\t' + textareaSelector.value.substring(textareaSelector.selectionEnd);
        textareaSelector.selectionEnd = start + 1;
    } else if (event.target.classList.contains('Enter')) {
        const start = textareaSelector.selectionStart;
        textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + '\n' + textareaSelector.value.substring(textareaSelector.selectionEnd);
        textareaSelector.selectionEnd = start + 1;
    } else if (event.target.classList.contains('Delete')) {
        const start = textareaSelector.selectionStart;
        textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + textareaSelector.value.substring(textareaSelector.selectionEnd + 1);
        textareaSelector.selectionEnd = start;
    } else if (event.target.classList.contains('Backspace')) {
        const start = textareaSelector.selectionStart;
        textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart - 1) + textareaSelector.value.substring(textareaSelector.selectionEnd);
        textareaSelector.selectionEnd = start - 1;
    } else if (event.target.classList.contains('Space')) {
        const start = textareaSelector.selectionStart;
        textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ' ' + textareaSelector.value.substring(textareaSelector.selectionEnd);
        textareaSelector.selectionEnd = start + 1;
    } else if (event.target.classList.contains('ArrowRight')) {
        textareaSelector.selectionStart += 1;
    } else if (event.target.classList.contains('ArrowLeft')) {
        textareaSelector.selectionStart -= 1;
        textareaSelector.selectionEnd -= 1;
    } else if (event.target.classList.contains('ArrowDown')) {
        textareaSelector.selectionStart += 90;
    } else if (event.target.classList.contains('ArrowUp')) {
        textareaSelector.selectionStart = textareaSelector.selectionEnd;
        if (textareaSelector.selectionEnd - 90 < 0) {
            textareaSelector.selectionEnd = 0;
        } else {
            textareaSelector.selectionEnd -= 90;
        }
    }
    localStorage.setItem('languageFlag', languageFlag);
});


document.addEventListener('mousedown', (evt) => {
    for (let i = 0; i < ArrKey.length; i++) {
        for (let j = 0; j < ArrKey[i].length; j++) {
            if (evt.target.classList.contains(ArrKey[i][j].code)) {
                const pressButton = document.querySelector(`.${ArrKey[i][j].code}`);
                pressButton.classList.add('press');
                switch (languageFlag) {
                    case 'en':
                        if (ArrKey[i][j].activeKey === 0) {
                            const start = textareaSelector.selectionStart;
                            textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ArrKey[i][j].en + textareaSelector.value.substring(textareaSelector.selectionEnd);
                            textareaSelector.selectionEnd = start + 1;
                        }
                        break;
                    case 'EN':
                        if (ArrKey[i][j].activeKey === 0) {
                            const start = textareaSelector.selectionStart;
                            if (ArrKey[i][j].letterEn === 1) {
                                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ArrKey[i][j].EN + textareaSelector.value.substring(textareaSelector.selectionEnd);
                            } else {
                                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ArrKey[i][j].en + textareaSelector.value.substring(textareaSelector.selectionEnd);
                            }
                            textareaSelector.selectionEnd = start + 1;
                        }
                        break;
                    case 'RU':
                        if (ArrKey[i][j].activeKey === 0) {
                            const start = textareaSelector.selectionStart;
                            if (ArrKey[i][j].letterRu === 1) {
                                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ArrKey[i][j].RU + textareaSelector.value.substring(textareaSelector.selectionEnd);
                            } else {
                                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ArrKey[i][j].ru + textareaSelector.value.substring(textareaSelector.selectionEnd);
                            }
                            textareaSelector.selectionEnd = start + 1;
                        }
                        break;
                    case 'ru':
                        if (ArrKey[i][j].activeKey === 0) {
                            const start = textareaSelector.selectionStart;
                            textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + ArrKey[i][j].ru + textareaSelector.value.substring(textareaSelector.selectionEnd);
                            textareaSelector.selectionEnd = start + 1;
                        }
                        break;
                }
            }
        }
    }
});

document.addEventListener('mouseup', () => {
                const pressButton = document.querySelectorAll('.k-key');
                pressButton.forEach((element) => {
                    element.classList.remove('press');
                });
});
