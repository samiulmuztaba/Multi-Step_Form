const btnPrev = document.querySelector('.button-prev');
const btnNext = document.querySelector('.button-next');

let stepADs = [1];

const stepsI = [
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4')
];

// Handle NEXT click
btnNext.addEventListener('click', () => {
    // Add next step if within range
    if (stepADs[stepADs.length - 1] + 1 <= 4) {
        stepADs.push(stepADs[stepADs.length - 1] + 1);
        console.log(stepADs);

        const index = stepADs[stepADs.length - 1] - 1;
        stepsI[index].style.backgroundColor = "#2e6bf6";
        stepsI[index].style.color = "#0F121D";
    }
});

// Handle PREV click
btnPrev.addEventListener('click', () => {
    // Remove last step if above first
    if (stepADs.length > 1) {
        const removed = stepADs.pop();
        console.log(stepADs);

        const index = removed - 1;
        stepsI[index].style.backgroundColor = "#0F121D";
        stepsI[index].style.color = "#ffffff";
    }
});

// Color the initial step (step 1)
stepsI[0].style.backgroundColor = "#2e6bf6";
stepsI[0].style.color = "#0F121D";
