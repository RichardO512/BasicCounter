// initial value
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// to loop each item
btns.forEach((btn) => {

    // to add Event when user click
    btn.addEventListener("click", (e) => {
        // to target a single class
        let styles = e.currentTarget.classList;

        if (styles.contains("increase")) {
            // check if the styles 
            // contain or have a class name called increase
            count++;
        }
        if (styles.contains("decrease")) {
            // to decrement
            count--;
        }
        if (styles.contains("reset")) {
            count = 0;
        }

        if (count < 0) {
            // use if statement
            // to check if the value or the count
            // are greater than less or equal so it will change the color
            value.style.color = "red";
        }
        if (count > 0) {
            value.style.color = "blue"
        }
        if (count === 0) {
            value.style.color = "black";
        }
        value.textContent = count;

    })
})