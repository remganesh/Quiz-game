const username=document.getElementById('user')
const saveBtn=document.getElementById('saveScore')
const totalScore=document.getElementById('Total')
const recentScore=localStorage.getItem('recentScore')
totalScore.innerText=recentScore
if(username.value.length>8){
  windows.alert("enter 8 digits")
}
username.addEventListener('keyup',() => {
    saveBtn.disabled=!username.value
})
const highScores=JSON.parse(localStorage.getItem('highScores')) || []
saveYourScore = (e) => {
  if(username.value){
  window.alert("Your score is submitted")
  }
 e.preventDefault()
  const score = {
      name:username.value,
      score:recentScore
  }
  highScores.push(score)
  highScores.sort((a,b)=>{
    return b.score - a.score
  })
  localStorage.setItem('highScores',JSON.stringify(highScores))

}
