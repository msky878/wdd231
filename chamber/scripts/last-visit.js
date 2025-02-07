let now = Date.now();
let content = localStorage.getItem("lastvisit");
let daysSinceLastVisit = Math.floor((now - new Date(+content)) / (1000 * 60 * 60 * 24));

let message = "";
if(content === null){ // first visit - localstorage empty
    message = "Welcome! Let us know if you have any questions.";
} else if(daysSinceLastVisit === 0){ // same day
    message = "Back so soon! Awesome!";
} else if(daysSinceLastVisit >= 1){ // more than one day
    message = `You last visited <b>${daysSinceLastVisit} days</b> ago.`;
}

document.getElementById("lastVisit").innerHTML = message;

localStorage.setItem("lastvisit", now);