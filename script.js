const ArrKey = [
    [
        {code:'Backquote', en:'`', EN:'~',ru:'ё',RU:'Ё', letterEn:0, letterRu:1, activeKey:0},
        {code:'Digit1', en:'1', EN:'!',ru:'1',RU:'!', letterEn:0, letterRu:0, activeKey:0},
        {code:'Digit2', en:'2', EN:'@',ru:'2',RU:'"', letterEn:0, letterRu:0, activeKey:0},
        {code:'Digit3', en:'3', EN:'#',ru:'3',RU:'№', letterEn:0, letterRu:0, activeKey:0},
        {code:'Digit4', en:'4', EN:'$',ru:'4',RU:';', letterEn:0, letterRu:0, activeKey:0},
        {code:'Digit5', en:'5', EN:'%',ru:'5',RU:'%', letterEn:0, letterRu:0, activeKey:0},
        {code:'Digit6', en:'6', EN:'^',ru:'6',RU:':', letterEn:0, letterRu:0, activeKey:0},
        {code:'Digit7', en:'7', EN:'&',ru:'7',RU:'?', letterEn:0, letterRu:0, activeKey:0},
        {code:'Digit8', en:'8', EN:'*',ru:'8',RU:'*', letterEn:0, letterRu:0, activeKey:0},
        {code:'Digit9', en:'9', EN:'(',ru:'9',RU:'(', letterEn:0, letterRu:0, activeKey:0},
        {code:'Digit0', en:'0', EN:')',ru:'0',RU:')', letterEn:0, letterRu:0, activeKey:0},
        {code:'Minus', en:'-', EN:'_',ru:'-',RU:'_', letterEn:0, letterRu:0, activeKey:0},
        {code:'Equal', en:'=', EN:'+',ru:'=',RU:'+', letterEn:0, letterRu:0, activeKey:0}, 
        {code:'Backspace', en:'Backspace', EN:'Backspace',ru:'Backspace',RU:'Backspace',  letterEn:0, letterRu:0, activeKey:1}
    ],
    [
        {code:'Tab', en:'Tab', EN:'Tab', ru:'Tab', RU:'Tab', letterEn:0, letterRu:0, activeKey:1},
        {code:'KeyQ', en:'q', EN:'Q', ru:'й', RU:'Й', letterEn:1, letterRu:1, activeKey:0}, 
        {code:'KeyW', en:'w', EN:'W', ru:'ц', RU:'Ц', letterEn:1, letterRu:1, activeKey:0},
        {code:'KeyE', en:'e', EN:'E', ru:'у', RU:'У', letterEn:1, letterRu:1, activeKey:0},
        {code:'KeyR', en:'r', EN:'R', ru:'к', RU:'К', letterEn:1, letterRu:1, activeKey:0},
        {code:'KeyT', en:'t', EN:'T', ru:'е', RU:'Е', letterEn:1, letterRu:1, activeKey:0},
        {code:'KeyY', en:'y', EN:'Y', ru:'н', RU:'Н', letterEn:1, letterRu:1, activeKey:0},
        {code:'KeyU', en:'u', EN:'U', ru:'г', RU:'Г', letterEn:1, letterRu:1, activeKey:0},
        {code:'KeyI', en:'i', EN:'I', ru:'ш', RU:'Ш', letterEn:1, letterRu:1, activeKey:0},
        {code:'KeyO', en:'o', EN:'O', ru:'щ', RU:'Щ', letterEn:1, letterRu:1, activeKey:0},
        {code:'KeyP', en:'p', EN:'P', ru:'з', RU:'З', letterEn:1, letterRu:1, activeKey:0},
        {code:'BracketLeft', en:'[', EN:'{', ru:'х', RU:'Х', letterEn:0, letterRu:1, activeKey:0},
        {code:'BracketRight', en:']', EN:'}', ru:'ъ', RU:'Ъ', letterEn:0, letterRu:1, activeKey:0},
        {code:'Delete', en:'Delete', EN:'Delete',ru:'Delete',RU:'Delete', letterEn:0, letterRu:0, activeKey:1}
    ],
    [
        {code: 'CapsLock', en:'CapsLock', EN:'CapsLock', RU:'CapsLock', ru:'CapsLock', letterEn:0, letterRu:0, activeKey:1},
        {code: 'KeyA', en:'a', EN:'A', RU:'Ф', ru:'ф', letterEn:1, letterRu:1, activeKey:0},
        {code: 'KeyS', en:'s', EN:'S', RU:'Ы', ru:'ы', letterEn:1, letterRu:1, activeKey:0},
        {code: 'KeyD', en:'d', EN:'D', RU:'В', ru:'в', letterEn:1, letterRu:1, activeKey:0},
        {code: 'KeyF', en:'f', EN:'F', RU:'А', ru:'а', letterEn:1, letterRu:1, activeKey:0},
        {code: 'KeyG', en:'g', EN:'G', RU:'П', ru:'п', letterEn:1, letterRu:1, activeKey:0},
        {code: 'KeyH', en:'h', EN:'H', RU:'Р', ru:'р', letterEn:1, letterRu:1, activeKey:0},
        {code: 'KeyJ', en:'j', EN:'J', RU:'О', ru:'о', letterEn:1, letterRu:1, activeKey:0},
        {code: 'KeyK', en:'k', EN:'K', RU:'Л', ru:'л', letterEn:1, letterRu:1, activeKey:0},
        {code: 'KeyL', en:'l', EN:'L', RU:'Д', ru:'д', letterEn:1, letterRu:1, activeKey:0},
        {code: 'Semicolon', en:';', EN:':', RU:'Ж', ru:'ж', letterEn:0, letterRu:1, activeKey:0},
        {code: 'Quote', en:"'", EN:"'", RU:'Э', ru:'э', letterEn:0, letterRu:1, activeKey:0},
        {code: 'Enter', en:'Enter', EN:'Enter', RU:'Enter', ru:'Enter', letterEn:0, letterRu:0, activeKey:1},
    ],
    [
        {code: 'ShiftLeft', en:'Shift', EN:'Shift', RU:'Shift', ru:'Shift', letterEn:0, letterRu:0, activeKey:1},
        {code:'Backslash', en:'\\', EN:'|', ru:'\\', RU:'/', letterEn:0, letterRu:0, activeKey:0},
        {code: 'KeyZ', en:'z', EN:'Z', RU:'Я', ru:'я', letterEn:1, letterRu:1, activeKey:0},
        {code: 'KeyX', en:'x', EN:'X', RU:'Ч', ru:'ч', letterEn:1, letterRu:1, activeKey:0},
        {code: 'KeyC', en:'c', EN:'C', RU:'С', ru:'с', letterEn:1, letterRu:1, activeKey:0},
        {code: 'KeyV', en:'v', EN:'V', RU:'М', ru:'м', letterEn:1, letterRu:1, activeKey:0},
        {code: 'KeyB', en:'b', EN:'B', RU:'И', ru:'и', letterEn:1, letterRu:1, activeKey:0},
        {code: 'KeyN', en:'n', EN:'N', RU:'Т', ru:'т', letterEn:1, letterRu:1, activeKey:0},
        {code: 'KeyM', en:'m', EN:'M', RU:'Ь', ru:'ь', letterEn:1, letterRu:1, activeKey:0},
        {code: 'Comma', en:',', EN:'<', RU:'Б', ru:'б', letterEn:0, letterRu:1, activeKey:0},
        {code: 'Period', en:'.', EN:'>', RU:'Ю', ru:'ю', letterEn:0, letterRu:1, activeKey:0},
        {code: 'Slash', en:'/', EN:'?', RU:'.', ru:',', letterEn:0, letterRu:0, activeKey:0},
        {code: 'ArrowUp', en:'↑', EN:'↑', RU:'↑', ru:'↑', letterEn:0, letterRu:0, activeKey:1},
        {code: 'ShiftRight', en:'Shift', EN:'Shift', RU:'Shift', ru:'Shift', letterEn:0, letterRu:0, activeKey:1},
    ],
    [
        {code: 'ControlLeft', en:'ctrl', EN:'ctrl', RU:'ctrl', ru:'ctrl', letterEn:0, letterRu:0, activeKey:1},
        {code: 'MetaLeft', en:'win', EN:'win', RU:'win', ru:'win', letterEn:0, letterRu:0, activeKey:1},
        {code: 'AltLeft', en:'alt', EN:'alt', RU:'alt', ru:'alt', letterEn:0, letterRu:0, activeKey:1},
        {code: 'Space', en:' ', EN:' ', RU:' ', ru:' ', letterEn:0, letterRu:0, activeKey:1},
        {code: 'AltRight', en:'alt', EN:'alt', RU:'alt', ru:'alt', letterEn:0, letterRu:0, activeKey:1},
        {code: 'ControlRight', en:'ctrl', EN:'ctrl', RU:'ctrl', ru:'ctrl', letterEn:0, letterRu:0, activeKey:1},
        {code: 'ArrowLeft', en:'←', EN:'←', RU:'←', ru:'←', letterEn:0, letterRu:0, activeKey:1},
        {code: 'ArrowDown', en:'↓', EN:'↓', RU:'↓', ru:'↓', letterEn:0, letterRu:0, activeKey:1},
        {code: 'ArrowRight', en:'→', EN:'→', RU:'→', ru:'→', letterEn:0, letterRu:0, activeKey:1},
    ],
];
let languageFlag = 'RU';
localStorage.setItem('languageFlag', languageFlag);



function PrintContent(){ 

    //добавление textarea
    let textarea = document.createElement('textarea');
    textarea.setAttribute('autofocus','autofocus');
    textarea.classList.add('textarea');
    document.body.appendChild(textarea);
    let textareaSelector = document.querySelector('.textarea');

    //захват textarea
    textarea.addEventListener('blur',function(){
        textarea.focus();
    });
    
    //действие на tab
    textareaSelector.addEventListener('keydown',function(evt){
        if(evt.keyCode==9 || evt.which==9){
            evt.preventDefault();
            var s = this.selectionStart;
            this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
            this.selectionEnd = s+1; 
        }
    });

    //добавление div
    let divParent = document.createElement('div');
    divParent.classList.add('keyboard');
    document.body.appendChild(divParent);
    let divParentSelector = document.querySelector('.keyboard');

    //добавление дивов строк
    for(let i = 0; i < 5; i++){
        let div = document.createElement('div');
        div.classList.add('keyboard__row');
        divParentSelector.appendChild(div); 
    }

    //добавление подписи переключения языка
    let divCaption = document.createElement('div');
    divCaption.classList.add('caption');
    document.body.appendChild(divCaption);
    let divCaptionSelector = document.querySelector('.caption');
    divCaption.textContent = "Для переключения языка нажмите alt+shift"

    //отмена 
    document.addEventListener("keydown", function(evt){
        if(evt.keyCode == 18 || evt.which == 18 || evt.keyCode == 91 || evt.which == 91){
            evt.preventDefault();
        }
    });

}
function PrintKeyboard(key, shift){
    if(shift){
        if(key == 'ru'){
            let rows = document.querySelectorAll('.keyboard__row');
            rows.forEach((el,i) => {
                let out = '';
                for(let j = 0; j < ArrKey[i].length; j++){
                        out+='<div class ="k-key '+ArrKey[i][j].code+'">'+ArrKey[i][j].RU+'</div>';
                }
                el.innerHTML = out;
            });
        }
        if(key == 'RU'){
            let rows = document.querySelectorAll('.keyboard__row');
            rows.forEach((el,i) => {
                let out = '';
                for(let j = 0; j < ArrKey[i].length; j++){
                    if(ArrKey[i][j].letterRu == 1){
                    out+='<div class ="k-key '+ArrKey[i][j].code+'">'+ArrKey[i][j].ru+'</div>';
                    }else{
                        out+='<div class ="k-key '+ArrKey[i][j].code+'">'+ArrKey[i][j].RU+'</div>';
                    }
                }
                el.innerHTML = out;
            });
        }
        if(key == 'EN'){
            let rows = document.querySelectorAll('.keyboard__row');
            rows.forEach((el,i) => {
                let out = '';
                for(let j = 0; j < ArrKey[i].length; j++){
                    if(ArrKey[i][j].letterRu == 1){
                        out+='<div class ="k-key '+ArrKey[i][j].code+'">'+ArrKey[i][j].en+'</div>';
                    }else{
                        out+='<div class ="k-key '+ArrKey[i][j].code+'">'+ArrKey[i][j].EN+'</div>';
                    }
                }
                el.innerHTML = out;
            });
        }
        if(key == 'en'){
            let rows = document.querySelectorAll('.keyboard__row');
            rows.forEach((el,i) => {
                let out = '';
                for(let j = 0; j < ArrKey[i].length; j++){
                    out+='<div class ="k-key '+ArrKey[i][j].code+'">'+ArrKey[i][j].EN+'</div>';
                }
                el.innerHTML = out;
            });
        }
    }else{
        if(key == 'ru'){
            let rows = document.querySelectorAll('.keyboard__row');
            rows.forEach((el,i) => {
                let out = '';
                for(let j = 0; j < ArrKey[i].length; j++){
                        out+='<div class ="k-key '+ArrKey[i][j].code+'">'+ArrKey[i][j].ru+'</div>';
                }
                el.innerHTML = out;
            });
        }
        if(key == 'RU'){
            let rows = document.querySelectorAll('.keyboard__row');
            rows.forEach((el,i) => {
                let out = '';
                for(let j = 0; j < ArrKey[i].length; j++){
                    if(ArrKey[i][j].letterRu == 1){
                        out+='<div class ="k-key '+ArrKey[i][j].code+'">'+ArrKey[i][j].RU+'</div>';
                    }else{
                        out+='<div class ="k-key '+ArrKey[i][j].code+'">'+ArrKey[i][j].ru+'</div>';
                    }
                    
                }
                el.innerHTML = out;
            });
        }
        if(key == 'EN'){
            let rows = document.querySelectorAll('.keyboard__row');
            rows.forEach((el,i) => {
                let out = '';
                for(let j = 0; j < ArrKey[i].length; j++){
                    if(ArrKey[i][j].letterEn == 1){
                        out+='<div class ="k-key '+ArrKey[i][j].code+'">'+ArrKey[i][j].EN+'</div>';
                    }else{
                        out+='<div class ="k-key '+ArrKey[i][j].code+'">'+ArrKey[i][j].en+'</div>';
                    }
                }
                el.innerHTML = out;
            });
        }
        if(key == 'en'){
            let rows = document.querySelectorAll('.keyboard__row');
            rows.forEach((el,i) => {
                let out = '';
                for(let j = 0; j < ArrKey[i].length; j++){
                    out+='<div class ="k-key '+ArrKey[i][j].code+'">'+ArrKey[i][j].en+'</div>';
                }
                el.innerHTML = out;
            });
        }
    }
}


PrintContent();

PrintKeyboard(languageFlag, 0);



//переключение языков и размера шрифта
document.addEventListener('keydown',function(evt){
    if(evt.shiftKey && evt.altKey){
        switch(languageFlag){
            case 'en': 
                languageFlag ='ru';
                break;
            case 'EN':
                languageFlag = 'RU'; 
                break;
            case 'RU': 
                languageFlag = 'EN'; 
                break;
            case 'ru': 
                languageFlag ='en'; 
                break;
        }
        PrintKeyboard(languageFlag, false);
    }else if(evt.code == 'CapsLock'){
        switch(languageFlag){
            case 'en': 
                languageFlag ='EN';
                break;
            case 'EN':
                languageFlag = 'en'; 
                break;
            case 'RU': 
                languageFlag = 'ru'; 
                break;
            case 'ru': 
                languageFlag ='RU'; 
                break;
        }
        PrintKeyboard(languageFlag, false);
    }else if(evt.shiftKey){
        PrintKeyboard(languageFlag, true);
    }
    localStorage.setItem('languageFlag', languageFlag);
});




// подсвечивание кнопок при нажатии
    let first = document.querySelector('.keyboard');
    document.addEventListener('keydown',function(evt){
        let rows = document.querySelectorAll('.keyboard__row');
        for(let i = 0; i < ArrKey.length; i++){
            for(let j= 0; j < ArrKey[i].length; j++){
                if(evt.code === ArrKey[i][j].code){
                    let pressButton = document.querySelector("."+ ArrKey[i][j].code);
                    pressButton.classList.add('press');
                    
                }
            }
        }
    });
// удвление подсветки при отжатии
    document.addEventListener('keyup',function(evt){
        for(let i = 0; i < ArrKey.length; i++){
            for(let j = 0; j < ArrKey[i].length; j++){
                if(evt.code === ArrKey[i][j].code){
                    let pressButton = document.querySelector("."+ ArrKey[i][j].code);
                    pressButton.classList.remove('press');
                }
            }
        }
    });
// когда отжимаешь капс
document.addEventListener('keyup',function(){
    PrintKeyboard(languageFlag, false);
});



