const buttons= document.querySelectorAll(".button");
const value= document.getElementById("span");
let count=0;
//button foreach() helps to pick each of the buttons instead of doing a selection for each.(e) was added because it will help ,me know which of the buttons is working or im clicking on.the e.currenttarget.classList shows the specific class im clicking on.the textContent has you to gen span id="span".
buttons.forEach(function (button){
button.addEventListener("click",function(e){
const element = e.currentTarget.classList;
if(element.contains("decrease")){
    count--;
} 
else if(element.contains("increase")){
    count++;
}else{
   count=0;
} 
if(count<0){
    span.style.color="red";
}else if(count>0){
    span.style.color="green";
}else{
    span.style.color="black";
}
span.textContent=count;
})
});

    
