const btnPrev = document.querySelector(".button-prev");
const btnNext = document.querySelector(".button-next");
let buttons = document.querySelectorAll(".buttons");
const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const step3 = document.querySelector(".step3");
const step4 = document.querySelector(".step4");
const submitBtn = document.querySelector('.step4 input')

let stepADs = [1];

const stepsI = [
  document.getElementById("1"),
  document.getElementById("2"),
  document.getElementById("3"),
  document.getElementById("4"),
];

// Handle NEXT click
btnNext.addEventListener("click", () => {
  // Add next step if within range
  if (stepADs[stepADs.length - 1] + 1 <= 4) {
    stepADs.push(stepADs[stepADs.length - 1] + 1);
    // console.log(stepADs);

    const index = stepADs[stepADs.length - 1] - 1;
    stepsI[index].style.backgroundColor = "#2e6bf6";
    stepsI[index].style.color = "#0F121D";
  }
});

// Handle PREV click
btnPrev.addEventListener("click", () => {
  // Remove last step if above first
  if (stepADs.length > 1) {
    const removed = stepADs.pop();
    // console.log(stepADs);

    const index = removed - 1;
    stepsI[index].style.backgroundColor = "#0F121D";
    stepsI[index].style.color = "#ffffff";
  }
});

// Color the initial step (step 1)
stepsI[0].style.backgroundColor = "#2e6bf6";
stepsI[0].style.color = "#0F121D";

let activeNow = stepsI[stepADs[stepADs.length - 1] - 1].id;
console.log(activeNow);
if (activeNow == 1) {
  step1.style.display = "flex";
  // step3.style.display = 'none'
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeNow = stepsI[stepADs[stepADs.length - 1] - 1].id;
    if (activeNow == 1) {
      step1.style.display = "flex";
      step2.style.display = "none";
      step3.style.display = "none";
      step4.style.display = "none";
    }
    if (activeNow == 2) {
      step2.style.display = "flex";
      step1.style.display = "none";
      step3.style.display = "none";
      step4.style.display = "none";
    }
    if (activeNow == 3) {
      step3.style.display = "flex";
      step1.style.display = "none";
      step2.style.display = "none";
      step4.style.display = "none";
    }
    if (activeNow == 4) {
      step4.style.display = "flex";
      step1.style.display = "none";
      step2.style.display = "none";
      step3.style.display = "none";
    }
  });
});

submitBtn.addEventListener('click', ()=>{
  location.reload();
})