let totalCredits = 0
let grandTotal = 0
let CGPA = 0
let arrayOfSubjects = []

function addPercentage(subject) {
    subject.percentage = Math.round(subject.marks/subject.maxMarks*100)
    return subject
}

function percentageToGrade(total) {
    if (total >= 90) return 10
    if (total >= 80) return 9
    if (total >= 70) return 8
    if (total >= 60) return 7
    if (total >= 50) return 6
    if (total >= 40) return 5
    return 0  
}

function addGrade(subject) {
    subject.grade = percentageToGrade(subject.percentage)
    return subject
}

function addTotal(subject) {
    subject.total =  subject.grade*subject.credit
    return subject
}

function getTotalCredits(arrayOfSubjects) {
    for(let i = 0; i < arrayOfSubjects.length; i++) {
        totalCredits += arrayOfSubjects[i].credit
    }
}

function getGrandTotal(arrayOfSubjects) {
    for(let i =0; i < arrayOfSubjects.length; i++) {
        grandTotal += arrayOfSubjects[i].total
    }
}

function calculateCGPA(totalCredits, grandTotal) {
    CGPA =  grandTotal / totalCredits
}

function calculate() {
    getTotalCredits(arrayOfSubjects)
    getGrandTotal(arrayOfSubjects)
    calculateCGPA(totalCredits, grandTotal)
    document.getElementById("CGPA").innerText = CGPA.toPrecision(2)
}

function addCard() {
    let subject = {
        name: document.getElementById('subject-name').value,
        credit: parseInt(document.getElementById('subject-credit').value),
        marks: parseInt(document.getElementById('subject-marks').value),
        maxMarks: parseInt(document.getElementById('subject-max-marks').value)
    }
    addTotal(addGrade(addPercentage(subject)))
    arrayOfSubjects.push(subject)
    let cardArea = document.getElementById("card-area")
    let card = document.createElement("div")
    card.innerHTML = `<div class="col-3">
                    <div class="card" style="width: 18rem;">
                        <img src="https://picsum.photos/id/${parseInt(Math.random()*100)}/500/200" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${subject.name}</h5>
                        <p class="card-text">Credit: ${subject.credit} <br> Grade: ${subject.grade}</p>
                    </div>        
                </div>`
    cardArea.appendChild(card)
}