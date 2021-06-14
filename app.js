//問題と答えを定義
const quiz = [{
        question:'ぶるはぶるですか？',
        answers:['ワニ','べり','ぷれす','ぶる'],
        correct:'ぶる'
    },{
        question:'体調はいかがですか？',
        answers:['いい','普通','微妙','最悪'],
        correct:'最悪'
    },{
        question:'見直すのはなんですか？',
        answers:['家計','日ごろの行い','夫との関係','よくたかり'],
        correct:'日ごろの行い'
    }]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


//単語の定義
const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;


//クイズの問題を出す
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz ();


//正誤を判定する
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent) {
        window.alert('せいかい');
        score++;
    } else {
        window.alert('ふせいかい');
    }
    quizIndex++;
     if(quizIndex < quizLength) {
        setupQuiz ();
     } else {
         window.alert('終了。あなたの正解数は' +  score + '/' + quizLength + 'です')
     } 
};

let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handlerIndex++;
}