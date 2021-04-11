let textButton = document.getElementById("text_button");
let question = document.getElementById("question");
let answer = document.getElementById("answer");
let start = document.getElementById("start_test");
let answer_hide = true;
let started = false;
let i = 0;
let k = [];
let n;


function begin(test){
    started = true;
    start_test.remove();
    let g = 0;
    let h = 0;
    while(test[h] != undefined){
        if (test[h] == '\n'){
            k.push(test.slice(g, h));
            g = h + 1;
        }
        h++;
    }
    k.push(test.slice(g, h));
    n = k.length;
    if (n % 2 == 1){
        n++;
    }
    shuffle(k);
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
        i = (i + a + n) % n;
        question.innerHTML = output(k[i]);
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
            j++;
        }
        [array[i], array[j]] = [array[j], array[i]];
        [array[i + 1], array[j + 1]] = [array[j + 1], array[i + 1]];
    }
}