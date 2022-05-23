//On submit change to thankyou-page

const submit = document.querySelector(".submit");
const rating = document.querySelector(".container-rating");
const thankYou = document.querySelector(".container-thankyou");


submit.addEventListener("click", () => {
    rating.style.display = "none";
    thankYou.style.display = "block";
});

//Check and uncheck checkboxes

//Checkbox 1

const input1 = document.querySelector(".input-rating-1");
const label1 = document.querySelector(".checkbox-1");


label1.addEventListener("click", () => {
    if (input1.attributes[3].value === "unchecked") {
        input1.setAttribute("unchecked", "checked");
        label1.style.backgroundColor = "#fc7614";
        console.log(input1.attributes[3].value);
    } else if (input1.attributes[3].value === "checked") {
        input1.setAttribute("unchecked", "unchecked");
        label1.style.backgroundColor = "#515860";
        console.log(input1.attributes[3].value);
    }
});

//Checkbox 2

const input2 = document.querySelector(".input-rating-2");
const label2 = document.querySelector(".checkbox-2");


label2.addEventListener("click", () => {
    if (input2.attributes[3].value === "unchecked") {
        input2.setAttribute("unchecked", "checked");
        label2.style.backgroundColor = "#fc7614";
        console.log(input2.attributes[3].value);
    } else if (input2.attributes[3].value === "checked") {
        input2.setAttribute("unchecked", "unchecked");
        label2.style.backgroundColor = "#515860";
        console.log(input2.attributes[3].value);
    }
});

//Checkbox 3

const input3 = document.querySelector(".input-rating-3");
const label3 = document.querySelector(".checkbox-3");


label3.addEventListener("click", () => {
    if (input3.attributes[3].value === "unchecked") {
        input3.setAttribute("unchecked", "checked");
        label3.style.backgroundColor = "#fc7614";
        console.log(input3.attributes[3].value);
    } else if (input3.attributes[3].value === "checked") {
        input3.setAttribute("unchecked", "unchecked");
        label3.style.backgroundColor = "#515860";
        console.log(input3.attributes[3].value);
    }
});

//Checkbox 4

const input4 = document.querySelector(".input-rating-4");
const label4 = document.querySelector(".checkbox-4");


label4.addEventListener("click", () => {
    if (input4.attributes[3].value === "unchecked") {
        input4.setAttribute("unchecked", "checked");
        label4.style.backgroundColor = "#fc7614";
        console.log(input4.attributes[3].value);
    } else if (input4.attributes[3].value === "checked") {
        input4.setAttribute("unchecked", "unchecked");
        label4.style.backgroundColor = "#515860";
        console.log(input4.attributes[3].value);
    }
});

//Checkbox 5

const input5 = document.querySelector(".input-rating-5");
const label5 = document.querySelector(".checkbox-5");


label5.addEventListener("click", () => {
    if (input5.attributes[3].value === "unchecked") {
        input5.setAttribute("unchecked", "checked");
        label5.style.backgroundColor = "#fc7614";
        console.log(input5.attributes[3].value);
    } else if (input5.attributes[3].value === "checked") {
        input5.setAttribute("unchecked", "unchecked");
        label5.style.backgroundColor = "#515860";
        console.log(input5.attributes[3].value);
    }
});

// Multiple check disableing



input1.addEventListener("click", () => {
    if (input1.attributes[3].value === "checked") {
        input2.setAttribute("unchecked", "unchecked");
        label2.style.backgroundColor = "#515860";
        input3.setAttribute("unchecked", "unchecked");
        label3.style.backgroundColor = "#515860";
        input4.setAttribute("unchecked", "unchecked");
        label4.style.backgroundColor = "#515860";
        input5.setAttribute("unchecked", "unchecked");
        label5.style.backgroundColor = "#515860";
    }
});

input2.addEventListener("click", () => {
    if (input2.attributes[3].value === "checked") {
        input1.setAttribute("unchecked", "unchecked");
        label1.style.backgroundColor = "#515860";
        input3.setAttribute("unchecked", "unchecked");
        label3.style.backgroundColor = "#515860";
        input4.setAttribute("unchecked", "unchecked");
        label4.style.backgroundColor = "#515860";
        input5.setAttribute("unchecked", "unchecked");
        label5.style.backgroundColor = "#515860";
    }
});

input3.addEventListener("click", () => {
    if (input3.attributes[3].value === "checked") {
        input1.setAttribute("unchecked", "unchecked");
        label1.style.backgroundColor = "#515860";
        input2.setAttribute("unchecked", "unchecked");
        label2.style.backgroundColor = "#515860";
        input4.setAttribute("unchecked", "unchecked");
        label4.style.backgroundColor = "#515860";
        input5.setAttribute("unchecked", "unchecked");
        label5.style.backgroundColor = "#515860";
    }
});

input4.addEventListener("click", () => {
    if (input4.attributes[3].value === "checked") {
        input1.setAttribute("unchecked", "unchecked");
        label1.style.backgroundColor = "#515860";
        input2.setAttribute("unchecked", "unchecked");
        label2.style.backgroundColor = "#515860";
        input3.setAttribute("unchecked", "unchecked");
        label3.style.backgroundColor = "#515860";
        input5.setAttribute("unchecked", "unchecked");
        label5.style.backgroundColor = "#515860";
    }
});

input5.addEventListener("click", () => {
    if (input5.attributes[3].value === "checked") {
        input1.setAttribute("unchecked", "unchecked");
        label1.style.backgroundColor = "#515860";
        input2.setAttribute("unchecked", "unchecked");
        label2.style.backgroundColor = "#515860";
        input3.setAttribute("unchecked", "unchecked");
        label3.style.backgroundColor = "#515860";
        input4.setAttribute("unchecked", "unchecked");
        label4.style.backgroundColor = "#515860";
    }
});

//Submit rating

const result = document.querySelector(".result");

submit.addEventListener("click", () => {
    if (input1.attributes[3].value === "checked") {
        result.innerHTML = " 1 ";
    } else if (input2.attributes[3].value === "checked") {
        result.innerHTML = " 2 ";
    } else if (input3.attributes[3].value === "checked") {
        result.innerHTML = " 3 ";
    } else if (input4.attributes[3].value === "checked") {
        result.innerHTML = " 4 ";
    } else if (input5.attributes[3].value === "checked") {
        result.innerHTML = " 5 ";
    }
});