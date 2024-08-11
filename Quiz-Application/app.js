const ques=document.getElementById('question')
const choices=Array.from(document.getElementsByClassName('choice-text'))
const questionCount=document.getElementById('upper-main-text')
const scoreCount=document.getElementById('upper-main-text2')
let availableQuestions=[]
let score=0
let currentQuestion=[]
let questionCounter=0
let acceptingAnswers=false
let questions=[
    {
        question: "What is HTML ?",
        Choice1: "HTML describes the structure of a webpage",
        Choice2: "HTML is the standard markup language mainly used to create web pages",
        Choice3: "HTML consists of a set of elements that helps the browser how to view the content",
        Choice4: "All of the mentioned",
        answer: 4
    },
    {
        question: "What is HTML?",
        Choice1: "HTML describes the structure of a webpage",
        Choice2: "HTML is the standard markup language mainly used to create web pages",
        Choice3: "HTML consists of a set of elements that helps the browser how to view the content",
        Choice4: "All of the mentioned",
        answer: 4
    },
    {
        question: "What is HTML?",
        Choice1: "HTML describes the structure of a webpage",
        Choice2: "HTML is the standard markup language mainly used to create web pages",
        Choice3: "HTML consists of a set of elements that helps the browser how to view the content",
        Choice4: "All of the mentioned",
        answer: 4
    },
    {
        question: "What is HTML?",
        Choice1: "HTML describes the structure of a webpage",
        Choice2: "HTML is the standard markup language mainly used to create web pages",
        Choice3: "HTML consists of a set of elements that helps the browser how to view the content",
        Choice4: "All of the mentioned",
        answer: 4
    }
]
const Correct_Bonus=10
const Max_qusetions=4
 start = () => {
     questionCounter=0
     score=0
     availableQuestions=[...questions]
     getQuestion()
 }
 getQuestion = () => {
    if(availableQuestions.length===0 || questionCounter>=Max_qusetions){
        localStorage.setItem("recentScore",score)
        return window.location.assign("endpage.html")
    }
    questionCounter++
    questionCount.innerHTML=questionCounter+'/'+Max_qusetions
    const questionIndex=Math.floor(Math.random()*availableQuestions.length)
    currentQuestion=availableQuestions[questionIndex]
    ques.innerText=currentQuestion.question
    choices.forEach(choice => {
        const number=choice.dataset['number']
        choice.innerText=currentQuestion['Choice'+number]
    })
    availableQuestions.splice(questionIndex,1)
    acceptingAnswers=true
 }
 choices.forEach(choice => {
    choice.addEventListener('click', e => {
         if(!acceptingAnswers) return
         acceptingAnswers=false
         const selectedChoice=e.target
         const selectedAnswer=selectedChoice.dataset['number']
         const classToApply=selectedAnswer==currentQuestion.answer ? 'correct' : 'incorrect'
         if(classToApply=='correct'){
            score=score+10
         }
        scoreCount.innerText=score
         selectedChoice.parentElement.classList.add(classToApply)
         setTimeout(e => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getQuestion()
         },1000)
    })
 })
 start()
