const greetings = document.querySelector("#greetings");
const loginInput = greetings.querySelector("input");
const hello = document.querySelector("#hello");

const USER_NAME = "username";
const HIDDEN_CLASS = "hidden";

function handleSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    
    greetings.classList.add(HIDDEN_CLASS);
    
    localStorage.setItem(USER_NAME, username);
    
    hello.classList.remove(HIDDEN_CLASS);
    hello.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USER_NAME);

if(savedUsername === null) {
    greetings.classList.remove(HIDDEN_CLASS);
    greetings.addEventListener("submit", handleSubmit);
} else {
    hello.classList.remove(HIDDEN_CLASS);
    hello.innerText = `Hello ${savedUsername}`;
}