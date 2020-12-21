var mMaxIndex = 0;
var mCurrentIndex = 0;
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var textButton = document.getElementById("text_button");
var mAnswer = true;
var anm = 0;

function next(n) {
  mCurrentIndex = (mCurrentIndex + n) % mMaxIndex;
  if (mCurrentIndex < 0) mCurrentIndex = mMaxIndex-1;
  if (mAnswer == 0) showAnswer();
  getQuestion();
}


function getN() {
  const dbResObject = firebase.database().ref().child(mPath+"/n");
  dbResObject.on('value', snap => {
    console.log(snap.val());
    var result = JSON.stringify(snap.val(), null, 3).replace(/['"]+/g, '');
    mMaxIndex = parseInt(result);
  });
}
(function getQuestion() {
  const dbResObject = firebase.database().ref().child(mPath+"/n"+mCurrentIndex);
  dbResObject.on('value', snap => {
    console.log(snap.val());
    var result = JSON.stringify(snap.val(), null, 3).replace(/['"]+/g, '');
    question.innerHTML = result;
  });
})();
function getQuestion() {
  const dbResObject = firebase.database().ref().child(mPath+"/n"+mCurrentIndex);
  dbResObject.on('value', snap => {
    console.log(snap.val());
    var result = JSON.stringify(snap.val(), null, 3).replace(/['"]+/g, '');
    question.innerHTML = result;
  });
}

function showAnswer() {
  if (mAnswer == false){
    answer.innerHTML = "";
    textButton.innerHTML = "Показать ответ";
    mAnswer = true;
    anm = 0;
  } else {
    anm = 1;
    textButton.innerHTML = "Скрыть ответ";
    const dbResObject = firebase.database().ref().child(mPath+"/a"+mCurrentIndex);
    dbResObject.on('value', snap => {
      console.log(snap.val());
      var result = JSON.stringify(snap.val(), null, 3).replace(/['"]+/g, '');
      answer.innerHTML = result;
      mAnswer = false;
    });

  }
}
