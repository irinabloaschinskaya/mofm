let textButton = document.getElementById("text_button");
let question = document.getElementById("question");
let answer = document.getElementById("answer");
let start = document.getElementById("start_test");
let num = document.getElementById("number");
let answer_hide = true;
let started = false;
let i = 0;
let k = [];
let n;
let number;
let new_cycle;


function begin(test){
    started = true;
    start_test.remove();
    let g = 3;
    let h = 3;
    while(test[h] != undefined){
        if (test[h] == '<' && test[h + 1] == 'b' && test[h + 2] == 'r' && test[h + 3] == '>'){
            k.push(test.slice(g, h));
            g = h + 4;
            h += 3;
        }
        h++;
    }
    k.push(test.slice(g, h));
    n = k.length;
    k[n - 1] = k[n - 1].slice(0, -4);
    if (n % 2 == 1){
        n++;
    }
    shuffle(k);
    number = 1;
    num.innerHTML = number + ' вопрос из ' + n / 2;
    question.innerHTML = output(k[i]);
}

function answer_pressed(){
    if (started){
        if (answer_hide){
            textButton.innerHTML = 'Скрыть ответ';
            answer_hide = false;
            answer.innerHTML = output(k[i + 1]);
        }
        else{
            textButton.innerHTML = 'Показать ответ';
            answer_hide = true;
            answer.innerHTML = '';
        }
    }
}


function next(a){
    if (started){
        new_cycle = false;
        if (i + a >= n){
            new_cycle = true;
        }
        i = (i + a + n) % n;
        if (new_cycle){
            shuffle(k);
        }
        question.innerHTML = output(k[i]);
        answer.innerHTML = '';
        textButton.innerHTML = 'Показать ответ';
        answer_hide = true;
        number = i / 2 + 1;
        num.innerHTML = number + ' вопрос из ' + n / 2;
    }
}


function output(a){
    if (a != undefined && a != ' '){
        return a;
    }
    else{
        return 'Пусто';
    }
}

function shuffle(array) {
    for (let i = 0; i < n; i += 2) {
        let j = Math.floor(Math.random() * (i + 1));
        if (j % 2 == 1){
            j--;
        }
        [array[i], array[j]] = [array[j], array[i]];
        [array[i + 1], array[j + 1]] = [array[j + 1], array[i + 1]];
    }
}