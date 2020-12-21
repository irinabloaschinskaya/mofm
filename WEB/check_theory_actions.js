var mMaxIndex = 0;
var mCurrentIndex = 0;
var question = document.getElementById("question");

function next(n) {
  mCurrentIndex = (mCurrentIndex + n) % mMaxIndex;
  if (mCurrentIndex < 0) mCurrentIndex = mMaxIndex-1;
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
