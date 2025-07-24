const btnPrev = document.querySelector('.button-prev')
const btnNext = document.querySelector('.button-next')

let stepADs = [1]

const stepAD = document.getElementById('active')

const stepsI = [
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4')
]

stepAD.style.color = "#0F121D"
stepAD.style.backgroundColor = "#2E6BF6"

btnNext.addEventListener('click', () => {
    // Add the steps active/done in stepADs
    if (stepADs[stepADs.length - 1] + 1 < 5) {
        stepADs.push(stepADs[stepADs.length - 1] + 1)
        console.log(stepADs)
    }

    // Make the steps active/done colored as blue
    let i = stepADs[stepADs.length - 1] - 2 // defining the right index for the right ID

    if (Number(stepsI[i].id) == i + 2) { // get the id of the element by the index and then turn in into number(because id gives string :)
        stepsI[i].style.backgroundColor = "#2e6bf6"
        stepsI[i].style.color = "#0F121D"
    }

})

// OH DAMN BUGS!
// btnPrev.addEventListener('click', () => {
//     // Delete the steps active/done in stepADs
//     if (stepADs[stepADs.length - 1] + 1 > 0) {
//         stepADs.pop()
//         console.log(stepADs)
//     }

//     // Make the steps active/done colored as gray
//     let i = stepADs[stepADs.length - 1] - 2 // defining the right index for the right ID

//     if (Number(stepsI[i].id) == i + 2) { // get the id of the element by the index and then turn in into number(because id gives string :)
//         stepsI[i].style.backgroundColor = "#0F121D"
//         stepsI[i].style.color = "#ffffff"
//     }
// })