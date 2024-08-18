let screen_display = document.querySelector(".screen");
let clear = document.querySelector(".clear");
let Equal = document.querySelector(".Equals");
let number_btn = document.querySelectorAll(".button");
let input = "";

function clear_input() {
    screen_display.value = "";
}

function evaluate() {
    screen_display.value = eval(screen_display.value);
}

number_btn.forEach(element => {
    element.addEventListener("click" , () => {
        if(element == clear){
            clear_input();
        }else if(element != Equal){
        input = element.innerText;
        screen_display.value += input;
        }
        else{
            evaluate();
        }
    })
});