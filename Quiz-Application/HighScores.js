const highScores=JSON.parse(localStorage.getItem("highScores")) || []
const inside=document.getElementById('inside')
highScores.forEach(e)
function e(value,index) {
    const insideBody=document.createElement('ul')
    const l1=document.createElement('li')
    const l2=document.createElement('li')
    const l3=document.createElement('li')
    l1.innerHTML=index+1
    insideBody.append(l1)
    l2.innerHTML=value.name
    insideBody.append(l2)
    l3.innerHTML=value.score
    insideBody.append(l3)
    inside.appendChild(insideBody)
}
