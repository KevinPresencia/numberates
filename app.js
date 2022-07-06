const submitButton = document.getElementById("checkButton");
console.log(submitButton);
const message = document.getElementById("message");
console.log(message);
const attemptCount = document.getElementById("attemptCount");
var randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber)
var live = 10;
var text;
submitButton.onclick= () =>{
    console.log(randomNumber);
    var inputValue=document.getElementById("textBox").value;
    live--;
    if(inputValue==randomNumber){
        location.href = "./win.html";
    }
    else if(live==0){
        location.href = "./lose.html";
    }
    else if(inputValue>randomNumber){
        text = `oops! Your guess is high. You have ${live} lives remaining`;
    }
    else if(inputValue<randomNumber){
        text = `oops! Your guess is low.You have ${live} lives remaining`;
    }
console.log(live);   
message.style.display="inherit";
message.innerHTML = text;
attemptCount.innerHTML = live;
}